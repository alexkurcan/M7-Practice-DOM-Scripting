let table = document.createElement("table");

// styles using the style object
table.style.borderCollapse = "collapse"; 
table.style.backgroundColor = "#f4f4f4";

// styles using setAttribute()
table.setAttribute("border", "1");
table.setAttribute("cellpadding", "10");

// table data
let data = [
    ["Car", "Top", "Price"],
    ["Chevrolet", "120mph", "$10,000"],
    ["Pontiac", "140mph", "$20,000"]
];

// Loop through data and create rows and cells
data.forEach((rowData, rowIndex) => {
    let row = document.createElement("tr");
    rowData.forEach(cellData => {
        let cell = document.createElement("td");
        cell.textContent = cellData;
        if (rowIndex === 0) {
            cell.style.fontWeight = "bold";
            cell.style.backgroundColor = "#ddd";
        }
        row.appendChild(cell);
    });
    table.appendChild(row);
});


document.body.appendChild(table);
