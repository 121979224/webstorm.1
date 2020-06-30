var a=document.getElementsByClassName("box");
function reset() {
    for(var i = 0; i < a.length; i++){//
        a[i].style.background ="#fea500";
    }
}
function btn(){
    reset();
    var b,c,d;
    b=Math.floor(Math.random()*9);//随机生成0到8的随机数
    c=Math.floor(Math.random()*9);
    d=Math.floor(Math.random()*9);
    for(;b==c||b==d||c==d;){//使用for循环判定表达式,只要一个判定相等，就重新执行
        b=Math.floor(Math.random()*9);
        c=Math.floor(Math.random()*9);
        d=Math.floor(Math.random()*9);
    }
    var colour,colour1,colour2; //颜色判定相等，就重新执行
    for(;colour==colour1||colour==colour2||colour1==colour2;){
        colour=a[b].style.background=rgb();
        colour1=a[c].style.background=rgb();
        colour2=a[d].style.background=rgb();
    }
}
function rgb(){
    var r,g,b;  //随机生成rgb三个颜色随机数，并返回数值
    r=Math.floor(Math.random()*255+1);
    g=Math.floor(Math.random()*255+1);
    b=Math.floor(Math.random()*255+1);
    return 'rgb('+r+','+g+','+b+')';
}
var s;
function start(){  //点击开始执行代码
    clearInterval(s);
    s=setInterval(btn,1000);
}
function stop(){  //点击停止
    clearInterval(s);
    reset();
}