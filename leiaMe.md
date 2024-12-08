
# Projeto: Redes de Impacto

## Descrição  
Este projeto conecta negócios sociais a comunidades populares, utilizando um **backend** em Node.js integrado a um banco de dados MySQL e um **frontend** simples em HTML, CSS e JavaScript, servido via **Live Server**.  

## Pré-requisitos  
Certifique-se de ter os seguintes softwares instalados:  
1. **MySQL Workbench** (ou outro gerenciador de banco de dados).  
2. **Node.js** (versão 14 ou superior).  
   - Instale em: [Node.js Downloads](https://nodejs.org/)  
3. **Visual Studio Code** (para edição e execução do frontend com Live Server).  
   - Instale em: [VS Code Downloads](https://code.visualstudio.com/)  

## Configuração  

### 1. Clonar o Repositório  
```bash  
git clone https://github.com/gustavo-IFPR/redesDeImpacto  
cd redesDeImpacto  
```  

### 2. Configurar o Banco de Dados  
1. Abra o **MySQL Workbench** ou outro gerenciador de banco de dados.  
2. Crie um banco de dados.  
3. Execute o arquivo SQL `bancoRedesDeImpacto.sql` (localizado no diretório do projeto) para criar as tabelas e inserir os dados iniciais.  

### 3. Configurar o Arquivo `mysql.js`  
1. Navegue até a pasta `back-end`.  
2. Abra o arquivo `mysql.js` no Visual Studio Code ou outro editor.  
3. Atualize os campos `password` e `database` com suas credenciais do MySQL.  

Exemplo:  
```javascript  
const dbConfig = {  
  host: 'localhost',  
  user: 'root',  
  password: 'SUA_SENHA',  
  database: 'SEU_DATABASE'  
};  
```  

### 4. Iniciar o Servidor Backend  
1. Abra o terminal e navegue até a pasta `back-end`.  
   ```bash  
   cd back-end  
   ```  
2. Instale as dependências do projeto:  
   ```bash  
   npm install  
   ```  
3. Inicie o servidor:  
   ```bash  
   npm start  
   ```  
   Certifique-se de que nenhuma outra aplicação esteja utilizando a porta especificada no arquivo `server.js`.  

### 5. Instale a extensão do "live server" no VSCODE
### 6. Abra a pasta do frontend
Clique com o botão direito no arquivo index.html e selecione "Open with Live Server".
### 7. O frontend será carregado automaticamente no navegador.
