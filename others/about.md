---
title: 简介
---



<div class="pio-container right">
    <div class="pio-action"></div>
    <canvas id="pio" width="200" height="250"></canvas>
</div>

<link rel="stylesheet" href="banniang/css/pio.css">
<script src="banniang/js/pio.js"></script>
<script src="banniang/js/l2d.js"></script>
<script>
    var pio = new Paul_Pio({
    "mode": "fixed",
    "tips": true,
    "hidden": false,
    "content": {
        "welcome": [],
    },
    "model": [
    "banniang/live2d-widget-models/live2d-widget-model-miku/assets/miku.model.json", //初音
    "banniang/live2d-widget-models/live2d-widget-model-shizuku/assets/shizuku.model.json",// 萌娘
    ]
});
</script>


<h2 id="有关于我的一些介绍"><a href="#有关于我的一些介绍" class="headerlink" title="有关于我的一些介绍:"></a>有关于我的一些介绍:</h2><p>-本人为一名普通的初中牲,2019年开始接触编程.</p>
<p>我比较擅长python,并且略微了解:<br>· html<br>· C++<br>· C#<br>· CSS<br>· JS<br><i>*虽然如此,我在一些方面(高深莫测的方面)还仍有欠缺,如果你发现我的程序有误,恳请批评指正.</i></p>
<p>除编程之外,我还喜欢小提琴,画画等(有时候也挺喜欢数学的)<br>当然也经常听听歌或者看看电影啥的.<br>打算以后弄一个资源网站.<br>如果非紧急情况,<strong>请不要联系我</strong><br>如果加我微信请注明原因(我大概率是不会通过请求的)<br><code id="code">#Code >>></code></p>
<h2 id="My-Programming-Road-🚶‍♂️"><a href="#My-Programming-Road-🚶‍♂️" class="headerlink" title="My Programming Road 🚶‍♂️"></a>My Programming Road 🚶‍♂️</h2><p>在学习编程的过程中,我曾遇到了<b>很多困难</b><br>但是通过几个月的艰苦研究,我创建了此网站,<b>毕竟比较方便上传程序以及显示更新通知(当然了我也可以用这个网站赚钱)</b></p>
<p>之前自学的过程是非常艰苦的(十分甚至九分的艰苦),基本上啥问题都需要自己解决或者上网查solution,很麻烦,并且常常把我逼疯.<br>但是学编程其实也相当于促进我学习了英语(主要是不学好英语程序报错了你压根看不懂)<br>我最先接触的是python,后来自学的C++,接着又学了html,js什么的.</p>
<p>一般的初学者真的强烈建议先从python基础入手!直接整C++能把你逼疯的!(想砸电脑)<br>我反正基本把”面向对象编程”学成了”面向CSDN和知乎编程”(这两个都是程序员经常查询solution的网站)</p>
<p>反正嘛,一个人想学一件新东西总要经历一个痛苦的过程,这个过程越长,你的技术越精湛.<br>我差不多经历了两年,现在终于是摸清了编程的一小块.</p>
<h2 id="Appreciate-🌹"><a href="#Appreciate-🌹" class="headerlink" title="Appreciate 🌹"></a>Appreciate 🌹</h2><p>非常感谢我的<b>父母,老师和一直陪在我身边的朋友们</b><br>如果没有他们中的任何一人,这个网站都不会建成。</p>
<p>网站实质上为个人博客网站,采用的主题为ayer.<br>如果你也想搭建网站可以在互联网上查找一些solution或者问我(自认为很懂).</p>
<div id="update">

<h2 id="Update-💻"><a href="#Update-💻" class="headerlink" title="Update 💻"></a>Update 💻</h2></div>

<p>本人即将初中毕业,更新频率可能有所降低,甚至有可能毕业之前都不会更新.</p>
<p>不要催更!!!一般只有程序写好之后才会更新!!!</p>
<h2 id="Program-🧑‍💻"><a href="#Program-🧑‍💻" class="headerlink" title="Program 🧑‍💻"></a>Program 🧑‍💻</h2><p>我可能会把写好的代码或者程序想办法传到我的Git仓库.<br>或者传到百度网盘上(看情况)</p>

<div id="donate">

<h2 id="向我-网站或者Lantern捐款"><a href="#向我-网站或者Lantern捐款" class="headerlink" title="向我,网站或者Lantern捐款"></a>向我,网站或者Lantern捐款</h2></div>

<p>如果愿意的话,你可以向我,网站或者Lantern捐款或打赏.<br><i>*如果长按无法识别,可以发送到微信再长按识别.</i><br><select id="slt"><br>    <option value="no">资金缺乏</option><br>    <option value="6">Donate 6 RMB🌹</option><br>    <option value="10">Donate 10 RMB🫰</option><br>    <option value="15">Donate 15 RMB🎉</option><br></select><br><img id="imgs" src></p>
<script>
    function check(){
        let slt_=document.getElementById("slt");
        if(slt_.value=="no") document.getElementById("imgs").src="";
        if(slt_.value=="6") document.getElementById("imgs").src="picture/6.jpg";
        if(slt_.value=="10") document.getElementById("imgs").src="picture/10.jpg";
        if(slt_.value=="15") document.getElementById("imgs").src="picture/15.jpg";
    }
    var All = [" print('helloworld') ",' cout>>a>>endl; '
    ," import_time,random "," document.getElementById('a'); "
    ," <script_type='text/javascript'> "," text.config() "
    ," task_list.append(task) "," include<iostream> "," function(){alert('hello!')} "
    ];
    let nIntervId;
    var sth='';
    var times=0;
    var code_tm=0
    function change() {
        nIntervId = setInterval(function(){plus(),check()}, 100);
    }
    function plus(){
        if(code_tm<=All.length-1){
            if(times+1<=All[code_tm].length-1){
                document.getElementById("code").innerText=document.getElementById("code").innerText+sth;
                sth=All[code_tm][times+1];
                times=times+1;
            }
            else{
                let texts=document.getElementById("code").innerText;
                document.getElementById("code").innerText=texts.slice(0,texts.length-1);
                if(document.getElementById("code").innerText.length<=9)
                {
                    if(code_tm+1<=All.length-1) code_tm=code_tm+1;
                    else code_tm=0;
                    times=0;
                    sth='';
                }
            }
        }
        else clearInterval(nIntervId);
    }
    change()
</script> 