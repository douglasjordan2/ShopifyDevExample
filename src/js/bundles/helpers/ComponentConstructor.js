function ComponentConstructor(components) {
    Object.entries(components).forEach(([selector, Component]) => {
        const dataSelect = 'data-' + selector
        const matchedElements = document.querySelectorAll('[' + dataSelect + ']')

        matchedElements.forEach(element => {
            new Component(element, dataSelect).init()
        })
    })
}

export default ComponentConstructor