export const comercios = [
  {
    id: '1',
    nome: 'Bar da Carmen',
    categoria: 'bar',
    descricao: 'Tradicional point do bairro. Petiscos, chopp gelado e boa conversa desde sempre.',
    telefone: '(12) 99999-0001',
    whatsapp: '5512999990001',
    horario: { seg_sex: '16:00–23:00', sab: '12:00–00:00', dom: '12:00–20:00' },
    endereco: 'Rua São José, 8 – Vila Olímpia',
    parceiro_plus: true,
    emoji: '🍺',
    cor: '#7B3F00',
    bg: '#F5EDE0',
    avaliacao: 4.9,
    total_av: '120+',
    destaque: 'Happy Hour toda sexta a partir das 17h!',
  },
  {
    id: '2',
    nome: 'Mercadinho São José',
    categoria: 'mercadinho',
    descricao: 'Produtos frescos, hortifruti, mercearia completa. Delivery rápido pelo bairro.',
    telefone: '(12) 99999-0002',
    whatsapp: '5512999990002',
    horario: { seg_sex: '07:00–20:00', sab: '07:00–18:00', dom: '08:00–12:00' },
    endereco: 'Rua das Flores, 42 – Vila Olímpia',
    parceiro_plus: true,
    emoji: '🛒',
    cor: '#2D6A4F',
    bg: '#E8F5EC',
    avaliacao: 4.7,
    total_av: '80+',
    destaque: 'Delivery rápido — peça pelo WhatsApp!',
  },
  {
    id: '3',
    nome: 'Farmácia Boa Saúde',
    categoria: 'farmacia',
    descricao: 'Medicamentos, perfumaria e atendimento humanizado. Manipulação e delivery.',
    telefone: '(12) 99999-0003',
    whatsapp: '5512999990003',
    horario: { seg_sex: '08:00–22:00', sab: '08:00–20:00', dom: '09:00–13:00' },
    endereco: 'Av. Vila Olímpia, 110 – Taubaté SP',
    parceiro_plus: false,
    emoji: '💊',
    cor: '#1D6FA4',
    bg: '#E8F0FF',
    avaliacao: 4.8,
    total_av: '60+',
    destaque: null,
  },
];

export const catalogo = {
  '1': [
    { id: 'c1p1', nome: 'Combo Happy Hour',      descricao: '2 chopps + fritas + calabresa',         preco: 65.00, emoji: '🎉', destaque: true  },
    { id: 'c1p2', nome: 'Porção de Calabresa',   descricao: 'Acebolada, serve 2 pessoas',            preco: 28.00, emoji: '🌭', destaque: false },
    { id: 'c1p3', nome: 'Porção de Fritas',      descricao: 'Crocante com molho especial da Carmen', preco: 22.00, emoji: '🍟', destaque: false },
    { id: 'c1p4', nome: 'Chopp 500ml',           descricao: 'Gelado na temperatura certa',           preco: 12.00, emoji: '🍺', destaque: false },
    { id: 'c1p5', nome: 'Pão de Alho (6 un)',    descricao: 'Amanteigado e gratinado',               preco: 14.00, emoji: '🧄', destaque: false },
    { id: 'c1p6', nome: 'Refrigerante Lata',     descricao: 'Coca, Guaraná ou Sprite 350ml',        preco: 6.00,  emoji: '🥤', destaque: false },
  ],
  '2': [
    { id: 'c2p1', nome: 'Combo Feira',           descricao: 'Arroz 5kg + feijão 1kg + frango',      preco: 49.90, emoji: '🛍️', destaque: true  },
    { id: 'c2p2', nome: 'Cesta de Frutas',       descricao: 'Banana, maçã, laranja e uva',          preco: 28.90, emoji: '🍎', destaque: false },
    { id: 'c2p3', nome: 'Frango Inteiro (kg)',   descricao: 'Resfriado, fornecedor local',           preco: 14.50, emoji: '🍗', destaque: false },
    { id: 'c2p4', nome: 'Pão Francês (6 un)',    descricao: 'Fresquinho entregue toda manhã',       preco: 3.50,  emoji: '🥖', destaque: false },
    { id: 'c2p5', nome: 'Arroz 5kg',             descricao: 'Tipo 1, grãos selecionados',           preco: 24.90, emoji: '🍚', destaque: false },
    { id: 'c2p6', nome: 'Refrigerante 2L',       descricao: 'Diversas marcas e sabores',            preco: 8.90,  emoji: '🥤', destaque: false },
  ],
};

export const feed = [
  { id: 'f1', tipo: 'promocao', titulo: '🍺 Happy Hour hoje a partir das 17h!', conteudo: 'Chopp a R$10 e porção de fritas com 20% off. Só no Bar da Carmen.', comercio: 'Bar da Carmen', tempo: '30 min atrás', cor: '#7B3F00', tagBg: '#FFF0E8', tagCor: '#E8622A' },
  { id: 'f2', tipo: 'promocao', titulo: '🛒 Frango a R$12,90/kg hoje!', conteudo: 'Promoção relâmpago no Mercadinho São José. Enquanto durar o estoque.', comercio: 'Mercadinho São José', tempo: '1h atrás', cor: '#2D6A4F', tagBg: '#FFF0E8', tagCor: '#E8622A' },
  { id: 'f3', tipo: 'aviso', titulo: '⚠️ Obras na Rua das Flores', conteudo: 'Prefeitura realiza manutenção até sexta-feira. Desvie pela Av. Vila Olímpia.', comercio: null, tempo: '3h atrás', cor: '#C0392B', tagBg: '#FFECEC', tagCor: '#C0392B' },
  { id: 'f4', tipo: 'evento', titulo: '🎉 Festa junina na praça', conteudo: 'Sábado que vem! Quadrilha, comidas típicas e sorteios. Entrada gratuita.', comercio: null, tempo: '5h atrás', cor: '#8B44AC', tagBg: '#F3E8FF', tagCor: '#8B44AC' },
  { id: 'f5', tipo: 'promocao', titulo: '💊 15% off em vitaminas', conteudo: 'Toda linha vitaminas C e D com desconto. Farmácia Boa Saúde.', comercio: 'Farmácia Boa Saúde', tempo: '8h atrás', cor: '#1D6FA4', tagBg: '#FFF0E8', tagCor: '#E8622A' },
];

export const mural = [
  { id: 'm1', categoria: 'alerta',     titulo: '🚧 Obras na Rua das Flores',      descricao: 'Desvio obrigatório pela Av. Vila Olímpia até sexta. Atenção motoristas.',        tempo: '15 min atrás', tagBg: '#C0392B', btnTipo: 'vermelho', btnLabel: 'Ver detalhes' },
  { id: 'm2', categoria: 'achado',     titulo: '🔑 Chaves de Carro Encontradas',  descricao: 'Molho de chaves encontrado na calçada da Av. Vila Olímpia, próximo ao nº 114.', tempo: '2h atrás',     tagBg: '#2D6A4F', btnTipo: 'verde',    btnLabel: 'Entrar em contato' },
  { id: 'm3', categoria: 'perdido',    titulo: '🐕 Perdido: cachorro Bolinha',    descricao: 'Vira-lata caramelo, coleira azul. Sumiu perto da praça. Ligue (12) 99888-7766.',  tempo: '1 dia atrás',  tagBg: '#856404', btnTipo: 'verde',    btnLabel: 'Entrar em contato' },
  { id: 'm4', categoria: 'informacao', titulo: '💡 Reunião do Conselho de Bairros', descricao: 'Pauta: Segurança e iluminação das ruas. Local: Salão Paroquial às 19h30.',     tempo: '5h atrás',     tagBg: '#1D6FA4', btnTipo: 'laranja',  btnLabel: 'Agendar' },
];

export const prestadores = [
  { id: 'a1', nome: 'Ricardo Elétrica',   especialidade: 'Eletricista Residencial', descricao: 'Instalações, reparos e laudos ART. Rápido e com garantia.', whatsapp: '5512999990010', avaliacao: 4.9, emoji: '⚡', dist: '1.2 km' },
  { id: 'a2', nome: 'Paulo Encanador',    especialidade: 'Encanador Hidráulico',    descricao: 'Vazamentos, instalações e desentupimento. Atende emergência.',  whatsapp: '5512999990011', avaliacao: 4.7, emoji: '💧', dist: '2.5 km' },
  { id: 'a3', nome: 'Dona Lúcia Costura', especialidade: 'Costureira',              descricao: 'Consertos, ajustes e roupas sob medida. 20 anos no bairro.',     whatsapp: '5512999990012', avaliacao: 5.0, emoji: '🧵', dist: '0.8 km' },
  { id: 'a4', nome: 'Fernanda Pinturas',  especialidade: 'Pintura e Acabamento',    descricao: 'Residencial e comercial. Acabamento fino e pontualidade.',         whatsapp: '5512999990013', avaliacao: 4.8, emoji: '🎨', dist: '1.8 km' },
];
