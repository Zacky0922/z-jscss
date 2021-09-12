export function getCountdown(startDate, endDate) {
  let now = new Date();
  let diff = start.getTime() - now.getTime();
  let dif = {};

  // フラグ設定
  // 開始前？
  dif.before = startDate.getTime() - now.getTime() > 0;
  // 終了後？
    dif.finish = now.getTime() - endDate.getTime() > 0;
    
    // 開始までの時間
    dif.toStart = startDate.getTime() - now.getTime();
    
}
