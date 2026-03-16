export const comercios = [
  {
    id: '1',
    nome: 'Mercadinho do Zé',
    categoria: 'mercadinho',
    descricao: 'Produtos frescos, hortifruti e mercearia completa.',
    telefone: '(12) 99999-0001',
    whatsapp: '5512999990001',
    horario: { seg_sex: '07:00–20:00', sab: '07:00–18:00', dom: 'Fechado' },
    endereco: 'Rua das Flores, 42 – Vila Olímpia',
    parceiro_plus: true,
    emoji: '🛒',
    cor: '#2D6A4F',
  },
  {
    id: '2',
    nome: 'Farmácia Saúde & Vida',
    categoria: 'farmacia',
    descricao: 'Medicamentos, perfumaria e atendimento humanizado.',
    telefone: '(12) 99999-0002',
    whatsapp: '5512999990002',
    horario: { seg_sex: '08:00–22:00', sab: '08:00–20:00', dom: '09:00–13:00' },
    endereco: 'Av. Central, 110 – Vila Olímpia',
    parceiro_plus: false,
    emoji: '💊',
    cor: '#1D6FA4',
  },
  {
    id: '3',
    nome: 'Bar da Carmen',
    categoria: 'bar',
    descricao: 'O point do bairro desde 1987. Petiscos e chopp gelado.',
    telefone: '(12) 99999-0003',
    whatsapp: '5512999990003',
    horario: { seg_sex: '16:00–23:00', sab: '12:00–00:00', dom: '12:00–20:00' },
    endereco: 'Rua São José, 8 – Vila Olímpia',
    parceiro_plus: true,
    emoji: '🍺',
    cor: '#7B3F00',
  },
  {
    id: '4',
    nome: 'Oficina do Toninho',
    categoria: 'oficina',
    descricao: 'Mecânica geral, elétrica veicular e alinhamento.',
    telefone: '(12) 99999-0004',
    whatsapp: '5512999990004',
    horario: { seg_sex: '08:00–18:00', sab: '08:00–12:00', dom: 'Fechado' },
    endereco: 'Rua Industrial, 77 – Vila Olímpia',
    parceiro_plus: false,
    emoji: '🔧',
    cor: '#555',
  },
];

export const catalogo = {
  '1': [
    { id: 'p1', nome: 'Cesta de Frutas', descricao: 'Banana, maçã, laranja e uva.', preco: 28.90, emoji: '🍎' },
    { id: 'p2', nome: 'Frango Inteiro', descricao: 'Resfriado, kg.', preco: 14.50, emoji: '🍗' },
    { id: 'p3', nome: 'Pão Francês (6 un)', descricao: 'Fresquinho todo dia.', preco: 3.50, emoji: '🥖' },
    { id: 'p4', nome: 'Refrigerante 2L', descricao: 'Diversas marcas.', preco: 8.90, emoji: '🥤' },
  ],
  '3': [
    { id: 'p5', nome: 'Porcão de Fritas', descricao: 'Crocante, para 2 pessoas.', preco: 22.00, emoji: '🍟' },
    { id: 'p6', nome: 'Chopp 500ml', descricao: 'Gelado na medida.', preco: 12.00, emoji: '🍺' },
    { id: 'p7', nome: 'Combo Petisco', descricao: 'Calabresa + fritas + pão de alho.', preco: 45.00, emoji: '🍖' },
  ],
};

export const prestadores = [
  { id: 'a1', nome: 'Ricardo Elétrica', especialidade: 'Eletricista', descricao: 'Instalações, reparos e laudos ART.', whatsapp: '5512999990010', avaliacao: 4.9, emoji: '⚡' },
  { id: 'a2', nome: 'Dona Lúcia Costura', especialidade: 'Costureira', descricao: 'Consertos, ajustes e roupas sob medida.', whatsapp: '5512999990011', avaliacao: 5.0, emoji: '🧵' },
  { id: 'a3', nome: 'Paulo Encanador', especialidade: 'Encanador', descricao: 'Vazamentos, instalações e desentupimento.', whatsapp: '5512999990012', avaliacao: 4.7, emoji: '🔩' },
  { id: 'a4', nome: 'Fernanda Pinturas', especialidade: 'Pintora', descricao: 'Residencial e comercial. Acabamento fino.', whatsapp: '5512999990013', avaliacao: 4.8, emoji: '🎨' },
];

export const feed = [
  { id: 'f1', tipo: 'promocao', titulo: '🛒 Frango a R$12,90/kg hoje!', conteudo: 'Só hoje no Mercadinho do Zé. Aproveite!', comercio: 'Mercadinho do Zé', tempo: '10 min atrás', cor: '#2D6A4F' },
  { id: 'f2', tipo: 'aviso', titulo: '⚠️ Rua das Flores interditada', conteudo: 'Obra da prefeitura até sexta-feira. Use a Rua São José.', comercio: null, tempo: '1h atrás', cor: '#C85C00' },
  { id: 'f3', tipo: 'promocao', titulo: '🍺 Happy Hour hoje a partir das 16h', conteudo: 'Chopp a R$9 e petisco com 20% off no Bar da Carmen.', comercio: 'Bar da Carmen', tempo: '2h atrás', cor: '#7B3F00' },
  { id: 'f4', tipo: 'evento', titulo: '🎉 Festa junina na praça', conteudo: 'Sábado, dia 22. Quadrilha, comidas típicas e sorteios. Todos convidados!', comercio: null, tempo: '5h atrás', cor: '#8B44AC' },
  { id: 'f5', tipo: 'promocao', titulo: '💊 Desconto em vitaminas', conteudo: '15% off em toda linha de vitaminas C e D. Farmácia Saúde & Vida.', comercio: 'Farmácia Saúde & Vida', tempo: '8h atrás', cor: '#1D6FA4' },
];

export const mural = [
  { id: 'm1', categoria: 'alerta', titulo: '🚨 Carro suspeito na Rua das Palmeiras', descricao: 'Gol prata sem placa circulando devagar ontem à noite. Atenção vizinhos.', tempo: '3h atrás', aprovado: true },
  { id: 'm2', categoria: 'perdido', titulo: '🐕 Perdido: cachorro Bolinha', descricao: 'Vira-lata caramelo, coleira azul. Sumiu perto da praça. Quem viu ligue (12) 99888-7766.', tempo: '1 dia atrás', aprovado: true },
  { id: 'm3', categoria: 'achado', titulo: '🔑 Chave encontrada', descricao: 'Encontrei um molho de chaves na calçada da Av. Central. Retirar no 114.', tempo: '2 dias atrás', aprovado: true },
  { id: 'm4', categoria: 'informacao', titulo: '💡 Troca de lâmpadas pelo bairro', descricao: 'Prefeitura fará substituição de postes na semana que vem. Sem luz das 22h às 2h.', tempo: '3 dias atrás', aprovado: true },
];
