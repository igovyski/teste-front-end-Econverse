# Teste Front-end Econverse

Aplicação de e-commerce desenvolvida para o desafio técnico Front-end da Econverse.

## Stack

- React 19
- TypeScript
- Vite
- Sass (SCSS Modules)

## Pré-requisitos

- Node.js (v20 ou superior)
- npm (v10 ou superior)

## Como executar

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar em ambiente de desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível em `http://localhost:5173`.

### 3. Compilar para produção

Executa a checagem de tipos (`tsc -b`) e gera o build otimizado na pasta `dist/`:

```bash
npm run build
```

### 4. Testar e validar

Executar a análise estática de código (ESLint):

```bash
npm run lint
```

Servir localmente o build de produção gerado em `dist/`:

```bash
npm run preview
```
