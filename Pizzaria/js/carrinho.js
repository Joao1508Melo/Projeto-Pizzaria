
     // Função para exibir os itens do carrinho
     function exibirCarrinho() {
        // Obtém o carrinho armazenado na sessão
        var carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];
        
        // Verifica se o carrinho está vazio
        if (carrinho.length === 0) {
            document.getElementById('itens-carrinho').innerHTML = '<p>Carrinho vazio</p>';
            return;
        }
        
        // Cria uma lista de itens do carrinho para exibir na página
        var listaItens = '<ul>';
        var total = 0; // Variável para armazenar o total do carrinho
        carrinho.forEach(function(item, index) {
            listaItens += '<li>' + item.nome + ' - R$ ' + item.preco + ' - Quantidade: ' + item.quantidade + ' <button onclick="removerDoCarrinho(' + index + ')">Remover</button></li>';
            total += item.preco * item.quantidade; // Soma o preço do item multiplicado pela quantidade
        });
        listaItens += '</ul>';
        
        // Exibe a lista de itens do carrinho na página
        document.getElementById('itens-carrinho').innerHTML = listaItens;
        
        // Exibe o total do carrinho na página
        document.getElementById('total-carrinho').innerHTML = 'Total: R$ ' + total.toFixed(2); // Formata o total com duas casas decimais
    }
    
    // Função para remover um item do carrinho
    function removerDoCarrinho(index) {
        // Obtém o carrinho armazenado na sessão
        var carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];
        
        // Remove o item do carrinho usando o índice
        carrinho.splice(index, 1);
        
        // Atualiza o carrinho na sessão
        sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
        
        // Exibe novamente o carrinho na página
        exibirCarrinho();
    }
    
    // Função para limpar o carrinho
    function limparCarrinho() {
        // Limpa o carrinho armazenado na sessão
        sessionStorage.removeItem('carrinho');
        
        // Exibe novamente o carrinho vazio na página
        exibirCarrinho();
    }
    
    // Função para enviar o carrinho pelo WhatsApp
function enviarPeloWhatsApp() {
    // Obtém os valores dos campos de entrada do formulário
    var nome = document.getElementById('nome').value;
    var endereco = document.getElementById('endereco').value;
    var numero = document.getElementById('numero').value;
    var telefone = document.getElementById('telefone').value;
    var pagamento = document.getElementById('pagamento').value;
    
    // Obtém o carrinho armazenado na sessão
    var carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];
    
    // Verifica se o carrinho está vazio
    if (carrinho.length === 0) {
        alert('Carrinho vazio');
        return;
    }
    
    // Calcula o total do carrinho
    var total = 0;
    carrinho.forEach(function(item) {
        total += item.preco * item.quantidade;
    });
    
    // Formata os itens do carrinho em uma string
    var mensagem = 'Pedido de ' + nome + ':\n\n';
    mensagem += 'Endereço de Entrega: ' + endereco + ', ' + numero + '\n';
    mensagem += 'Telefone: ' + telefone + '\n';
    mensagem += 'Forma de Pagamento: ' + pagamento + '\n\n';
    mensagem += 'Meu Carrinho de Compras:\n';
    carrinho.forEach(function(item) {
        mensagem += item.nome + ' - R$ ' + item.preco + ' - Quantidade: ' + item.quantidade + '\n';
    });
    
    // Adiciona o total do carrinho à mensagem
    mensagem += '\nTotal do Carrinho: R$ ' + total.toFixed(2);
    
    // Cria o link com os itens do carrinho na URL
    var linkWhatsApp = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(mensagem);
    
    // Abre o WhatsApp com os itens do carrinho e as informações do cliente pré-preenchidos
    window.open(linkWhatsApp);
}

    // Chama a função para exibir os itens do carrinho quando a página carrega
    window.onload = exibirCarrinho;
    function toggleMenu() {
        const navLinks = document.getElementById("navLinks");
        navLinks.classList.toggle("show");
    }
    function toggleMenu() {
        const navLinks = document.getElementById("navLinks");
        navLinks.classList.toggle("show");
    }
    
    