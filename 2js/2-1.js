//杀手的人数和平民的人数
var killers=document.getElementById("killers");
var person=document.getElementById("person");
//取出词组文本框的值
var goodMan=document.getElementById("text");
var badMan=document.getElementById("text1");

//点击开始发牌
function fix(){
    var re=goodMan.value;//获取词组文本框value值
    var re1=badMan.value;
    var wz =/[\u4E00-\u9FFF]/;//纯文字正则表达式
    if(re==""||re1==""){//判定是否为空
        alert("词组不能为空");
    }else if(!wz.test(re)||!wz.test(re1)){//纯文字正则反判定是否为纯字符
        alert("词组不能为纯字符或字母");
        return false;
    }else if(re==re1){//判定两派词组是否相同
        alert("两派词组不能相同");
    }else{
        location.href="2-2.html";//跳转到反派页面
        localStorage.goodMan = goodMan.value;
        localStorage.badMan = badMan.value;
    }
    arr();//杀手平民数组函数
}

//取出输入框和滑块的值
var editText=document.getElementById("slideBar");
var slider=document.getElementById("slideBar1");
editText.onchange=function (){//用键盘事件与滑块关联
    slider.value=editText.value;
    change();//玩家匹配变化函数
    pointOut();//提示人数输入有误函数
}
slider.onmousemove=function (){//用鼠标滑动事件与输入框关联
    editText.value=slider.value;
    change();
}
function cut(){//点击减号使输入框和滑块value值同时减一
    slider.value=parseInt(slider.value)-1;
    editText.value=parseInt(editText.value)-1;
    change();
    pointOut();
}
function plus(){//点击加号使输入框和滑块value值同时加一
    slider.value=parseInt(slider.value)+1;
    editText.value=parseInt(editText.value)+1;
    change();
    pointOut();
}

//提示人数输入有误
function pointOut(){
    if(editText.value <4){
        alert("请输入正确的玩家人数");
        editText.value=4;
    }else if(editText.value >18){
        alert("请输入正确的玩家人数");
        editText.value=18;
    }
}

//玩家匹配变化函数
function change(){
    if(slider.value <6){
        killers.innerHTML=1;//当人数小于6人时，杀手为1人
        person.innerHTML=editText.value-killers.innerHTML;//总数减去杀手的平民人数
    }else if(slider.value <9){
        killers.innerHTML=2;//当人数小于9人时，杀手为2人
        person.innerHTML=editText.value-killers.innerHTML;
    }else if(slider.value <12){
        killers.innerHTML=3;//当人数小于12人时，杀手为3人
        person.innerHTML=editText.value-killers.innerHTML;
    }else if(slider.value <16){
        killers.innerHTML=4;//当人数小于16人时，杀手为4人
        person.innerHTML=editText.value-killers.innerHTML;
    }else if(slider.value <19){
        killers.innerHTML=5;//当人数小于19人时，杀手为5人
        person.innerHTML=editText.value-killers.innerHTML;
    }
}

//创建杀手和平民数组
function arr(){
    var killerArr=[];
    for (var i=0;i< killers.innerHTML;i++){
        killerArr[i]="杀手";
        localStorage.killers = killerArr.length;//取出保存杀手数量
    }
    var personArr=[];
    for (var i=0;i< person.innerHTML;i++){
        personArr[i]="平民"
        localStorage.persons = personArr.length;//取出保存平民数量
    }
    var kipeArr=killerArr.concat(personArr);//合并数组
    //洗牌算法
    for (var i=kipeArr.length-1;i>=0;i--){//数组元素顺序倒换
        var ran=Math.floor(Math.random()*(i+1));//循环随机取出一个值
        var ite=kipeArr[ran];
        kipeArr[ran]=kipeArr[i];
        kipeArr[i]=ite;
    }
    //将数组本地存储并转换成字符串
    localStorage.setItem("kipeArr",JSON.stringify(kipeArr));
}
//console.log(typeof killers.innerHTML);
localStorage.firstDay = 1;
var tips = [];//创建数组方便后面使用
localStorage.setItem('tipsarr',JSON.stringify(tips));