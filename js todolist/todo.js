let add = document.querySelector("#liveToastBtn");
let task = document.querySelector("#task");
let list = document.querySelector("#list");
let closebutton = document.getElementsByClassName('close');


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
        spanclose.appendChild(text); a
        task.value = ""
        // Remove Li
        for (let i = 0; i < closebutton.length; i++) {
            closebutton[i].onclick = function () {
                let li = this.parentElement;
                li.style.display = 'none';
                li.classList.remove('checked');
            }
        }
    } else {
        console.log("lütfen bir değer giriniz...")
    }
}

list.addEventListener('click', function (item) {
    if (item.target.tagName = 'li') {
        item.target.classList.toggle('checked')
    }
})

