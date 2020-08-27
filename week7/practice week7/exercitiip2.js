function computerSumOffArray (arr){
    var sum = 0;
    var i=0;

    while (i<arr.length){
        sum = sum +arr[i];
        i++;
    }
    console.log(sum);
}

//---------------------------------------
//exercitiul 6

var myInputArray = [[1,2 ,3], [8,9,5], [52,42,21-7];
//[3, 9, 52]
//declarama finalArray
//parcurgem myInputArray
// declaram varibila x care contine array-urile din array --- myInputArray[i]
//declarama variabila max undefined
//pargurgem array x pt a vedea maximul
//daca max < x[i] atunci max =x[i]
//punem max in final Array//search google:new element into am array (push)
//console log final Array



//exercitiul 8--------------------------
//factorialul unui numar

factorial(3)// 6 (1*2*3)
//n! = 1 * 2 *3*4.....* n-1 * n

/*

declaram o variabila nr 
cream o functie factorial 
declaram o variabila result
facem un for i=n , i>=1, i--
result = result*i
returnam result
apelam functia cu variabila nr
*/

//hint alta varianta: js recursiv function

//--------------------------------------------
///Exercitiul 11
//Varianta1
/*declarama o functie care primeste argumente str1 si str2
declaram variabila str1toArray care va fi un array cu toate caracterele din str2
//str1 = "gartpoc"
//str2toArray = ['a',' b', 'c']
parcurgem str2toArray 
daca str2toArray[i] nu se afla in str1 return false
return true

*/
//VArianta 2
/*declarama o functie care primeste argumente str1 si str2
declaram variabila str1toArray care va fi un array cu toate caracterele din str2
//str1 = "gartpoc"
//str2toArray = ['a',' b', 'c']
parcurgem str2toArray 
    daca str2toArray[i] se afla in str1 
    continue;
    return false;

*/
testEX11("gartpoc","abc" )//true
testEX11("gartpoc","5t4" )//false

//Exercitiul 2
/*
declarama o functie care accepta un string ca si parametru
impartim string in array (strTo Array (split)
//
declaram  o variabila result ca string gol
parcurgem strToArray
//strtoArray[i] o sa fie pe rand:'i' , apoi "am", apoi "superman"

result = result.concat(strtoArray[i].slice(0,1).toUpperCase().concat(strtoArray[i].slice(1)))
result = result.concat('');

*/


myFuntion('i am superman')// "I Am Superman"

///exercitiul 10
function myFunction(arr, testFunction){
    for (var i=0; i<arrayarr.length; i++)
    if (testFunction(arr[i])){
        return arr[i];
    }
}


myFunction([1,2,3,4],testFunction)//output: 2

function testFunction(nr){
    return nr%2 === 0;
}

///exercitiul 12-------------------------------

myFunction([1,2,3,4],3)//output: 1
                        //output 2


