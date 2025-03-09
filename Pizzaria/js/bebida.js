
 
  // Função para exibir uma mensagem específica com base na imagem clicada
  function exibirMensagem(mensagem) {
      var mensagemElement = document.getElementById('mensagem');
      mensagemElement.textContent = mensagem;
      mensagemElement.style.display = 'block';
      setTimeout(function() {
          mensagemElement.style.display = 'none';
      }, 2000); // A mensagem desaparecerá após 2 segundos (2000 milissegundos)
  }


  // Função para adicionar um item ao carrinho
  function adicionarAoCarrinho(nome, preco) {
    // Verifica se já existe um carrinho armazenado na sessão
    var carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];
    
    // Verifica se o item já está no carrinho
    var itemIndex = carrinho.findIndex(function(item) {
        return item.nome === nome;
    });
    
    if (itemIndex !== -1) {
        // Se o item já estiver no carrinho, aumenta a quantidade
        carrinho[itemIndex].quantidade++;
    } else {
        // Caso contrário, adiciona um novo item ao carrinho
        carrinho.push({ nome: nome, preco: preco, quantidade: 1 });
    }
    
    // Atualiza o carrinho na sessão
    sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
    
    // Exibe uma mensagem de confirmação
    alert('Você adicionou ' + nome + ' ao carrinho por R$ ' + preco);
}





    
     