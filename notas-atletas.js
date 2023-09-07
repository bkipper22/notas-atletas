function calcularMediaNotas(atletas) {
  for (let i = 0; i < atletas.length; i++) {
    const atleta = atletas[i];
    const nome = atleta.nome;
    let notas = atleta.notas;

    // 
    notas = notas.sort((a, b) => a - b);

    // 
    if (notas.length >= 3) {
      notas.pop(); // Remove a maior nota
      notas.shift(); // Remove a menor nota
    }

    // 
    let somaNotas = 0;
    notas.forEach(nota => {
      somaNotas += nota;
    });

    const media = somaNotas / notas.length;

    // 
    console.log(`Atleta: ${nome}`);
    console.log(`Notas Obtidas: ${atleta.notas.join(',')}`);
    console.log(`Média Válida: ${media.toFixed(2)}\n`);
  }
}

let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

calcularMediaNotas(atletas);
