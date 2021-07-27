let add = document.querySelector("#liveToastBtn");
let task = document.querySelector("#task");
let list = document.querySelector("#list");

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



