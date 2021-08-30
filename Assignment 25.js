var master = [];

function onload() {
    document.getElementById("inputButton").onclick = function() {
        var start = Date.now();

        // take inputs
        var x = document.getElementById("xInput").value;
        var y = document.getElementById("yInput").value;

        // building a maze
        master = createGrid(x,y);
        console.log(master);
        document.getElementById("output").innerHTML = gridOutput(master);

        var end = Date.now() - start;
        document.getElementById("runTime").innerHTML = end;
    }
}

function createGrid(x,y) {
    // Need to create a master array
    master = [];

    // x and y arrays
    var row = [];

    // add inputs to arrays
    for (var i = 0; i < y; i++) {
        for (var j = 0; j < x; j++) {
            row.push(j + "," + i);
        }
        master[i] = row;
        row = [];
    }
    // take the array out
    return master;
}

function gridOutput(master) {
    var output = "";

    // looping x amount of times for the horizontal bracket
    for (var i = 0; i < master.length; i++) {
        for (var j = 0; j < master[i].length; j++) {
            output += master[i][j] + " ";
        }
        // adding two line breaks for readability
        for (var j = 0; j < 2; j++) {
            output += ("<br>");
        }
    }
    return output;
}