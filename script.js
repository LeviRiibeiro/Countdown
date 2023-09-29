// Obtém referências aos elementos do DOM com base em seus IDs
const diaElement = document.getElementById('dias');
const horaElement = document.getElementById('horas');
const minutoElement = document.getElementById('minutos');
const segundoElement = document.getElementById('segundos');

// Define a data-alvo para o contador regressivo
const anoNovo = "1 Jan 2024";

// Função que atualiza o contador regressivo
function countdown() {
    // Obtém a data atual e a data-alvo
    const anoNovoDate = new Date(anoNovo);
    const atualDate = new Date();

    // Calcula o número total de segundos entre as duas datas
    const segundosTotais = (anoNovoDate - atualDate) / 1000;

    // Calcula dias, horas, minutos e segundos a partir do número total de segundos
    const dias = Math.floor(segundosTotais / 3600 / 24);
    const horas = Math.floor(segundosTotais / 3600) % 24;
    const minutos = Math.floor(segundosTotais / 60) % 60;
    const segundos = Math.floor(segundosTotais) % 60;

    // Atualiza os elementos do DOM com os valores calculados
    diaElement.textContent = dias;
    horaElement.textContent = formatTime(horas);
    minutoElement.textContent = formatTime(minutos);
    segundoElement.textContent = formatTime(segundos);
}

// Função para formatar um número de tempo com zero à esquerda, se necessário
function formatTime(time) {
    return time < 10 ? `0${time}` : `${time}`;
}

// Chama a função countdown uma vez para configurar o contador inicial
countdown();

// Configura um intervalo para chamar a função countdown a cada segundo
setInterval(countdown, 1000);
