let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.getElementsByTagName("ul")[0]; // Select the first element with the name "ul"

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item); // Corrected method name to appendChild

    input.value = "";

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("Delete")
    item.append(delBtn)

    let doneBtn = document.createElement("button");
    doneBtn.innerText = "Done"
    doneBtn.classList.add("Done")
    item.append(doneBtn)
});


ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let par = event.target.parentElement;
        if (event.target.classList.contains("Delete")) {
            par.remove();
        } else if (event.target.classList.contains("Done")) {
            par.style.textDecoration = "line-through";
        }
    }
});