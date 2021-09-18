const ARLOZOROV_LOC = {
    lat:32.0873,
    lon:34.7737,
}

const ASOTA = "אסותא"
const ASOTA_LOC = {
    lat:32.0885092,
    lon:34.7799810,
}

function getLocation(staticData) {
    if (staticData.Name === ASOTA){ //No location provided
        return ARLOZOROV_LOC;
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

export async function getParkinglots(){
    const responseStatus = await fetch(stationsStatus);
    const response = await fetch(stationsURL);
    const jsonStatus = await responseStatus.json();
    const jsonStatic = await response.json();

    let parkingList = jsonStatus.map(data => {
        let parkInfo = {}
        let staticData = jsonStatic.find(val => val.AhuzotCode == data.AhuzotCode)
        parkInfo.name = data.Name;
        parkInfo.time = getTime(data.LastUpdateFromDambach);
        parkInfo.status = data.InformationToShow;
        parkInfo.availability = getAvailability(data.InformationToShow);
        parkInfo.location = getLocation(staticData);
        return parkInfo
    });

    parkingList = parkingList.filter((val) =>val.availability != 'NA');

    //sort by location nearest to home
    parkingList.sort((a,b)=>getDist(ARLOZOROV_LOC,a.location)>getDist(ARLOZOROV_LOC,b.location) ?1:-1 );

    return parkingList;

}