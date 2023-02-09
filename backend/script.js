let name = "Tom";
let age = 27
let currency = "£"//Char
let isInClass = true
let classProgress = 93.2
let Students = [
    "Tom",
    "Danil",
    "Sandra",
    "Dotun",
    "Jenny",
    "Francisco",
    "Damir",
    "Elisa",
    "Victor"
]

function helloJS() {
    console.log("Hello World from:" + Students[8] + "✨✨✨")
    // alert("I LOVE CODE <3 <3 <3")
}

function RandomColour() {
    document.querySelector(".Content").style.color = generateHex()
    document.querySelector(".Content").style.background = generateHex()
}

function generateHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
}

//3 vars to make accessing html elements easier and quicker for the js algorithm
let todoInputField = document.querySelector("#todoInput");
let submitTodoBtn = document.querySelector(".TodoSubmit");
let todoBodyUL = document.querySelector(".myUL");

submitTodoBtn.addEventListener("click", () => {
// Trigger the code in the body
// call the input field to extract the value
    let extractedText = todoInputField.value;
    console.log(extractedText);
    let text2d = document.createTextNode(extractedText);

    // create virtual ListItem to store extracted 2D text
    let textNodeListItem = document.createElement("li");
    textNodeListItem.appendChild(text2d);
    todoBodyUL.appendChild(textNodeListItem);

    todoInputField.value = ""; //reset input field
})