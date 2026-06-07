# Akshay Gupta Portfolio

Personal portfolio website showcasing my academic journey, projects, research interests, achievements, and technical skills.

## About Me

M.Tech Student in Data & Computational Science at IIT Jodhpur.

Interests:
- Generative AI
- Retrieval-Augmented Generation (RAG)
- Agentic AI Systems
- Machine Learning
- Deep Learning
- Full-Stack Development

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

## Highlights

- Published Patent:
  - Autonomous Dual-Band System for Selective Drone Detection and Immobilization via Wi-Fi Deauthentication
  - Application No: 202511038869 A

- 3rd Place – Neuro Robotics Hackathon 2026
  - IIT Jodhpur

## Projects

- Intelligent TA Assignment & Recommendation Platform (Ongoing)
- RAG-Based Question Answering System (Learning Project)
- Automated Drone/Device Immobilization System (Patent Work)
- NPL Website Development
- Association of Pharmaceutical Producers of Nepal Portal

## Connect

- LinkedIn: https://www.linkedin.com/in/akshay-gupta-a16201164/
- GitHub: https://github.com/aksugpt

## Live Portfolio

Coming Soon





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
