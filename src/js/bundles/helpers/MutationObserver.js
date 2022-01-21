class MutationObserver {
    constructor(observeElem, cb, disconnect, options) {
        this.observeElem = observeElem
        this.cb = cb
        this.disconnect = disconnect || false
        this.options = options || {
            subtree: true,
            childList: true
        }

        this.MutationObserver = window.MutationObserver || window.WebKitMutationObserver
        this.init()
    }

    init() {
        this.observer = new this.MutationObserver(async () => {
            await this.cb()

            if(this.disconnect) {
                this.stop()
            }
        })

        this.observe()
    }

    observe() {
        this.observer.observe(this.observeElem, this.options)
    }

    stop() {
        this.observer.disconnect()
    }

    reload() {
        this.stop()
        this.observe()
    }
}

export default MutationObserver