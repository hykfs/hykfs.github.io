/* <------------换肤设置------------> */
var img = document.querySelector('img');
var ul = document.querySelector('ul');
var span = document.querySelector('#tt');
var imgs = document.querySelector('ul').querySelectorAll('img');
var flag = 0;
img.onclick = function() {
    if (flag == 0) {
        ul.style.display = 'block';
        span.innerHTML = '⬆️';
        flag = 1;
    } else {
        ul.style.display = 'none';
        span.innerHTML = '⬇️';
        flag = 0;
    } 
};
for (var i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function() {
        document.body.style.backgroundImage = 'url(' + this.src + ')';
        document.body.className = 'hyk';
    }
};

/* <------------系统时间显示------------> */
setInterval("time()", 1000);
function time() {
    var vWeek, vWeek_s, vDay;
    vWeek = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var date =  new Date()
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    hours = date.getHours();
    minutes = date.getMinutes();
    minutes = minutes < 10? '0' + minutes : minutes;
    seconds = date.getSeconds();
    seconds = seconds < 10? '0' + seconds : seconds;
    vWeek_s = date.getDay()
    document.querySelector(".box1").innerHTML = year + "年" + month + "月" + day + "日";
    document.querySelector('.box2').innerHTML = hours + ":" + minutes + ":" + seconds + "\t" + vWeek[vWeek_s];
};

//禁止鼠标选中
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

/* <---------根据系统时间显示不同问候语---------> */
feishi();
function feishi() {
    var content = document.querySelector('.content');
var date = new Date();
var h = date.getHours(); 
if ( h <= 11) {
    content.innerHTML = '<p>清晨的美好就如青草般芳香</p><p>如河溪般清澈</p><p>如玻璃般透明</p><p>如甘露般香甜</p><p>亲爱的朋友</p><p>早上好</p><p>愿你今天有个好心情!</p>';
} else if ( h <= 12) {
    content.innerHTML = '<p>让我的友情变成你的影子</p><p>陪伴你寂寞的光荫</p><p>让我的祝福变成雄心</p><p>鼓励你走过艰难困境</p><p>生活没有一帆风顺</p><p>努力就是成功</p><p>中午好！</p>';
} else if ( h < 18) {
    content.innerHTML = '<p>我如凡间⼀粒沙</p><p>随风飘荡⾬吹打</p><p>⼭⼉再⾼我慢慢爬</p><p>⽔⼉在深我慢慢划</p><p>只要恒⼼永不灭</p><p>就算是沙也变花</p><p>下午，一切安好!</p>';
} else {
    content.innerHTML = '<p>思念不因劳累而改变</p><p>问候不因疲惫而变懒</p><p>祝福不因休息而变缓</p><p>关怀随星星眨眼</p><p>牵挂在深夜依然</p><p>轻轻道声：晚上好!</p>';
}
}


/* <---------登陆显示弹出框并跳转页面---------> */
var btn_img = document.querySelector('#btn_img');
var msg = document.querySelector('.msg');
var fs1 = document.querySelector('.fs1');
var btn_href = document.querySelector('.btn_href');
var kk = document.querySelector('#kk');
var yy = document.querySelector('#yy');
btn_img.addEventListener('click', function() {
    document.querySelector('main').style.display = 'none';
    btn_img.style.display = 'none';
    msg.style.display = 'block';
    span.style.display = 'none';
    kk.style.display = 'none';
    yy.style.display = 'none';
    img.style.display = 'none';
    var timer = 5;
    fn();
    setInterval(fn, 1000)
    function fn() {
        if (timer == 0) { 
            msg.style.display = 'none';
            location.replace('https://hykfs.github.io/index.html');
        } else {
            fs1.innerHTML = '你将在'+ timer +'秒之后跳转到首页';
            timer--;
        }
    }  
});

/* <----------主题盒子以及内容颜色随时间变化----------> */
/* function randomNum(firstValue, lastValue) {
    var choices = lastValue - firstValue;
    return Math.floor(Math.random() * choices + firstValue);
}

function changeColor() {
    var colors = new Array("red", "green", "blue", "yellow", "black", "purple", "brown");
    return colors[randomNum(0, colors.length - 1)];
}

function divBackgroundColor() {
    var main = document.querySelector('.content');
    main.children[n].style.backgroundColor =  changeColor();
}

function timeColor() {
    divBackgroundColor();
    setTimeout(timeColor, 3000);

}
    
window.onload = timeColor;
 */

/* <--------------点击效果--------------> */
(function () {
    var a_idx = 0;
    window.onclick = function (event) {
        var a = new Array("❤️富强❤️", "❤️民主❤️", "❤️文明❤️", "❤️和谐❤️", "❤️自由❤️", "❤️平等❤️", "❤️公正❤️", "❤️法治❤️", "❤️爱国❤️",
                "❤️敬业❤️", "❤️诚信❤️", "❤️友善❤️");

        var heart = document.createElement("b"); //创建b元素
        heart.onselectstart = new Function('event.returnValue=false'); //防止拖动

        document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
        a_idx = (a_idx + 1) % a.length;
        heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式

        var f = 16, // 字体大小
            x = event.clientX - f / 2, // 横坐标
            y = event.clientY - f, // 纵坐标
            c = randomColor(), // 随机颜色
            a = 1, // 透明度
            s = 1; // 放大缩小

        var timer = setInterval(function () { //添加定时器
            if (a <= 0) {
                document.body.removeChild(heart);
                clearInterval(timer);
            } else {
                heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" +
                    c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
                    s + ");";

                    y--;
                    a -= 0.004;
                    //s += 0.002;
                }
            }, 15)
        }
    // 随机颜色
    function randomColor() {
        return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math
        .random() * 255)) + ")";
    }
}());



































































































