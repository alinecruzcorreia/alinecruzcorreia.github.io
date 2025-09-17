aluno1.dadosalunos();
aluno1.acao();  

class Pessoa {
  constructor(nomeCompleto, RG, CPF) {
    this.nomeCompleto = nomeCompleto;
    this.RG = RG;
    this.CPF = CPF;
  }
}

class Aluno extends Pessoa {
  constructor(nomeCompleto, RG, CPF, matriculaAluno, serie, atividadeExtracurricular, responsavel) {
    super(nomeCompleto, RG, CPF);
    this.matriculaAluno = matriculaAluno;
    this.serie = serie;
    this.atividadeExtracurricular = atividadeExtracurricular;
    this.responsavel = responsavel; // objeto Pessoa
  }
  dadosAluno() {
    console.log(`Nome Completo: ${this.nomeCompleto}`);
    console.log(`RG: ${this.RG}`);
    console.log(`CPF: ${this.CPF}`);
    console.log(`Matrícula do Aluno: ${this.matriculaAluno}`);
    console.log(`Série: ${this.serie}`);
    console.log(`Atividade Extracurricular: ${this.atividadeExtracurricular}`);
    if (this.responsavel) {
      console.log('Responsável:');
      console.log(`  Nome: ${this.responsavel.nomeCompleto}`);
      console.log(`  RG: ${this.responsavel.RG}`);
      console.log(`  CPF: ${this.responsavel.CPF}`);
    }
  }
}

class Matricula extends Aluno {
  acao() {
    console.log('Aluno matriculado!');
  }
}

class Rematricula extends Aluno {
  acao() {
    console.log('Aluno rematriculado!');
  }
}

class Formatura extends Aluno {
  constructor(...args) {
    super(...args);
    this.notas = [];
    this.atividadesObrigatorias = false;
  }
  verificarFormatura() {
    const aprovado = this.notas.length > 0 && this.notas.every(nota => nota >= 6) && this.atividadesObrigatorias;
    if (aprovado) {
      console.log('Aluno apto para formatura!');
    } else {
      console.log('Aluno NÃO está apto para formatura.');
    }
    return aprovado;
  }
  acao() {
    this.verificarFormatura();
  }
}

// Exemplo de uso:
console.log('--- Matricula ---');
const responsavel1 = new Pessoa('Carlos Souza', '98.765.432-1', '987.654.321-00');
const aluno1 = new Matricula('João Silva', '12.345.678-9', '123.456.789-00', '2023001', '3ª Série', 'Futebol', responsavel1);
aluno1.dadosAluno();
aluno1.acao();

console.log('--- Rematricula ---');
const responsavel2 = new Pessoa('Ana Lima', '88.777.666-5', '876.543.210-99');
const aluno2 = new Rematricula('Maria Silva', '22.333.444-5', '234.567.890-11', '2023002', '4ª Série', 'Teatro', responsavel2);
aluno2.dadosAluno();
aluno2.acao();

console.log('--- Formatura ---');
const responsavel3 = new Pessoa('Paulo Mendes', '77.666.555-4', '765.432.109-88');
const aluno3 = new Formatura('Ana Lima', '33.444.555-6', '345.678.901-22', '2023003', '9ª Série', 'Dança', responsavel3);
aluno3.notas = [7, 8, 6.5, 9];
aluno3.atividadesObrigatorias = true;
aluno3.dadosAluno();
aluno3.acao();