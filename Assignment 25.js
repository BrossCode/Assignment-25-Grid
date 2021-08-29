function onload() {
    document.getElementById("inputButton").onclick = function() {
        var start = Date.now();

        // takes inputs
        var xValue = document.getElementById("inputX").value;
        var yValue = document.getElementById("inputY").value;

        // building a maze
        document.getElementById("output").innerHTML = createGrid().join(" ");

        var end = Date.now() - start;
        document.getElementById("runTime").innerHTML = end;
    }
}

function createGrid() {
    // Need to create a master array
    var master = [];

    // x and y arrays
    var xArray = [0,1,2,3,4,5]
    var yArray = [0,1,2,3,4,5]

    // tracking var to increase x value
    var k = 0;
    var j = 0;
    var push = "<br>";

    // add arrays together to create a new array?
    for (var i = 0; i <= 40; i++) {
        master[i] = ([xArray[k], yArray[j]]);
        // increase j by one to increase y value
        j += 1;
        // if we hit 6 in j, we need to increase x value by one and reset j
        if (j == 7) {
            master[i] = push;
            k += 1;
            j = 0;
        }
    }
    console.log(master);
    return master;
}