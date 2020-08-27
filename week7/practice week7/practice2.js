/* param1:nr
param 2:nr
param 3 : S(scadere), P(adunare), I(inmultire),D(impartire)
functia intoarce rezultatul 


functie care calculeaza suma a doua numere
functie care calculeaza scaderea a doua numere
*/
var operatiiScadere = ['s', scadere, 'ss'];
var operatiiAdunare = ['s', scadere, 'ss'];
var operatiiInmultire = ['s', scadere, 'ss'];
var operatiiImpartire = ['s', scadere, 'ss'];

function calculator (number1, number2, mathOperation){
var result;
var unifyMathOperation =detectMAthOperation(mathOperation);
if (typeof unifyMathOperation === 'function'){
result = unifyMathOperation(number1, number2);
} else{
return 'Operatia nu este declarata';
}

}
function detectMAthOperation (mathOperation){
    if (operatiiAdunare.includes(mathOperation)){
        return sum;
    }else if  (operatiiScadere.includes(mathOperation)){
          return scadere;  
    }else if (operatiiInmultire.includes(mathOperation)){
            return inmultire;
    } else if (operatiiImpartire.includes(mathOperation)){
            return impartire;
    }else 
        console.log('functia nu este definita');
    return null;
}

function sum(number1, number2){
    return number2+number1;
}
function scadere(number1, number2){
    return number1-number2;
}
function inmultire(number1, number2){
    return number1*number2;
}
function impartire(number1, number2){
    return number1/number2;
}

console.log(calculator(4,2, 'scadere'));
// console.log(calculator(4,2, 'S')); //2
// console.log(calculator(4,2, 'P')); //6
// console.log(calculator(4,2, 'I')); //8
// console.log(calculator(4,2, 'D')); //2
// console.log(calculator(4,2, 'H'));

// console.log(sum(4,4));

