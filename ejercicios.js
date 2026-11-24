
console.log("Hola, grupo");
console.log(25);
console.log("Mi edad es: ", 25);

const numero = 8;
console.log(`El numero guardado es ${numero}`);

console.log(10 % 3);
console.log(10 % 2);
console.log(7 % 2);
console.log(15 % 5);
console.log(17 % 5);

const n = 14;
console.log(n % 2 === 0 && n % 7 === 0);
console.log(9 % 2 === 0 || 9 % 3 === 0);
console.log(5 == "5", 5 === "5");

const edad = 16;

if (edad >= 18){
    console.log("Puede votar");
}else{
    console.log("Todavia no puedes votar");
}

const calificacion = 7.5;

if(calificacion>=9){
    console.log("Exelente");
}else if(calificacion>=7){
    console.log("Aprobado");
}else{
    console.log("Reprobado");
}

for(let i=1; i<=12; i++){
    if(i % 4 === 0){
        console.log("PUM");
    }else{
        console.log(i);
    }
}
//Ejercicio 1
for(let i=1;i<=100; i++){
    if(i % 2 ===0){
        console.log(i)
    }
}
//Elercicio 2
const numero = 16;
if (numero % 2 === 0){
    console.log("El número es par")
}else{
    console.log("El número es impar")
}
//Ejercicio 3
for(let i=1;i<=100; i++){
    if(i % 3 ===0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if(i % 3 ===0){
        console.log("Fizz");
    }else if(i % 5 ===0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}