# 🏆 App Scoreboard

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)

**Um aplicativo de placar interativo para grandes telas**

[🚀 Ver Demo](https://app-placar.vercel.app/) • [📝 Reportar Bug](https://github.com/leofsousa/app-placar/issues) • [✨ Solicitar Feature](https://github.com/leofsousa/app-placar/issues)

</div>

---

## 📋 Sobre o Projeto

O **App Scoreboard** é uma aplicação web moderna desenvolvida para exibição de placar em tempo real em grandes telas. Criado sob demanda para atender necessidades específicas de eventos e competições, o sistema permite gerenciar até 4 times simultaneamente com uma interface limpa e intuitiva.

### 🎯 Motivação

Este projeto foi desenvolvido a pedido de um amigo para auxiliar na gestão de pontuação em eventos ao vivo, proporcionando uma solução visual e prática para acompanhamento de competições em telas de grande formato.

<!-- 
📸 ADICIONE AQUI OS PRINTS DO APP
Exemplos:
![Screenshot Principal](./screenshots/home.png)
![Modal de Adicionar Time](./screenshots/modal.png)
![Placar em Ação](./screenshots/placar-acao.gif)
-->

---

## ✨ Funcionalidades

- ✅ **Adicionar Times**: Crie times personalizados com nome e cor
- ✅ **Gerenciamento de Placar**: Incremente ou decremente pontos facilmente
- ✅ **Cores Personalizadas**: 8 opções de cores para diferenciar os times
- ✅ **Interface Responsiva**: Header inteligente que aparece ao passar o mouse
- ✅ **Modal Interativo**: Sistema de modal para adicionar novos times
- ✅ **Remoção de Times**: Exclua times que não são mais necessários
- ✅ **Limite de 4 Times**: Otimizado para exibição em telas grandes sem quebra de layout
- ⚠️ **Uso em Desktop**: Projetado especificamente para grandes telas (não otimizado para mobile)

---

## 🛠️ Tecnologias Utilizadas

### Core
- **[Next.js 14](https://nextjs.org/)** - Framework React com renderização do lado do servidor
- **[React 18](https://react.dev/)** - Biblioteca JavaScript para construção de interfaces
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário para estilização rápida

### Bibliotecas
- **[Lucide React](https://lucide.dev/)** - Ícones modernos e personalizáveis
- **[Vercel](https://vercel.com/)** - Plataforma de deploy e hospedagem

### Ferramentas de Desenvolvimento
- **ESLint** - Linter para manter qualidade do código
- **PostCSS** - Processador de CSS

---

## 📁 Estrutura do Projeto

```
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
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:
- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- [Git](https://git-scm.com/)
- Um gerenciador de pacotes ([npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/))

### 📦 Instalação

```bash
# Clone este repositório
git clone https://github.com/leofsousa/app-placar.git

# Acesse a pasta do projeto
cd app-placar

# Instale as dependências
npm install
# ou
yarn install
```

### ▶️ Executando a aplicação

```bash
# Modo de desenvolvimento
npm run dev
# ou
yarn dev

# Acesse no navegador
http://localhost:3000
```

### 🏗️ Build para produção

```bash
# Criar build otimizado
npm run build
# ou
yarn build

# Executar build de produção
npm start
# ou
yarn start
```

---

## 💡 Como Usar

1. **Adicionar um Time**
   - Passe o mouse no topo da tela para revelar o header
   - Clique no botão "Adicionar Times"
   - Preencha o nome do time e selecione uma cor
   - Clique em "Adicionar Time"

2. **Gerenciar Pontuação**
   - Use os botões de incremento/decremento no card de cada time
   - A pontuação é atualizada em tempo real

3. **Remover Time**
   - Clique no botão de remoção no card do time desejado

---

## 🎨 Paleta de Cores Disponíveis

- 🔴 Vermelho
- 🔵 Azul
- 🟢 Verde
- 🟡 Amarelo
- 🟣 Roxo
- 🟠 Laranja
- 🩷 Rosa
- ⚫ Cinza

---

## ⚠️ Limitações Conhecidas

- **Máximo de 4 times**: O layout foi otimizado para até 4 times simultaneamente
- **Não responsivo para mobile**: Desenvolvido especificamente para grandes telas
- **Dados não persistentes**: Os dados são mantidos apenas na sessão atual (sem banco de dados)

---

## 🔮 Melhorias Futuras

- [ ] Suporte para mais de 4 times com scroll horizontal
- [ ] Versão mobile responsiva
- [ ] Persistência de dados (localStorage/banco de dados)
- [ ] Histórico de partidas
- [ ] Exportação de resultados em PDF
- [ ] Sistema de timer integrado
- [ ] Temas personalizáveis
- [ ] Sons de notificação para pontuações

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Se você tem alguma sugestão para melhorar este projeto, sinta-se à vontade para fazer um fork do repositório e criar um pull request, ou abrir uma issue.

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

<div align="center">

**Leonardo Sousa**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/leonardo-sousa-71b32825a/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/leofsousa)

</div>

---

## 🙏 Agradecimentos

- Projeto desenvolvido como solução customizada para eventos
- Inspirado na necessidade de placar visual para grandes telas
- Agradecimento especial ao amigo que solicitou o projeto

---

<div align="center">

⭐ **Se este projeto foi útil para você, considere dar uma estrela!** ⭐

Feito com ❤️ por [Leonardo Sousa](https://github.com/leofsousa)

</div>
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
