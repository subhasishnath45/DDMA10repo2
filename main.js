const add = async function(a,b) {
    return a + b;
}

const addArrow = async (a,b) => {
    return a + b;
}

// const sayHello = (name) => {
//     console.log("Hello " + name + '!');
// }
// const sayHello = name => {
//     console.log("Hello " + name + '!');
// }
const sayHello = name => console.log("Hello " + name + '!');


sayHello("Cad");

const footer = document.querySelector('footer');

const arr1 = ["a", "b", "c"];
const arr2 = [];
arr1.map((element, index)=> {
    const elementUppercase = element.toUpperCase();
    arr2.push(elementUppercase);
})
console.log(arr2);

// Object destructuring
function objectdestructure() {
    const studentObj1 = {
        name: 'Cad Centre',
        roll: 1,
        year: 2025,
        };
        
        // using destructure
        const { name: studentName, roll } = studentObj1;
        
        console.log(studentName);
        console.log(roll);

        // Not using destructure
        console.log(studentObj1.name);
        console.log(studentObj1.roll);

}

objectdestructure();

// String interpolation.
// IIFE
(function(){

    const str1 = "Hello";
    const num1 = 3;
    const bool = true;
    // console.log(str1 + num1 + bool);
    console.log(`${str1} World. Number is: ${num1}. Boolean value is: ${bool}.`);
}());
