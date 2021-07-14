// Several special characters have been excluded from specialChar list because they confused them for function syntax 
// numbers are identified as strings since they are being used as characters for a password rather than mathematical values
const allChar = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j",
"k","l","z","x","c","v","b","n","m","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J",
"K","L","Z","X","C","V","B","N","M","1","2","3","4","5","6","7","8","9","0",
"!","#","$","%","&",",","(",")","*","+","-",".","/",":",";","<","=",">","?","@"]

const lowerChar = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j",
"k","l","z","x","c","v","b","n","m"];

const upperChar = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J",
"K","L","Z","X","C","V","B","N","M"];

const numChar = ["1","2","3","4","5","6","7","8","9","0"];

var specialChar = ["!","#","$","%","&",",","(",")","*","+","-",".","/",":",";","<","=",">","?","@"];

//Req variables measure if the user wants to include a certain type of character.
//n is for no, y is yes.
var lowerCharReq =   "n";

var upperCharReq =   "n";

var numCharReq =     "n";

var specialCharReq = "n";

//lengthReq will take the user's password length requirement

var lengthReq = 0;

//chracater "spots" are spots on the password array that required characters will occupy so other required characters don't override each other

var lowerCharSpot = 0;

var upperCharSpot = 0;

var numCharSpot = 0;

var specialCharSpot = 0;

//this array is the password

var passwordArray = [0];

function checkLowerCharReq() {
    lowerCharReq = prompt("does your password require a lowercase character? y/n");
       //null clauses for y or n to let the function proceed and only interfere if an invalid character is chosen
        if (lowerCharReq === "y") {
        }
        else if (lowerCharReq === "n") {
        }
       //if the user selects "cancel" the function will end
        else if (!lowerCharReq) {
            return;
        }
       //if a character besides y or n is chosen this question will reappear
        else {
            alert("choose a valid character");
            checkLowerCharReq();
        }
}

function checkUpperCharReq() {
    upperCharReq = prompt("does your password require an uppercase Character? y/n");
        if (upperCharReq === "y") {
        }
        else if (upperCharReq === "n"){
        }
        else if (!upperCharReq) {
            return;
        }
        else {
            alert("choose a valid character");
            checkUpperCharReq();
        }
}

function checkNumCharReq() {
    numCharReq = prompt("does your password require an number? y/n");
    if (numCharReq === "y") {
    }
    else if (numCharReq === "n"){
    }
    else if (!numCharReq) {
        return;
    }
    else {
        alert("choose a valid character");
        checkNumCharReq();
    }
}

function checkSpecialCharReq() {
    specialCharReq = prompt("does your password require an special character? y/n");
    if (specialCharReq === "y") {
    }
    else if (specialCharReq === "n"){
    }
    else if (!specialCharReq) {
        return;
    }
    else {
        alert("choose a valid character");
        checkSpecialCharReq();
    }
}

function checkLengthReq() {
    lengthReq = prompt("enter the length of your password");

    if (isNaN(lengthReq)) {
        alert("please enter a number");
        checkLengthReq();
    }
    else if (!lengthReq) {
        return;
    }

    else if (lengthReq > 128) {
        alert("Please keep the password between 8 and 128 characters");
        checkLengthReq();
    }

    else if (lengthReq < 8) {
        alert( "Please keep the password between 8 and 128 characters");
        checkLengthReq();
    }

    passwordArray.length = lengthReq;
}

//this function will create a password with random characters from the allChar array regardless of the requirements
function initialPassword() {

    for(var i = 0; i < lengthReq; i++) {
         var index = Math.floor(Math.random() * allChar.length);
            
         var char = allChar[index];
            
         passwordArray[i] = char;
    }
}

function lowerCharConfirm() {
    if (lowerCharReq === "y") {

        var index = Math.floor(Math.random() * lowerChar.length);

        var char = lowerChar[index];

        lowerCharSpot = Math.floor(Math.random() * passwordArray.length);

        passwordArray[lowerCharSpot] = char;
    }

}

function upperCharConfirm() {
    if (upperCharReq === "y") {

        var index = Math.floor(Math.random() * upperChar.length);

        var char = upperChar[index];

        upperCharSpot = Math.floor(Math.random() * passwordArray.length);
//this block makes sure that a required uppercase cannot overwrite the required lowercase to guarantee that both make it to the final password
        if (upperCharSpot === lowerCharSpot) {
            upperCharConfirm();
        }

        else {
        passwordArray[upperCharSpot] = char;
        }
    }

}

function numCharConfirm() {
    if (numCharReq === "y") {

        var index = Math.floor(Math.random() * numChar.length);

        var char = numChar[index];

        numCharSpot = Math.floor(Math.random() * passwordArray.length);

        if (numCharSpot === lowerCharSpot) {
            numCharConfirm();
        }

        else if (numCharSpot === upperCharSpot) {
            numCharConfirm();
        }

        else {
        passwordArray[numCharSpot] = char;
        }
    }

}

function specialCharConfirm() {
    if (specialCharReq === "y") {

        var index = Math.floor(Math.random() * specialChar.length);

        var char = specialChar[index];

        specialCharSpot = Math.floor(Math.random() * passwordArray.length);

        if (specialCharSpot === lowerCharSpot) {
            specialCharConfirm();
        }

        else if (specialCharSpot === upperCharSpot) {
            specialCharConfirm();
        }

        else if (specialCharSpot === numCharSpot) {
            specialCharConfirm();
        }

        else {
        passwordArray[specialCharSpot] = char;
        }
    }

}




 function generate() {
    checkLowerCharReq();
    checkUpperCharReq();
    checkNumCharReq();
    checkSpecialCharReq();
    checkLengthReq();
    initialPassword();
    lowerCharConfirm();
    upperCharConfirm();
    numCharConfirm();
    specialCharConfirm();
    var passW = document.getElementById("pass")
    var finalPassword = passwordArray.join(",")
    var finalPasswordString = document.createTextNode(finalPassword)
    passW.appendChild(finalPasswordString);
 }

 //var passW = document.getElementById("pass")
   // var code = document.createTextNode("sample text")
    //passW.appendChild(code);
