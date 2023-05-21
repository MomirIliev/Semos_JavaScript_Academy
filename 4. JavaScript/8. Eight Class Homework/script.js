var MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
    {name: "Everest", height: 8848, country: "Nepal"},
    {name: "Mount Fuji", height: 3776, country: "Japan"},
    {name: "Mont Blanc", height: 4808, country: "Italy/France"},
    {name: "Vaalserberg", height: 323, country: "Netherlands"},
    {name: "Denali", height: 6168, country: "United States"},
    {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

let numberHeadings = Object.keys(MOUNTAINS).length; 
console.log(numberHeadings);

let table = document.createElement('table'); 
let tableHead = document.createElement('thead');
let tableHeadRow = document.createElement('tr');

for (let key of Object.keys(MOUNTAINS[0])) {
    const tableCell = document.createElement('td');
    tableCell.appendChild(document.createTextNode(key));
    tableHeadRow.appendChild(tableCell); 
}

tableHead.appendChild(tableHeadRow); 
table.appendChild(tableHead); 

let tableBody = document.createElement('tbody');

for (let i = 0; i < MOUNTAINS.length; i++){
    const tableRow = document.createElement('tr'); 
    for ( let key of Object.keys(MOUNTAINS[i])){
        const tableCell = document.createElement('td');
        let valueOfCell = MOUNTAINS[i][key];
        tableCell.appendChild(document.createTextNode(valueOfCell));
        tableRow.appendChild(tableCell);
    }
    tableBody.appendChild(tableRow); 
}

table.appendChild(tableBody); 
table.border = "3px";
tableHead.style.backgroundColor = "orange";
tableHead.style.fontWeight = "900";
tableHead.style.textTransform = "uppercase";  
tableBody.style.backgroundColor = "lightgreen";
table.cellPadding = "10";

document.body.appendChild(table); 
