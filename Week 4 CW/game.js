//#region Yesterday console.log("Hello World")

// var canvas = document.querySelector("canvas")
// var ctx = canvas.getContext("2d")


// var person = {
//     first: "Aidan",
//     last: "Leary",

//     firstAndLastName: function () {
//         alert("My name is: " + this.first + this.last)
//     }
// }

// console.log(person.first)

// // Key value pair (Can only have one) called square
// // Will learn about classes next class
// var square = {
//     x: 500,
//     y: 500,
//     width: 100,
//     height: 100,
//     color: "red",
// }

// var copy = square;
// copy.x = 200;


// // Create a square using our KeyValue object
// ctx.fillStyle = square.color
// ctx.fillRect(square.x, square.y, square.width, square.height)


// //For loops
// for (var i = 0; i < 20; i++) {
//     console.log(2 * i)
// }

// for (var s = 0; s < 20; s++) {
//     ctx.fillStyle = "olive"
//     ctx.fillRect(s * 5 * (20 / 2), s, 20, 20)
// }

// // Adding to the array
// var colors = []
// colors[0] = "red"
// colors[1] = "olive"
// colors[2] = "yellow"

// // Predefined array
// var person = ["Joel", "Jason", "Amanda"]


// console.log(colors[1])

// colors[4] = "blue"
// console.log(colors[4])
// console.log(colors[3])

// var twodArray = [
//     [1, 1, 1, 1, 1, 1, 1, 1],
//     [2, 2, 2, 2, 2, 2, 2, 2],
//     [3, 3, 3, 3, 3, 3, 3, 3],
//     [4, 4, 4, 4, 4, 4, 4, 4]
// ]


// // All arrays have a length parameter attached to them, which 
// //tells the programmer how many objects are in the array
// for(var x = 0; x < twodArray.length; x++)
// {
//     // accessing the value within the array
//     console.log(twodArray[x][4])
// }

// // Double for loop
// for(var xCord = 0; xCord<twodArray.length;xCord++)
// {
//     for(var yCord = 0; yCord < 8; yCord++)
//     {
//         console.log(twodArray[xCord][yCord])
//     }
// }

// // While Loop!

// var whileInt = 0;
// while(whileInt < 20 * 4)
// {
//     whileInt++;
//     console.log(whileInt)
//#endregion 


var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")
var timer = setInterval(main, 1000 / 60)
var x = 50;
var y = canvas.height / 2;
var w = 100;
var h = 100;
var moveAmountX = 10;
var moveAmountY = 10;


//JIMMY IS HERE
var jimmyTheBox = new gameObject(canvas)
jimmyTheBox.x = 72;
jimmyTheBox.y = 84;
jimmyTheBox.width = 72;
jimmyTheBox.height = 72;
jimmyTheBox.color = 'blanchedalmond'

var paulTheBox = new gameObject(canvas)
paulTheBox.width = 50;
paulTheBox.height = 50;
paulTheBox.x = canvas.width / 2;
paulTheBox.y = canvas.height / 2;
paulTheBox.color = "purple"


//The main function
function main() {
    //Clear canvas every frame
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    //Rendering the objects
    jimmyTheBox.renderRect()
    paulTheBox.renderRect()

    jimmyTheBox.move()
    paulTheBox.move()

    //Update out object's position
    x += moveAmountX
    y += moveAmountY


    //Draw our object
    ctx.fillStyle = 'olive'
    ctx.beginPath()
    ctx.arc(x, y, 50, 0, 2 * Math.PI)
    ctx.fill();


    //Stay in boundery of canvas
    //If position is greater than the width of the canvas>
    //<minus half of the width of the circle
    if (x > canvas.width - 50) {
        moveAmountX *= -1
    }


    if (x < 50) {
        moveAmountX *= -1
    }


    if (y > canvas.height - 50) {
        moveAmountY *= -1
    }


    if (y < 50) {
        moveAmountY *= -1
    }
}