const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
const text = document.querySelector("p")

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("Hello world")

// Interpolated
console.log("Hola %s como va?", "Guido")

// Styled
console.log("%c Esto tiene otro color" , "color:red")

// warning!
console.warn("Alerta!")

// Error :|
console.error("Hay un error!!")

// Info
console.info("Datos curiosos")

// Testing
console.assert( 1 === 2, "Es incorrecto"  )

// clearing
console.clear()

// Viewing DOM Elements
console.dir(text)

// Grouping together
dogs.forEach( dog => {
  console.groupCollapsed(`${dog.name}`)
  console.log(`This is ${dog.name}`)
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`)
} )

// counting
console.count('Guido');
console.count('Guido');
console.count('Guido');
console.count('Pepe');
console.count('Guido');
