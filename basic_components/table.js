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
        console.log("json2table");
        let tbl = document.createElement("table");
        let thead = document.createElement("thead");
        tbl.appendChild(thead);
        let tr = document.createElement("tr");
        for (let j in json[0]) {
            tr.appendChild(setCell(j, true));
        }
        let tbody = document.createElement("tbody");
        tbl.appendChild(tbody);
        for (let i = 0; i < json.length; i++) {
            let tr = document.createElement("tr");
            for (let j in json[0]) {
                tr.appendChild(setCell(json[i][j]));
            }
            tbody.appendChild(tr);
        }
        return tbl;
    }
}) ();

export { zTable };