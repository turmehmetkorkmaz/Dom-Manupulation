// const merhaba = function (){
//     console.log("Merhaba");
// }
// merhaba ()

//Arrow Function

// const merhaba = () => {

//     console.log("merhaba");
// }
// merhaba ()

// const merhaba = (buraya parametreleri yaziyoruz)
 
// const merhaba = (firstName,lastName) => {
// console.log("merhaba",firstName, lastName);

// }
// merhaba("Mehmet","korkmaz");


// DESTRUCTING

//bununla Arraylardan veya objelerden deger alabiliriz

//SPREAD OPERATOR

// const addNumbers = (a,b,c) => console.log(a+b+c);

// const numbers = [100, 200, 300];

// addNumbers(...numbers);

// For In ve For Of Donguleri

//ES6 Maps

// let myMap = new Map();
// // console.log(myMap);

// const key1 = "Mustafa"
// const key2 = {a:10,b:20};
// const key3 = () => 2;
// /* yukarida goruldugu uzere ben fonksiyonu objemi ya da string bir 
// degeri key olarak atayabilirim */

// myMap.set(key1, "String Deger");
// myMap.set(key2, "Object Literal Deger")
// myMap.set(key3, "Function Deger");

// //Get 

// // console.log(myMap.get(key1));
// // console.log(myMap.get(key2));
// // console.log(myMap.get(key3));

// console.log(myMap.size);

// const cities = new Map ();
// cities.set("Ankara",5);
// cities.set("izmir",4);
// cities.set("istanbul",15);

// //For Each
// cities.forEach(function(value,key){
//     console.log(key,value);
// })

//For of

//Map Keys
// for(let key of cities.keys()){
//     console.log(key);
// }

//Map value
// for(let value of cities.values()){
//     console.log(value);
// }

//Arraydan Map olusturma
// const array = [["key1","value1"],["key2","value2"]];
// const lastMap = new Map(array);
// console.log(lastMap);

//Maptan array olusturma

// const cities = new Map ();

// cities.set("Ankara",5);
// cities.set("izmir",4);
// cities.set("istanbul",15);

// const array = Array.from(cities);
// console.log(array);


//Referans Tipler ve primitive tipler

//primitive veri tiplerinden 2 tane string olusturalim
// let a = "mustafa"
// let b = "mustafa"

// if (a===b){

//     console.log("esit");

  
// }

// Referans tip boyutu
//map uzerinden bir degerlendirme yapalim

// const cities = new Map();
// const key = [1,2,3];
// cities.set("Ankara",5);
// cities.set("Istanbul",5);
// cities.set(key,"Array");

// console.log(cities.get(key));


// const cities = new Map();

// cities.set("Ankara",5);
// cities.set("Istanbul",5);
// cities.set(key,[1,2,3]);

// console.log(cities.get(key));

//yukarida ki iki ornekte goruldugu gibi, yukaridaki primite tip
// asagidaki referans tip veri oldugu icin 
// yazdirmadi ama yuikaridaki yazdirdi


//ES6 SETS-kUMELER

const myset = new Set();
myset.add(100);
myset.add(100);
myset.add(true)
myset.add("Mustafa");
myset.add([1,2,3]);
myset.add(3.14);
myset.add({a:1,b:2});
//Bu sekilde bir set olusturabilirim, ayni zamanda asagidaki gibi de
// bir set olusturabliirim 

// const myset2 = new Set([100,3.14,"Mustafa"], )
// console.log(myset);
// console.log(myset2);

//size
// console.log(myset.size)

//delete metodu
// myset.delete("Mustafa")
// console.log(myset);

//Has metodu => burada cikan sonuc varsa true yoksa false verir

// console.log(myset.has("Mustafa"));



//For Each kullanalim

// myset.forEach(function(value){
//     console.log(value);
// })

//for of
// for (let value of myset){
//     console.log(value);
// }


//Setlerden array olustma

const array = Array.from(myset);
console.log(array);

















