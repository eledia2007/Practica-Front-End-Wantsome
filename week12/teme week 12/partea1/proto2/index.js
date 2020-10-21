var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

//Creati un obiect numit Trainer care sa fie derivat din obiectul Person si implementati 
//o metoda teach() ce primeste un string numit subject si printeaza
// [nume trainer] is now teaching [subject]

var Trainer = function() {};
Trainer.prototype = new Person();

Trainer.prototype.teach = function(subject)
{
    console.log(this.name + " is now teaching " + subject);
}

var trainer1 = new Trainer();

trainer1.initialize("John", 25);
trainer1.teach("history");
