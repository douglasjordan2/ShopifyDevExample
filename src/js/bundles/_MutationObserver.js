class _MutationObserver {
    constructor(observeElem, cb, options) {
        this.observeElem = observeElem
        this.cb = cb
        this.options = options || {
            subtree: true,
            childList: true
        }

        this.MutationObserver = window.MutationObserver || window.WebKitMutationObserver
    }

    observe() {
        const observer = new this.MutationObserver(this.cb)
        observer.observe(this.observeElem, this.options)
    }
}

export default _MutationObserver