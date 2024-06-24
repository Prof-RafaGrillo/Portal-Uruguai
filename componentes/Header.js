class Header extends HTMLElement{
    constructor(){
        super()
        this.build()
    }

    build(){
        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(this.styles())

        const header = this.createHeader()
        const container = this.createContainer()
        const menu = this.createMenu()
        const logo = this.createLogo()
        const logo2 = this.createLogo2()
        const listaMenu = this.createLista()

        
        container.appendChild(listaMenu)
        container.appendChild(menu)
        container.appendChild(logo)
        
        header.appendChild(container)
        header.appendChild(logo2)
        shadow.appendChild(header)
       
    }

    createHeader(){
        const header = document.createElement('header')
        header.classList.add('cabecalho')
        
        return header
    }

    createContainer(){
        const container = document.createElement('div')
        container.classList.add('cabecalho--container')
        


        return container
    }

    createMenu(){
        const menu = document.createElement('img')
        menu.classList.add('cabecalho--menu')
        
        menu.setAttribute('src', "")
        menu.src = this.getAttribute('src' ) + 'img/Menu.svg'
       
       


        return menu
    }

    createLista(){
        const listaMenu = document.createElement('ul')
        const caminho = this.getAttribute('src')
        listaMenu.classList.add('lista--menu')
        listaMenu.style.display = 'none'
        listaMenu.innerHTML = `
            <li class = "lista--menu-item"> <a class=" lista--menu-link"  href='${caminho}/index.html'> HOME </a> </li>
            <li class = "lista--menu-item"> <a class=" lista--menu-link"  href='${caminho}pages/index-scratch.html'> NOTÍCIAS </a> </li>
            <li class = "lista--menu-item"> <a class=" lista--menu-link"  href='${caminho}pages/index-scratch.html'> PROJETOS </a> </li>
            <li class = "lista--menu-item"> <a class=" lista--menu-link"  href='${caminho}pages/index-scratch.html'> SCRATCH </a> </li>
            <li class = "lista--menu-item"> <a class=" lista--menu-link"  href='${caminho}pages/index-scratch.html'> AGRINHO </a> </li>
        
        `
        
        return listaMenu
    }

    createLogo(){
        const logo = document.createElement('img')
        logo.classList.add('cabecalho--logo1')
        
        logo.setAttribute('src', "")
        logo.src = this.getAttribute('src' ) + 'img/Logo_News.png'


        return logo
    }

    createLogo2(){
        const logo2 = document.createElement('img')
        logo2.classList.add('cabecalho--logo2')
        
        logo2.setAttribute('src', "")
        logo2.src = this.getAttribute('src' ) + 'img/Portal_Uruguai.png'


        return logo2
    }


    connectedCallback(){
        const menu = this.shadowRoot.querySelector('.cabecalho--menu');
        const listaMenu = this.shadowRoot.querySelector('.lista--menu')
       

        menu.addEventListener('click', ()=>{
            let visualizacao = listaMenu.style.display
            if (visualizacao == 'none'){
                listaMenu.style.display =  'block'
                
            } 
            else if (visualizacao == 'block'){
                listaMenu.style.display = 'none'
                
            }
        })
    }

    styles(){
        const style  = document.createElement('style')
        style.textContent = `
            .cabecalho{
                background-color: rgba(224, 236, 255, 0.897);
                height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                
            }
            .cabecalho--container{
                display:flex;
                align-items: center;
            }
            .cabecalho--logo1{
                width: 50%
            }
            .cabecalho--logo2{
                width: 90%
            }
            .lista--menu{
                display: none;
                margin:0px;
                padding: 0px;
                position:absolute;
                top: 100%;
                width:60%;
            }
            .lista--menu-item{
                text-transform: uppercase;  
                padding: 1em;
                background-color: rgba(224, 236, 255, 0.95);
                list-style-type: none;

            
            }
            .lista--menu-link{
                color: darkblue;
                text-decoration:none;
                list-style-type: none;
            }
            @media screen and (min-width: 768px){
                .cabecalho{
                    height: 150px;
                    justify-content: space-between;
                }

                .cabecalho--menu{
                    margin-left: 100px;
                }

                .cabecalho--logo1{
                    width: 150px;
                    height: 150px;
                } 
                .cabecalho--logo2{
                    width:20%;
                    margin-right: 100px;
                    
                }
            }
        `
        return style
    }
}

customElements.define('header-component', Header)