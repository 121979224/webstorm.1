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
for (var i = 0;i< kipeArrName.length;i++){
    var box = document.createElement("div");//添加子节点
    box.className = "tips";//获取css属性
    main.appendChild(box);//把box添加到父级中
    var boxspan = document.createElement("span");//添加文字节点
    boxspan.id = "spans"
    box.appendChild(boxspan);
    boxspan.innerHTML = kipeArrName[i];//添加玩家信息
    var boxm = document.createElement("div");//添加节点的子节点
    boxm.className = "tips-1";
    box.appendChild(boxm);
    boxm.innerHTML = i + 1;//添加玩家对应的个数
    var img = document.createElement("img");//添加图片节点
    img.className = "img1";
    img.src ="13w/雪碧图组.png";//添加图组
    box.appendChild(img);
    img.style.display = "none";
}
//获取元素集合
var imgs = document.querySelectorAll(".img1");
var boxs = document.querySelectorAll(".tips");
var spans = document.querySelectorAll("#spans");
var boxms = document.querySelectorAll(".tips-1");
//使用排他思想
for (var i = 0;i< boxs.length;i++){
    boxs[i].index = i;
    boxs[i].addEventListener('click',function(){
        for (var j = 0; j< boxs.length;j++){
            imgs[j].style.display = "none";
        }
        if(this.style.background == ""){
            imgs[this.index].style.display = "block";
            localStorage.name = spans[this.index].innerHTML;
            boxArr = [this.index];//获取被点击元素的索引
        }else{
            boxArr = [];
        }
    })
}

//取出杀手和平民数量
var killers = localStorage.getItem('killers');
var persons = localStorage.getItem('persons');

//创建空数组保存索引
var boxArr = [];
//将空数组取出
var tipsarr = JSON.parse(localStorage.getItem('tipsarr'));
var btn = document.querySelector("button");
btn.onclick = function(){
    if(localStorage.night == localStorage.name){
        alert('杀手不能杀死本职业，请选择其他玩家');
    }else if(boxArr[0] == null){
        alert("请选择一名玩家");
    }else{
        fate();
        tipsarr.push(boxArr[0]);//将获取索引的数组值添加在空数组
        localStorage.setItem("tipsarr",JSON.stringify(tipsarr));//保存数组到本地
        location.href = "2-4.html";
    }
    if(killers > parseInt(persons) || killers == 0){//判断杀手人数是否为0，平民人数是否小于杀手
        alert("游戏结束");
        location.href = "2-6.html";
    }
}

//将死亡玩家变色
for (var i = 0;i< tipsarr.length;i++){
    var sw = tipsarr[i];
    boxs[sw].style.background = "rgba(50,180,180,0.5)";
}

//确定一次人数减一
function fate(){
    var names = localStorage.getItem('name');
    if(names =="杀手"){
        killers = killers - 1;
        localStorage.killers = killers;
    }else{
        persons = persons - 1;
        localStorage.persons = persons;
    }
}
var span = document.querySelector('#span');
if(localStorage.night == '杀手'){
    span.innerHTML = '杀手杀人';
}
