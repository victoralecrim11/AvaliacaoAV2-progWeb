# 📚 Sistema de Gerenciamento de Alunos

> Projeto de estudo de caso desenvolvido com React (Web) e React Native (Mobile), implementando listagem e visualização de detalhes de alunos através de consumo de API REST.

![Status](https://img.shields.io/badge/status-ativo-success.svg)
![Linguagem](https://img.shields.io/badge/linguagem-JavaScript-yellow.svg)
![Licença](https://img.shields.io/badge/licença-MIT-blue.svg)

---

## 📑 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Funcionalidades](#-funcionalidades)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
  - [Instalação Web](#-instalação-web)
  - [Instalação Mobile](#-instalação-mobile)
- [Como Executar](#-como-executar)
- [Como Testar](#-como-testar)
- [API Utilizada](#-api-utilizada)
- [Deploy](#-deploy)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Componentes](#-componentes)
- [Testes](#-testes)
- [Solução de Problemas](#-solução-de-problemas)
- [Contribuindo](#-contribuindo)
- [Autor](#-autor)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

Este projeto é um **estudo de caso** que implementa um sistema completo de gerenciamento de alunos em duas plataformas:

- **Aplicação Web**: Interface responsiva construída com React, Vite e Bootstrap
- **Aplicação Mobile**: App nativo construído com React Native e Expo

Ambas as aplicações consomem a mesma API REST, implementam navegação entre telas, tratamento de estados (loading, erro, sucesso) e seguem boas práticas de desenvolvimento.

### 🎓 Objetivos de Aprendizado

- Consumo de APIs REST com Axios
- Gerenciamento de rotas (React Router DOM e React Navigation)
- Componentização e reutilização de código
- Testes automatizados com Vitest
- Deploy de aplicações web
- Desenvolvimento mobile com Expo

---

## 🚀 Tecnologias Utilizadas

### 🌐 Web

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **React** | 18.x | Biblioteca JavaScript para interfaces |
| **Vite** | 5.x | Build tool ultrarrápida |
| **React Router DOM** | 6.x | Roteamento no client-side |
| **Axios** | 1.x | Cliente HTTP para requisições |
| **React Bootstrap** | 2.x | Componentes UI Bootstrap para React |
| **Bootstrap** | 5.x | Framework CSS responsivo |
| **Vitest** | 1.x | Framework de testes unitários |
| **React Testing Library** | 14.x | Testes de componentes React |

### 📱 Mobile

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **React Native** | 0.73.x | Framework para apps nativos |
| **Expo** | 50.x | Plataforma de desenvolvimento mobile |
| **React Navigation** | 6.x | Roteamento e navegação |
| **React Native Paper** | 5.x | Componentes Material Design |
| **Axios** | 1.x | Cliente HTTP para requisições |

---

## ✨ Funcionalidades

### Funcionalidades Web ✅

- ✅ Listagem de alunos em cards responsivos
- ✅ Visualização detalhada de informações do aluno
- ✅ Navegação fluida entre páginas
- ✅ Estados de carregamento (loading)
- ✅ Tratamento de erros com mensagens amigáveis
- ✅ Design responsivo para mobile, tablet e desktop
- ✅ Animações e transições suaves
- ✅ Testes automatizados completos
- ✅ Pronto para deploy no Vercel

### Funcionalidades Mobile ✅

- ✅ Lista de alunos com design nativo
- ✅ Navegação entre telas com animações
- ✅ Pull-to-refresh na listagem
- ✅ Visualização completa de detalhes
- ✅ Estados de loading e erro
- ✅ Design Material com React Native Paper
- ✅ Compatível com Android e iOS
- ✅ Testável via Expo Go

---

## 📂 Estrutura do Projeto

```
meu-estudo-caso/
│
├── 📄 README.md                    # Este arquivo
├── 📄 .gitignore                   # Arquivos ignorados pelo Git
│
├── 🌐 web/                         # Aplicação Web
│   ├── public/
│   ├── src/
│   │   ├── componentes/            # Componentes reutilizáveis
│   │   │   ├── Cabecalho.jsx
│   │   │   ├── CartaoAluno.jsx
│   │   │   ├── Carregando.jsx
│   │   │   ├── MensagemErro.jsx
│   │   │   └── ListaVazia.jsx
│   │   │
│   │   ├── paginas/                # Páginas da aplicação
│   │   │   ├── ListaAlunos.jsx
│   │   │   ├── ListaAlunos.test.jsx
│   │   │   ├── DetalhesAluno.jsx
│   │   │   └── DetalhesAluno.test.jsx
│   │   │
│   │   ├── servicos/               # Serviços de API
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── README.md
│
└── 📱 mobile/                      # Aplicação Mobile
    ├── src/
    │   ├── componentes/            # Componentes reutilizáveis
    │   │   ├── CartaoAluno.js
    │   │   ├── Carregando.js
    │   │   ├── MensagemErro.js
    │   │   └── ListaVazia.js
    │   │
    │   ├── telas/                  # Telas da aplicação
    │   │   ├── ListaAlunosTela.js
    │   │   └── DetalhesAlunoTela.js
    │   │
    │   ├── navegacao/              # Configuração de navegação
    │   │   └── AppNavegacao.js
    │   │
    │   └── servicos/               # Serviços de API
    │       └── api.js
    │
    ├── App.js
    ├── app.json
    ├── babel.config.js
    ├── package.json
    └── README.md
```

---

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

### Obrigatórios

- **Node.js** (versão 16 ou superior)
  - Download: https://nodejs.org/
  - Para verificar: `node --version`

- **npm** (geralmente vem com Node.js)
  - Para verificar: `npm --version`

- **Git** (para clonar o repositório)
  - Download: https://git-scm.com/
  - Para verificar: `git --version`

### Para desenvolvimento Mobile

- **Expo Go** no seu smartphone
  - Android: [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
  - iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)

### Opcional (para melhor experiência)

- **Visual Studio Code**: https://code.visualstudio.com/
- **React Developer Tools**: Extensão do navegador
- **Android Studio** ou **Xcode**: Para emuladores

---

## 💻 Instalação

### 📥 1. Clonar o Repositório

```bash
git clone https://github.com/SEU_USUARIO/meu-estudo-caso.git
cd meu-estudo-caso
```

---

## 🌐 Instalação Web

### Passo 1: Criar o projeto base com Vite

```bash
# Criar projeto React com Vite
npm create vite@latest web -- --template react

# Ou se preferir yarn:
yarn create vite web --template react
```

### Passo 2: Navegar para o diretório

```bash
cd web
```

### Passo 3: Instalar as dependências básicas

```bash
npm install
```

### Passo 4: Instalar dependências adicionais

```bash
# Dependências de produção
npm install react-router-dom axios react-bootstrap bootstrap

# Dependências de desenvolvimento (testes)
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

#### Explicação das dependências:

- **react-router-dom**: Navegação entre páginas
- **axios**: Requisições HTTP para a API
- **react-bootstrap**: Componentes Bootstrap para React
- **bootstrap**: Estilos CSS do Bootstrap
- **vitest**: Framework de testes
- **@testing-library/react**: Utilitários para testar componentes
- **@testing-library/jest-dom**: Matchers customizados para testes
- **@testing-library/user-event**: Simular interações do usuário
- **jsdom**: Ambiente DOM para testes

### Passo 5: Criar estrutura de pastas

```bash
# Dentro de web/src/
mkdir componentes paginas servicos
```

### Passo 6: Copiar os arquivos do projeto

Copie todos os arquivos fornecidos para suas respectivas pastas:

```
web/src/
├── componentes/
│   ├── Cabecalho.jsx + Cabecalho.css
│   ├── CartaoAluno.jsx + CartaoAluno.css
│   ├── Carregando.jsx + Carregando.css
│   ├── MensagemErro.jsx + MensagemErro.css
│   └── ListaVazia.jsx + ListaVazia.css
│
├── paginas/
│   ├── ListaAlunos.jsx + ListaAlunos.css + ListaAlunos.test.jsx
│   └── DetalhesAluno.jsx + DetalhesAluno.css + DetalhesAluno.test.jsx
│
├── servicos/
│   └── api.js
│
├── App.jsx
├── App.css
├── main.jsx
├── index.css
└── setupTests.js
```

### Passo 7: Configurar arquivos raiz

Copie/substitua os seguintes arquivos na raiz de `web/`:

- `vite.config.js` (configuração do Vite e testes)
- `index.html` (HTML principal)
- `package.json` (se necessário ajustar scripts)

### Passo 8: Verificar instalação

```bash
# Verificar se todas as dependências foram instaladas
npm list --depth=0

# Deve mostrar algo como:
# web@1.0.0
# ├── axios@1.6.2
# ├── react@18.2.0
# ├── react-bootstrap@2.9.1
# ├── react-router-dom@6.20.0
# └── ...
```

### ✅ Web instalado com sucesso!

---

## 📱 Instalação Mobile

### Passo 1: Criar o projeto base com Expo

```bash
# Voltar para a raiz do projeto
cd ..

# Criar projeto Expo
npx create-expo-app mobile

# Ou se preferir yarn:
yarn create expo-app mobile
```

Durante a instalação, escolha a template **blank** quando solicitado.

### Passo 2: Navegar para o diretório

```bash
cd mobile
```

### Passo 3: Instalar as dependências básicas

```bash
npm install
```

### Passo 4: Instalar dependências adicionais

```bash
# Navegação
npm install @react-navigation/native @react-navigation/native-stack

# Dependências da navegação
npm install react-native-screens react-native-safe-area-context

# UI e requisições
npm install react-native-paper axios
```

#### Explicação das dependências:

- **@react-navigation/native**: Core da navegação
- **@react-navigation/native-stack**: Navegação em pilha
- **react-native-screens**: Telas nativas otimizadas
- **react-native-safe-area-context**: Gerenciamento de safe areas
- **react-native-paper**: Componentes Material Design
- **axios**: Requisições HTTP para a API

### Passo 5: Criar estrutura de pastas

```bash
# Dentro de mobile/
mkdir -p src/componentes src/telas src/navegacao src/servicos
```

### Passo 6: Copiar os arquivos do projeto

Copie todos os arquivos fornecidos para suas respectivas pastas:

```
mobile/src/
├── componentes/
│   ├── CartaoAluno.js
│   ├── Carregando.js
│   ├── MensagemErro.js
│   └── ListaVazia.js
│
├── telas/
│   ├── ListaAlunosTela.js
│   └── DetalhesAlunoTela.js
│
├── navegacao/
│   └── AppNavegacao.js
│
└── servicos/
    └── api.js
```

### Passo 7: Configurar arquivos raiz

Copie/substitua os seguintes arquivos na raiz de `mobile/`:

- `App.js` (componente raiz)
- `app.json` (configurações do Expo)
- `babel.config.js` (configuração do Babel)

### Passo 8: Verificar instalação

```bash
# Verificar se todas as dependências foram instaladas
npm list --depth=0

# Deve mostrar algo como:
# mobile@1.0.0
# ├── axios@1.6.2
# ├── expo@50.0.0
# ├── react-native@0.73.0
# ├── react-native-paper@5.11.3
# └── ...
```

### Passo 9: Instalar Expo Go no smartphone

Antes de executar, instale o app Expo Go:

**Android:**
- Abra a Google Play Store
- Busque por "Expo Go"
- Instale o aplicativo

**iOS:**
- Abra a App Store
- Busque por "Expo Go"
- Instale o aplicativo

### ✅ Mobile instalado com sucesso!

---

## 🎮 Como Executar

### 🌐 Executar Aplicação Web

```bash
# Navegar para a pasta web
cd web

# Iniciar servidor de desenvolvimento
npm run dev

# Ou se preferir yarn:
yarn dev
```

A aplicação será aberta automaticamente em `http://localhost:5173`

#### Comandos disponíveis:

```bash
npm run dev        # Inicia servidor de desenvolvimento
npm run build      # Gera build de produção
npm run preview    # Preview da build de produção
npm run test       # Executa testes
npm run test:watch # Executa testes em modo watch
```

### 📱 Executar Aplicação Mobile

```bash
# Navegar para a pasta mobile
cd mobile

# Iniciar servidor Expo
npm start

# Ou se preferir yarn:
yarn start
```

#### Opções de execução:

1. **No seu smartphone (recomendado para testes):**
   - Abra o app Expo Go no celular
   - Escaneie o QR Code mostrado no terminal
   - Aguarde o carregamento (primeira vez pode demorar)

2. **No emulador Android:**
   ```bash
   npm run android
   ```

3. **No simulador iOS (apenas Mac):**
   ```bash
   npm run ios
   ```

4. **No navegador (apenas para testes):**
   ```bash
   npm run web
   ```

#### Comandos disponíveis:

```bash
npm start          # Inicia servidor Expo
npm run android    # Abre no emulador Android
npm run ios        # Abre no simulador iOS
npm run web        # Abre no navegador
```

#### ⚠️ Importante:

- Seu smartphone e computador devem estar na **mesma rede Wi-Fi**
- Desative VPNs se tiver problemas de conexão
- Use `npx expo start --tunnel` se não conseguir conectar

---

## 🧪 Como Testar

### Testes da Aplicação Web

```bash
cd web

# Executar todos os testes uma vez
npm run test

# Executar testes em modo watch (reexecuta ao salvar)
npm run test:watch

# Executar testes com cobertura
npm run test:coverage
```

#### O que é testado:

✅ **ListaAlunos.test.jsx:**
- Exibição do estado de carregamento
- Renderização da lista de alunos
- Exibição de informações (email, curso)
- Botões "Ver Detalhes"
- Tratamento de erros da API
- Lista vazia

✅ **DetalhesAluno.test.jsx:**
- Carregamento de detalhes
- Renderização de todas as informações
- Campos opcionais (telefone, matrícula, etc)
- Navegação de volta
- Tratamento de erros

#### Exemplo de saída:

```
✓ src/paginas/ListaAlunos.test.jsx (7)
✓ src/paginas/DetalhesAluno.test.jsx (10)

Test Files  2 passed (2)
Tests  17 passed (17)
```

### Testes Manuais - Mobile

Como o mobile não tem testes automatizados (por simplicidade), teste manualmente:

1. ✅ Abrir lista de alunos
2. ✅ Verificar carregamento
3. ✅ Tocar em "Ver Detalhes"
4. ✅ Verificar informações do aluno
5. ✅ Voltar para lista
6. ✅ Fazer pull-to-refresh
7. ✅ Testar sem internet (modo avião)

---

## 🔗 API Utilizada

### Informações da API

- **Base URL:** `https://proweb.leoproti.com.br/api`
- **Documentação:** [Swagger UI](https://proweb.leoproti.com.br/swagger-ui/index.html)

### Endpoints

| Método | Endpoint | Descrição | Resposta |
|--------|----------|-----------|----------|
| GET | `/alunos` | Lista todos os alunos | Array de alunos |
| GET | `/alunos/{id}` | Busca aluno por ID | Objeto do aluno |

### Exemplo de Resposta - Lista de Alunos

```json
[
  {
    "id": 1,
    "nome": "João Silva",
    "email": "joao@email.com",
    "curso": "Engenharia de Software",
    "telefone": "(11) 98765-4321",
    "matricula": "2024001",
    "dataNascimento": "15/05/2000",
    "endereco": "Rua das Flores, 123 - São Paulo/SP"
  }
]
```

### Exemplo de Uso no Código

```javascript
import { obterAlunos, obterAlunoPorId } from './servicos/api';

// Buscar todos os alunos
const alunos = await obterAlunos();

// Buscar aluno específico
const aluno = await obterAlunoPorId(1);
```

---

## 🚀 Deploy

### Deploy no Vercel (Web)

#### Método 1: Via Interface Web (Recomendado)

1. Acesse https://vercel.com/
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Selecione seu repositório `meu-estudo-caso`
5. Configure:
   ```
   Framework Preset: Vite
   Root Directory: web
   Build Command: npm run build
   Output Directory: dist
   ```
6. Clique em "Deploy"
7. Aguarde o deploy (2-3 minutos)
8. Acesse o link gerado!

#### Método 2: Via CLI

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Navegar para pasta web
cd web

# Fazer deploy
vercel

# Para produção
vercel --prod
```

#### Exemplo de URL gerada:
```
https://meu-estudo-caso.vercel.app
```

### 📺 Tutorial em Vídeo

Assista: [Deploy com Vercel](https://www.youtube.com/watch?v=e_92Fz99q18)

---

## 📚 Estrutura de Pastas Detalhada

### Aplicação Web

```
web/
├── public/                         # Arquivos públicos estáticos
│
├── src/
│   │
│   ├── componentes/                # Componentes reutilizáveis
│   │   ├── Cabecalho.jsx          # Barra de navegação superior
│   │   ├── Cabecalho.css
│   │   ├── CartaoAluno.jsx        # Card do aluno (listagem)
│   │   ├── CartaoAluno.css
│   │   ├── Carregando.jsx         # Spinner de loading
│   │   ├── Carregando.css
│   │   ├── MensagemErro.jsx       # Componente de erro
│   │   ├── MensagemErro.css
│   │   ├── ListaVazia.jsx         # Mensagem lista vazia
│   │   └── ListaVazia.css
│   │
│   ├── paginas/                    # Páginas/Views da aplicação
│   │   ├── ListaAlunos.jsx        # Página de listagem
│   │   ├── ListaAlunos.css
│   │   ├── ListaAlunos.test.jsx   # Testes da listagem
│   │   ├── DetalhesAluno.jsx      # Página de detalhes
│   │   ├── DetalhesAluno.css
│   │   └── DetalhesAluno.test.jsx # Testes dos detalhes
│   │
│   ├── servicos/                   # Serviços e utilitários
│   │   └── api.js                 # Configuração Axios e endpoints
│   │
│   ├── App.jsx                     # Componente raiz + rotas
│   ├── App.css                     # Estilos globais
│   ├── main.jsx                    # Ponto de entrada
│   ├── index.css                   # Reset CSS
│   └── setupTests.js               # Configuração de testes
│
├── index.html                      # HTML principal
├── vite.config.js                  # Configuração Vite + Vitest
├── package.json                    # Dependências e scripts
└── README.md                       # Documentação
```

### Aplicação Mobile

```
mobile/
├── assets/                         # Recursos (ícones, splash, etc)
│
├── src/
│   │
│   ├── componentes/                # Componentes reutilizáveis
│   │   ├── CartaoAluno.js         # Card do aluno
│   │   ├── Carregando.js          # Indicador de loading
│   │   ├── MensagemErro.js        # Tela de erro
│   │   └── ListaVazia.js          # Tela lista vazia
│   │
│   ├── telas/                      # Telas da aplicação
│   │   ├── ListaAlunosTela.js     # Tela de listagem
│   │   └── DetalhesAlunoTela.js   # Tela de detalhes
│   │
│   ├── navegacao/                  # Configuração de navegação
│   │   └── AppNavegacao.js        # React Navigation setup
│   │
│   └── servicos/                   # Serviços e utilitários
│       └── api.js                  # Configuração Axios
│
├── App.js                          # Componente raiz
├── app.json                        # Configurações do Expo
├── babel.config.js                 # Configuração Babel
├── package.json                    # Dependências e scripts
└── README.md                       # Documentação
```

---

## 🧩 Componentes

### Componentes Web

| Componente | Responsabilidade | Props |
|------------|------------------|-------|
| **Cabecalho** | Barra de navegação superior | - |
| **CartaoAluno** | Exibe card do aluno na lista | `aluno: Object` |
| **Carregando** | Mostra spinner de loading | `mensagem?: string` |
| **MensagemErro** | Exibe mensagens de erro | `mensagem: string`, `aoTentarNovamente?: Function` |
| **ListaVazia** | Mensagem de lista vazia | `mensagem?: string` |

### Componentes Mobile

| Componente | Responsabilidade | Props |
|------------|------------------|-------|
| **CartaoAluno** | Card do aluno para mobile | `aluno: Object`, `aoClicarDetalhes: Function` |
| **Carregando** | Loading indicator nativo | `mensagem?: string` |
| **MensagemErro** | Tela de erro nativa | `mensagem: string`, `aoTentarNovamente?: Function` |
| **ListaVazia** | Tela de lista vazia | `mensagem?: string` |

---

## 🧪 Testes

### Cobertura de Testes (Web)

| Arquivo | Testes | Descrição |
|---------|--------|-----------|
| **ListaAlunos.test.jsx** | 8 testes | Loading, listagem, erro, vazio |
| **DetalhesAluno.test.jsx** | 10 testes | Loading, detalhes, campos, erro |

### Tecnologias de Teste

- **Vitest**: Framework de testes rápido
- **React Testing Library**: Testes focados no usuário
- **jsdom**: Ambiente DOM simulado

### Executar Testes

```bash
# Todos os testes
npm run test

# Watch mode
npm run test:watch

# Com cobertura
npm run test:coverage
```

---

## ❓ Solução de Problemas

### Problemas Comuns Web

#### 1. Erro: "Cannot find module 'react-router-dom'"

**Solução:**
```bash
cd web
npm install react-router-dom
```

#### 2. Porta 5173 já está em uso

**Solução:**
```bash
npm run dev -- --port 3000
```

Ou mate o processo:
```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID [PID_NUMBER] /F

# Linux/Mac
lsof -ti:5173 | xargs kill -9
```

#### 3. CSS não está carregando

**Solução:**
Verifique se importou o CSS no componente:
```javascript
import './NomeComponente.css';
```

#### 4. Testes não executam

**Solução:**
```bash
cd web
rm -rf node_modules package-lock.json
npm install
npm run test
```

### Problemas Comuns Mobile

#### 1. Expo não conecta no celular

**Soluções:**
- Verifique se estão na mesma rede Wi-Fi
- Desative VPN
- Use tunnel: `npx expo start --tunnel`
- Reinicie o Expo: `npx expo start --clear`

#### 2. Erro: "Unable to resolve module"

**Solução:**
```bash
cd mobile
rm -rf node_modules package-lock.json
npm install
npx expo start --clear
```

#### 3. App não atualiza no celular

**Solução:**
- Feche e reabra o app no Expo Go
- Ou pressione `r` no terminal (reload)
- Ou limpe cache: `npx expo start --clear`

#### 4. Erro de dependências do React Navigation

**Solução:**
```bash
cd mobile
npm install react-native-screens react-native-safe-area-context
```

### Problemas com API

#### 1. Erro 404 ou erro de rede

**Possíveis causas:**
- Sem conexão com internet
- API fora do ar
- Firewall bloqueando requisições

**Solução:**
Teste a API diretamente:
```bash
curl https://proweb.leoproti.com.br/api/alunos
```

### Problemas com Git

#### 1. Erro ao fazer push

**Solução:**
```bash
git pull origin main --rebase
git push origin main
```

#### 2. Conflitos de merge

**Solução:**
```bash
# Aceitar mudanças remotas
git checkout --theirs .

# Ou aceitar mudanças locais
git checkout --ours .

# Depois
git add .
git commit -m "Resolvendo conflitos"
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

### Padrões de Commit

- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` documentação
- `style:` formatação de código
- `refactor:` refatoração
- `test:` adicionar/modificar testes
- `chore:` tarefas gerais

Exemplo:
```bash
git commit -m "feat: adiciona filtro de busca na listagem"
```

---

## 👨‍💻 Autor

**Victor Alecrim