class NesefComponents{
    constructor() {
        console.log('constructor')
        this.el = {}
        // ************ BOTOES E LINKS *******************
        this.el.btnShowAboutNesef = document.getElementById('btn-show-nesef')
        this.el.btnShowLines = document.getElementById('btn-lines')
        this.el.btnShowEvents = document.getElementById('bt-show-events')

        // ############ ELEMENTOS BLOCOS DIV NESEF #############

        this.el.jumbo = document.getElementById('jumbo')
        this.el.logo = document.getElementsByClassName('imglogo')[0]

        this.el.events = document.getElementById('nesef-events')
        this.el.aboutNesef = document.getElementById('about-nesef')
        this.el.lines = document.getElementById('research-lines')


        this.elementsPrototype()
        this.initEvents()
    }

    initEvents(){
        console.log('initEvents')

        this.el.btnShowEvents.addEventListener('click', e => {
            this.el.events.show()

            this.el.jumbo.hide()
            this.el.logo.hide()
            this.el.aboutNesef.hide()
            this.el.lines.hide()
        })
        this.el.btnShowAboutNesef.addEventListener('click', e => {
            if (this.el.aboutNesef.style.display === 'block'){
                this.el.jumbo.show()
                this.el.logo.show()

                this.el.aboutNesef.hide()
                this.el.lines.hide()
                this.el.events.hide()
            } else{
                this.el.aboutNesef.show()

                this.el.jumbo.hide()
                this.el.logo.hide()
                this.el.lines.hide()
                this.el.events.hide();
            }

        })
        this.el.btnShowLines.addEventListener('click', e => {
            this.el.lines.show()

            this.el.jumbo.hide()
            this.el.logo.hide()
            this.el.aboutNesef.hide()
            this.el.events.hide();
        })
    }

    elementsPrototype() {
        Element.prototype.hide = function () {
            this.style.display = 'none'
            return this
        }
        Element.prototype.show = function () {
            this.style.display = 'block'
            return this
        }
        Element.prototype.toggle = function () {
            
            this.style.display = (this.style.display === 'none') ? 'block' : 'none'
            return this
        }
        Element.prototype.on = function (events, fn) {
            events.split(' ').forEach(event => {
                this.el.addEventListener(event, fn)
                //(exemplo para digitar no console) app.el.btnNewContact.on('click mouseover dblclick', (event) => {console.log('evento do botão newContact >>> ', event.type)})
            })
            return this
        }
    }
}
window.nesefApp = new NesefComponents()