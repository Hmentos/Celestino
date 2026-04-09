const itensCardapio = [
  {
    id: 1,
    nome: "Picanha na Chapa - 2 pessoas",
    categoria: "principal",
    preco:  189.90,
    descricao: "Acompanha: Arroz branco, farofa e vinagrete.",
    imagem: "https://static.tagme.com.br/pubimg/thumbs/MenuItem/869f4690-0946-11ee-86d8-59de34011404.jpg?ims=filters:quality(70):format(webp)"
  },
  {
    id: 2,
    nome: "Fritas",
    categoria: "entrada",
    preco: 53.90,
    descricao: "Com cheddar e bacon",
    imagem: "https://static.tagme.com.br/pubimg/thumbs/MenuItem/f4543270-276a-11ef-90b3-8d4dd9e3e205.jpg?ims=filters:quality(70):format(webp)"
  },
  {
    id: 3,
    nome: "Porção de Pasteizinhos",
    categoria: "entrada",
    preco: 59.90,
    descricao: "6 unidades. Clique em saiba mais e veja as opções Carne ou Queijo - R$37,90 Pizza - R$37,90 Misto - 47.90",
    imagem: "https://static.tagme.com.br/pubimg/thumbs/MenuItem/919d17a0-4345-11ee-bdd0-a974d228d4cb.jpg?ims=filters:quality(70):format(webp)"
  },
  {
    id: 4,
    nome: "Frango à Parmegiana - 2 pessoas",
    categoria: "principal",
    preco: 112.90,
    descricao: "Com fritas e arroz",
    imagem: "https://static.tagme.com.br/pubimg/thumbs/MenuItem/5ad34f70-1139-11ee-8265-d7ff7c6807f5.jpg?ims=filters:quality(70):format(webp)"
  },
  {
    id: 5,
    nome: "Coca-Cola",
    categoria: "bebida",
    preco: 10.90,
    descricao: "Geladinha",
    imagem: "https://static.tagme.com.br/pubimg/thumbs/Product/e214ce00-ff0f-11ed-9628-7b0f4f8469bc.jpg?ims=filters:quality(70):format(webp)"
  },
  {
    id: 6,
    nome: "Merengue Celestino",
    categoria: "sobremesa",
    preco: 45.00,
    descricao: "Suspiro, morango, calda frutas vermelhas na taça e servido na mesa.",
    imagem: "https://static.tagme.com.br/pubimg/thumbs/MenuItem/afbfd9e0-2eaa-11f1-8757-1764c7686300.jpg?ims=filters:quality(70):format(webp)"
  }
];

function renderizarMenu(filtrados) {
  const container = document.getElementById('menu');
  container.innerHTML = '';

  filtrados.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}">
      <div class="card-content">
        <h3>${item.nome}</h3>
        <p class="descricao">${item.descricao}</p>
        <p class="preco">R$ ${item.preco.toFixed(2)}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function filtrarCategoria(categoria) {
  if (categoria === 'todos') {
    renderizarMenu(itensCardapio);
  } else {
    const filtrados = itensCardapio.filter(item => item.categoria === categoria);
    renderizarMenu(filtrados);
  }
}

// Carrega todos os itens ao iniciar
renderizarMenu(itensCardapio);
