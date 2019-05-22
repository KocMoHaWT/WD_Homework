const inputSearch = document.getElementById("input");
const table = document.getElementById("tableBody");
const selector = document.getElementById("selector");
const totalPrice = document.getElementById("inTotal");
let inTotal = 0;



inputSearch.oninput = function () {
abrakadabra();
};

function cleanAll() {
    const tableElements = table.querySelectorAll("tr");
    for (let i = 0; i < tableElements.length; i++) {
        tableElements[i].remove();
    }
    inTotal = 0;
}
function abrakadabra() {
    cleanAll();

    let val = inputSearch.value;

    for(let i = 0; i < GOODS.length;i++) {
         if(GOODS[i].category.match(selector.value) && GOODS[i].name.toLowerCase().match(val.toLowerCase())) {
            const obj = GOODS[i];
            let th =  document.createElement("tr");

            th.innerHTML =  "<th>" + obj.category + "</th>" +
                "<th>" + obj.name + "</th>" +
                "<th>" + obj.amount + "</th>" +
                "<th>" + obj.price + "</th>";

            table.appendChild(th);
            inTotal += obj.price * obj.amount;
        }
    }
    totalPrice.innerText = inTotal + " $";
}
selector.onchange = function () {
    abrakadabra();
};
const GOODS = [
    {
        category: 'furniture',
        name: 'Chair',
        amount: 1,
        price: 20
    },
    {
        category: 'supplies',
        name: 'Gel Pen',
        amount: 20,
        price: 2
    },
    {
        category: 'other',
        name: 'Trash Bin',
        amount: 1,
        price: 5
    },
    {
        category: 'furniture',
        name: 'Sofa',
        amount: 1,
        price: 50
    },
    {
        category: 'supplies',
        name: 'Notebook',
        amount: 3,
        price: 3
    },
    {
        category: 'other',
        name: 'Calendar 2019',
        amount: 1,
        price: 3
    }
];
start();

function start() {
    for(let i = 0; i < GOODS.length; i++) {

        let th =  document.createElement("tr");

        th.innerHTML =  "<th>" + GOODS[i].category + "</th>" +
            "<th>" + GOODS[i].name + "</th>" +
            "<th>" + GOODS[i].amount + "</th>" +
            "<th>" + GOODS[i].price + "</th>";

        table.appendChild(th);
        inTotal += GOODS[i].price * GOODS[i].amount;

    }
    totalPrice.innerText = inTotal;

}