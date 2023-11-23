const inputBox = document.getElementById("input-box");
const ListItem = document.getElementById("list");
const dark_icon = document.getElementById("dark-icon");


function addItem() {
    if (inputBox.value === '') {
        alert("Please add some text");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ListItem.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveDate();

}

ListItem.addEventListener("click",function (e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("check");
    saveDate();

    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveDate();
        
    }
},false);

function saveDate() {
    localStorage.setItem("data",ListItem.innerHTML);
    // localStorage.setItem("data",dark_icon.innerHTML);

    
}


function showData() {
    ListItem.innerHTML = localStorage.getItem("data");
    // dark_icon.innerHTML = localStorage.getItem("data");

    
}

showData();


dark_icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        dark_icon.src = "images/sun.png";
    }
    else{
        dark_icon.src = "images/moon.png"
    }
}
    
