document.addEventListener('DOMContentLoaded', function() {
const dataInput = document.getElementById('data');
const qtdPequenosInput = document.getElementById('qtdPequenos');
const qtdGrandesInput = document.getElementById('qtdGrandes');
const infoDia = document.getElementById('info-dia');

function calcularMelhorPetshop() {
if(!dataInput.value || !qtdPequenosInput.value || !qtdGrandesInput.value)
{
    return;
}

const dataSelecionada = new Date(dataInput.value + "T00:00:00");
const qtdPequenos = Number(qtdPequenosInput.value) || 0;
const qtdGrandes = Number (qtdGrandesInput.value) || 0;

const diaSemana = dataSelecionada.getDay();
const ehFimDeSemana = (diaSemana === 0 || diaSemana === 6);

const precos = {
    "Meu Canino Feliz": {
        pequeno: ehFimDeSemana ? 24 : 20,
        grande: ehFimDeSemana ? 48 : 40,
        distancia: 2
    },
    "Vai Rex": {
        pequeno: ehFimDeSemana ? 20 : 15,
        grande: ehFimDeSemana ? 55 : 50,
        distancia: 1.7
    },
    "ChowChawgas": {
        pequeno: 30,
        grande: 45,
        distancia: 0.8
    }
};

let resultados = [];
for(let nome in precos) {
    let custo = precos[nome];
    let total = (qtdPequenos * custo.pequeno) + (qtdGrandes * custo.grande);

    resultados.push({
        nome: nome,
        total: total,
        distancia: custo.distancia
    });
}

resultados.sort((a,b) => {
    if(a.total !== b.total) return a.total - b.total;
    return a.distancia - b.distancia;
});

const melhor = resultados[0];

document.getElementById("bestShop").textContent = melhor.nome;
document.getElementById("totalPrice").textContent = "R$ " + melhor.total.toFixed(2);}

dataInput.addEventListener('change', calcularMelhorPetshop) 
qtdPequenosInput.addEventListener('input', calcularMelhorPetshop);
qtdGrandesInput.addEventListener('input', calcularMelhorPetshop);

});
