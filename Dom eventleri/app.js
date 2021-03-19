const filterInput = document.getElementById("filter");
// console.log(filterInput);

// bir toto arayin bolumune tikladigim zaman focuslanmasin
// bunun iki yontemi var 
// 1. yontem (Focus eventi ornek olarak alinip 2 yontem aciklanacaktir)
//FOCUS

// filterInput.onfocus = function(){
//     console.log("Naber");


//2. yontem
// filterInput.addEventListener("focus",function(e){
//     // console.log("naber");
// console.log(e);
// console.log(e.type);
// console.log(e.target.placeholder);
// console.log(e.target.className);


// });


//SUBMIT
const todoForm = document.getElementById("todo-form");
todoForm.addEventListener("submit", function(e){

    console.log("naber");
    // e.preventDefault();
})


//KLAVYE EVENTLERI

document.addEventListener("keypress", run);
function run (e){
    console.log("naber");
    console.log(e.which);  //ascii tablodaki degerini gosterir
    console.log(e.key);  //burada harf ve sayilari da gosterir


}  


//MOUSE EVENTLERI
//iNPUT EVENTLERI
//focus eventi, bir yere odaklandigim zaman olusur
//blur eventi, bir yerden ciktigim zaman olusur
//paste eventi
//Event Capturing ve Event Bubbling Olaylari

//Event Capturing 
const card