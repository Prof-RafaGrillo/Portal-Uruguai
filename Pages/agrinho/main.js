const caminho = "../../bd/agrinho.json"
const conteudo = document.querySelector('.container--lista')


fetch(caminho).then((response) =>{
    response.json().then((dados)=>{
        dados.projetos.map((projeto) => {
            conteudo.innerHTML += `<li class="item--projeto">${projeto.projeto}</li>`
        })
    })
    
})
