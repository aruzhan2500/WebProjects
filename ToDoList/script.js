function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell = row.insertCell(0);
    cell.style.height = "30pt";
    addItem(cell);
}
function addItem(cell){
    var ul = cell;
    var next_task = document.getElementById("next_task");
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.style.verticalAlign = "middle";
    checkbox.style.marginLeft = "15pt";
    checkbox.id = "id";
    var label = document.createElement('label');
    label.htmlFor = "id";
    label.marginLeft = "30pt";
    if (next_task.value != ''){
        label.appendChild(document.createTextNode(next_task.value));
        ul.appendChild(checkbox);
        ul.appendChild(label);

        var btn = document.createElement('button');
        btn.setAttribute("class", "fa fa-trash");
        btn.style.height = "20pt";
        btn.style.width = "20pt";
        btn.style.float = "right";
        btn.style.padding = "0"
        ul.appendChild(btn);
    }
    document.getElementById("next_task").value = '';

    btn.onclick = function(){
        ul.removeChild(label);
        ul.removeChild(checkbox);
        ul.removeChild(btn);
        ul.parentNode.removeChild(ul);
    }

    checkbox.onclick = function(){
        if (checkbox.checked == true){
            label.style.textDecoration = "line-through";
        } else {
            label.style.textDecoration = "none";
        }
    }
}
