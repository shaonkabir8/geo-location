


window.onload = function() {
    // grab the geo-location container from DOM
    const latitudePoint = document.querySelector('.info__location--latitude');
    const longitudePoint = document.querySelector('.info__location--longitude');



    // check if geoloaction is available
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            const { longitude, latitude } = position.coords;
            latitudePoint.innerHTML= `${latitude}`;
            longitudePoint.innerHTML= `${longitude}`;
            
            // hide the warnings for Allowing location.
            document.querySelector('.info__warning').style.display = 'none';
        });
    }


}



