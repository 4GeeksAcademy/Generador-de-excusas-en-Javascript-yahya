let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function generateExcuse() {
  let whoRandom = who[Math.floor(Math.random() * who.length)];
  let actionRandom = action[Math.floor(Math.random() * action.length)];
  let whatRandom = what[Math.floor(Math.random() * what.length)];
  let whenRandom = when[Math.floor(Math.random() * when.length)];

  return `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}`;
}

//Ejercicio generador de dominios

  let dominios=[
    ['the', 'our'],
    ['great', 'big'],
    ['jogges', 'racom']
  ];
  const domains = ['com', 'es', 'dev', 'io', 'net']

  console.log(dominios);
  console.log(domains);

  function generateDomain() {
    let resultado = [];

    dominios[0].forEach(a => {
      dominios[1].forEach(b => {
        dominios[2].forEach(c => {
          domains.forEach(d => {
            // Si el final de "c" coincide con el dominio actual "d"
          if (c.slice(-d.length) === d) {
            resultado.push(a + b + c.slice(0, -d.length) + '.' + d);
          } else {
            resultado.push(a + b + c + '.' + d);
          }
          });
        });
    });
  });
  return resultado;
  }

  console.log(generateDomain().forEach(domain => console.log(domain)));



// Cuando cargue la página
window.onload = function () {
  document.getElementById("excuse").innerHTML = generateExcuse();
};
