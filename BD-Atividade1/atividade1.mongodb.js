const database = "BD3-NoSQL-AtlasMongoDB";
const collection = "bd3-nosql-atv1";

use(database);
db.createCollection(collection);
const escola = db.getCollection(collection);

const alunos = [
    { cod_aluno: 1, nome: "Haruto", cpf: "111.111.111-11", curso: "Engenharia" },
    { cod_aluno: 2, nome: "Riku", cpf: "222.222.222-22", curso: "Medicina" },
    { cod_aluno: 3, nome: "Akira", cpf: "333.333.333-33", curso: "Direito" },
    { cod_aluno: 4, nome: "Ren", cpf: "444.444.444-44", curso: "Arquitetura" },
    { cod_aluno: 5, nome: "Rin", cpf: "555.555.555-55", curso: "Computação" },
    { cod_aluno: 6, nome: "Sakura", cpf: "666.666.666-66", curso: "Administração" },
    { cod_aluno: 7, nome: "Kaito", cpf: "777.777.777-77", curso: "Contabilidade" },
    { cod_aluno: 8, nome: "Hana", cpf: "888.888.888-88", curso: "Psicologia" },
    { cod_aluno: 9, nome: "Aoi", cpf: "999.999.999-99", curso: "Marketing" },
    { cod_aluno: 10, nome: "Goku", cpf: "000.000.000-00", curso: "Educação Física" }
];

function inserirAlunos() {
    for (const aluno of alunos) {
        db.escola.insertOne(aluno);
        print(`Aluno ${aluno.nome} inserido.`);
    }
    print("Todos os alunos foram inseridos.");
}

function listarTodosAlunos() {
    const todosAlunos = db.escola.find().toArray();
    print("Todos os alunos:");
    printjson(todosAlunos);
}

function listarAlunoPorCPF(cpf) {
    const aluno = db.escola.findOne({ cpf }, { cod_aluno: 0, _id: 0 });
    if (aluno) {
        print(`Aluno encontrado pelo CPF ${cpf}:`);
        printjson(aluno);
    } else {
        print(`Nenhum aluno encontrado com o CPF ${cpf}.`);
    }
}

inserirAlunos();
listarTodosAlunos();
listarAlunoPorCPF("000.000.000-00");
