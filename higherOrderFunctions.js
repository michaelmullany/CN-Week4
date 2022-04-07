// HOF: Activity 1
const sayHello = () => {
    console.log("Hello Code Nation");
}

const repeatPhrase = (phrase, numberOfTimes) => {
    for (let i = 0; i < numberOfTimes; i++)
    {
        phrase();
    }
}

repeatPhrase(sayHello, 5);

// HOF: Activity 2
const multiplyByThree = num => {
     return num * 3;
}

const originalArray = [1,2,3,4,5];
const transformedArray = originalArray.map(multiplyByThree);

console.log(originalArray);
console.log(transformedArray);


// HOF: Activity 3

const add = (a, b) => {
    return a+b;
}
const subtract = (a,b) => {
    return a-b;
}
const multiply = (a,b) => {
    return a*b;
}
const divide = (a,b) => {
    return a/b;
}

const doMaths = num1 => {
    return (num2, fn) => {
        return fn(num1, num2);
    }
}

console.log(doMaths(7)(5,add));
console.log(doMaths(9)(3,subtract));
console.log(doMaths(3)(6,multiply));
console.log(doMaths(8)(4,divide));
