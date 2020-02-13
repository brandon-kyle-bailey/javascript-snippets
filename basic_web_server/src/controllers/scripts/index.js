

let button = document.getElementsByClassName("click-me")[0];


let handleButtonPress = function() {

    let homepage_h1 = document.getElementsByClassName("home-page")[0];
    current_color = homepage_h1.style.color;
    homepage_h1.style.color = current_color === "red" ? "blue" : "red";



}

button.addEventListener("click", handleButtonPress);
