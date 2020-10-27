//1. Creati o clasa Animal care sa aiba in constructor name si weight
//2. Creati urmatoarele metode: eatFood, sleep, weakingUp - 
//    fiecare metoda o sa returneze un string '$name is eating' '$name is sleeping' '$name is weaking up'
//3. Creati o clasa noua care sa faca extend la clasa Animal si sa ia numele si weight-ul de la el(tip: super) 
// - ex: class Elephant, class Lion etc
//4. Adaugati 4 metode noi:
//   walking - $name is walking
//   rage - $name is rageing 
//   showBehaviour - returnati metodele eatFood si rage
//   dailyRoutine - returnati metodele weakingUp, rage, eatFood si sleep

//5. Creati o constanta noua din clasa cu numele de animal pe care ati scris-o mai sus( NU DIN clasa Animal ci din clasa Elephant, Monkey, Lion etc etc);
//6. Accesati toate cele 4 metode de pe noul animal. 

class Animal {
    constructor(name, weigth) {
        this.name = name;
        this.weigth = weigth;
    }
    eatFood() {
        console.log(`${this.name} is eating`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
    weakingUp() {
        console.log(`${this.name} is weaking up`);
    }
}

class Elephant extends Animal {
    constructor(name, weigth) {
        super(name, weigth)
    }
    walking() {
        console.log(`${this.name} is walking`);
    }
    rage() {
        console.log(`${this.name} is rageing`);
    }
    showBehaviour() {
        return `${this.eatFood()}  ${this.rage()}`;
    }
    dailyRoutine() {
        return `${this.weakingUp()} ${this.rage()} ${this.eatFood()} ${this.sleep()}`;
    }
}

const elephant1 = new Elephant("elefant", 25);
elephant1.walking();
elephant1.rage();
elephant1.showBehaviour();
elephant1.dailyRoutine();