//site elements
const equationEntry = document.getElementById("logic-equation-entry");
const outputArea = document.getElementById("truth-table-output")

//output functions
function emptyOutput() {outputArea.innerHTML = "<em>No truth table generated.</em>";}
function errorOutput() {outputArea.innerHTML = "<em>Error in equation - truth table could not be generated.</em>";}

function buildTruthTable(variables, func) {
    //calculate truth table sizes
    const nCols = variables.length;
    const nRows = 2**(variables.length);

    //create and fill out input data of alternating trues and falses
    let tableValues = new Array(nRows).fill(0).map(() => new Array(nCols).fill(0));
    function fillTable(startRow, endRow, column) {
        let lowerTop = (endRow - startRow - 1)/2 + startRow
        
        for (let i = startRow; i <= endRow; i++) {
            if (i <= lowerTop) tableValues[i][column] = false;
            else tableValues[i][column] = true;
        }

        if (column < nCols-1) {
            fillTable(startRow, lowerTop, column+1);
            fillTable(lowerTop+1, endRow, column+1);
        }  
    }
    fillTable(0, nRows-1, 0);

    //create table html
    tableHTML = ""

    //create table header
    header = "";
    for (let i = 0; i < nCols; i++) {
        header += `<th>${variables[i]}</th>`
    }
    header += `<th>Output</th>`
    tableHTML += `<tr>${header}</tr>`;

    //create table rows
    for (let i = 0; i < nRows; i++) {
        row = "";
        result = func(...tableValues[i]);
        
        for (let j = 0; j < nCols; j++) 
            row += `<td>${tableValues[i][j] ? 1 : 0}</td>`;
        row += `<td>${result ? 1 : 0}</td>`;

        tableHTML += `<tr>${row}</tr>`;
    }

    tableHTML = `<table id="truth-table">${tableHTML}</table>`;

    outputArea.innerHTML = tableHTML;
}

//listener
function onEquationSubmit() {
    outputArea.innerText = equationEntry.value;
}

//startup
emptyOutput();
buildTruthTable(["a", "b", "c"], (a, b, c) => (a && (b || c)));