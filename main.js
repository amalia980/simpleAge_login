const inputfield = document.getElementById("age");
const clickbutton = document.getElementById("button");

function whenClicked() {
    const userAge = parseInt(inputfield.value);

    if (userAge > 18) {
        alert("Come on in, we were expecting you :)");
    }else {
        alert("You are a minor! sorry come back later ;)");
    }
} 

clickbutton.addEventListener("click", whenClicked);