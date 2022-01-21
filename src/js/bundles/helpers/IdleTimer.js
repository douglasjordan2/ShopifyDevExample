class IdleTimer {
    constructor(cb, interval) {
        this.idleTimer = null
        this.timer(cb, interval)
    }

    timer(cb, interval=500) {
        clearTimeout(this.idleTimer)
        this.idleTimer = setTimeout(cb, interval)
    }
}

export default IdleTimer