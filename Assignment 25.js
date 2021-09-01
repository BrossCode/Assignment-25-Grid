var master = [];
var hero = {x: 0, y:0};
var x = 0;
var y = 0;

function onload() {
    document.getElementById("inputButton").onclick = function() {
        var start = Date.now();

        // take inputs
        x = document.getElementById("xInput").value;
        y = document.getElementById("yInput").value;

        // building a maze
        master = createGrid(x,y);
        console.log(master);
        document.getElementById("output").innerHTML = gridOutput(master);


        var end = Date.now() - start;
        document.getElementById("runTime").innerHTML = end;
    }
    document.getElementById("up").onclick = function() {  moveUp(hero, y); 
    document.getElementById("output").innerHTML = gridOutput(master,hero.x,hero.y);
    }
    document.getElementById("left").onclick = function() { moveLeft(hero, x); 
    document.getElementById("output").innerHTML = gridOutput(master,hero.x,hero.y);
    }
    document.getElementById("right").onclick = function() { moveRight(hero, x);
    document.getElementById("output").innerHTML = gridOutput(master,hero.x,hero.y);
    }
    document.getElementById("down").onclick = function(){ moveDown(hero, y);
    document.getElementById("output").innerHTML = gridOutput(master,hero.x,hero.y);
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
            // change it to X, the index is not the string I saved.
            row.push("X");
        }
        master[i] = row;
        row = [];
    }
    // take the array out
    return master;
}

// need to reprint the dungeon for hero movement
function gridOutput(master) {
    var output = "";

    // looping x amount of times for the horizontal bracket
    for (var i = 0; i < master.length; i++) {
        for (var j = 0; j < master[i].length; j++) {
            if (hero.x == j && hero.y == i) {
                // place hero down and update when it moves
                 output += "O" + " ";
                }
            else {
            // call on the Index for that location.
             output += master[i][j] + " ";
            }
        }
        // adding two line breaks for readability
        for (var j = 0; j < 2; j++) {
            output += ("<br>");
        }
    }
    return output;
}

function moveUp(hero, y) {
        hero.y += 1;
        if (hero.y > y - 1) {
            hero.y -= 1;
        }
        console.log(hero.x , hero.y);
}
function moveDown(hero, y) {
        hero.y -= 1;
        if (hero.y < 0) {
            hero.y += 1;
        }
        console.log(hero.x , hero.y);
}
function moveRight(hero, x) {
        hero.x += 1;
        if (hero.x > x - 1) {
            hero.x -= 1;
        }
        console.log(hero.x , hero.y);
}
function moveLeft(hero, x) {
        hero.x -= 1;
        if (hero.x < 0) {
            hero.x += 1;
        }
        console.log(hero.x , hero.y);
}