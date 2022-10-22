var lettuce = {
    name: "Lettuce",
    quantity: 26,
    picURL: "../lettuce.png",
    quantSelected: 0

};

var carrots= {
    name: "Carrots",
    quantity: 51,
    picURL: "../carrots.jpeg",
    quantSelected: 0

};

var berries = {
    name: "Blue Berries",
    quantity: 157,
    picURL: "../blueberries.jpeg",
    quantSelected: 0

};

var eggs = {
    name: "Eggs",
    quantity: 22,
    picURL: "../eggs.jpeg",
    quantSelected: 0

};

var onions = {
    name: "Onions",
    quantity: 46,
    picURL: "../onions.jpeg",
    quantSelected: 0

};

var kiwi = {
    name: "Kiwi",
    quantity: 13,
    picURL: "../kiwis.jpeg",
    quantSelected: 0

};

var produce = [
    lettuce, carrots, berries, eggs, onions, kiwi
];

const produceGrid = document.getElementById("inventory-grid");

for(let i = 0; i < produce.length; i++)
{
    const container = document.createElement("div");
    container.setAttribute("class", "block container-style");
    //container.style.backgroundImage = "url('../blueberries.jpeg')";


    const image = document.createElement("img");
    image.setAttribute("src", produce[i].picURL);
    image.setAttribute("alt", produce[i].name);
    image.setAttribute("class", "block inventory-pic")

    const nameTag = document.createElement("p");
    nameTag.appendChild(document.createTextNode(produce[i].name));
    nameTag.setAttribute("class", "fw-bold")

    const quantityTag = document.createElement("p");
    quantityTag.appendChild(document.createTextNode("Quantity: " + produce[i].quantity));
    quantityTag.setAttribute("class", "fw-medium")

    const addSection = document.createElement("section");
    addSection.setAttribute("class", "add-section");
    
    const remove = document.createElement("p");
    remove.appendChild(document.createTextNode("-"));

    const quantSelected = document.createElement("p");
    quantSelected.appendChild(document.createTextNode(produce[i].quantSelected));


    const add = document.createElement("p");
    add.setAttribute("class", "pointer");
    add.appendChild(document.createTextNode("+"));
    add.onclick = function()
    {
        if (produce[i].quantSelected < produce[i].quantity)
        {
            produce[i].quantSelected = produce[i].quantSelected + 1;
            quantSelected.textContent = produce[i].quantSelected;
        }
    }

    remove.onclick = function()
    {
        if (produce[i].quantSelected =! 0)
        {
            produce[i].quantSelected = produce[i].quantSelected - 1;
            quantSelected.textContent = produce[i].quantSelected;
        }
    }
    
    addSection.appendChild(remove);
    addSection.appendChild(quantSelected);
    addSection.appendChild(add);

    addSection.setAttribute("class", "inline-block fs-larger");
    add.setAttribute("class", "inline-block");
    remove.setAttribute("class", "inline-block");
    quantSelected.setAttribute("class", "inline-block");
    

    container.appendChild(image);
    container.appendChild(nameTag);
    container.appendChild(quantityTag);
    container.appendChild(addSection);

    produceGrid.appendChild(container);


}

const confirmButton = document.getElementById("confirm");
confirmButton.onclick = function()
{
    window.location.href = "confirmation.html";
}

//background image