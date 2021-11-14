//site elements
const equationEntry = document.getElementById("logic-equation-entry");
const outputArea = document.getElementById("truth-table-output")

//utility functions
function truthTableInputsArray(nRows, nCols) {
    // create an empty array of the correct dimensions
    let inputValues = new Array(nRows).fill(0).map(() => new Array(nCols).fill(0));

    //recursive function to fill out alternating trues and falses
    fillTable = (startRow, endRow, column) => {
        let lowerTop = (endRow - startRow - 1)/2 + startRow;
        
        for (let i = startRow; i <= endRow; i++) {
            if (i <= lowerTop) inputValues[i][column] = false;
            else inputValues[i][column] = true;
        }

        if (column < nCols-1) {
            fillTable(startRow, lowerTop, column+1);
            fillTable(lowerTop+1, endRow, column+1);
        }  
    }
    fillTable(0, nRows-1, 0);

    return inputValues;
}

function createTableHTML(header, rows) {
    rowReducer = (tagType) => (incompleteRow, nextVal) => 
        incompleteRow + `<${tagType}>${nextVal}</${tagType}>`;
    
    tableReducer = (incompleteTable, nextRow) => incompleteTable + `<tr>${nextRow}</tr>`;

    tableRows = `<tr>${header.reduce(rowReducer("th"), "")}</tr>`
    tableRows += rows.map(
        (row) => `<tr>${row.reduce(rowReducer("td"), "")}</tr>`
    ).join("");

    tableHTML = `<table id="truth-table">${tableRows}</table>`;

    return tableHTML;
}

//output functions
function emptyOutput() {outputArea.innerHTML = "<em>No truth table generated.</em>";}
function errorOutput() {outputArea.innerHTML = "<em>Error in equation - truth table could not be generated.</em>";}

// takes the variable names and logic function and renders the truth table
function buildTruthTable(variables, func) {
    //calculate truth table sizes
    const nCols = variables.length;
    const nRows = 2**(variables.length);

    //create and fill out input data of alternating trues and falses
    let inputValues = truthTableInputsArray(nRows, nCols);

    //apply function to each row and construct rows of table
    let tableRows = [];
    for (let inputRow of inputValues) {
        let funcArg = {};
        for (let i = 0; i < variables.length; i++) funcArg[variables[i]] = inputRow[i];
        const result = func(funcArg);

        tableRows.push(
            inputRow.map((val) => val ? 1 : 0).concat(result ? 1 : 0)
        );
    }

    //format array of values into html
    outputArea.innerHTML = createTableHTML(variables.concat(["Output"]), tableRows);
}

//parser

// logic functions (representing part or whole of a logical expression) will be formatted as such:
// function XXXX (map with argument names as keys) {operation on values at those map key's values}
// this means all arguments can be passed to constituent functions, and only relevant arguments
// will be used.

function getAllInputs(logicExpr) {
    //matches all input names
    const inputFinder = /[^\(\)\+\*\~\^]+/g;
    const results = logicExpr.matchAll(inputFinder);

    //extracts names and removes duplicate names
    return [...new Set([...results].map((match) => match[0]))]
}

function combineLogicFuncs(func1, func2, op) {
    if (op == "*") return (args) => func1(args) && func2(args);
    else if (op == "+") return (args) => func1(args) || func2(args);
    else if (op == "^") return (args) => func1(args) !== func2(args);
    else if (op == "~") return (args) => !func1(args);
}

function parseToLogicFunction(logicExpr) {

}

//listener to submit button
function onEquationSubmit() {
    buildTruthTable(["a", "b", "c"], ({"a":a, "b":b, "c":c}) => (a && (b || c)));
    const logicExpr = equationEntry.value.replace(/ /g, ''); //gets expression and removes whitespace
    const inputNames = getAllInputs(logicExpr);
}

//startup
emptyOutput();