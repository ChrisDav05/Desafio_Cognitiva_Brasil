🚀 Projeto: Comparação de Respostas de LLMs

📌 Descrição

Este projeto acessa três modelos de linguagem (LLMs) diferentes - Gemini, Llama e Mixtral - para gerar respostas a uma mesma pergunta e compará-las.

🛠️ Tecnologias Utilizadas

Node.js

groq-sdk (SDK para Groq cloud)

Dotenv (para gerenciamento de variáveis de ambiente)

@google/generative-ai (SDK para Google Gemini)

📂 Estrutura do Projeto

📁 meu-projeto
├── 📂 config
│   ├── apiKeys.js
├── 📂 services
│   ├── geminiService.js
│   ├── llamaService.js
│   ├── mixtralService.js
├── .env
├── index.js
├── package.json
├── README.md

🔧 Configuração e Execução

1️⃣ Pré-requisitos

Antes de executar o projeto, certifique-se de ter:

Node.js instalado (versão 18+)

Chaves de API para Groq (Llama & Mixtral) e Gemini

2️⃣ Instalar dependências

No terminal, navegue até a pasta do projeto e execute:

npm install

Isso instalará todas as bibliotecas necessárias.

3️⃣ Configurar as Chaves de API

Crie um arquivo .env na raiz do projeto e adicione suas chaves:

GEMINI_API_KEY=your_gemini_api_key
GROQ_API_KEY=your_groq_api_key

⚠️ Nunca compartilhe esse arquivo no GitHub!

4️⃣ Executar o Projeto

No terminal, execute:

node index.js

5️⃣ Verificando as Respostas

Se tudo estiver correto, o terminal mostrará as respostas dos três modelos:

Consultando Modelos...

--------------------------------------------------------------------------------
Llama retornou: (resposta gerada pelo Llama)
--------------------------------------------------------------------------------
Gemini retornou: (resposta gerada pelo Gemini)
--------------------------------------------------------------------------------
Mixtral retornou: (resposta gerada pelo Mixtral)

🛠️ Possíveis Erros e Soluções

1️⃣ Erro: MODULE_NOT_FOUND

Execute npm install para garantir que todas as dependências estão instaladas.

2️⃣ Erro de chave de API inválida

Verifique se adicionou corretamente as chaves no .env e se estão ativas.

3️⃣ Erro undefined nas respostas

Verifique se os serviços estão retornando response.data corretamente.
