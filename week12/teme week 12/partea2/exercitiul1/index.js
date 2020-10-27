//1. Creati o clasa Person care sa aiba firstName si lastName in constructor
//2.aduagati o metoda displayPersonName care sa returneze numele complet
//3. creati o persoana cu noua clasa unde dati un nume si-un prenume si apelati metoda respectiva

class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    displayPersonName() {
        console.log(`${this.firstname} ${this.lastname}`);
    }
}

const person1 = new Person("John", "Doe");
person1.displayPersonName();