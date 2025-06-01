Conversa aberta. Uma mensagem lida.

Pular para o conteúdo
Como usar o Gmail com leitores de tela
Ativar as notificações na área de trabalho para o Gmail.
   OK  Agora não(a)

Receba mais proteção contra phishing
Ative a Navegação segura com proteção reforçada para aumentar a segurança contra e-mails perigosos
ContinuarAgora não
Conversas
0% de 15 GB usados
Termos · Privacidade · Regulamentos do programa
Última atividade da conta: há 5 horas
Detalhes
# 🚀 Projeto de Monitoramento de API – Di2win

Este projeto foi desenvolvido pela equipe da **Di2win** com o objetivo de monitorar a estabilidade de APIs utilizadas por soluções baseadas em Inteligência Artificial, fornecendo visibilidade em tempo real de incidentes e facilitando a análise de falhas.

---

## 🧰 Tecnologias Utilizadas

### Frontend
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

### Banco de Dados
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## 🎯 Funcionalidades Principais

- 📡 **Monitoramento em tempo real** de chamadas às APIs
- ⚠️ **Exibição de erros e alertas** relacionados aos modelos de IA
- 👥 Visualização de **clientes impactados por falhas**
- 📈 Geração de **relatórios filtráveis** por cliente, modelo de IA e período
- 📁 **Exportação de relatórios** em formatos CSV/PDF
- 📊 **Dashboard interativo** com resumos visuais
- 🔔 Sistema de **alertas automáticos**

---

## 🧭 Arquitetura Geral

```
Frontend (Next.js + Tailwind CSS + TypeScript)
        ↓
Backend (Node.js + Express)
        ↓
MongoDB Atlas (armazenamento dos registros de incidentes)
```

---

## 🔌 Integração com API

A integração com as APIs da Di2win foi implementada com suporte a envio de documentos via:
- Multipart
- Base64

Modos de operação:
- Síncrono
- Assíncrono

> Detalhes completos no arquivo `DOCUMENTO DE COMO CONSUMIR API.docx`.

Endpoints principais:
- `POST /processAsync` – Envia documento para processamento assíncrono
- `POST /processResult` – Consulta o resultado do processamento
- `POST /process` – Envia documento para processamento síncrono

---

## 📦 Como executar o projeto

### Pré-requisitos
- Node.js LTS
- Yarn ou npm
- MongoDB Atlas (com URI configurada no `.env`)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/di2win/monitoramento-api.git

# Acesse a pasta do projeto
cd monitoramento-api

# Instale as dependências
yarn install
# ou
npm install
```

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
MONGO_URI=mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/di2win
```

### Executar o Frontend

```bash
cd frontend
yarn dev
```

### Executar o Backend

```bash
cd backend
yarn dev
```

---

## 🛡️ Boas Práticas

- Aplicação desenvolvida com foco em **performance e UX**
- Código modular e escalável
- Estrutura preparada para inclusão de novos filtros e integrações

---

## 📄 Licença

Este projeto é de uso interno da Di2win para fins de avaliação técnica e monitoramento. Todos os direitos reservados.
README_Di2win.md
Exibindo README_Di2win.md.
