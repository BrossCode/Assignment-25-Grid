var Constants = { EMPTY: "_", PLAYER: "P"}
var GameObjects = {WALL: "W", STAIRS: "S", EMPTY: "_"}
var player = {x: 0, y: 0}
var game = {w: 5, h:6, walls: 4, stairs: 1}
var dungeon = []
var floorCounter = 0;

function hello() { 
    makeDungeon(game.w, game.h)
    render(dungeon)
    document.onkeydown = function() {

        if (event.keyCode == '40') {
            move(0, 1)
            // down arrow
        }
        else if (event.keyCode == '38') {
            move(0, -1)
            // up arrow
        }
        else if (event.keyCode == '37') {
            move(-1, 0)
           // left arrow
        }
        else if (event.keyCode == '39') {
            move(1, 0)
           // right arrow
        }
    }
}

function makeDungeon(x, y){
    dungeon = [];
    for(let i = 0; i < x; i++){
        let row = []
        for(let j = 0; j < y; j++){
            row[j] = {obj: GameObjects.EMPTY}
        }
        dungeon.push(row)
    }
    floorCounter += 1;
    makeWalls(game.walls)
    makeStairs(game.stairs)
    document.getElementById("counter").innerHTML = floorCounter;
}

function makeWalls(n){
    let wallsLeft = n
    while(wallsLeft > 0){
        let y = Math.floor(Math.random() * dungeon[0].length)
        let x = Math.floor(Math.random() * dungeon.length)
        if(dungeon[x][y].obj == GameObjects.EMPTY && !(player.x == x && player.y == y)){
            wallsLeft -= 1
            dungeon[x][y].obj = GameObjects.WALL
        }
    }
}

function makeStairs(n,) {
    let needstairs = 0;
    while (needstairs < n) {
        let y = Math.floor(Math.random() * dungeon[0].length)
        let x = Math.floor(Math.random() * dungeon.length)
        if(dungeon[x][y].obj == GameObjects.EMPTY && !(player.x == x && player.y == y)){
            needstairs += 1;
            dungeon[x][y].obj = GameObjects.STAIRS
        }
    }
}

function move(dx, dy, x, y){
    let newx = player.x + dx
    let newy = player.y + dy
    if(newx < 0) newx = 0
    if(newy < 0) newy = 0
    if(newx > dungeon.length-1) newx = dungeon.length-1
    if(newy > dungeon[0].length-1) newy = dungeon[0].length-1
    if(dungeon[newx][newy].obj == GameObjects.EMPTY){
        player.x = newx
        player.y = newy
        render(dungeon)
    }
    else if(dungeon[newx][newy].obj == GameObjects.STAIRS){
        player.x = newx
        player.y = newy
        makeDungeon(game.w, game.h)
        render(dungeon)
    }

}

function getDungeonString() {
    let s = ""
    for(let i = 0 ; i < dungeon[0].length; i++){
        for(let j = 0; j < dungeon.length; j++){
            if(player.y == i && player.x == j) s += Constants.PLAYER
            else s += dungeon[j][i].obj
            s += " "
        }
        s += "<br>"
    }
    return s
}

function render(dungeon){
    document.getElementById("output").innerHTML = getDungeonString(dungeon);
}
