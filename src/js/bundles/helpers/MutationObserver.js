function MutationObserver(
    observeElem, 
    cb, 
    disconnect, 
    options = {
        subtree: true,
        childList: true
    }
) {
    const _MutationObserver = window.MutationObserver || window.WebKitMutationObserver
    const observer = new _MutationObserver(() => {
        cb()

        if(disconnect) {
            observer.disconnect()
        }
    })

    observer.observe(observeElem, options)
}

export default MutationObserver