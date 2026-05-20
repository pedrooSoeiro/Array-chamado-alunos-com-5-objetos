const alunos = [
    {nome: "Jeff", idade: 18, disciplinaPreferida: "LOPAL"},
    {nome: "Wesley", idade: 16, disciplinaPreferida: "Não gosta de estudar"},
    {nome: "Jorge", idade: 19, disciplinaPreferida: "ARI"},
    {nome: "Pedro", idade: 16, disciplinaPreferida: "SOP"},
    {nome: "Fernanda Linda", idade: 17, disciplinaPreferida: "SOP"},
    {nome: "Thomas", idade: 18, disciplinaPreferida: "LER"},
    {nome: "Antônio", idade: 20, disciplinaPreferida: "SOP"}
];

alert ("Agora você vera o teste do ARRAY, mostrando o nome do primeiro aluno e a disciplinaPreferida do último aluno;")
alert(
  "LISTA DE ALUNOS\n" +
  "------------------------------------------\n" +
  "👤 Jeff\n   • Idade: 18 | Disciplina: LOPAL\n\n" +
  "👤 Wesley\n   • Idade: 16 | Disciplina: Não gosta de estudar\n\n" +
  "👤 Jorge\n   • Idade: 19 | Disciplina: ARI\n\n" +
  "👤 Pedro\n   • Idade: 16 | Disciplina: SOP\n\n" +
  "👤 Fernanda Linda\n   • Idade: 17 | Disciplina: SOP\n\n" +
  "👤 Thomas\n   • Idade: 18 | Disciplina: LER\n\n" +
  "👤 Antônio\n   • Idade: 20 | Disciplina: SOP\n" +
  "------------------------------------------"
);
alert("Nome primeiro aluno:")
alert(alunos[0].nome); 
alert("Disciplina Preferida ultimo aluno")
alert(alunos[alunos.length - 1].disciplinaPreferida); 