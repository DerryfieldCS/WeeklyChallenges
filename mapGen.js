var minRoomSize = 10;//radius of the room
var maxRoomSize = 15;
var minRoomNum = 5;
var maxRoomNum = 8;
var mapSize = 100;//side length of the map
var margin = 1;//the minimum distance from the border of the map to a room

function room(pos, size){
    this.pos = pos;
    this.size = size;
}

function randomNum (min, max) {//return a random integar between min and max
    if (min > max || typeof(min)!="number" || typeof(max)!="number"){
        return null;
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function diff (num1, num2){//return the difference between two numbers
    return num1 > num2 ? num1 - num2 : num2 - num1;
}

function posDis (pos1, pos2){//return the distance (round to integar) between two pairs of coordinates 
    var xDis = diff(pos1[0],pos2[0]);
    var yDis = diff(pos1[1],pos2[1]);
    return Math.round(Math.sqrt(xDis * xDis + yDis * yDis));
}

function isOverlap (room1, room2){//check if two rooms are overlapped
    var xDis = diff(room1.pos[0], room2.pos[0]) - 1;
    var yDis = diff(room1.pos[1], room2.pos[1]) - 1;
    var sizeSum = room1.size + room2.size;
    if (xDis <= sizeSum && yDis <= sizeSum && !(yDis == sizeSum && xDis == sizeSum)){
        return 1;
    }else{
        return 0;
    }
}

function genRoomCenter (roomSize){
    return [randomNum(roomSize + 1 + margin, mapSize - (roomSize + 1 + margin)), randomNum(roomSize + 1 + margin, mapSize - (roomSize + 1 + margin))]
}

function genRooms () {
    var roomList = [];
    var roomNum = randomNum (minRoomNum, maxRoomNum);
    for (let i = 0; i <= roomNum - 1; i++){
        while (1){
            let newRoom = new room(genRoomCenter(), randomNum (minRoomSize, maxRoomSize));
            let available = 1;
            for (let j = 0; j <= roomList.length - 1; j++){//Map the list of rooms, check if this new room overlap with exist one
                if (isOverlap(roomList[j],newRoom)){//x-pos of the room
                    available = 0;
                }
            }
            if (available){
                roomList.push();
                break;
            }
        }   
    }
    return roomList;
}

function genMap (){
    var map = [];
    var roomList = genRooms();
    for (let i = 0; i <= roomList.length - 1; i++){
        let curRoom = roomList[i];
    }
} 