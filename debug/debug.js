let zDebug = new (class zDebug {
    constructor() {
        this.log = ["Log by zDebug"];
    }

    // URL query取得（戻り値：String）
    getUrlQuery() {
        let query = window.location.search;
        if (query == '' || query == null) {
            return {};
        }
        // ?をとって、パラメータ毎に区切る
        query = query.substring(1, query.length).split('&');
        let ret = {};
        for (let i = 0; i < query.length; i++) {
            let q = query[i].split("=");
            ret[q[0]] = (q.length == 1 ? null : q[1]);
        }
        return ret;
    }

    // URL query設定
    // nowQuery：古いクエリを参照するか？（新規設定に同じkeyがあった場合は上書きされるけど）
    setUrlQuery(query, nowQuery = false) {
        let q = "?";
        // 従来のQueryを取得
        if (nowQuery) {
            let oldQ = this.getUrlQuery().concat(query);
        }
        // 新しいQueryを設定 
        for (let key in query) {
            q += (q == "?" ? "" : "&") +
                key + (query[key] == null ? "" : "=" + query[key]);
        }
        let url = window.location.href.split("?")[0];
        window.open(url + q, "_self");
    }

    addLog(e) {
        this.log[this.log.length] = e;
    }
})();

export { zDebug };