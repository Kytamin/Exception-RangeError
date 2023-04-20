function calculator(number1:number, number2:number, operator:string) {
    let result;
    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2;
    } else if (operator == '*') {
        result = number1 * number2;
    } else if (operator == '/') {
        result = number1 / number2;
    }else {
        throw new Error("Input is not exist")
    }
    return result;
}

try{
    console.log(calculator(1,2,'%'))
} catch(e) {
    console.log(e)
}
