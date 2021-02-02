// table処理クラス
let zTable = new (class zTable {

    // 簡易セル生成
    setCell(tx, th = false) {
        let td = document.createElement(th ? "th" : "td");
        td.innerText = tx;
        return td;
    }

    // json to table
    json2table(json) {
        let tbl = document.createElement("table");
        let thead = document.createElement("thead");
        tbl.appendChild(thead);
        let tr = document.createElement("tr");
        for (let j in json[0]) {
            tr.appendChild(this.setCell(j, true));
        }
        let tbody = document.createElement("tbody");
        tbl.appendChild(tbody);
        for (let i = 0; i < json.length; i++) {
            let tr = document.createElement("tr");
            for (let j in json[0]) {
                tr.appendChild(this.setCell(json[i][j]));
            }
            tbody.appendChild(tr);
        }
        return tbl;
    }

    // array to table
    array2table(arr, row = false ,col = false) {
        // config：1行目・1列目をthにするか？
        let tbl = document.createElement("table");
        let tbody = document.createElement("tbody");
        tbl.appendChild(tbody);
        for (let i = 0; i < arr.length; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; arr[i].length; j++) {
                tr.appendChild(
                    this.setCell(arr[i][j],
                        (i == 0 && row) || (j == 0 && col)
                    )
                );
            }
            tbody.appendChild(tr);
        }
        return tbl;
    }
})();

export { zTable };