import template from './user.template.html'
import style from './user.styles.scss'
import EdsComponent from 'edscomponent'

export default class User extends EdsComponent{

    constructor(){
        super(style, template)
        this.style = style
        this.template = template
    }

    static get tagName(){
        return 'app-user'
    }

    static get observedAttributes(){
        return[
            'data-name',
            'data-image',
            'data-job'
        ]
    }

    attributeChangedCallback(name, oldV, newV){
        if(oldV == null) return
        this.insertAttributes()
        this.render()
    }

}