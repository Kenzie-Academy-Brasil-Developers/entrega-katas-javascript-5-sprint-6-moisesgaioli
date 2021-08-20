// KATA 1
const reverseString = (string) => {

    return string.toString().split("").reverse().join("");
}

const testeReverseString1 = () => {

    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";

    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testeReverseString1()

const testeReverseString2 = () => {

    let result = reverseString(100011);
    let expected = "110001"
    
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testeReverseString2()









// // KATA 2
const reverseSentence = (sentence) => {
    
    return sentence.split(" ").reverse().join(" ");
}

const testReverseSentence1 = () => {

    let result = reverseSentence("bob likes dogs");
    let expected = "dogs likes bob";
    
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testReverseSentence1();

const testReverseSentence2 = () => {
    
    let result = reverseSentence("Moisés gosta de jogar no computador");
    let expected = "computador no jogar de gosta Moisés"
    
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testReverseSentence2();






// // KATA 3
const minimumValue = (arr) => {
    
    return arr.sort((a, b) => a - b).shift();
}

const testMinimumValue1 = () => {

    let result = minimumValue([15, 30, 12, 1, 99, 0.5, -10]);
    let expected = -10;
    
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMinimumValue1();

const testMinimumValue2 = () => {
    let result = minimumValue([-387, -0.10, -1555, 999, 1010, 200000]);
    let expected = -1555;
    
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMinimumValue2();









// // KATA 4
const maximumValue = (arr) => {
    
    return arr.sort((a, b) => b -a).shift();
}

const testMaximumValue1 = () => {

    let result = maximumValue([10000, 1, 0.5, -100]);
    let expected = 10000;
    
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMaximumValue1();

const testMaximumValue2 = () => {
    
    let result = maximumValue([-3213213, 3123, 3213213213123, 312323]);
    let expected = 3213213213123;
    
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMaximumValue2();










// // KATA 5
const calculateRemainder = (number, divisor) => {
    
    return number % divisor;
}

const testCalculateRemainder1 = () => {

    let result = calculateRemainder(5, 2);
    let expected = 1;
    
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testCalculateRemainder1();

const testCalculateRemainder2 = () => {
    
    let result = calculateRemainder(300, 7);
    let expected = 6;
    
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testCalculateRemainder2();








// KATA 6
// const distinctValues = (arr) => {

//     let ordernar = arr.sort((a,b) => a - b);
//     let result = []

//     for(let i = 0; i < ordernar.length; i++) {
//         if(ordernar[i] !== ordernar[i +1]) {
//             result.push(arr[i])
//         }
//     }

//     return result;
    
// }

// const testDistinctValues1 = () => {

//     let result = distinctValues([1, 3, 5, 3, 7, 3, 1, 1, 5]);
//     let expected = [1, 3, 5, 7];
    
//     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
// }
// testDistinctValues1();

// const testDistinctValues2 = () => {
    
//     let result = distinctValues([10, 7, 5, 22, 7, 3, 100, 1, 5]);
//     let expected = [1, 3, 5, 7, 10, 22, 100];
    
//     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
// }
// testDistinctValues2();






// // KATA 7
// const countValues1 = (arr) => {

//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i];
        
//         if(result[item] === undefined) {
//             result[item] = 1;
//         } else {
//             result[item]++
//         }
//     }

//     return result.toString();

// }

// const testCountValues1 = () => {

//     let result = countValues1([1, 3, 5, 3, 7, 3, 1, 1, 5]);
//     let expected = "1(3), 3(3), 5(2), 7(1)";
    
//     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
// }
// testCountValues1();

// const testCountValues2 = () => {
    
//     let result = countValues1();
//     let expected = 
    
//     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
// }
// testCountValues2();








// // KATA 8
// const evaluateExpression = (str, obj) => {

//     let valor = Object.values(obj)

//     console.log(str[1])

//     console.log(valor)
// }
// evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14})

// const testEvaluateExpression1 = () => {

//     let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
//     let expected = -3;
    
//     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
// }
// testEvaluateExpression1();

// const testEvaluateExpression2 = () => {
    
//     let result = evaluateExpression("a + b + c", {a: 10, b: 10, c: 10});
//     let expected = 30;
    
//     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
// }
// testEvaluateExpression2();






