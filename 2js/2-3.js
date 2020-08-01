//将数组取出并转化成对象
var kipeArrName = JSON.parse(localStorage.getItem("kipeArr"));

//点击弹出提示框
var quit = document.getElementById("quit");//取出返回键值
quit.onclick = function (){
    var box = confirm("确认退出游戏吗？");
    if(box == true){//判断是否退出游戏
        location.href="2.html";
        localStorage.clear();//将本地存储全部删除
    }
}

//获取子节点的父节点
var main = document.querySelector("main");
//遍历所有动态添加div
for (i = 0;i< kipeArrName.length;i++){
    var box = document.createElement("div");//添加子节点
    box.className = "tips";//获取css属性
    main.appendChild(box);//把box添加到父级中
    var boxspan = document.createElement("span");//添加文字节点
    box.appendChild(boxspan);
    boxspan.innerHTML = kipeArrName[i];//添加玩家信息
    var boxm = document.createElement("div");//添加节点的子节点
    boxm.className = "tips-1";
    box.appendChild(boxm);
    boxm.innerHTML = i + 1;//添加玩家对应的个数
}

//获取按钮属性
var btn = document.querySelector("button");
btn.onclick = function(){
    localStorage.next= "#fbb435";
    location.href="2-4.html";
}
btn.style.background = localStorage.next;
if (!btn.style.background == ""){
        btn.innerHTML = "返回"
}
//console.log(btn);

var boxs = document.querySelectorAll(".tips");
//将空数组取出
var tipsarr = JSON.parse(localStorage.getItem('tipsarr'));
//将死亡玩家变色
for (var i = 0;i< tipsarr.length;i++){
    var sw = tipsarr[i];
    boxs[sw].style.background = "rgba(50,180,180,0.5)";
}