function createDiv() {
    let element = document.createElement("div");
    element.innerHTML = document.getElementById("newItem").value;
    element.style.color = "Black";
    element.className = "merger";
    let container = document.getElementById('target');
    container.appendChild(element);
}

function remove() {
    var mergerItems = document.getElementsByClassName("merger");
    var length = mergerItems.length;
    if (length > 0) {
        var middleItem = Math.floor(length / 2);
        mergerItems[middleItem].remove();
    }
}

function addFront() {
    let newElement = document.createElement("div");
    newElement.innerHTML = document.getElementById("newItem").value;
    newElement.style.color = "black";
    newElement.className = "merger";
    let container = document.getElementById('target');
    container.insertBefore(newElement, container.firstChild);
}