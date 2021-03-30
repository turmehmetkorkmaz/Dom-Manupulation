//tum elementleri secme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0]
const secondCardBody = document.querySelectorAll(".card-body")[1]
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventlisteners ();


function eventlisteners (){ //Tum Eventlistenerlari bu fonksiyon ile atayacagiz
    form.addEventListener("submit", addTodo);


}

function addTodo(e){
const newTodo = todoInput.value.trim();

if (newTodo = "") {
    showAlert();
} 
else {
    addTodoToUI (newTodo )
}
addTodoToUI(newTodo)
    
    // e.preventDefault();

}
function addTodoToUI(newTodo){ // burada arayuze eklemek istedigimiz degerleri list olrak UI'a ekleyecegiz
//list itme olusturma
const listItem = document.createElement("li");

//link olusturma
const link = document.createElement("a");
link.href = "#";
link.className = "delete-item"
link.innerHTML = "<i class = 'fa fa-remove'></i>";

listItem.className = "list-group-item d-flex justify-content-between"

//Text node ekleme
listItem.appendChild(document.createTextNode(newTodo));
listItem.appendChild(link);
// Todo List'e lit Item'i ekleme
todoList.appendChild(listItem);
todoInput.value = ""




}


