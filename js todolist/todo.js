let add = document.querySelector("#liveToastBtn");
let task = document.querySelector("#task");
let list = document.querySelector("#list");

// Create New ToDo
add.addEventListener('click', newElement());

function newElement() {
    if (task.value.trim() !== "") {
        let liDOM = document.createElement('li');
        list.appendChild(liDOM);
        liDOM.innerHTML = task.value;
        let spanclose = document.createElement('span');
        let text = document.createTextNode('x');
        spanclose.classList = 'close';
        liDOM.appendChild(spanclose);
        spanclose.appendChild(text);
        task.value = ""
    } else {
        console.log("lütfen bir değer giriniz...")
    }
}

// Remove Li
let closebutton = document.getElementsByClassName('close');

for (let i = 0; i < closebutton.length; i++) {
    closebutton[i].onclick = function () {
        let li = this.parentElement;
        li.style.display = 'none';
    }
}


