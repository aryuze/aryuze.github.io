
var Paul_Pio = function (prop) {
    var that = this;

    var current = {
        idol: 0,
        menu: document.querySelector(".pio-container .pio-action"),
        canvas: document.getElementById("pio"),
        body: document.querySelector(".pio-container"),
        root: document.location.protocol +'//' + document.location.hostname +'/'
    };

    /* - 方法 */
    var modules = {
        // 更换模型

        idol: function () {
            current.idol < (prop.model.length - 1) ? current.idol++ : current.idol = 0;
            return current.idol;
        },
        // 创建内容
        create: function (tag, prop) {
            var e = document.createElement(tag);
            if(prop.class) e.className = prop.class;
            return e;
        },
        // 随机内容
        rand: function (arr) {
            return arr[Math.floor(Math.random() * (arr.length - 1))];
        },
        // 创建对话框方法
        render: function (text) {
            if(text.constructor === Array){
                dialog.innerText = modules.rand(text);
            }
            else if(text.constructor === String){
                dialog.innerText = text;
            }
            dialog.classList.add("active");
            clearTimeout(this.t);
            this.t = setTimeout(function () {
                dialog.classList.remove("active");
            }, 3000);
        },
        // 移除方法
        destroy: function () {
            that.initHidden();
            localStorage.setItem("posterGirl", 0);
        },
        // 是否为移动设备
        isMobile: function () {
            var ua = window.navigator.userAgent.toLowerCase();
            ua = ua.indexOf("mobile") || ua.indexOf("android") || ua.indexOf("ios");

            return window.innerWidth < 500 || ua !== -1;
        }
    };
    this.destroy = modules.destroy;

    var elements = {
        home: modules.create("span", {class: "pio-home"}),
        skin: modules.create("span", {class: "pio-skin"}),
        info: modules.create("span", {class: "pio-info"}),
        sentence: modules.create("span", {class: "pio-sentence"}),
        //close: modules.create("span", {class: "pio-close"}),

        show: modules.create("div", {class: "pio-show"})
    };



    /*/先定义一个新事件名称，如tap
    var tap = new Event("tap",{
        bubbles: true,
    

        //获取手指按下时的坐标
        document.startPoint = {};
        document.addEventListener("touchstart",function(e){
            document.startPoint = {
                x: e.changedTouches[0].pageX,
                y: e.changedTouches[0].pageY
            }
        });
        //获取手指抬起时的坐标
        document.addEventListener("touchend",function(e){
            var now = {
                x: e.changedTouches[0].pageX,
                y: e.changedTouches[0].pageY
            };
        //限定抬起的坐标与按下时不超过5px，如果满足条件则派发tap点击事件
            if(Math.abs(now.x - document.startPoint.x)+Math.abs(now.y - document.startPoint.y) < 5){
                // 派发事件
                e.target.dispatchEvent(tap);
            }
        });

});    
*/
    var dialog = modules.create("div", {class: "pio-dialog"});
    current.body.appendChild(dialog);
    current.body.appendChild(elements.show);

    /* - 提示操作 */
        var action = {
        // 欢迎
         welcome: function () {
            if(document.referrer !== "" && document.referrer.indexOf(current.root) === -1){
                var referrer = document.createElement('a');
                referrer.href = document.referrer;
                prop.content.referer ? modules.render(prop.content.referer.replace(/%t/, "“" + referrer.hostname + "”")) : modules.render("欢迎来自 “" + referrer.hostname + "” 的朋友！");
            }

            else if(prop.tips){
                var text, hour = new Date().getHours();

                if (hour > 22 || hour <= 5) {
                    text = '你是夜猫子呀？这么晚还不睡觉，明天起的来嘛';
                }
                else if (hour > 5 && hour <= 8) {
                    text = '早上好！';
                }
                else if (hour > 8 && hour <= 11) {
                    text = '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！';
                }
                else if (hour > 11 && hour <= 14) {
                    text = '中午了，工作了一个上午，现在是午餐时间！';
                }
                else if (hour > 14 && hour <= 17) {
                    text = '午后很容易犯困呢，今天的运动目标完成了吗？';
                }
                else if (hour > 17 && hour <= 19) {
                    text = '傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~';
                }
                else if (hour > 19 && hour <= 21) {
                    text = '晚上好，今天过得怎么样？';
                }
                else if (hour > 21 && hour <= 23) {
                    text = '已经这么晚了呀，早点休息吧，晚安~';
                }
                else{
                    text = "奇趣保罗说：这个是无法被触发的吧，哈哈";
                }
                modules.render(text);
            }
            else{
                modules.render(prop.content.welcome || "欢迎来到本站！");
            }
        },
        // 触摸
        touch: function () {
            current.canvas.addEventListener("touchstart",function(){
                modules.render(["你这孩子就是欠抽了!","来把小桌板都立上!",'别跟我扯那些没有用的', '不学了放弃了中考不考了一百二十分不要了',
                '不讲了我对你们够好了吧', '不管他', '从我开始讲育才报你们仨就在那笑也不知道是映射你们了还是你们从里头走出来的', 
                '春雨惊春清谷天', '每次我看到抖音上的家长在灯红酒绿的宾馆里应酬我就感到心寒', '我从来不会把我姑娘一个人扔到家里不管', 
                '第一位幸运儿', '就我们班内几个鬼', '就就就就就是有那个男的那个声', '咋地啊看人下菜碟啊', '不学英语了就学语文了', 
                '大宝子二宝子回魂了', '庞希琳你个二傻子', '老师嗓子都哑了', '哪个老师能把嗓子讲哑的', '铃声就是命令啊', '六分', 
                '能卫生吗', '你班这地得少少啊', '你们是臭傻子吗', '你们是不是贱脾子啊', '你们回家到底背不背政治啊', '你们就是欺负我',
                 '你们倒是说话啊', '那全解能权威吗', '咱们这斥考试嗷没有山中考滴好', '来上课', '我的小琦琦啊', '都死去吧', '是谁让你在后面站着的',
                  '桑沧海沧田', '太有用了', '这我上课都讲过', 
               '我收拾你还能让你知道啊', '我是一个优柔寡断的人李家宝扣五分', '我还犯小错误了呗', '我给大家算笔帐', '我养一条狗三年', '这么讷那', '因因为啥啊',
               '你班一片虚假繁荣', '别说漏了啊',
               '我就是歧视你们', '有就画没有就写', '就你tm叫孙铭博啊', '认真的看认真的说别tm磕巴磕巴的一次性说完', 
               '你瞅你那脑形就和别人不一样', '去去去给我滚后面去', '你那嘴巴子和皮燕子就是个连通器', '你班语文谁教的啊', 
               '把你们那臭粪坑给我闭上', '睁开你们那两个黑洞看看', '有一个小叉叉叉叉叉', '有一个什么什么非常好的清朝花瓶', 
               '作业拿出来没有的滚后面站着吧', '孙大宝', 
              '王名浩', '李恩明', 'R鱼泽', '邓惠玉',
               '李云轩', '胡说八道', '你以为你是江泽民你就是江泽民啊', '上帝的力量', '汉奸脑袋', '腌菜']);
            })
            current.canvas.onclick = function () {
                modules.render(prop.content.touch || ["你这孩子就是欠抽了!","来把小桌板都立上!",'别跟我扯那些没有用的', '不学了放弃了中考不考了一百二十分不要了',
                '不讲了我对你们够好了吧', '不管他', '从我开始讲育才报你们仨就在那笑也不知道是映射你们了还是你们从里头走出来的', 
                '春雨惊春清谷天', '每次我看到抖音上的家长在灯红酒绿的宾馆里应酬我就感到心寒', '我从来不会把我姑娘一个人扔到家里不管', 
                '第一位幸运儿', '就我们班内几个鬼', '就就就就就是有那个男的那个声', '咋地啊看人下菜碟啊', '不学英语了就学语文了', 
                '大宝子二宝子回魂了', '庞希琳你个二傻子', '老师嗓子都哑了', '哪个老师能把嗓子讲哑的', '铃声就是命令啊', '六分', 
                '能卫生吗', '你班这地得少少啊', '你们是臭傻子吗', '你们是不是贱脾子啊', '你们回家到底背不背政治啊', '你们就是欺负我',
                 '你们倒是说话啊', '那全解能权威吗', '咱们这斥考试嗷没有山中考滴好', '来上课', '我的小琦琦啊', '都死去吧', '是谁让你在后面站着的',
                  '桑沧海沧田', '太有用了', '这我上课都讲过', 
               '我收拾你还能让你知道啊', '我是一个优柔寡断的人李家宝扣五分', '我还犯小错误了呗', '我给大家算笔帐', '我养一条狗三年', '这么讷那', '因因为啥啊',
               '你班一片虚假繁荣', '别说漏了啊',
               '我就是歧视你们', '有就画没有就写', '就你tm叫孙铭博啊', '认真的看认真的说别tm磕巴磕巴的一次性说完', 
               '你瞅你那脑形就和别人不一样', '去去去给我滚后面去', '你那嘴巴子和皮燕子就是个连通器', '你班语文谁教的啊', 
               '把你们那臭粪坑给我闭上', '睁开你们那两个黑洞看看', '有一个小叉叉叉叉叉', '有一个什么什么非常好的清朝花瓶', 
               '作业拿出来没有的滚后面站着吧', '孙大宝', 
              '王名浩', '李恩明', 'R鱼泽', '邓惠玉',
               '李云轩', '胡说八道', '你以为你是江泽民你就是江泽民啊', '上帝的力量', '汉奸脑袋', '腌菜']);
            };
        },
        // 右侧按钮
         buttons: function () {
             // 返回首页
             elements.home.onclick = function () {
                 location.href = current.root;
             };
             elements.home.onmouseover = function () {
                 modules.render(prop.content.home || "");
             };
             current.menu.appendChild(elements.home);

             // 更换模型
             elements.skin.onclick = function () {
                 loadlive2d("pio", prop.model[modules.idol()]);
                 prop.content.skin && prop.content.skin[1] ? modules.render(prop.content.skin[1]) : modules.render("新衣服真漂亮~");
             };
             elements.skin.onmouseover = function () {
                 prop.content.skin && prop.content.skin[0] ? modules.render(prop.content.skin[0]) : modules.render("想看看我的新衣服吗？");
             };
             if(prop.model.length > 1) current.menu.appendChild(elements.skin);

             // 关于我
             elements.info.onclick = function () {
                 window.open("https://aryuze.github.io");
             };
             elements.info.onmouseover = function () {
                 modules.render("想访问♂吗?");
             };
             current.menu.appendChild(elements.info);

             // 一言
             elements.sentence.onclick = function () {
                 modules.render(fetch('https://v1.hitokoto.cn')
                                     .then(response => response.json())
                                     .then(data => {
                                             const hitokoto = document.querySelector('.pio-dialog')
                                             hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
                                             hitokoto.innerText = data.hitokoto })
                                     .catch(console.error) )
                  };
                 elements.sentence.onmouseover = function () {
                     modules.render("我从青蛙王子那里听到了不少人生经验。");
                 };
                 current.menu.appendChild(elements.sentence);


             // 关闭看板娘
//             elements.close.onclick = function () {
//                 modules.destroy();
//             };
//             elements.close.onmouseover = function () {
//                 modules.render(prop.content.close || "QWQ 下次再见吧~");
//             };
//             current.menu.appendChild(elements.close);
         },
        custom: function () {
            prop.content.custom.forEach(function (t) {
                if(!t.type) t.type = "default";
                var e = document.querySelectorAll(t.selector);

                if(e.length){
                    for(var j = 0; j < e.length; j++){
                        if(t.type === "read"){
                            e[j].onmouseover = function () {
                                modules.render("想阅读 %t 吗？".replace(/%t/, "“" + this.innerText + "”"));
                            }
                        }
                        else if(t.type === "link"){
                            e[j].onmouseover = function () {
                                modules.render("想了解一下 %t 吗？".replace(/%t/, "“" + this.innerText + "”"));
                            }
                        }
                        else if(t.text){
                            e[j].onmouseover = function () {
                                modules.render(t.text);
                            }
                        }
                    }
                }
            });
        }
    };

    /* - 运行 */
    var begin = {
        static: function () {
            current.body.classList.add("static");
        },
        fixed: function () {
            action.touch(); action.buttons();
        },
        draggable: function () {
            action.touch(); action.buttons();

            var body = current.body;
            body.onmousedown = function (downEvent) {
                var location = {
                    x: downEvent.clientX - this.offsetLeft,
                    y: downEvent.clientY - this.offsetTop
                };

                function move(moveEvent) {
                    body.classList.add("active");
                    body.classList.remove("right");
                    body.style.left = (moveEvent.clientX - location.x) + 'px';
                    body.style.top  = (moveEvent.clientY - location.y) + 'px';
                    body.style.bottom = "auto";
                }

                document.addEventListener("mousemove", move);
                document.addEventListener("mouseup", function () {
                    body.classList.remove("active");
                    document.removeEventListener("mousemove", move);
                });
            };
        }
    };

    // 运行
    this.init = function (onlyText) {
        if(!(prop.hidden&& modules.isMobile())){
            if(!onlyText){
                action.welcome();
                loadlive2d("pio", prop.model[Math.floor(Math.random()*(prop.model.length))]);
            }

            switch (prop.mode){
                case "static": begin.static(); break;
                case "fixed":  begin.fixed(); break;
                case "draggable": begin.draggable(); break;
            }

            if(prop.content.custom) action.custom();
        }
    };

    // 隐藏状态
    this.initHidden = function () {
        current.body.classList.add("hidden");
        dialog.classList.remove("active");

        elements.show.onclick = function () {
            current.body.classList.remove("hidden");
            localStorage.setItem("posterGirl", 1);
            that.init();
        }
    }

    localStorage.getItem("posterGirl") == 0 ? this.initHidden() : this.init();
};
