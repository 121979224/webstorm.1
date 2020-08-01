//取出杀手和平民数量
var killers = localStorage.getItem('killers');
var persons = localStorage.getItem('persons');

var span0 = document.querySelector('#span0');
var spans = document.querySelector('#spans');
var spanp = document.querySelector('#spanp');

if(killers == 0){
    span0.innerHTML = '平民胜利';
}else if(persons < killers){
    span0.innerHTML = '杀手胜利';
}

//显示剩余人数
spans.innerHTML = `杀手剩余${killers}人`;
spanp.innerHTML = `平民剩余${persons}人`;

var vocs = document.querySelector('#vocs');
var vocp = document.querySelector('#vocp');
var badMan = localStorage.badMan;
var goodMan = localStorage.goodMan;

vocs.innerHTML = `杀手词汇：${badMan}`;
vocp.innerHTML = `平民词汇：${goodMan}`;

var contes = document.querySelector('.contes');
var dav = localStorage.firstDay;
for (var i = 0;i< dav;i++){
    var msg = document.createElement('div');
    msg.className = 'msg';
    contes.appendChild(msg);
    var msg1 = document.createElement('div');
    msg1.className = 'msg-1';
    msg.appendChild(msg1);
    var div = document.createElement('div');
    msg1.appendChild(div);
    var span = document.createElement('span');
    span.innerHTML = `第${i+1}天`;
    div.appendChild(span);
    spanx = document.createElement('span');
    spanx.className = 'span-1';
    div.appendChild(spanx);
    spanw = document.createElement('p');
    spanw.className = 'spanw';
    msg1.appendChild(spanw);
    spanw = document.createElement('p');
    spanw.className = 'spanb';
    msg1.appendChild(spanw);
}
var spanw = document.querySelectorAll('.spanw');
var spanb = document.querySelectorAll('.spanb');

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
    spanw[i].innerHTML = `晚上：${feel[i]+1}号被杀死，真实身份是${statusarr[i]}`;
    spanb[i].innerHTML = `白天：${feel1[i]+1}号被投死，真实身份是${statusarr1[i]}`
}

var msgs = document.querySelectorAll('.msg');
var spanl = spanw.length + spanb.length;
if(spanl > tipsarr.length){
    spanb[dav-1].style.opacity = '0';//隐藏超出的信息
}
if(spanl = tipsarr.length){
    msgs[dav-1].style.opacity = '0';
}

var btn = document.querySelector('.btn');
btn.onclick = function(){
    location.href = '2.html';
    localStorage.clear();//将本地存储全部删除
}