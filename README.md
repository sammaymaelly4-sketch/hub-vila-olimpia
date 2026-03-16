# 🏘️ Hub Vila Olímpia — MVP

PWA do bairro Vila Olímpia, Taubaté SP.

## Stack
- React 19 + Vite + React Router DOM
- CSS puro com variáveis (sem Tailwind)
- Dados mockados em `src/data/mock.js`
- PWA manifest incluso

## Rodar local
```bash
npm install
npm run dev
```

## Deploy no Vercel (passo a passo)

### 1. GitHub
```bash
git init
git add .
git commit -m "feat: MVP Hub Vila Olímpia"
# Crie repo em github.com/new
git remote add origin https://github.com/SEU_USUARIO/hub-vila-olimpia.git
git branch -M main
git push -u origin main
```

### 2. Vercel
1. Acesse vercel.com → **Add New Project**
2. Importe o repositório `hub-vila-olimpia`
3. Framework: **Vite** (detectado automaticamente)
4. Clique em **Deploy**
5. ✅ URL pública em ~30 segundos

## Instalar como PWA no celular
- **Android**: Chrome → menu ⋮ → "Adicionar à tela inicial"
- **iOS**: Safari → botão compartilhar → "Adicionar à Tela de Início"

## Estrutura
```
src/
├── data/mock.js          ← edite aqui os dados
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
└── index.css
```

## Editar dados
Abra `src/data/mock.js`:
- `comercios` → estabelecimentos (nome, whatsapp, horário, cor...)
- `catalogo`  → produtos por comércio (chave = id do comércio)
- `feed`      → publicações da home
- `mural`     → posts de vigilância/avisos
- `prestadores` → autônomos e serviços

### Ativar Parceiro Plus
```js
parceiro_plus: true  // libera aba de catálogo
```

## Próximos passos (Fase 2)
- [ ] Conectar Supabase (substituir mock.js)
- [ ] Painel admin do comerciante
- [ ] Notificações push
- [ ] Foto real dos comércios (substituir emoji/placeholder)
- [ ] Mapa com pins dos estabelecimentos
