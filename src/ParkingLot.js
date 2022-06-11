const pRetry = require('p-retry');

const HOME_LOC = {
    lat:32.0873,
    lon:34.7737,
}

const ASOTA = "אסותא"
const ASOTA_LOC = { //No location provided
    lat:32.0885,
    lon:34.7799,
}

function getLocation(staticData) {
    if (staticData.Name === ASOTA){
        return ASOTA_LOC; //Arlozorov is near enough
    }
    return {
        lat: staticData.GPSLattitude,
        lon: staticData.GPSLongitude
    };
}

function getTime(val){
    let date = new Date(val);
    let hour = ("0" + date.getHours()).slice(-2)
    let min = ("0" + date.getMinutes()).slice(-2)
    return hour +":"+min;
}

function getAvailability(status_chenyon) {
    switch (status_chenyon) {
        case 'פנוי':
            return 'free';
        case 'מעט':
            return 'almostFull';
        case 'מלא':
        case 'סגור':
            return 'full';
    }
    return 'NA';
}

function getDist(a,b){
    return Math.hypot(b.lat-a.lat, b.lon-a.lon);
}

const stationsURL = 'https://api.tel-aviv.gov.il/parking/stations';
const stationsStatus = 'https://api.tel-aviv.gov.il/parking/StationsStatus';

export async function getParkinglots(myLocation){

    const [jsonStatus, jsonStatic] = await Promise.all([
        fetchJason(stationsStatus),
        fetchJason(stationsURL)
    ]);

    let parkingList = jsonStatus.map(data => {
        let parkInfo = {}
        let staticData = jsonStatic.find(val => val.AhuzotCode === data.AhuzotCode)
        parkInfo.name = data.Name;
        parkInfo.time = getTime(data.LastUpdateFromDambach);
        parkInfo.status = data.InformationToShow;
        parkInfo.availability = getAvailability(data.InformationToShow);
        parkInfo.location = getLocation(staticData);
        return parkInfo
    });

    parkingList = parkingList.filter((val) =>val.availability !== 'NA');

    //sort by location nearest to home
    //parkingList.sort((a,b)=>getDist(myLocation,a.location)>getDist(myLocation,b.location) ?1:-1 );

    sortNearMe(parkingList,myLocation)

    return parkingList;

}

export function sortNearMe(parkingList, myLocation) {
    parkingList.sort((a,b)=>getDist(myLocation,a.location)>getDist(myLocation,b.location) ?1:-1 );
}

async function fetchJason(url) {

    var retries = 5;
    const response = await fetch_retry(url,retries);
    return response.json()
}

const fetch_retry = async (url, n) => {
    let response = await fetch(url)
    if (!response.ok) {
        console.log(response)
        if (n === 1) throw "can't fatch"
        return await fetch_retry(url, n - 1);
    }
    return response
};

//for v2 - using my own server
const localStationsStatus = 'http://127.0.0.1:8000/api/liveStatus/';
export async function getParkingServer(){
    console.log('start')
    const responseStatus = await fetch(localStationsStatus );
    console.log(responseStatus)
    const jsonStatus = await responseStatus.json();



    let parkingList = jsonStatus.map(data => {
        let parkInfo = {}
        parkInfo.name = data.name;
        parkInfo.time = data.statusTime;
        parkInfo.status = data.status;
        parkInfo.availability = getAvailability(data.status);
        parkInfo.location = {lat:data.latitude,lon:data.longitude};
        return parkInfo
    });

    parkingList = parkingList.filter((val) =>val.availability != 'NA');

    //sort by location nearest to home
    parkingList.sort((a,b)=>getDist(HOME_LOC,a.location)>getDist(HOME_LOC,b.location) ?1:-1 );

    return parkingList;

}