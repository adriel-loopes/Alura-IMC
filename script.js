document.getElementById('imcForm').addEventListener('submit', function(event) {
    // Adiciona um ouvinte de eventos para o formulário. Quando o formulário é submetido, executa esta função
    event.preventDefault(); // Evita o comportamento padrão do formulário, que seria recarregar a página

    // Obtém o valor dos campos de entrada
    const altura = parseFloat(document.getElementById('altura').value);
    // Captura o valor digitado no campo de altura, converte-o para número de ponto flutuante

    const peso = parseFloat(document.getElementById('peso').value);
    // Captura o valor digitado no campo de peso, também convertendo para número de ponto flutuante

    // Calcula o IMC
    const imc = peso / (altura * altura);
    // Fórmula do IMC: peso dividido pela altura ao quadrado

    let resultado = 'images/madruga.png'; // Variável padrão para armazenar o texto do resultado do IMC
    let imagem = 'images/madruga.png';    // Variável padrão para armazenar o caminho da imagem que será exibida

    // Determina a faixa do IMC e a imagem a ser exibida
    if (imc < 18.5) {
        // Se o IMC for menor que 18.5, exibe "Abaixo do peso"
        // Caminho da imagem para quando o IMC for abaixo do peso
        // Altera a cor do texto para laranja
        resultado = 'Abaixo do peso', imagem = 'images/madruga.png', document.getElementById('resultadoIMC').style.color = 'orange'; 
    } else if (imc >= 18.5 && imc < 24.9) {
        // Se o IMC estiver entre 18.5 e 24.9, exibe "Peso normal"
        // Caminho da imagem para quando o IMC for normal
        // Altera a cor do texto para azul
        imagem = 'images/chaves.png', resultado = 'Peso normal', document.getElementById('resultadoIMC').style.color = 'blue'; 
    } else {
        // Se o IMC estiver igual ou maior que 24.9, exibe "Acima do peso"
        // Caminho da imagem para quando o IMC for Acima do peso
        // Altera a cor do texto para vermelho
        resultado = 'Acima do peso !!!', imagem = 'images/barriga.png', document.getElementById('resultadoIMC').style.color = 'red';
    }

    // Exibe o resultado e a imagem na página
    document.getElementById('resultadoIMC').textContent = resultado;
    // Insere o texto do resultado do IMC no elemento com o id "resultado"

    document.getElementById('imagemResultado').innerHTML = `<img src="${imagem}" alt="${resultado}">`;
    // Insere a imagem correspondente ao resultado do IMC no elemento com o id "imagemResultado"
    // Usa o valor da variável "imagem" para o caminho da imagem e define o atributo alt com o texto do resultado
});
