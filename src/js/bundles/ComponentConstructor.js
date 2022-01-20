class ComponentConstructor {
    constructor(components) {
        this.components = components
    }

    init() {
        this.components.forEach(component => {
            const dataSelect = 'data-' + component.selector
            const matchedElements = document.querySelectorAll('[' + dataSelect + ']')
        
            matchedElements.forEach(element => {
                const _component = new component.class(element, dataSelect)
                _component.init()
            })
        })
    }
}

export default ComponentConstructor