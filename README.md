# Crie um novo diretório para o projeto
mkdir pizzaria-BellaPizza
cd pizzaria-BellaPizza

# Inicialize um novo repositório Git
git init

# Crie um arquivo README.md
echo "# PizzariaBellaPizza

## Descrição do Projeto
O Pizzaria BellaPizza é uma aplicação web desenvolvida para oferecer uma experiência completa de pedidos online de pizzas. O projeto foi criado com o objetivo de facilitar a escolha, personalização e compra de pizzas, permitindo que os clientes façam seus pedidos de forma rápida e prática.

## Funcionalidades
- **Home**: Página inicial atraente que apresenta a pizzaria, com informações sobre a missão e os valores da marca.
- **Sobre Nós**: Seção dedicada a contar a história da pizzaria e a paixão por fazer pizzas artesanais.
- **Cardápio Interativo**: Visualize todas as opções de pizzas, incluindo clássicas, especiais, veganas e sem glúten, com descrições e preços.
- **Carrinho de Compras**: Adicione itens ao carrinho e revise seu pedido antes de finalizar a compra, garantindo uma experiência de usuário fluida.
- **Pedido via WhatsApp**: Envie seu pedido diretamente para a pizzaria através do WhatsApp, tornando o processo de compra ainda mais conveniente.

## Tecnologias Utilizadas
- **HTML/CSS**: Para a estrutura e o design responsivo do site.
- **JavaScript**: Para funcionalidades interativas, como o carrinho de compras.
- **WhatsApp API**: Integração para envio de pedidos diretamente pelo aplicativo.

## Como Contribuir
Sinta-se à vontade para contribuir com melhorias, sugestões ou correções. Agradecemos sua ajuda para tornar a Pizzaria Sabor & Tradição ainda melhor!

## Demonstração
Uma demonstração do projeto pode ser encontrada em [link para a demonstração, se disponível]." > README.md

# Adicione o arquivo ao repositório
git add README.md

# Faça o commit das alterações
git commit -m "Adiciona README.md com descrição do projeto Pizzaria Sabor & Tradição"
