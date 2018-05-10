var minRoomSize = 10;//radius of the room
var maxRoomSize = 15;
var minRoomNum = 5;
var maxRoomNum = 8;
var mapSize = 100;//side length of the map
var margin = 1;//the minimum distance from the border of the map to a room

function randomNum (min, max) {
    if (min > max || typeof(min)!="number" || typeof(max)!="number"){
        return null;
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function diff (num1, num2){
    return num1 > num2 ? num1 - num2 : num2 - num1;
}

function isOverlap (room1, room2){
    var xDis = diff(room1[0][0], room2[0][0]) - 1;
    var yDis = diff(room1[0][1], room2[0][1]) - 1;
    var sizeSum = room1[1] + room2[1];
    if (xDis <= sizeSum && yDis <= sizeSum && !(yDis == sizeSum && xDis == sizeSum)){
        return 1;
    }else{
        return 0;
    }
}

function genRooms () {
    var roomList = [];
    var roomNum = randomNum (minRoomNum, maxRoomNum);
    for (let i = 0; i <= roomNum - 1; i++){
        let roomSize = randomNum (minRoomSize, maxRoomSize);
        while (1){
            let roomPos = [randomNum(roomSize + 1 + margin, size - (roomSize + 1 + margin)), randomNum(roomSize + 1 + margin, size - (roomSize + 1 + margin))];
            let available = 1;
            for (let j = 0; j <= roomList.length - 1; j++){//Map the list of rooms, check if this new room overlap with exist one
                if (isOverlap(roomList[j],[roomPos,roomSize])){//x-pos of the room
                    available = 0;
                }
            }
            if (available){
                roomList.push([roomPos,roomSize]);
                break;
            }
        }   
    }
    return roomList;
}

function genMap (){
    var roomList = genRooms();
}