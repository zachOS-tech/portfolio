let firstNameCount = 0;
let lastNameCount = 0;
let osCount = 0;
let capitalLetterCount = 0;
let leftCount = 0;
let rightCount = 0;

let firstName = "hary ";
let lastName = "kins";
let speed = 200;

const hideElem = (id = "cursor1") => document.getElementById(id).style.visibility='hidden';
const showElem = (id = "cursor1") => document.getElementById(id).style.visibility='visible';

hideElem();

typeWriter();

function typeWriter(){
  // Wait .6 Seconds
  setTimeout(() => {
    return;
  }, 600);

  // Delete OS and re-type zachos all lowercase
  setTimeout(deleteCapitals, 600);

  // Moves cursor left so that it's in front of the "z" and "h"
  setTimeout(moveCursorLeft, 2000);

  // Delete "z" and "h" and type "Z" and "H" respectfully
  setTimeout(capitalizeNames, 3000);

  // Moves cursor right back to where it started
  setTimeout(moveCursorRight, 4600);

  // Types the remainder of my first/last name at the same time
  setTimeout(writeFirstName, 5600);
  setTimeout(writeLastName, 5600);
} 

function deleteCapitals() {
  let name = [
    ["zac","hOS"],
    ["zac","hO"],
    ["zac","h"],
    ["zac","ho"],
    ["zac","hos"],
  ]
  
  if(osCount < name.length){
    document.getElementById("typewriter_lastName").innerHTML = name[osCount][1]; 
    osCount++;
    setTimeout(deleteCapitals, speed);
  }
}

function moveCursorLeft(){
  showElem();
  let cursorLocationLarge = [
    "-8px",
    "-28px",    
    "-48px",
  ]
  let cursorLocationSmall = [
    "-8px",
    "-20px",    
    "-32px",
  ]

  // Runs on tablet or larger
  if(document.documentElement.clientWidth > 500 && leftCount < cursorLocationLarge.length){
    document.getElementById("cursor1").style.marginLeft = cursorLocationLarge[leftCount];
    document.getElementById("cursor2").style.marginLeft = cursorLocationLarge[leftCount];
    leftCount++
    setTimeout(moveCursorLeft, speed);
  }

  // Run if on Mobile Device
  if(document.documentElement.clientWidth < 500 && leftCount < cursorLocationSmall.length){
    document.getElementById("cursor1").style.marginLeft = cursorLocationSmall[leftCount];
    document.getElementById("cursor2").style.marginLeft = cursorLocationSmall[leftCount];
    leftCount++
    setTimeout(moveCursorLeft, speed);
  }
}

function moveCursorRight(){
  let cursorLocationLarge = [
    "-48px",
    "-28px",    
    "-8px",
  ]
  
  let cursorLocationSmall = [
    "-32px",
    "-20px",    
    "-8px",
  ]

  // Runs on tablet or larger
  if(document.documentElement.clientWidth > 500 && rightCount < cursorLocationLarge.length){
    document.getElementById("cursor1").style.marginLeft = cursorLocationLarge[rightCount];
    document.getElementById("cursor2").style.marginLeft = cursorLocationLarge[rightCount];
    rightCount++
    setTimeout(moveCursorRight, speed);
  }

  // Run if on Mobile Device
  if(document.documentElement.clientWidth < 500 && rightCount < cursorLocationSmall.length){
    document.getElementById("cursor1").style.marginLeft = cursorLocationSmall[rightCount];
    document.getElementById("cursor2").style.marginLeft = cursorLocationSmall[rightCount];
    rightCount++
    setTimeout(moveCursorRight, speed);
  }
}

function capitalizeNames(){
  let name = [
    ["zac","hos"],
    ["ac","os"],
    ["Zac","Hos"],
  ]

  if(capitalLetterCount < name.length){
    document.getElementById("typewriter_firstName").innerHTML = name[capitalLetterCount][0];
    document.getElementById("typewriter_lastName").innerHTML = name[capitalLetterCount][1];
    capitalLetterCount++;
    setTimeout(capitalizeNames, speed)
  }
}

function writeFirstName() {
  if (firstNameCount < firstName.length) {
    document.getElementById("typewriter_firstName").innerHTML += firstName.charAt(firstNameCount);
    firstNameCount++;
    setTimeout(writeFirstName, speed);
  }

  // Hide first cursor once the typing is finished
  setTimeout(() => {
    hideElem();
  }, 2000);
}

function writeLastName() {

  if (lastNameCount < lastName.length) {
    document.getElementById("typewriter_lastName").innerHTML += lastName.charAt(lastNameCount);
    lastNameCount++;
    setTimeout(writeLastName, speed);
  }
}

const whoAmI = 
{
  name: "Zachary Hoskins",
  title: "Web Developer"
}