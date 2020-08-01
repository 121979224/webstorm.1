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

//获取按钮值
var btn = document.getElementById("btn");
//获取卡片值
var head = document.getElementById("head");//获取隐藏玩家信息时头像值
var head1 = document.getElementById("head1");//获取显示玩家信息时头像值
var span = document.getElementById("span");
var p = document.getElementById("p");//获取玩家信息值
//点击次数奇偶数
var next = 0;//初始点击次数为0
var kipes = -1;//初始玩家数组下标为-1
btn.onclick = function (){
    next = next + 1;
    var x = next % 2;
    if (next == kipeArrName.length* 2){//判定点击次数是否是数组长度的两倍
        location.href="2-3.html";//两倍时则跳转页面
    }else if(!x == 0){//反判定是否为奇数
        head.style.display = "none";//为奇数时，显示玩家信息
        head1.style.display = "inline";
        var span1 = parseInt(span.innerHTML) + 1;
        btn.innerHTML = "隐藏并传递给"+ span1 +"号";
        kipes = kipes + 1;//为奇数时，数组下标+1
        p.innerHTML = "角色："+ kipeArrName[kipes];
        //console.log(kipeArrName[kipes]);
        //alert("奇数")
    }else{
        head.style.display = "inline";//为偶数时，隐藏玩家信息
        head1.style.display = "none";
        span.innerHTML = parseInt(span.innerHTML) + 1;
        btn.innerHTML = "查看"+ span.innerHTML +"号身份";
    }
    if (next == kipeArrName.length* 2-1){//点击次数是数组两倍减一时，则变化按钮
        btn.innerHTML = "法官查看"
    }
}