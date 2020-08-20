// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name

var car ={
    name: 'tesla',
    weels: 4,
}
console.log(car);
//-----------------------------------------------
car.name = 'Mercedes';
console.log(car);
//-----------------------------------------------
delete car.name;
console.log(car);


//Ex2--------------------------------------------------------------------------------------------------------------
// Creati un obiect cu 4 proprietati
// Stocati "key"-urile intr-o variabila noua
// intr-o alta variabila vreau sa am toate key-urile cu litere mari
// Stocati valorile intr-o variabila noua
// intr-o alta variabila vreau sa am toate valorile cu litere mici
// vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"

var song = {
    title :'hit me up',
    artist: '2pac',
    year : 1995,
    label : 'death row',
}
//-------------------------------------------------------
var myKeys = Object.keys(song);
console.log(myKeys);
//--------------------------------------------------------
var myBigKeys = Object.keys(song).join().toUpperCase();
//transforma intai in string apoi face uppercase
//sau
var myBigKeys = myKeys.join().toUpperCase();
//----------------------------------------------------------

var myValues = Object.values(song);
console.log(myValues);
//---------------------------------------------------------
var myLowerValues  = myValues.join().toLowerCase();
console.log(myLowerValues);
//---------------------------------------------------------
var fraza = 'piesa ' + song.title + ' este interpretata de ' + song.artist + ' si a fost lansata in anul '+ song.year + ' produsa de '+ song.label + '.';
console.log(fraza);


//Ex3----------------------------------------------------------------------------------------------------------------
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.

var animal = {
    name:'rez',
    age:6,
    describePet: function () {
    console.log('El este '+ animal.name+ ' si are '+ animal.age + ' ani.')
 }
}
animal.describePet();
//-----------------------------------------------------------------------------------------------------------------
//Ex4 
// Creati un obiect cu cateva proprietati
// "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
// Pe obiectul nou adaugam 2 noi proprietati
// Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
var myHouse = { 
    rooms: 3,
    zone: "Bucium",
    animals: 1
  }
var myYard = {
    sqm: 500,
    garage: 'yes',
    trees: 10
}
//-------------------------------------------------
var myYardCopy = Object.assign({}, myYard );
console.log(myYardCopy);

myYardCopy.shape = 'square';
myYardCopy.equipment = "barbeque";
console.log(myYardCopy);

//------------------------------------------------- 
var mergeHouseYard = Object.assign(myHouse, myYardCopy);
console.log(mergeHouseYard);


  // Ex5-------------------------------------------------------------------------------------------------------------------- 
  // Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
  // Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
  // transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"
  
  var myBook = {
      bookInfo : {
          publishedYear: 2019,
          author: 'John Doe'
      }
  };

  //--------------------------------------------------
  var bookInfoKeys =  Object.keys(myBook.bookInfo);
  console.log(bookInfoKeys);

  //----------------------------------------------------
var stringBookInfoKeys = bookInfoKeys[0] + ' si ' + bookInfoKeys[1] + ' apartin obiectului ' + Object.keys(myBook);
console.log(stringBookInfoKeys);

  
  //Ex6-------------------------------------------------------------------------------------------------------------------
  // Avem obiectul : 
  myObject = {
  name: "John",
  surname: "Applegate",
  }
  //Adaugati o metoda care sa sorteze cele 2 valori ale numelui.
  var valuesmyObject = Object.values(myObject);
  valuesmyObject.sort(); 

  console.log(valuesmyObject);


  //Ex7 ---------------------------------------------------------------------------------------------------------------
  //Faceti o functie constructor
  // Cu functia constructor creati 3 obiecte cu valori diferite
  // Pentru toate valorile din acele obiecte transformatile in litere mari.

  function allBooks (author, yearPublished, bookTitle) {
    this.author = author;
    this.yearPublished = yearPublished;
    this.bookTitle= bookTitle;
}
//---------------------------------------------------------------
var book1 = new allBooks ('Author 1', 2019, 'First book title');
console.log(book1);

var book2 = new allBooks ('Author 2', 2020, 'Second book title');
console.log(book2);

var book3 = new allBooks ('Author 3', 2015, 'Third book title');
console.log(book2);

//-----------------------------------------------------------------

var book1Values = Object.values(book1).join(' ').toUpperCase();
console.log(book1Values);
var book2Values = Object.values(book2).join(' ').toUpperCase();
console.log(book2Values);
var book3Values = Object.values(book3).join(' ').toUpperCase();
console.log(book3Values);


