class Header extends HTMLElement{
    constructor(){
        super()
        this.build()
    }

    build(){
        const shadow = this.attachShadow({mode:'open'})
        shadow.appendChild(this.styles())

        const header = this.createHeader()
        const logo = this.createLogo()
        const menu = this.createMenu()
        const container = this.createContainer()
        const listaMenu = this.createLista()

        header.appendChild(listaMenu)

        header.appendChild(logo)
        header.appendChild(menu)


        shadow.appendChild(header)

    }
    createHeader(){
        const header = document.createElement('header')
        header.classList.add('cabecalho')
        header.setAttribute('cor-fundo', '#fff')
        header.setAttribute('src', './')
        

        return header
    }

    createLogo(){
        const logo = document.createElement('img')
        logo.classList.add('cabecalho--logo')
        
        logo.src = this.getAttribute('src') + 'img/Logo-Portal.png'
        

        return logo
    }

    createMenu(){
        const menu = document.createElement('img')
        menu.classList.add('cabecalho--menu')
        menu.src = this.getAttribute('src') + 'img/Menu.svg'

        return menu
    }

    createContainer(){
        const container = document.createElement('div')
        container.classList.add("cabecalho--container")

        return container
    }

    createLista(){
        const listaMenu = document.createElement('ul')
        const caminho = this.getAttribute('src')
        listaMenu.classList.add('lista--menu')
        listaMenu.style.display='none'
        listaMenu.innerHTML = `
        <li class = "lista--menu-item"> <a class=" lista--menu-link"  href='${caminho}/index.html'> HOME </a> </li>
        <li class = "lista--menu-item"> <a class=" lista--menu-link"  href='${caminho}pages/index-scratch.html'> NOTÍCIAS </a> </li>
        <li class = "lista--menu-item"> <a class=" lista--menu-link"  href='${caminho}pages/index-scratch.html'> PROJETOS </a> </li>
        <li class = "lista--menu-item"> <a class=" lista--menu-link"  href='${caminho}Pages/Scratch/index-scratch.html'> SCRATCH </a> </li>
        <li class = "lista--menu-item"> <a class=" lista--menu-link"  href='${caminho}pages/index-scratch.html'> AGRINHO </a> </li>
    `
        return listaMenu
    }

    connectedCallback(){
        const menu = this.shadowRoot.querySelector('.cabecalho--menu')
        const listaMenu= this.shadowRoot.querySelector('.lista--menu')

        const body = document.querySelector('body')
        const efeito = document.querySelector('.efeito')
        
      
        menu.addEventListener('click', () => {
            let visualizacao = listaMenu.style.display
            if(visualizacao == 'none'){
                listaMenu.style.display = 'block'
                body.style.overflow = 'hidden'
                efeito.style.display = 'block'
            }
        })
        efeito.addEventListener('click', () => {
            efeito.style.display = 'none'
            listaMenu.style.display = 'none'
            body.style.overflow = 'visible'

        })
        
    }



    styles(){
        const style = document.createElement('style')
        style.textContent = `
            .cabecalho{
                background-color:${this.getAttribute('cor-fundo')};
                display: flex;
                justify-content: space-between;
                padding: 0.3em;
                
               
            }
            .cabecalho--logo{
                width: 50px;
                height: 48px;
                
            }
           
            .lista--menu{
                background: #111111;
                color: #fff;
                position: fixed;
                bottom: 0;
                left: 0;
                height: 100vh;
                text-decoration: none;
                list-style-type: none;
                text-align: center;
                width: 60%;
                z-index:7;

            }
            .lista--menu-item{
                margin-top: 2em;
                margin-right: 2em;
                padding: 1em;

            }
            .lista--menu-link{
                color: #fff;
                text-decoration: none;
                list-style-type: none;
            }
            .lista--menu-link:hover{
                color: black;
            }
            @media screen and (min-width: 780px){
                .cabecalho--logo, .cabecalho--menu {
                    margin: 0 50px
                }
                .lista--menu{
                    width: 30%;
                }
            }
        `
        return style
    }
}

customElements.define('header-component', Header)