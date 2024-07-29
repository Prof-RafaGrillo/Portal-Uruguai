const caminho = "../../bd/agrinho.json"

fetch(caminho).then((response) =>{
    response.json().then((projetos)=>{
        console.log(projetos['projetos'])
    })
})

const conteudo = document.querySelector('.container')

const projetos = JSON.parse('../../bd/agrinho.json')
console.log(projetos)