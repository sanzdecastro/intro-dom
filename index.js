function change() {
    let title = document.querySelector(".titleClassName");
    
    // let newColor = "green";
    // title.style.color = newColor;
    
    let colors = ["green", "red", "blue", "black"];
    let randomColor = Math.floor(Math.random() * colors.length);

    title.style.color = colors[randomColor];
}
