const icon = document.querySelector('.icon')
        const search = document.querySelector('.search');
        icon.onclick = function() {
            search.classList.toggle('active')
        }


function openPage() {
    var x = document.getElementById("mysearch").value;

    if (x === "naslovna") {
        window.open("/C:/Users/milos/Desktop/FarmaSajt/index.html");
    }
}

// Mape:

// function initMap() {
//     var location = { lat: 44.841964, lng: 20.376736};
//     var map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 4,
//         center: location
//     }); 
// }


