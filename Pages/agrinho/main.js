

const caminho = "../../bd/agrinho.json"
const conteudo = document.querySelector('.container--lista')





async function carregarProjetos(inicio, fim){
    try{

    
    await fetch(caminho).then((response) =>{
        let listaProjetos = []
        conteudo.innerHTML = ""
        response.json().then((dados)=>{
            dados.projetos.map((projeto, index) => {
                listaProjetos.push(projeto.projeto)
                
               
                //conteudo.innerHTML += `<li class="item--projeto">${projeto.autor}</li>`
                
            })
            console.log(inicio, fim)
            for (let i = inicio; i < fim; i++){
                console.log(listaProjetos[i])
                conteudo.innerHTML += `<li class="item--projeto">${listaProjetos[i]}</li>`
            }
            console.log(listaProjetos.length)
            return listaProjetos
           
         
        })
    })
    } catch (erro){
        console.error('Erro ao buscar projetos:', erro)
    }
}

carregarProjetos(2)

const html = {
    get(element){
        return document.querySelector(element)
    }
}
let perPage = 3
const state = {
    page: 1,
    perPage,
    totalPage: 25,
    maxVisibleButtons: 5
}



const controls = {
    next() {
        state.page++

        const lastPage = state.page > state.totalPage
        if(lastPage){
            state.page--
        }

    },
    prev() {
        state.page--

        if(state.page < 1){
            state.page++
        }
    },
    goTo(page) {
        if(page < 1){
            page = 1
        }
        state.page = +page

        if (page > state.totalPage){
            state.page = state.totalPage
        }
    },
    createListeners (){
        html.get('.first').addEventListener('click', () =>{
            controls.goTo(1)
            update()
        })
        html.get('.last').addEventListener('click', () =>{
            controls.goTo(state.totalPage)
            update()
    })
    html.get('.next').addEventListener('click', () =>{
        controls.next()
        update()
    })
    html.get('.prev').addEventListener('click', () =>{
        controls.prev()
        update()
    })
}
}

const list = {
    create(item){

    },
    update(){
        

        let page = state.page - 1
        let start = page * state.perPage
        let end = start + state.perPage
        console.log(start)
        carregarProjetos(start, end)

    }
}

const buttons = {
    element: html.get('.numbers'),
    create(number){
        const button = document.createElement('div')
        button.innerHTML = number;

        if(state.page == number){
            button.classList.add('active')
        }

        button.addEventListener('click', (event) =>{
            const page = event.target.innerText
            controls.goTo(page)
            update()
        })

        buttons.element.appendChild(button)
    },
    update(){
        buttons.element.innerHTML = ""
        const {maxLeft, maxRight} = buttons.calculateMaxVisible()

        for  (let page =  maxLeft; page <= maxRight; page++){
            buttons.create(page)
        }
    
    },
    calculateMaxVisible(){
        const { maxVisibleButtons} = state
        let maxLeft = (state.page - Math.floor(maxVisibleButtons / 2))
        let maxRight = (state.page + Math.floor(maxVisibleButtons / 2))

        if(maxLeft < 1){
            maxLeft = 1
            maxRight = maxVisibleButtons
        }
        if(maxRight > state.totalPage){
            maxLeft = state.totalPage - (maxVisibleButtons - 1)
            maxRight = state.totalPage

            if (maxLeft < 1) maxLeft = 1
        }
        return {maxLeft, maxRight}
    }
}

function update(){
    console.log(state.page)
    list.update()
    buttons.update()
}


function init(){
    update()
    controls.createListeners()
    
}

init()
