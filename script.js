/*

5 Add a CSS stylesheet that styles all of your pages.

6 Create an HTML page with a form that asks the user to input the value of a sphere's radius.
Write Javascript that gives them back the volume of the sphere.
(There are many different ways to execute this.
You can give the user information back in another input box on the page, as an alert, or any other way you can think of.
You can look up how to use the Javascript Math object to simplify your calculations.)

*/

let q1Element = document.getElementById("textArea");
let passBox = document.getElementById("passBox").value;
let loginStatus = document.getElementById("loginStatus");
function buttonOne(){
    q1Element.innerHTML = "I'm right"
    
}

function buttonTwo(){
    q1Element.innerHTML = "No, I'm right!"
}

function dontHover(){
    alert("Hey, I told you not to hover over me!")
}

function checkPassword(){

    if(document.getElementById("passBox").value == ""){
        alert("No password!");
    }else{
        document.getElementById("passBox").value === "12345678"? loginStatus.innerHTML = "Verified!":alert("Incorrect password.");
    }
}


function calcSphere(){
    let boxVal = document.getElementById("sphereInputBox").value;

    let sphVolume = ((4/3)*(3.14159)*((boxVal)*(boxVal)*(boxVal)))
    console.log(sphVolume)
    document.getElementById("sphereResult").innerHTML = sphVolume;
}