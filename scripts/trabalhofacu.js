class alunos {
  constructor(nomecompleto, RG, CPF, matriculadoaluno, serie, atividadeextracurricular) {
    this.nomecompleto = nomecompleto;
    this.RG = RG;
    this.CPF = CPF;   
    this.matriculadoaluno = matriculadoaluno;
    this.serie = serie;
    this.atividadeextracurricular = atividadeextracurricular;
    //...
  }
  dadosalunos() {
    console.log(`Nome Completo: ${this.nomecompleto}`);
    console.log(`RG: ${this.RG}`);1
    console.log(`CPF: ${this.CPF}`);
    console.log(`Matriculado Aluno: ${this.matriculadoaluno}`);
    console.log(`Série: ${this.serie}`);
    console.log(`Atividade Extracurricular: ${this.atividadeextracurricular}`);
    //...
  }
}
class Matricula extends alunos {
  constructor(...args) {
    super(...args);
  }
  acao() {
    console.log('Aluno matriculado!');
  }
}    
class Rematricula extends alunos {
  constructor(...args) {
    super(...args);
  }
  acao() {
    console.log('Aluno matriculado!');
  }
}    