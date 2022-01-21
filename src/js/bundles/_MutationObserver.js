class _MutationObserver {
    constructor(observeElem, cb, disconnect, options) {
        this.observeElem = observeElem
        this.disconnect = disconnect || false
        this.cb = cb
        this.options = options || {
            subtree: true,
            childList: true
        }

        this.MutationObserver = window.MutationObserver || window.WebKitMutationObserver
    }

    observe() {
        const observer = new this.MutationObserver(() => {
            this.cb()
            if(this.disconnect) {
                observer.disconnect()
            }
        })

        observer.observe(this.observeElem, this.options)
    }
}

export default _MutationObserver