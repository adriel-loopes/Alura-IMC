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
        resultado = 'Abaixo do peso'; // Se o IMC for menor que 18.5, exibe "Abaixo do peso"
        imagem = 'images/madruga.png'; // Caminho da imagem para quando o IMC for abaixo do peso
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado = 'Peso normal'; // Se o IMC estiver entre 18.5 e 24.9, exibe "Peso normal"
        imagem = 'images/chaves.png'; // Caminho da imagem para quando o IMC for normal
    } else {
        resultado = 'Acima do peso'; // Se o IMC for maior ou igual a 25, exibe "Acima do peso"
        imagem = 'images/barriga.png'; // Caminho da imagem para quando o IMC for acima do peso
    }

    // Exibe o resultado e a imagem na página
    document.getElementById('resultadoIMC').textContent = resultado;
    // Insere o texto do resultado do IMC no elemento com o id "resultado"

    document.getElementById('imagemResultado').innerHTML = `<img src="${imagem}" alt="${resultado}">`;
    // Insere a imagem correspondente ao resultado do IMC no elemento com o id "imagemResultado"
    // Usa o valor da variável "imagem" para o caminho da imagem e define o atributo alt com o texto do resultado
});
