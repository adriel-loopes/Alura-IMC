// Importar módulos necessários
const http = require('http');  // Para criar um servidor HTTP
const fs = require('fs');      // Para ler arquivos do sistema de arquivos
const path = require('path');  // Para manipulação de caminhos de arquivos
 
// Configurações do servidor
const hostname = '0.0.0.0';  // Permitir acesso externo
const port = 3000;           // Porta que o servidor irá escutar
 
// Criar o servidor HTTP
const server = http.createServer((req, res) => {
    // essa linha ajuda o servidor a encontrar e enviar o arquivo correto baseado na requisição do cliente.
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
 
    // está determinando a extensão do arquivo e definindo um tipo de conteúdo padrão
    const extname = path.extname(filePath);
    let contentType = 'text/html'; // Tipo de conteúdo padrão
 
    // Definir o tipo de conteúdo com base na extensão
    switch (extname) {
        case '.js': contentType = 'text/javascript'; break;
        case '.css': contentType = 'text/css'; break;
        case '.json': contentType = 'application/json'; break;
        case '.png': contentType = 'image/png'; break;
        case '.jpg': contentType = 'image/jpeg'; break;
        case '.gif': contentType = 'image/gif'; break;
        // Adicionar outros tipos conforme necessário
        default: contentType = 'text/html'; // Caso padrão
    }
 
    // O código tenta ler um arquivo e trata o erro caso a leitura falhe
    fs.readFile(filePath, (error, content) => {
        if (error) {
            // O código lida com o erro de arquivo não encontrado, retornando uma página de erro 404 ao usuário.
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>', 'utf-8');
            } else {
                // Para outros erros
                res.writeHead(500);
                res.end('Erro: ' + error.code + '..\n');
            }
        } else {
            // Envia uma resposta bem-sucedida ao cliente com o conteúdo apropriado
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});
 
// Iniciar o servidor
server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});