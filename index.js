class Heroi {
  constructor({ nome, idade, tipo }) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    const habilidades = {
      mago: "magia",
      guerreiro: "espada",
      monge: "artes marciais",
      ninja: "shuriken",
    };

    const ataque = habilidades[this.tipo] ?? "um ataque misterioso";

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando heróis de forma menos comum
const personagens = [
  new Heroi({ nome: "Ezra", idade: 120, tipo: "mago" }),
  new Heroi({ nome: "Bjorn", idade: 35, tipo: "guerreiro" }),
  new Heroi({ nome: "Tenzin", idade: 50, tipo: "monge" }),
  new Heroi({ nome: "Kira", idade: 27, tipo: "ninja" }),
];

// Executando ataques em loop
for (const heroi of personagens) {
  heroi.atacar();
}
