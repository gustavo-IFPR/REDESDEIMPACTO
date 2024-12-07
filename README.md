# Aplicação: Conexão de Negócios Sociais

## Descrição  
Esta aplicação conecta negócios sociais e comunidades no Paraná, visando a redução da desigualdade social.  

## Pré-requisitos  
Antes de começar, certifique-se de ter o seguinte instalado no seu computador:  
- **Node.js**.
- **MySQL**.
- Uma ferramenta de programação da sua preferencia.

## Configuração  

### 1. Abaixar o repositório  
```bash  
git clone https://https://github.com/gustavo-IFPR/redesDeImpacto  
cd redesDeImpacto  
```  

### 2. Configure o Banco de Dados  
1. Abra o MySQL e crie um banco de dados.  
2. Execute o arquivo SQL "bancoRedesDeImpacto" disponível no diretório para configurar as tabelas e os dados iniciais

### 3. Configure o arquivo `mysql.js`  
1. Navegue até a pasta `back-end`.  
2. Abra o arquivo `mysql.js` na sua ferramenta de programação.  
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

### 4. Inicie o Servidor  
1. No terminal, navegue até a pasta `back-end`.  
2. Instale no projeto:  
   ```bash  
   npm install  
   ```  
3. Inicie o servidor:  
   ```bash  
   npm start  
   ```  

### 5. Teste a Aplicação  
Abra o navegador e acesse a URL fornecida pelo servidor para verificar se está funcionando corretamente.
