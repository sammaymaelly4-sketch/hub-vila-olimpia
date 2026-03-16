# 🏘️ Hub Vila Olímpia

PWA do bairro — feed de promoções, comércios, serviços e mural comunitário.

## Tecnologias

- React 19 + Vite
- React Router DOM
- CSS puro (sem Tailwind no MVP)
- Dados mockados em `src/data/mock.js`

---

## 🚀 Deploy: GitHub + Vercel (passo a passo)

### 1. Subir no GitHub

```bash
git init
git add .
git commit -m "feat: MVP Hub Vila Olímpia"

# Crie um repositório em github.com (ex: hub-vila-olimpia)
git remote add origin https://github.com/SEU_USUARIO/hub-vila-olimpia.git
git branch -M main
git push -u origin main
```

### 2. Publicar no Vercel

1. Acesse vercel.com → Add New Project
2. Importe o repositório hub-vila-olimpia
3. Framework: Vite (detectado automaticamente)
4. Clique em Deploy

Em ~30 segundos você terá: hub-vila-olimpia.vercel.app

---

## 📱 Instalar como PWA no celular

1. Abra a URL no Chrome (Android) ou Safari (iOS)
2. Android: menu → "Adicionar à tela inicial"
3. iOS: botão compartilhar → "Adicionar à Tela de Início"

---

## 📂 Estrutura

src/
├── data/mock.js          ← todos os dados editáveis
├── components/
│   ├── BottomNav.jsx
│   └── Header.jsx
├── pages/
│   ├── Feed.jsx
│   ├── Comercios.jsx     ← lista + detalhe + catálogo Parceiro Plus
│   ├── Servicos.jsx
│   └── Mural.jsx
├── App.jsx
├── main.jsx
└── index.css

---

## ✏️ Como editar os dados

Abra src/data/mock.js:
- comercios → estabelecimentos
- catalogo  → produtos por comércio (chave = id)
- prestadores → autônomos
- feed → publicações
- mural → vigilância/avisos

Para ativar Parceiro Plus: parceiro_plus: true

---

## 🔜 Fase 2

- Conectar Supabase
- Painel admin do comerciante
- Notificações push
- Mapa com pins
