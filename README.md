# 🧩 Quiz Game — Multi-Cliente com Rotas

Quiz de perguntas em **React + TypeScript + Tailwind CSS + React Router**.
Cada cliente tem **sua própria rota** (`/cliente-a`, `/cliente-b`...) com cores,
textos, categorias, perguntas e regras independentes — compartilhando apenas o
**footer geral** (Desenvolvido por AlphaCode).

## 🚀 Como rodar

```bash
npm install
npm run dev
```

Rotas disponíveis por padrão:
- `/` — lobby com a lista de quizzes
- `/cliente-a` — quiz com telas de dificuldade E categoria
- `/cliente-b` — quiz SEM tela de dificuldade (exemplo de variação por rota)

> Usa `HashRouter` (`/#/cliente-a`) para funcionar em hospedagem estática.
> Para URLs limpas, troque para `BrowserRouter` em `src/main.tsx`.

## ➕ Como criar um quiz para um novo cliente

1. Copie `src/quizzes/cliente-a.ts` → `src/quizzes/meu-cliente.ts`
2. Altere o `slug`, textos, cores, dificuldades, categorias e perguntas
3. Registre em `src/quizzes/index.ts`:

```ts
import { meuCliente } from './meu-cliente';
export const QUIZZES: QuizConfig[] = [clienteA, clienteB, meuCliente];
```

Pronto — a rota `/meu-cliente` passa a existir automaticamente.

## ⚙️ O que é configurável por rota

| Item | Onde |
|------|------|
| Tela de dificuldade (liga/desliga) | `showDifficultyScreen` |
| Tela de categoria (liga/desliga) | `showCategoryScreen` |
| Tempo por pergunta | `difficulties.*.timePerQuestion` |
| Nº de perguntas por partida | `difficulties.*.questionsPerGame` |
| Pontos por acerto | `difficulties.*.pointsPerQuestion` |
| Cores / gradientes | `colors` |
| Todos os textos | `texts` |
| Categorias e perguntas | `categories[].questions[]` |

## ⚓ Footer geral

Editável em **`src/config/globalConfig.ts`** (nome, site e Instagram) —
aparece em todas as rotas.

## 📁 Estrutura

```
src/
├── config/globalConfig.ts   # 🌐 Footer e configs globais
├── quizzes/                 # 🗂️ 1 arquivo = 1 cliente/rota
│   ├── index.ts             #    Registro das rotas
│   ├── cliente-a.ts
│   └── cliente-b.ts
├── types/quiz.types.ts
├── hooks/                   # useTimer + useQuizGame
├── components/              # Button, Timer, AnswerOption, Footer
├── screens/                 # Home, Dificuldade, Categoria, Jogo, Feedback
├── pages/QuizPage.tsx       # Fluxo de telas por rota
└── App.tsx                  # Rotas
```
