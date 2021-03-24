import ComponentsModule from './components/componentsModule.js';


export default () => {
    ComponentsModule.forEach( Component => {
        customElements.define(Component.tagName, Component)
    })
}