const inputSearch = document.getElementById("input");
const table = document.getElementById("tableBody");
const selector = document.getElementById("selector");
const totalPrice = document.getElementById("inTotal");
const arrName = document.getElementById("arrName");
const arrCategory = document.getElementById("arrCategory");
let inTotal = 0;
let orderName = false;
let orderCat = false;


function sortElements(order, attr) {
    GOODS.sort(function (a, b) {
        return compare(a, b,order,attr);

    });
    return !order;
}
function compare(a,b,ord,attr) {
    const x = a[attr].toLowerCase();
    const y = b[attr].toLowerCase();

    if (x < y) {
        return ord ? 1 : -1;
    }
    if (x > y) {
        return ord ? -1 : 1;
    }
    return 0;
}

inputSearch.oninput = function () {
renderingArr();
};

function cleanAll() {
    const tableElements = table.querySelectorAll("tr");
    for (let i = 0; i < tableElements.length; i++) {
        tableElements[i].remove();
    }
    inTotal = 0;
}

function renderingArr() {
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
    renderingArr();
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
    }
    ,
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
renderingArr();
arrName.onclick = function () {
    orderName = sortElements(orderName,"name");
    renderingArr();
};

arrCategory.onclick = function () {
      orderCat = sortElements(orderCat,"category");
    renderingArr();
};