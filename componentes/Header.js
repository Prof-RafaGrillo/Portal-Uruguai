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
        const listaMenuDesktop = this.createListaDesktop()

        const containerDesktop = this.createContainerDesktop()
        

        
        container.appendChild(listaMenu)
        container.appendChild(menu)
        container.appendChild(logo)

        containerDesktop.append(listaMenuDesktop)
        
        header.appendChild(container)
        header.appendChild(containerDesktop)
        header.appendChild(logo2)
        shadow.appendChild(header)
       
    }

    createHeader(){
        const header = document.createElement('header')
        header.classList.add('cabecalho')
        header.setAttribute('cor-fundo', 'rgba(224, 236, 255, 0.897)')
        console.log(this.getAttribute('cor-fundo'))
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

    createContainerDesktop(){
        const container = document.createElement('div')
        container.classList.add('container--desktop')

        return container
    }

    createListaDesktop(){
        const listaMenu = document.createElement('ul')
        const caminho = this.getAttribute('src')
        listaMenu.classList.add('lista--menu--desktop')
        listaMenu.innerHTML = `
            <li class = "lista--menu-item-desktop"> <a class=" lista--menu-link-desktop"  href='${caminho}Pages/index-scratch.html'> NOTÍCIAS </a> </li>
            <li class = "lista--menu-item-desktop"> <a class=" lista--menu-link-desktop"  href='${caminho}Pages/index-scratch.html'> PROJETOS </a> </li>
            <li class = "lista--menu-item-desktop"> <a class=" lista--menu-link-desktop"  href='${caminho}Pages/Scratch/index-scratch.html'> SCRATCH </a> </li>
            <li class = "lista--menu-item-desktop"> <a class=" lista--menu-link-desktop"  href='${caminho}Pages/index-scratch.html'> AGRINHO </a> </li>
        
        `
        
        return listaMenu
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
                background-color: ${this.getAttribute('cor-fundo')};
                height: 100px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: relative;
                font-family: "Roboto", sans-serif;
                
            }
            .cabecalho--container{
                display:flex;
                align-items: center;

            }
            .cabecalho--logo1{
                width: 100px;
            }
            .cabecalho--logo2{
                width: 200px;
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

            .lista--menu--desktop{
                display: none;
            }

            @media screen and (min-width: 768px){
                .cabecalho{
                    height: 250px;
                    justify-content: space-between;
                }

                .cabecalho--menu{
                    display:none;
                    margin-left: 100px;
                }

                .cabecalho--logo1{
                    width: 200px;
                    height: 200px;
                    margin-left: 50px;
                } 
                
                .cabecalho--logo2{
                    width: 300px;
                    margin-right: 100px;
                    
                }

                .lista--menu--desktop{
                   display:flex;
                    margin:0px;
                    padding: 0px;
                   
                }
                .lista--menu-item-desktop{
                    text-transform: uppercase;  
                    padding: 1em;
                    background-color: transparent;
                    list-style-type: none;
                    font-size: 28px;
                }
                .lista--menu-link-desktop{
                    text-decoration: none;
                  
                }
            }
        `
        return style
    }
}

customElements.define('header-component', Header)