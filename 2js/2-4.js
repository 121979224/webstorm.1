//点击弹出提示框
var quit = document.getElementById("quit");//取出返回键值
quit.onclick = function (){
    var box = confirm("确认退出游戏吗？");
    if(box == true){//判断是否退出游戏
        location.href="2.html";
        localStorage.clear();//将本地存储全部删除
    }
}

//取出初始值
var first = localStorage.getItem('firstDay');
//父元素值
var main = document.querySelector("main");
//生成div
for (var i = 0; i < first;i++){
    var nav = document.createElement("nav");
    main.appendChild(nav);
    var title = document.createElement('div');
    title.id = 'title';
    title.innerHTML = `第${i+1}天`;
    nav.appendChild(title);
    var uls = document.createElement('ul')
    nav.appendChild(uls);
    var png = document.createElement('div');
    png.className = 'png';
    uls.appendChild(png);
    var img1 = document.createElement('img');
    img1.className = 'img1';
    img1.src ="13w/月亮.png";
    png.appendChild(img1);
    var img2 = document.createElement('img');
    img2.className = 'img2';
    img2.src ="13w/太阳.png";
    png.appendChild(img2);
    var lis = document.createElement("li");
    lis.innerHTML = '杀手杀人';
    lis.id = 'li0';
    uls.appendChild(lis);
    var span = document.createElement('span');
    span.id = 'span0';
    span.innerHTML = '1号被杀手杀死，真实身份是平民';
    uls.appendChild(span);
    var span1 = document.createElement('span');
    span1.id = 'span1';
    span1.innerHTML = '1号被杀手杀死，真实身份是平民';
    uls.appendChild(span1);
    var lis1 = document.createElement('li');
    lis1.innerHTML = '亡灵发表遗言';
    lis1.id = 'li1';
    uls.appendChild(lis1);
    var lis2 = document.createElement('li');
    lis2.innerHTML = '讨论';
    lis2.id = 'li2'
    uls.appendChild(lis2);
    var lis3 = document.createElement('li');
    lis3.innerHTML = '投票';
    lis3.id = 'li3';
    uls.appendChild(lis3);
}

//获取下拉框属性
var title = document.querySelectorAll('#title');
var ul = document.querySelectorAll("ul");
//添加事件
for(var i = 0;i<title.length;i++){
    ul[i].style.display = 'block';
    title[i].index = i;
    title[i].onclick = function(){
        if(ul[this.index].style.display == "block"){
            ul[this.index].style.display = "none";
        }else if(ul[this.index].style.display == 'none'){
            ul[this.index].style.display = 'block';
        }
    }
}

//获取点击内容
var li0s = document.querySelectorAll('#li0');
var li1s = document.querySelectorAll('#li1');
var li2s = document.querySelectorAll('#li2');
var li3s = document.querySelectorAll('#li3');
//添加事件
for(i = 0;i < first;i++){
    li0s[i].onclick = function(){
        if(this.style.background == ''){//背景颜色未变则触发事件
            alert('请杀手杀人');
            this.style.background = "#6f949d";
            localStorage.color = "#6f949d";
            localStorage.night = '杀手'
            location.href = "2-5.html";
        }
    }
    li0s[i].style.background = localStorage.color;
    li1s[i].onclick = function(){
        if(li0s[first-1].style.background == ""&&this.style.background == ""){//上个事件未触发则不能继续
            alert("请按照流程顺序进行游戏");
        }else if(this.style.background == ""){
            alert("死者亮明身份并发表遗言");
            this.style.background = "#6f949d";
        }
    }
    li2s[i].onclick = function(){
        if(li1s[first-1].style.background == ""&&this.style.background == ""){
            alert("请按照流程顺序进行游戏");
        }else if(this.style.background == ""){
            alert("玩家依次发言讨论");
            this.style.background = "#6f949d";
        }
    }
    li3s[i].onclick = function(){
        if(li2s[first-1].style.background == ""&&this.style.background == ""){
            alert("请按照流程顺序进行游戏");
        }else if(this.style.background == ""){
            first = parseInt(first) + 1;
            localStorage.firstDay = first;
            localStorage.removeItem('color');
            localStorage.removeItem('night');
            location.href = "2-5.html";
        }
    }
}

//获取记录值
var span0 = document.querySelectorAll('#span0');
var span1 = document.querySelectorAll('#span1');

//遍历当天之前的天数按钮变色
for(i = 0;i< first-1;i++){
    li0s[i].style.background = '#6f949d';
    li1s[i].style.background = '#6f949d';
    li2s[i].style.background = '#6f949d';
    li3s[i].style.background = '#6f949d';
    ul[i].style.display = 'none';
    span0[i].style.opacity = '1';//将玩家死亡记录显示
    span1[i].style.opacity = '1';
}

//判定点击后显示
if(!li0s[first-1].style.background == ''){
    span0[first-1].style.opacity = '1';
}

//将数组取出并转化成对象
var kipeArrName = JSON.parse(localStorage.getItem("kipeArr"));
var tipsarr = JSON.parse(localStorage.getItem('tipsarr'));

//创建玩家号码、身份数组
var feel = [];//偶数数组
var statusarr = [];
var feel1 = [];//奇数数组
var statusarr1 = [];
for (var i = 0;i< tipsarr.length;i++){
    if(i%2 == 0){//遍历出偶数下标并返回数组
        feel.push(tipsarr[i]);
        var ss = tipsarr[i];
        statusarr.push(kipeArrName[ss]);
    }else{//遍历奇数下标返回数组
        feel1.push(tipsarr[i]);
        var ts = tipsarr[i];
        statusarr1.push(kipeArrName[ts]);
    }
}

//遍历被杀死和被投死的信息
for (var i = 0;i<feel.length;i++){
    span0[i].innerHTML = `${feel[i]+1}号被杀死，真实身份是${statusarr[i]}`;
    span1[i].innerHTML = `${feel1[i]+1}号被投死，真实身份是${statusarr1[i]}`
}

//获取按钮属性
var btn = document.querySelectorAll("button");
btn[1].onclick = function(){
    location.href = "2-3.html";
}