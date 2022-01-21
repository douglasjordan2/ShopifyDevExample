function ComponentConstructor(components) {
    Object.entries(components).forEach(([selector, Component]) => {
        const dataSelect = 'data-' + selector
        const matchedElements = document.querySelectorAll('[' + dataSelect + ']')

        matchedElements.forEach(element => {
            const component = new Component(element, dataSelect)
            component.init()
        })
    })
}

export default ComponentConstructor