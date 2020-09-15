// acum se printeaza in consola '1' '2' '3' '4' '5' .
// Vrem sa fie ordinea '3' '5' '2' '1' '4'
//hint setTimeout

const func1 = () => {
  setTimeout(() => {console.log('1'); } ,800) ;
  }
  
  const func2 = () => {
      setTimeout(() => {console.log('2'); } ,700) ;
  }
  
  const func3 = () => {
      console.log('3')
  }
  
  const func4 = () => {
      setTimeout(() => {console.log('4'); } , 900) ;
  }
  
  const func5 = () => {
      setTimeout(() => {console.log('5'); } ,500) ;
  }
  
  
  func1();
  func2();
  func3();
  func4();
  func5();