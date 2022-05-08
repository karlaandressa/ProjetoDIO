var jogador, vencedor = null; 
var jogadorselecionado = document.getElementById('jogador-selecionado');
var vencedorselecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');

mudarjogador('x');


function escolherquadrado(id){
    
    if (vencedor !== null){
        return;
    }
    
    console.log("clicou no botao" + id);
    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-'){
        return;
    }
    
    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000000';

    if (jogador == 'x'){
        jogador = '0';
    } else{ jogador = 'x';
}
    
    mudarjogador(jogador);
    checavencedor();
}
function mudarjogador(valor){
    jogador = valor;
    jogadorselecionado.innerHTML = jogador;
}

function checavencedor(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if (checasequencia (quadrado1, quadrado2, quadrado3)){
        mudaCorQuadrado (quadrado1, quadrado2, quadrado3);
        mudarVencedor (quadrado1);
        return;
    }   
    if (checasequencia (quadrado4, quadrado5, quadrado6)){
        mudaCorQuadrado (quadrado4, quadrado5, quadrado6);
        mudarVencedor (quadrado4);
        return;
    }   
    if (checasequencia (quadrado7, quadrado8, quadrado9)){
        mudaCorQuadrado (quadrado7, quadrado8, quadrado9);
        mudarVencedor (quadrado7);
        return;
    }   
    if (checasequencia (quadrado1, quadrado4, quadrado7)){
        mudaCorQuadrado (quadrado1, quadrado4, quadrado7);
        mudarVencedor (quadrado1);
        return;
    }   
    if (checasequencia (quadrado2, quadrado5, quadrado8)){
        mudaCorQuadrado (quadrado2, quadrado5, quadrado8);
        mudarVencedor (quadrado2);
        return;
    }   
    if (checasequencia (quadrado3, quadrado6, quadrado9)){
        mudaCorQuadrado (quadrado3, quadrado6, quadrado9);
        mudarVencedor (quadrado3);
    }

}
function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorselecionado.innerHTML = vencedor;}


function mudaCorQuadrado (quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#0F0';
    quadrado2.style.background = '#0F0';
    quadrado3.style.background = '#0F0';
}
function checasequencia (quadrado1, quadrado2, quadrado3){
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eigual = true; 
    }
    return eigual;
    
}
function reiniciar()
{
    vencedor = null;
    vencedorselecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++){
        var quadadro = document.getElementById(i);
        quadadro.style.background = '#eee';
        quadadro.style.color = '#eee';
        quadadro.innerHTML = '-';
    }
    mudarjogador('x');
}
