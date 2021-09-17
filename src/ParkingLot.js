const near = {
    x:178792.53000000003,
    y:666080.46999999997
}

function getTime(val){
    let date = new Date(val);
    return date.getUTCHours() +":"+date.getUTCMinutes();
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
        case 'פעיל':
            return 'NA';
    }
    return 'undefined'
}

function getDist(a,b){
    return Math.hypot(b.x-a.x, b.y-a.y);
}

export async function getParkinglots(urlApi){
    const response = await fetch(urlApi);
    const json = await response.json();
    const parkingList = json.features.map(data => {
        let parklot = data.attributes;
        let parkInfo = {}
        parkInfo.name = parklot.shem_chenyon;
        parkInfo.time = getTime(parklot.tr_status_chenyon);
        parkInfo.status = parklot.status_chenyon;
        parkInfo.availability = getAvailability(parklot.status_chenyon);
        parkInfo.location = data.geometry
        return parkInfo
    });

    //sort by location nearest to home
    parkingList.sort((a,b)=>getDist(near,a.location)>getDist(near,b.location) ?1:-1 );

    return parkingList;

}