console.log('working');


// Exercitiul 1

var car ={
    name: 'tesla',
    weels: 4,
}
console.log(car);

car.name = 'Opel';
console.log(car);

delete car.name;
console.log(car);

//Exerctiul 2

var song = {
    title ='hit em up',
    artist = '2pac',
    year = 1995,
    label = 'death row',
}

var mykeys = Object.keys(song);
close.log(myKeys);

var myBigKeys = Object.keys(song).join().toUpperCase();
//transforma intai in string apoi face uppercase
//sau
var myBigKeys = myKeys.join().toUpperCase();


var myValues = Object.values(song);
console.log(myValues);

var myLowerValues  = myValues.join().toLowerCAse();
console.log(myLowerValues);

var fraza = 'piesa' + song.title + ' este interpretata de ' + song.artist + ' si a fost lansata in anul '+ song.year + ' produsa de '+ song.label + '.';
console.log(fraza);


//Exercitiul 3

var animal = {
    name:'rez',
    age:6,
    describePet: function () {
        console.log('El este '+ animal.name+ ' si are '+ animal.age + ' ani.')
    }
}
animal.describePet();

