let zDebug = new (class zDebug{
    constructor() {
        this.log = ["Log by zDebug"];
    }

    addLog(e) {
        this.log[this.log.length] = e;
    }
}) ();

export { zDebug };