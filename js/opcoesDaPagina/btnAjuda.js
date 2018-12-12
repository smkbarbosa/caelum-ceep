;(function(){

    const btnAjuda = document.querySelector('#btnAjuda');

    const listaAjudas = [
        {
            conteudo: "Bem vindo ao CEEP",
            cor: "red",
            ajuda: true
        },
        {
            conteudo: "Use o campo de texto para criar um novo cartão",
            cor: "blue",
            ajuda: true
        },
        {
            conteudo: "Clique no botao sync para salvar seus cartões",
            cor: "orange",
            ajuda: true
        },
        {
            conteudo: "No botão linhas você altera o layout da lista de cartões",
            cor: "orange",
            ajuda: true
        },
        {
            conteudo: "O CEP é adaptador para dispositivos móveis",
            cor:"green",
            ajuda: true
        }
    ]
    
    btnAjuda.addEventListener(`click`, function(){

        const ajudas = document.querySelectorAll('.mural .cartao.ajuda')

        if (!ajudas.length) {
            for (const ajuda of ajudas) {
                ajuda.querySelector('.opcoesDoCartao-remove').click();
            }
        }

        else{

            for (const ajuda of listaAjudas) {
                criarCartaoInsereMural(ajuda)
            }
        }

    });

})()