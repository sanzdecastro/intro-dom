function change() {
    // add red squares to the HTML when the button is clicked
    let squareContainer = document.querySelector(".squaresContainer");
    // let newSquare = document.createElement("div");
    let squareHTML = "<div class='redSquare'></div>";
    //squareContainer.appendChild(newSquare).classList.add("redSquare");
    squareContainer.innerHTML += squareHTML;
}