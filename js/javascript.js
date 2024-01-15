function Aluno(nome, nota1, nota2){
    this.nome=nome;
    this.nota1=Number(nota1);
    this.nota2=Number(nota2);
    this.media=((this.nota1+this.nota2)/2).toFixed(2);
}
let alunos=[];
let tabela=document.createElement('table');
tabela.id="tabela";
tabela.classList.add('table');
/*tabela.style.border='1px solid black';*/
document.getElementById('lista').appendChild(tabela);
function cadastro(){
    nome=document.getElementById('aluno').value;
    nota1=document.getElementById('nota1').value;
    nota2=document.getElementById('nota2').value;
    let aluno=new Aluno(nome, nota1, nota2);
    alunos.push(aluno);
    console.table(alunos);
    document.getElementById('aluno').value="";
    document.getElementById('nota1').value="";
    document.getElementById('nota2').value="";
}
function listar(){
    tabela.innerHTML="";
    let cabecalho=document.createElement('tr');
    let th1=document.createElement('th');
    th1.textContent="Nome";
    let th2=document.createElement('th');
    th2.textContent="Nota 1";
    let th3=document.createElement('th');
    th3.textContent="Nota 2";
    let th4=document.createElement('th');
    th4.textContent="Média";
    cabecalho.appendChild(th1);
    cabecalho.appendChild(th2);
    cabecalho.appendChild(th3);
    cabecalho.appendChild(th4);
    tabela.appendChild(cabecalho);
    for(let i=0;i<alunos.length;i++){
        let registro=document.createElement('tr');
        let registro_nome=document.createElement('td');
        registro_nome.textContent=alunos[i].nome;
        let registro_nota1=document.createElement('td');
        registro_nota1.textContent=alunos[i].nota1;
        let registro_nota2=document.createElement('td');
        registro_nota2.textContent=alunos[i].nota2;
        let registro_media=document.createElement('td');
        registro_media.textContent=alunos[i].media;
        registro.appendChild(registro_nome);
        registro.appendChild(registro_nota1);
        registro.appendChild(registro_nota2);
        registro.appendChild(registro_media);
        tabela.appendChild(registro);
    }
}
function excluir(){
    let nome_procurado=prompt("Aluno");
    for (var i=0;i<alunos.length;i++){
        if (alunos[i].nome.toLowerCase()==nome_procurado.toLowerCase()){
            break;
        }
    }
    if (i==alunos.length){
        alert("Aluno não encontrado");
    } else {
        alunos.splice(i,1);
        listar();
    }
}