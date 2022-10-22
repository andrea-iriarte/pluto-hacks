function initMap()
{
    const centralCampus = {
        lat: 26.078070,
        lng: -80.231480
    };

    const northCampus = {
        lat: 26.2405,
        lng: -80.1743
    }

    const southCampus = {
        lat: 26.0066,
        lng: -80.2344
    }

    const browardCounty = {
        lat: 26.051809,
        lng: -80.211464
    };

    const map = new google.maps.Map(document.getElementById("map"),
    {
        zoom: 12,
        center: browardCounty,
    });

    const markerCentralCampus = new google.maps.Marker({
        position: centralCampus,
        map: map,
    });

    const markerNorthCampus = new google.maps.Marker({
        position: northCampus,
        map: map
    });

    const markeSouthCampus = new google.maps.Marker({
        position: southCampus,
        map: map
    });
}
const pantriesList = document.getElementById("pantries")

const northBC = {
    name: "Broward College - North Campus",
    address: "1000 Coconut Creek Boulevard Coconut Creek, FL 33066",
    hours: "Thursdays, 4 - 6 pm",
    isOpen: false
};

const centralBC = {
    name: "A. Hugh Adams Central Campus",
    address: "3501 Davie Rd. Davie, FL 33314",
    hours: "",
    isOpen: false
};

const southBC = {
    name: "Broward College - South Campus",
    address: "7200 Pines Blvd. Pembroke Pines, FL 33024",
    hours: "Wednesdays, 2 - 4 pm",
    isOpen: false
};

const pantries = [northBC, centralBC, southBC];

for (let x = 0; x < pantries.length; x++)
{
    const section = document.createElement("section");
    const name = document.createElement("p1");
    const address = document.createElement("p1");
    const hours = document.createElement("p1");
    const button = document.createElement("p1");

    section.setAttribute("class", "block");
    name.setAttribute("class", "block");
    address.setAttribute("class", "block");
    hours.setAttribute("class", "block");
    button.setAttribute("class", "block");





    name.appendChild(document.createTextNode(pantries[x].name));
    address.appendChild(document.createTextNode(pantries[x].address));
    hours.appendChild(document.createTextNode(pantries[x].hours));
    button.appendChild(document.createTextNode("Select this pantry"));

    section.appendChild(name);
    section.appendChild(address);
    section.appendChild(hours);
    section.appendChild(button);

    pantriesList.appendChild(section);

    
}