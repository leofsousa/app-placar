🏆 App Scoreboard
<div align="center">
Mostrar Imagem
Mostrar Imagem
Mostrar Imagem
Mostrar Imagem
Um aplicativo de placar interativo para grandes telas
🚀 Ver Demo • 📝 Reportar Bug • ✨ Solicitar Feature
</div>

📋 Sobre o Projeto
O App Scoreboard é uma aplicação web moderna desenvolvida para exibição de placar em tempo real em grandes telas. Criado sob demanda para atender necessidades específicas de eventos e competições, o sistema permite gerenciar até 4 times simultaneamente com uma interface limpa e intuitiva.
🎯 Motivação
Este projeto foi desenvolvido a pedido de um amigo para auxiliar na gestão de pontuação em eventos ao vivo, proporcionando uma solução visual e prática para acompanhamento de competições em telas de grande formato.
<!-- 
📸 ADICIONE AQUI OS PRINTS DO APP
Exemplos:
![Screenshot Principal](./screenshots/home.png)
![Modal de Adicionar Time](./screenshots/modal.png)
![Placar em Ação](./screenshots/placar-acao.gif)
-->

✨ Funcionalidades

✅ Adicionar Times: Crie times personalizados com nome e cor
✅ Gerenciamento de Placar: Incremente ou decremente pontos facilmente
✅ Cores Personalizadas: 8 opções de cores para diferenciar os times
✅ Interface Responsiva: Header inteligente que aparece ao passar o mouse
✅ Modal Interativo: Sistema de modal para adicionar novos times
✅ Remoção de Times: Exclua times que não são mais necessários
✅ Limite de 4 Times: Otimizado para exibição em telas grandes sem quebra de layout
⚠️ Uso em Desktop: Projetado especificamente para grandes telas (não otimizado para mobile)


🛠️ Tecnologias Utilizadas
Core

Next.js 14 - Framework React com renderização do lado do servidor
React 18 - Biblioteca JavaScript para construção de interfaces
Tailwind CSS - Framework CSS utilitário para estilização rápida

Bibliotecas

Lucide React - Ícones modernos e personalizáveis
Vercel - Plataforma de deploy e hospedagem

Ferramentas de Desenvolvimento

ESLint - Linter para manter qualidade do código
PostCSS - Processador de CSS


📁 Estrutura do Projeto
app-placar/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   └── components/
│       ├── Header.jsx
│       ├── Modal.jsx
│       ├── ModalAddTime.jsx
│       └── TimeCard.jsx
├── public/
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
└── README.md

🚀 Como Executar o Projeto
Pré-requisitos
Antes de começar, você precisa ter instalado em sua máquina:

Node.js (versão 18 ou superior)
Git
Um gerenciador de pacotes (npm ou yarn)

📦 Instalação
bash# Clone este repositório
git clone https://github.com/leofsousa/app-placar.git

# Acesse a pasta do projeto
cd app-placar

# Instale as dependências
npm install
# ou
yarn install
▶️ Executando a aplicação
bash# Modo de desenvolvimento
npm run dev
# ou
yarn dev

# Acesse no navegador
http://localhost:3000
🏗️ Build para produção
bash# Criar build otimizado
npm run build
# ou
yarn build

# Executar build de produção
npm start
# ou
yarn start

💡 Como Usar

Adicionar um Time

Passe o mouse no topo da tela para revelar o header
Clique no botão "Adicionar Times"
Preencha o nome do time e selecione uma cor
Clique em "Adicionar Time"


Gerenciar Pontuação

Use os botões de incremento/decremento no card de cada time
A pontuação é atualizada em tempo real


Remover Time

Clique no botão de remoção no card do time desejado




🎨 Paleta de Cores Disponíveis

🔴 Vermelho
🔵 Azul
🟢 Verde
🟡 Amarelo
🟣 Roxo
🟠 Laranja
🩷 Rosa
⚫ Cinza


⚠️ Limitações Conhecidas

Máximo de 4 times: O layout foi otimizado para até 4 times simultaneamente
Não responsivo para mobile: Desenvolvido especificamente para grandes telas
Dados não persistentes: Os dados são mantidos apenas na sessão atual (sem banco de dados)


🔮 Melhorias Futuras

 Suporte para mais de 4 times com scroll horizontal
 Versão mobile responsiva
 Persistência de dados (localStorage/banco de dados)
 Histórico de partidas
 Exportação de resultados em PDF
 Sistema de timer integrado
 Temas personalizáveis
 Sons de notificação para pontuações
 Botão para finalizar competição e exibir vencedor


🤝 Contribuindo
Contribuições são sempre bem-vindas! Se você tem alguma sugestão para melhorar este projeto, sinta-se à vontade para fazer um fork do repositório e criar um pull request, ou abrir uma issue.

Fork o projeto
Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)
Commit suas mudanças (git commit -m 'Add some AmazingFeature')
Push para a branch (git push origin feature/AmazingFeature)
Abra um Pull Request


📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

👨‍💻 Autor
<div align="center">
Leonardo Sousa
Mostrar Imagem
Mostrar Imagem
</div>

🙏 Agradecimentos

Projeto desenvolvido como solução customizada para eventos
Inspirado na necessidade de placar visual para grandes telas
Agradecimento especial ao amigo que solicitou o projeto


<div align="center">
⭐ Se este projeto foi útil para você, considere dar uma estrela! ⭐
Feito com ❤️ por Leonardo Sousa
</div>
