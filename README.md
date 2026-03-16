# 🏘️ Hub Vila Olímpia — v1.1

PWA do bairro Vila Olímpia, Taubaté SP.  
Design system completo com **light mode** e **dark mode** nativo.

## Stack
- React 19 + Vite 8 + React Router DOM 7
- CSS puro com variáveis (sem Tailwind)
- Dark mode via `data-theme` no `<html>` + `localStorage`
- Dados mockados em `src/data/mock.js`
- PWA manifest incluso

## Rodar local
```bash
npm install
npm run dev
```

## Deploy no Vercel

### 1. GitHub
```bash
git init
git add .
git commit -m "feat: Hub Vila Olímpia v1.1 — dark mode + redesign"
git remote add origin https://github.com/SEU_USUARIO/hub-vila-olimpia.git
git branch -M main
git push -u origin main
```

### 2. Vercel
1. vercel.com → **Add New Project**
2. Importe o repositório
3. Framework: **Vite** (detectado automaticamente)
4. **Deploy** → URL pública em ~30s

## Instalar como PWA
- **Android**: Chrome → menu ⋮ → "Adicionar à tela inicial"
- **iOS**: Safari → botão compartilhar → "Adicionar à Tela de Início"

## Dark Mode
- Toggle 🌙/☀️ no header da tela Início
- Persiste via `localStorage`
- Respeita preferência do sistema (`prefers-color-scheme`) no primeiro acesso

## Estrutura
```
src/
├── context/
│   └── ThemeContext.jsx     ← dark/light mode state
├── data/mock.js             ← edite aqui os dados
├── components/
│   ├── BottomNav.jsx
│   └── BottomNav.css
├── pages/
│   ├── Inicio.jsx + .css
│   ├── Comercios.jsx + .css
│   ├── Mural.jsx + .css
│   └── Servicos.jsx + .css
├── App.jsx
├── main.jsx
└── index.css                ← tokens CSS (light + dark)
```

## Tokens CSS (index.css)
| Token        | Light       | Dark        |
|--------------|-------------|-------------|
| `--bg`       | `#F5F4F0`   | `#111110`   |
| `--surface`  | `#FFFFFF`   | `#1C1C1A`   |
| `--surface2` | `#F0EFE9`   | `#252523`   |
| `--border`   | `#E8E6E0`   | `#2A2A28`   |
| `--txt`      | `#1C1C1A`   | `#F0EFE9`   |
| `--orange`   | `#E8622A`   | `#E8622A`   |

## Fase 2
- [ ] Supabase (substituir mock.js)
- [ ] Painel admin do comerciante
- [ ] Push notifications
- [ ] Fotos reais dos comércios
- [ ] Mapa com pins (Leaflet)
- [ ] Busca funcional com debounce
- [ ] Status aberto/fechado real (baseado em horário)
