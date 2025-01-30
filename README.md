# 📌 RecuperaTAX - Sistema de Cadastro de Empresas

Bem-vindo ao **RecuperaTAX**, um sistema para cadastro e gerenciamento de empresas. Aqui você pode registrar informações como CNPJ, contato, endereço e mais.

## 🚀 Tecnologias Utilizadas

- **React** (Frontend)
- **CSS** (Estilização)
- **JavaScript** (Lógica do sistema)

## 📦 Como Rodar o Projeto

### 🔧 1. Pré-requisitos
Antes de iniciar, tenha instalado:
- **Node.js** (versão 16+ recomendada)
- **Gerenciador de pacotes** (npm)

### ▶️ 2. Rodando o projeto
1. Clone o repositório:
   ```sh
   git clone https://github.com/Pilariss/RecuperaTAX.git
   ```
2. Entre na pasta do projeto:
   ```sh
   cd RecuperaTAX
   ```
3. Instale as dependências:
   ```sh
   npm install 
   ```
4. Inicie o servidor de desenvolvimento:
   ```sh
   npm start 
   ```
5. Acesse no navegador:
   ```
   http://localhost:3000
   ```

## 📂 Estrutura do Projeto

```plaintext
teste-pratico-react/
├── public/
├── src/
│   ├── components/  
│   │   ├── CNPJInput.jsx
│   │   ├── MenuSidebar.css
│   │   ├── MenuSidebar.jsx
│   ├── context/  
│   │   ├── AuthContext.js
│   ├── pages/   
│   │   ├── CompanyList.jsx    
│   │   ├── CompanyRegister.jsx
│   │   ├── Login.jsx
│   │   ├── SpreadsheetList.jsx
│   ├── routes/      
│   │   ├── PrivateRoute.js
│   ├── services/      
│   │   ├── companyService.js
│   ├── styles/   
│   │   ├── CompanyList.css    
│   │   ├── CompanyRegister.css
│   │   ├── globals.css
│   │   ├── Login.css
│   │   ├── SpreadsheetList.css
│   ├── App.jsx        (Roteamento principal)
│   ├── index.js       (Ponto de entrada do React)
├── .gitignore         (Arquivos ignorados no Git)
├── package.json       (Dependências do projeto)
├── README.md          (Instruções para rodar o projeto)

Feito com ❤️ por [Larissa Pires] (https://github.com/Pilariss)