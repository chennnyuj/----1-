let 今天 = new Date();
今天.setHours(0,0,0,0);

let 回歸日期 = new Date(2026,9,19)

let 相差天數 = (回歸日期 - 今天) / (1000 * 60 * 60 * 24);

document.getElementById("倒數").innerHTML = "距離回歸日期還有 " + 相差天數 + " 天";
