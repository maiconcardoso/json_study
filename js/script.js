const objs = [
    {
        nome: "Maicon",
        idade: 34,
        esta_trabalhando: true,
        detalhes_profissao: {
            profissao: "programador",
            empresa: "xpto"
        },
        hobbies: ["programação", "correr", "ler"],
    },
    {
        nome: "Jonas",
        idade: 32,
        esta_trabalhando: false,
        detalhes_profissao: {
            profissao: null,
            empresa: null,
        },
        hobbies: ["Jogar", "Academia"],
    }
]

console.log(objs);

// JSON
const jsonData = JSON.stringify(objs);
console.log(jsonData);
console.log(typeof jsonData);

// converter json para objeto
const objData = JSON.parse(jsonData);
console.log(objData);

objData.map((pessoa) => {
    console.log(pessoa.nome);
});