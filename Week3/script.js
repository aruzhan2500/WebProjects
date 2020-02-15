let title = document.getElementById('title');
title.innerHTML='ToDo List';


let box = document.querySelector('.box');
let todo_input = document.querySelector('.todo_input');

let i = 0;

function addItem() {
    let item = document.createElement('li');
    if (todo_input.value != ''){
        item.innerHTML = todo_input.value;
        box.appendChild(item);
    } else {
        alert('error');
    }
    todo_input.value = "";
}