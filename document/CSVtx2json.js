export function CSVtx2json(tx) {
    let json = [];

    // // 多重配列用区切り文字
    // let sep = "&&&&&&&&&&";
    // // sepがテキスト内にないことを確認
    // while(tx.indexOf(sep)>-1){
    //     sep += sep;
    // }

    // 列名抽出
    tx = tx.split("\r\n");
    tx[0] = tx[0].split(",");

    // 各行処理
    for (let i = 1; i < tx.length - 1; i++) {
        json[i - 1] = {};
        tx[i] = tx[i].split(",");
        for (let j = 0; j < tx[i].length; j++) {
            json[i - 1][tx[0][j]] = tx[i - 1][j];
        }
    }
    return json;
}