/* <------------tab选项栏------------> */
var as = document.querySelectorAll('#fs');
var ks = document.querySelector('#ks');
var items = document.querySelectorAll('.item');
var is = document.querySelectorAll('i');
items[0].style.animation = 'main 1.35s linear 0s forwards';
for (var i = 0; i < as.length; i++) {
    as[i].setAttribute('index', i);
    as[0].style.backgroundColor = 'rgba(255, 255, 255, 0.477)';
    as[i].addEventListener('click', function () {
        for (var i = 0; i < as.length; i++) {
            as[i].className = '';
            as[i].style.backgroundColor = '';
        }
        this.className = 'cureent';
        this.style.backgroundColor = 'rgba(255, 255, 255, 0.477)';

        var index = this.getAttribute('index');
        console.log(index);
        for (var i = 0; i < items.length; i++) {
            // items[i].style.transform = 'translate(0px, (-916*i)px)';
            items[i].style.display = 'none';  
        }
        items[index].style.animation = 'main 1.35s linear 0s forwards';
        items[index].style.display = 'block';
    })
};

/* <------------背景图片定时转换------------> */
var imgArr = ['image/bizhi8.jpg','image/bizhi4.jpg','image/bizhi2.jpg','image/bizhi3.jpg','image/bizhi5.jpg','image/bizhi6.jpg',];
var index = 0;
var timeNum ;
timeNum = setInterval(function() {
    index++;
    index = index % imgArr.length;
    document.body.children[0].src = imgArr[index];
},2600);

/* <------------黑白模式------------> */
// var imgs = document.querySelector('.moshi').querySelector('.img');
// var main = document.querySelector('main');
// var nav = document.querySelector('nav');
// var flag = true;
// imgs.addEventListener('click', function() {
//     if (flag) {
//         imgs.src = 'image/太阳1_sun-one.png';
//         main.style.background = 'linear-gradient( to right bottom, rgba(157, 228, 140, 0.301), rgba(228, 138, 223, 0.305) )';
//         document.body.style.color = 'white';
//         //nav.style.background = 'linear-gradient(to bottom right, rgba(126, 228, 131, 0.46), rgba(233, 117, 204, 0.353))';
//         //fs.style.color = 'rgb(228, 220, 220)';
//         flag = false;
//     } else {
//         imgs.src = 'image/月亮_moon.png';
//         main.style.background = 'linear-gradient( to right bottom, rgba(128, 239, 219, 0.301), rgba(180, 138, 228, 0.305) )';
//         document.body.style.color = 'black';
//         //nav.style.background = 'linear-gradient(to bottom right, rgba(52, 150, 230, 0.272), rgba(139, 78, 236, 0.257))';
//         //fs.style.color = 'rgba(236, 228, 228, 0.61)';
//         flag = true;
//     }
// });

/* <------------音乐播放效果------------> */
var btn1 = document.querySelector('#music1');
var btn2 = document.querySelector('#music2');
var musicimg = document.querySelector('.musicImg');
var audio = document.querySelector('audio');
var timer = null;
btn1.addEventListener('click', function() {
    audio.play(); 
    musicimg.style.display = 'block';
    musicimg.style.animation = 'w 3.5s linear 1s infinite';
    //监听播放器结束事件
    audio.onended = function() {
        musicimg.style.display = 'none';
    }
});
btn2.addEventListener('click', function() {
    audio.pause();
    musicimg.style.animationPlayState = 'paused';
});

/* <--------------登出首页--------------> */
var jiuli = document.querySelector('.logout');
jiuli.addEventListener('click', function() {
    document.querySelector('.msg_box').style.display = 'block';
    document.body.children[0].src = 'image/bizhi2.jpg';
    document.querySelector('nav').style.opacity = '0';
    document.querySelector('main').style.opacity = '0';
    document.querySelector('.moshi1').style.opacity = '0';
});
document.querySelector('.jiuli1').addEventListener('click', function() {
    document.querySelector('nav').style.opacity = '1';
    document.querySelector('main').style.opacity = '1';
    document.querySelector('.moshi1').style.opacity = '1';
    document.body.children[0].src = 'image/bizhi8.jpg';
    document.querySelector('.msg_box').style.display = 'none';
    //console.log(1);
});
document.querySelector('.jiuli2').addEventListener('click', function() {
    document.querySelector('.ks').style.animation = 'ks 1.7s linear 0.1s forwards'
    setTimeout(function() {
        location.replace('login.html');
    },2900)
});

//禁止鼠标选中
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

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
                // a -= 0.016;
                a -= 0.003;
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

/* <--------------主题main效果设置--------------> */
var btn1 = document.querySelector('.moshi1').querySelector('.btn1');
var btn2 = document.querySelector('.moshi1').querySelector('.btn2');
var btn3 = document.querySelector('.moshi1').querySelector('.btn3');
var btn4 = document.querySelector('.moshi1').querySelector('.btn4');
var btn5 = document.querySelector('.moshi1').querySelector('.btn5');
// var moshi1_1 = querySelector('main').querySelectorAll('.moshi1-1');
var flag2 = 0;
btn4.children[0].addEventListener('click', function() {
    if (flag2 == 0) {
        btn1.style.animation = 'btn1 0.3s linear 0s forwards';
        btn2.style.animation = 'btn1 0.3s linear 0s forwards';
        btn3.style.animation = 'btn1 0.3s linear 0s forwards';
        btn5.style.animation = 'btn1 0.3s linear 0s forwards';
        flag2 = 1;
    } else {
        btn1.style.animation = 'btn2 0.3s linear 0s forwards';
        btn2.style.animation = 'btn2 0.3s linear 0s forwards';
        btn3.style.animation = 'btn2 0.3s linear 0s forwards';
        btn5.style.animation = 'btn2 0.3s linear 0s forwards';
        flag2 = 0;
    }
});
var flag3 = 0;
btn1.addEventListener('click', function() {
    if (flag3 == 0) {
        document.querySelector('.msg_column').style.display = 'block';
        document.querySelector('.msg_column').innerHTML = '<h3>您已切换为繁体</h3>';
        setTimeout(function() {
            document.querySelector('.msg_column').style.display = 'none';
        }, 2590)
        document.querySelector('main').style.fontFamily = '幼圆';
        flag3 = 1;
    } else {
        document.querySelector('.msg_column').style.display = 'block';
        document.querySelector('.msg_column').innerHTML = '<h3>您已切换为简体</h3>';
        setTimeout(function() {
            document.querySelector('.msg_column').style.display = 'none';
        },2590) 
        document.querySelector('main').style.fontFamily = 'Sofia';
        flag3 = 0;
    } 
});
var flag4 = 0;
btn2.addEventListener('click', function() {
    if (flag4 == 0) {
        document.querySelector('.msg_column').style.display = 'block';
        document.querySelector('.msg_column').innerHTML = '<h3>您已切换为深色模式</h3>';
        setTimeout(function() {
            document.querySelector('.msg_column').style.display = 'none';
        },1690)
        flag4 = 1;
    } else {
        document.querySelector('.msg_column').style.display = 'block';
        document.querySelector('.msg_column').innerHTML = '<h3>您已切换为浅色模式</h3>';
        setTimeout(function() {
            document.querySelector('.msg_column').style.display = 'none';
        },1690)
        flag4 = 0;
    } 
});
var flag5 = 0;
btn3.addEventListener('click', function() {
    if (flag5 == 0) {
        document.querySelector('.msg_column').style.display = 'block';
        document.querySelector('.msg_column').innerHTML = '<h3>您已切换为双栏模式</h3>';
        setTimeout(function() {
            document.querySelector('.msg_column').style.display = 'none';
        },1690)
        document.querySelector('nav').style.animation = 'nav1 0.3s linear 0s forwards';
        document.querySelector('main').style.animation = 'main1 1s linear 0s forwards';
        document.querySelector('.nav_right').style.animation = 'nav_right1 1s linear 0s forwards';
        flag5 = 1;
    } else {
        document.querySelector('.msg_column').style.display = 'block';
        document.querySelector('.msg_column').innerHTML = '<h3>您已切换为单栏模式</h3>';
        setTimeout(function() {
            document.querySelector('.msg_column').style.display = 'none';
        },1690)
        document.querySelector('nav').style.animation = 'nav2 1s linear 0s forwards';
        document.querySelector('main').style.animation = 'main2 1s linear 0s forwards';
        document.querySelector('.nav_right').style.animation = 'nav_right2 1s linear 0s forwards';
        flag5 = 0;
    } 
});














































































































