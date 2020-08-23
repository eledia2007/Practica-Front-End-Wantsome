 /*1. Scrieti o functie sub forma named function care accepta ca argument un CNP si
        verifica sexul unei persoane.In urma apelului acestei functii, se va returna un text
        de forma "Persoana verificata este de sexul M/F".*/
        function genderType (cnp) {
            var firstDigit = cnp.toString().charAt(0);
            if (firstDigit ==='1') {
                    return "Persoana verificata este de sexul M.";
            } else if 
                (firstDigit === '2') {
                    return "Persoana verificata este de sexul F."
            } else 
                    return "CNP-ul nu este corect.";    
       }
       console.log(genderType(35456465464565));
   
       //---------------------------------------------------------------------------------
       //2. Scrieti o functie sub forma function expression care accepta ca argument o valoare numerica cuprinsa intre 1 si 10 si decide calificativul punctajului. Criteriile sunt urmatoarele:
//- 1-3 = E
//- 3-6 = D
//- 7-8 = B
//- 9 = A
//- 10 = A+
//Functia va returna un text de forma "Calificatul corespunzator punctajului [punctaj] este [calificativ]".

var calification =function (pointsNr){
    
if (1<=pointsNr && pointsNr<3) {
    return 'Calificatul corespunzator punctajului '+ pointsNr + ' este E.';
} else if (3<=pointsNr && pointsNr<=6){
    return 'Calificatul corespunzator punctajului '+ pointsNr + ' este D.';
} else if (7<=pointsNr && pointsNr<=8) {
    return 'Calificatul corespunzator punctajului '+ pointsNr + ' este B.';
} else if (pointsNr = 10){
    return 'Calificatul corespunzator punctajului '+ pointsNr + ' este A.';
} else if (pointsNr = 10) {
    return 'Calificatul corespunzator punctajului '+ pointsNr + ' este A+.'
} else 
    return 'Failed';
}
console.log(calification(2));

//-----------------------------------------------------------------------------------------
//3. Scrieti o functie care accepta ca argument numele marcii unei masini si returneaza un text de forma: "Marca [marca] se produce in [tara]". 
//Trebuie sa aveti macar 6 cazuri. In cazul in care functia nu recunoaste marca, va returna "Marca este necunoscuta. " 
//Scrieti codul in 3 variante diferite. In declararea functiei trebuie sa se regaseasca o functie anonima. 
//Una dintre implementari trebuie sa fie bazata pe Object Literals 
//( read:  https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals )
///??
var tara;
var cars = function (marca) {
    switch (marca){
        case 'Fiat': {
            tara = 'Italia';
            console.log('Masina '+ marca + ' este din ' + tara);}
        break;   
        case 'Dacia': {
            tara = 'Romania';
            console.log('Masina '+ marca + ' este din ' + tara);}
        break;  
        case 'Renault': {
            tara = 'Franta';
            console.log('Masina '+ marca + ' este din ')+ tara;}
        break; 
        case 'Hyundai': {
            tara = 'Coreea de Sud';
            console.log('Masina '+ marca + ' este din '+ tara);}
        break; 
        case 'Skoda': {
            tara = 'Cehia';
            console.log('Masina '+ marca + ' este din ' + tara);}
        break; 
        case 'Toyota': {
            tara = 'Japonia';
            console.log('Masina '+ marca + ' este din '+ tara);}
        break; 
        default: console.log('Marca nu este cunoscuta.');

    }
}
cars('Toyota');

//----------------------------------------------------------

function getCars (marca) {
    var cars = {
      'Fiat': 'Italia',
      'Dacia': 'Romania',
      'Ford': 'SUA',
    };
    if (getCars = cars[marca]) {
    return 'Masina '+ marca + ' se produce in ' + (cars[marca]);}
    else  return 'Marca nu este inregistrata.'
  }
  
  var cars = getCars('F767657');
  console.log(cars);


//4. Scrieti o functie de tip IIFE care:
//- sorteaza urmatorul array in functie de proprietatea "salary" a fiecarui obiect continut:
//var cars = [
 // {name: "John",  salary: 20000 },
 // { name: "Danny", salary: 30500 },
 // { name: "Bekker", salary: 15000 }
//];
//- afiseaza in consola array-ul 

var salaries = [
    {name: "John",  salary: 20000 },
    { name: "Danny", salary: 30500 },
    { name: "Bekker", salary: 15000 }
  ];
  salaries.sort(function(a,b) { 
      return a.salary - b.salary
    });

console.log(salaries);

