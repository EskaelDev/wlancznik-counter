function btnclick() {

    console.log("test");
    let text = document.getElementById("count");
    let count = +text.textContent;
    count += 1;
    text.textContent = count;
}
