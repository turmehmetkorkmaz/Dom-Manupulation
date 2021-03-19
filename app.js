


// const element = document.querySelector("#clear-todos")


// Element ozellikleri

// console.log(element.id);

// console.log(element.className);
// console.log(element.classList[0]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

// Style ve elent ozlliklerini degilstirme

// element.className = "btn btn-primary"
// element.style.color = "#000";
// element.style.marginLeft = "50px"
// element.href = "https://www.googl.com.tr";
// // element.target = "_blank"

// element.textContent = "Silin";
// element.innerHTML = "<span style = 'color:yellow'>Silin</span"
// console.log(element);


// const elements = document.querySelectorAll(".list-group-item")
// elements.forEach(function(el){
//     el.style.color = "red";
//     el.style.background = "#eee"
// })


// console.log(elements);

// 2. veya 4. elementi secmek 

// let element2 = document.querySelector ("li:nth-child(3)")
// element2 = document.querySelectorAll ("li:nth-child(odd)")
// console.log(element2);

// let value;

// const todoList = document.querySelector(".list-group")
// const todo = document.querySelector(".list-group-item:nth-child(2)");
// value = todoList

// console.log(value);


// Dinamik Element Olusturma
//yeni element olusturma
//<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>        

// const newLink = document.createElement("a");
// const cardbody = document.getElementsByClassName("card-body")[1]
// newLink.id = "clear-todos"
// newLink.className = "btn btn-danger"
// newLink.href = "https://www.google.com.tr"
// newLink.target = "_blank";
 
// newLink.appendChild(document.createTextNode("Farkli sayfaya git"));
// cardbody.appendChild(newLink);

// console.log(newLink);


//Elementleri Degistirme

//<h5 class="card-title" id = "tasks-title">Todolar</h5>                    


// const cardbody = document.querySelectorAll(".card-body")[1];

// const newElement = document.createElement("h3");
// newElement.className = "card-title";
// newElement.id = "tasks-title";
// newElement.textContent = "Yeni Todolar"

// const oldElement = document.querySelector("#tasks-title");
// cardbody.replaceChild(newElement, oldElement);

// console.log(newElement);


//dinamik olarak element ekleme ve cikarma
ca
