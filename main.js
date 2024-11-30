// Variables

// let MyName;

// MyName = "jose fino";

// let MyAge = 15;

// alert(MyName);
// alert(MyAge);

MyName = "jose fino 2",
  MyAge = 15,
  MyMessage = "Hello :)";


// alert(MyName);
// alert(MyAge);
// alert(MyMessage);

// constantes

const MyBirthDay = "Apr-21-2014";

// alert(MyBirthDay);



// tipos de datos


let MyAge2 = 33;


let IsActive = true;

let IsBlue = false;

let MyHeight = null;

let MyHeight2 = undefined;

// ingreso de argumentos

// let Year = prompt('anio atual: ');
// alert(Year);


// let isBoss = confirm('eres el jefe? ');

// alert(isBoss);

// operadores matematicos

let Num1 = 10;
let Num2 = 20;

// suma

// alert('suma: '+ (Num1+Num2));

// //resta
// alert('resta: '+(Num1-Num2));

// //multiplicacion
// alert('multiplicacion: '+(Num1*Num2));

// // division

// alert('division: '+(Num1/Num2));

// // modulo

// alert('modulo: '+(Num1%Num2));

//incremento

let Num3 = 3;

Num3 ++;

// alert(Num3);

// operadores de comparacion

// alert (2>1);
// alert (2<1);
// alert (2==1);
// alert (2!=1);


//condicionales
// let year = prompt("Inrese el anio actual: ");

// if(year == 2024){
//     alert("Muy Bien");
//     alert("Eres Genial");
    
// }



//else

// let year = prompt("Inrese el anio actual: ");

// if(year == 2024){
//     alert("Muy Bien");
//     alert("Eres Genial");
    
// }else{
//     alert("No es correcto");
// }



// // condicionales encadenados

// let year = prompt("Inrese el anio actual: ");

// if(year == 2024){
//     alert("Muy Bien");
//     alert("Eres Genial");    
// }else if(year > 2024){
//     alert("Muy Alto");
// }else if(year < 2024){
//     alert("Muy Bajo");
// }else{
//     alert("No es correcto");
// }


// operadores logicos

// or ||

// alert(true || true); // salida true
// alert(true || false); // salida true
// alert(false || true); // salida true
// alert(false || false); // salida false

// let hour = 12;
// let isWeekend = false;

// if(hour < 9 || hour > 18 || isWeekend){
//     alert("La oficina esta cerrada");
// }else{
//     alert("Open!");
// }

// and &&

//  alert(true && true); // salida true
//  alert(true && false); // salida false
//  alert(false && true); // salida false
// alert(false && false); // salida false




let user1 ="Admin";

let user2 = prompt("Who's there?");

let user = "jesus";
let pass = 12345;


if(user2 == user1){
    let user3 = prompt("Ingrese usurio: ");
    let password = prompt("Ingrese Password: ");
    if(user3 == user && password == pass)
        alert("Bienvenido");
    else
        alert("Datos Incorrectos"); 

}else if(user2 != user1)
    alert("I don't know you");
else if(user2 =="")
    alert("No es usuario");
