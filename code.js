let table = document.createElement("table");

// Apply styles using the style object
table.style.borderCollapse = "collapse"; 
table.style.backgroundColor = "#f4f4f4";

// Apply styles using setAttribute()
table.setAttribute("border", "1");
table.setAttribute("cellpadding", "10");

// Define table data
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
        
        // Apply styles to header row
        if (rowIndex === 0) {
            cell.style.fontWeight = "bold";
            cell.style.backgroundColor = "#ddd";
        }
        
        row.appendChild(cell);
    });
    
    table.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);
