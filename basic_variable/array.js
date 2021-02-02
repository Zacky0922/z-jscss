// 配列処理クラス
let zArray = new (class {
    
    // 配列を転置する
    transpose(arr) {
        let arr_ = new Array(new Array());
        for (let i = 0; i < arr.length; i++){
            for (let j = 0; j < arr[i].length; j++){
                arr_[j][i] = arr[i][j];
            }
        }
        return arr_;
    }
})

export { zArray };