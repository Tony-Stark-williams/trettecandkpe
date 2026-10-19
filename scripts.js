function clicked(event){
    event.preventDefault();
    const thanks = document.getElementById("thanks");
    thanks.style.opacity = "1";
    thanks.innerHTML = "Thank you for your submission!";
}