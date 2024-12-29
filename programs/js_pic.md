---
title: JS:图片函数
---

原来主页的图片函数和音频被砍掉了(感觉主页元素太多了)
所以在此公开图片那段的代码
主要实现的就是图片随机抽取并通过调整透明度来实现无缝衔接的效果
代码如下:
```js
    var items_yyzt = [['https://pic4.zhimg.com/80/v2-c531bde86d6c9e2be33e434e4f5afd3b_1440w.webp',
    "https://pic2.zhimg.com/80/v2-7b7cb89e0385217d1e93fd12cc0e4c91_1440w.webp",
    "https://pic1.zhimg.com/80/v2-f56f4de505ad31184851fa110d72de9c_1440w.webp",
    "https://pic1.zhimg.com/80/v2-9dbe1f43ce1d260801f64ab8c3aa69e0_1440w.webp",
    "https://pic4.zhimg.com/80/v2-0ee4b4d43df620a3ca7adc7aac83169b_1440w.webp",
    "https://pic3.zhimg.com/80/v2-356df20a71494822c986867ad398c6d6_1440w.webp",
    "https://pic4.zhimg.com/80/v2-47f439309db5623886de628adca366a7_1440w.webp",
    "https://pic3.zhimg.com/80/v2-a455a6dcae602250a6ed7af41d964d4a_1440w.webp",
    "https://pic2.zhimg.com/80/v2-b4b9a36ea5eaec0f089ffc07f173a505_1440w.webp",
    "https://pic1.zhimg.com/80/v2-3ad92075c9abb9e2a50eff7ea76666f8_1440w.webp",
    "https://pic3.zhimg.com/80/v2-2a98f12ae476403c59ececd3366dd1fe_1440w.webp",
    "https://pic4.zhimg.com/80/v2-94d73d8147e0ba6ba67da075424a879f_1440w.webp",
    "https://pic1.zhimg.com/80/v2-ee35812cbaa59ea1cc51cdea6b485498_1440w.webp",
    "https://pic1.zhimg.com/80/v2-e2b0051ca04a56e1839eb3d35a8ba2b0_1440w.webp",
    ],
[["http://freetyst.nf.migu.cn/public/product5th/product35/2019/12/0410/2018%E5%B9%B412%E6%9C%8818%E6%97%A515%E7%82%B955%E5%88%86%E6%89%B9%E9%87%8F%E9%A1%B9%E7%9B%AE%E6%AD%A3%E4%B8%9C100%E9%A6%96-15/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005661F31N.mp3",'《言叶之庭》电影主题曲','秦基博']
,['','','']],['《言叶之庭》(《The Garden of Words》)']];

//你的名字
var items_ndmz=[['https://pic1.zhimg.com/80/v2-0b7e12a3277a995292bd4bdc3df82950_1440w.webp'
,'https://pic2.zhimg.com/80/v2-4b6432b06430b33147bb84fdf4c644fd_1440w.webp'
,'https://pic1.zhimg.com/80/v2-bf370a6f52ad4f0c1aa7b824d6388488_1440w.webp'
,'https://pic4.zhimg.com/80/v2-929070dd9619b4ebfec8a2436809a327_1440w.webp'
,'https://pic2.zhimg.com/80/v2-0a6606b6e9b08408acf68380419153e5_1440w.webp'
,'https://pic1.zhimg.com/80/v2-19a92076e02f040477413bd67645f918_1440w.webp'
,'https://pic4.zhimg.com/80/v2-979027c1436fc5e8efcb5eab57da5de3_1440w.webp'
,'https://pic3.zhimg.com/80/v2-532485552b59a937984d66a9ff3f1676_1440w.webp'
,'https://pic1.zhimg.com/80/v2-b1bc7f08e6a99c2f3cf6e43956c98f0c_1440w.webp'
,'https://pic3.zhimg.com/80/v2-33479cbb188907784604a45e698f6c06_1440w.webp'
,'https://pic4.zhimg.com/80/v2-3e75ab2d6194cf760dab8352f8c1b8ef_1440w.webp'
,'https://pic4.zhimg.com/80/v2-5c67f2ef6d6a67a7a98fd690dc096a8b_1440w.webp'
,'https://pic2.zhimg.com/80/v2-3b4c8a49ea24f7d21ae44ddcac4e7e65_1440w.webp'
,'https://pic1.zhimg.com/80/v2-cc1ed94a4d3a965c038dc1ec004d84a4_1440w.webp'
,'https://pic2.zhimg.com/80/v2-12146f5c9ee8b02b85eb3feac47c6339_1440w.webp'
,'https://pic4.zhimg.com/80/v2-e0b51eba5874d38b5885c835d02352df_1440w.webp'
,'https://pic1.zhimg.com/80/v2-628d55d0f8525c7525b935fbbf5ee60c_1440w.webp'
,'https://pic3.zhimg.com/80/v2-83746a8d97a0b33a8d90a395caadb5e2_1440w.webp'
,'https://pic4.zhimg.com/80/v2-38d034591351496c840efdf73e16e0eb_1440w.webp'
,'https://pic2.zhimg.com/80/v2-7b09996a6ec9d570bfe9b513643f8b09_1440w.webp'
,'https://pic4.zhimg.com/80/v2-1f7c2b0227242881975fee40ea9f2ef7_1440w.webp'
],
[['http://freetyst.nf.migu.cn/public/product9th/product45/2021/10/2718/2020%E5%B9%B411%E6%9C%8825%E6%97%A521%E7%82%B910%E5%88%86%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E7%B1%B3%E4%B8%9D%E5%85%8B185%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/69987100298181317.mp3','《你的名字》电影插曲','RADWIMPS'],["http://freetyst.nf.migu.cn/public/product9th/product42/2021/02/0111/2020%E5%B9%B411%E6%9C%8825%E6%97%A521%E7%82%B910%E5%88%86%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E7%B1%B3%E4%B8%9D%E5%85%8B185%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/69987100288114849.mp3"
,'《你的名字》片尾曲','RADWIMPS']]
,['《你的名字》(《Your Name》)']]


//天气之子
var items_tqzz=[['https://pic4.zhimg.com/80/v2-2b77bea7c2acb197ead8e9cd82c1e547_1440w.webp',
'https://pic1.zhimg.com/80/v2-9e8e485a955d0d00341b692bafd245b0_1440w.webp',
'https://pic4.zhimg.com/80/v2-cd9bc3747822fcd6c27d0a3de8c4a6c3_1440w.webp',
'https://pic3.zhimg.com/80/v2-906d2374e4d79063a398c8eaf8782a36_1440w.webp',
'https://pic4.zhimg.com/80/v2-ab05cf536b6043e4ba0905584391a7a7_1440w.webp',
'https://pic4.zhimg.com/80/v2-080b8ec8850cfe0ffe3080e6f8b9571f_1440w.webp',
'https://pic1.zhimg.com/80/v2-b55b9eb82170363437695c6c965e2304_1440w.webp',
'https://pic2.zhimg.com/80/v2-c83a3f0387b2bd9087a3251452030661_1440w.webp',
'https://pic3.zhimg.com/80/v2-f689cae230b076a58b74e394c4e305fa_1440w.webp',
'https://pic1.zhimg.com/80/v2-ff119ea37f6b5ff448e8cb72e96007e0_1440w.webp',
'https://dg.static.pil0txia.com/gallery/tenki_no_ko/WEATHERING%20WITH%20YOU_000136.136.webp',
'https://dg.static.pil0txia.com/gallery/tenki_no_ko/WEATHERING%20WITH%20YOU_003740.881.webp'],
[["http://freetyst.nf.migu.cn/public/product9th/product44/2021/07/2016/2020%E5%B9%B411%E6%9C%8825%E6%97%A521%E7%82%B910%E5%88%86%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E7%B1%B3%E4%B8%9D%E5%85%8B185%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/69987100225161107.mp3",'祝祭 (Movie edit)',
'三浦透子'],["http://freetyst.nf.migu.cn/public/product9th/product44/2021/07/2016/2020%E5%B9%B411%E6%9C%8825%E6%97%A521%E7%82%B910%E5%88%86%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E7%B1%B3%E4%B8%9D%E5%85%8B185%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/69987100190161134.mp3",'《天气之子》主题曲','RADWIMPS']],['《天气之子》(《Weathering With You》)']]
//秒五
var item_mswlm=[['https://pic2.zhimg.com/80/v2-f40bfbdd687c03f32b134d60ba6178b9_1440w.webp',
'https://pic1.zhimg.com/80/v2-212c771fcfbbb984be53f3a564908b24_1440w.webp',
'https://pic1.zhimg.com/80/v2-308df6041d0697b0217ff8fcc074f1b0_1440w.webp',
'https://pic3.zhimg.com/80/v2-1c592cbabcbb203c68c7b9243721f366_1440w.webp',
'https://pic1.zhimg.com/80/v2-a2901996a0d7ae1e50843a7e4221ea58_1440w.webp',
'https://pic2.zhimg.com/80/v2-cf0686a8eebed09ec6f8d1be358cf145_1440w.webp',
'https://pic2.zhimg.com/80/v2-f40bfbdd687c03f32b134d60ba6178b9_1440w.webp',
'https://pic2.zhimg.com/80/v2-7e0eb6a2cdbba98f6cdb614c6000cfad_1440w.webp',
'https://pic2.zhimg.com/80/v2-44ff0e831ffa4f980ce16d42cf311ff1_1440w.webp',
'https://pic3.zhimg.com/80/v2-a7ff66c6860f0146935c92e7bdd13986_1440w.webp',
'https://pic4.zhimg.com/80/v2-32066b79dd26280cc30890f3cca80767_1440w.webp',
'https://pic3.zhimg.com/80/v2-420c58486e3bdb1267373e87e6d44d12_1440w.webp'],[['http://freetyst.nf.migu.cn/public/product5th/product31/2019/04/25/2018%E5%B9%B411%E6%9C%8809%E6%97%A516%E7%82%B920%E5%88%86%E6%89%B9%E9%87%8F%E9%A1%B9%E7%9B%AE%E6%AD%A3%E4%B8%9C96%E9%A6%96-3/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_128_16_Stero/6005661LHB5.mp3','《秒速五厘米》主题曲','山崎将义']],['《秒速五厘米》(《5 cm per second》)']]

//铃芽之旅
var item_lyzl=[['https://pic2.zhimg.com/80/v2-8df2f5644d6ddaff3b853effeb020859_1440w.webp',
'https://pic1.zhimg.com/80/v2-bfdf3dce4ddeb737985e4871c9c93408_1440w.webp',
'https://pic3.zhimg.com/80/v2-13c1a8821b028ba54809d12f86218562_1440w.webp',
'https://pic1.zhimg.com/80/v2-a815950f6849644d9f891e1d276140d4_1440w.webp',
'https://pic2.zhimg.com/80/v2-61592efcba44c89164f690473914f81d_1440w.webp',
'https://pic1.zhimg.com/80/v2-0d750804327de0577333f1a8a920f9e0_1440w.webp']
,[['http://freetyst.nf.migu.cn/public/product9th/product46/2022/10/2614/2022%E5%B9%B410%E6%9C%8826%E6%97%A514%E7%82%B933%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E7%B1%B3%E4%B8%9D%E5%85%8B2%E9%A6%96326964/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6998719Z087145932.mp3','《铃芽之旅》电影主题曲','RADWIMPS']]
,['《铃芽之旅》(《Suzume》)']]

//云之彼端,约定之地
//var item_yzbd=[['','','',]]

//速度与激情7
var item_sj7=[['https://pica.zhimg.com/80/c9a639c7983783e00fa88f0eabfcb085_1440w.webp?source=1940ef5c',
'http://www.sinaimg.cn/dy/slidenews/4_img/2015_15/704_1596605_184399.jpg',
'http://www.sinaimg.cn/dy/slidenews/4_img/2015_15/704_1596595_200296.jpg',
'http://www.sinaimg.cn/dy/slidenews/4_img/2015_15/704_1596598_173709.jpg',
'https://pic1.zhimg.com/80/45ab226c1782aa374d44a5f8a5f113cd_1440w.webp?source=1940ef5c',
'https://pic1.zhimg.com/80/6390a3ae32d5252760700e83ca17b141_1440w.webp?source=1940ef5c',
'https://pica.zhimg.com/80/771aa4b2ad0f0bc9d39628e5f697a17c_1440w.webp?source=1940ef5c']
,[['http://freetyst.nf.migu.cn/public/product4th/product36/2019/09/1612/2018%E5%B9%B411%E6%9C%8810%E6%97%A507%E7%82%B950%E5%88%86%E6%89%B9%E9%87%8F%E9%A1%B9%E7%9B%AE%E5%8D%8E%E7%BA%B396%E9%A6%96-4/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005751L4ZL.mp3'
,'《速度与激情 7》电影主题曲','Charile Puth']],['《速度与激情 7》(《Fast and Furious 7》)']]


    var chosen_item,themes=['yyzt','ndmz','tqzz','ms','lyzl','ms','ndmz','tqzz'],last_theme='',_last_theme=''
    function get_theme(){
    var choose_theme=themes[Math.floor(Math.random()*themes.length)]
    if(choose_theme=='yyzt') chosen_item=items_yyzt 
    if(choose_theme=='ndmz') chosen_item=items_ndmz
    if(choose_theme=='tqzz') chosen_item=items_tqzz 
    if(choose_theme=='ms') chosen_item=item_mswlm
    if(choose_theme=='lyzl') chosen_item=item_lyzl
    if(choose_theme=='sj7') chosen_item=item_sj7
    }
    get_theme()
    last_theme=chosen_item
    
    var item='',last_='',_last_='',last_three='';
    function getimg(){
        function choose(){item = chosen_item[0][Math.floor(Math.random()*chosen_item[0].length)];}
        choose()
        while(item==last_ || item==_last_ || item==last_three) choose()
        last_three=_last_
        _last_=last_;
        last_=item;
        return item;
    }
    s=getimg()
    document.getElementById('imgs').src=s;
    document.getElementById('imgs').style="opacity:0.0;";
    document.getElementById('about_').textContent='*图片和音乐选自'+chosen_item[2][0]
    var ap = new APlayer({
        container: document.getElementById('aplayer'),
        fixed: false,                //是否附着页面底部，否为false
        autoplay: true,             //是否自动播放，否为false,移动端不能生效
        order: 'single',            //音频循环顺序（'list'：顺序, 'random'：随机）
        preload: 'auto',            //预加载（'none'：不预加载, 'metadata'：元数据, 'auto'：自动）
        listFolded: false,          //列表默认折叠，开启为true
        theme: '#0e64b0',           //主题颜色
        audio: [
            {
            name: chosen_item[1][0][1],           //歌曲名称
            artist: chosen_item[1][0][2],       //歌曲作者
            url: chosen_item[1][0][0],         //歌曲源文件地址
            cover:chosen_item[0][0]
        }]
    });
    function change_style(){
        get_theme()
        while(chosen_item==last_theme || chosen_item==_last_theme) get_theme()
        _last_theme=last_theme
        last_theme=chosen_item
        
        s=getimg()
        document.getElementById('imgs').src=s;
        document.getElementById('imgs').style="opacity:0.0;";
        document.getElementById('about_').textContent='*图片和音乐选自'+chosen_item[2][0]
        var ap = new APlayer({
        container: document.getElementById('aplayer'),
        fixed: false,                //是否附着页面底部，否为false
        autoplay: true,             //是否自动播放，否为false,移动端不能生效
        order: 'single',            //音频循环顺序（'list'：顺序, 'random'：随机）
        preload: 'auto',            //预加载（'none'：不预加载, 'metadata'：元数据, 'auto'：自动）
        listFolded: true,          //列表默认折叠，开启为true
        theme: '#0e64b0',           //主题颜色
        audio: [
            {
            name: chosen_item[1][0][1],           //歌曲名称
            artist: chosen_item[1][0][2],       //歌曲作者
            url: chosen_item[1][0][0],         //歌曲源文件地址
            cover:chosen_item[0][0]
        }]
        });
    }
    var up_down=true;
    var l_=0;
    var timesnow=0;
    function comeup(){
        document.getElementById('imgs').style="opacity:0."+l_.toString()+";";
        if(up_down==true){
                if(l_+1<=9)
                l_=l_+1;
        }
        else l_=l_-1;
        if(l_>=9){
            document.getElementById('imgs').style="opacity:1.0;";
            if(timesnow>=60)
            {
                    timesnow=0;
                    up_down=false;
            }
            else timesnow=timesnow+1;
            }
        if(l_<=0){
            p=getimg()
            document.getElementById('imgs').src=p;
            up_down=true;
        }
    }
    function flash(){
        nIntervId = setInterval(function(){comeup()}, 100);
    }
    
    flash()
```
我实际上把所有代码都放在上面了
上面一段是图片的地址(本人辛辛苦苦找的)
因为我比较喜欢新海诚的电影，所以找的基本都是关于他的电影的资源。
其中还包括了一个音乐播放器
如果你尝试制作html5页面并且需要一些资源或者一个图片显示器,那么你可以将上述代码复制并稍加修改

其中的核心:
```js
    function flash(){
        nIntervId = setInterval(function(){comeup()}, 100);
    }
```
通过打开一个检测器,时刻调用comeup()函数
我把它锁定了100毫秒主要是由于图片透明度的转化在100秒一次比较适合
你也可以更改这个数字。

可能这段代码不会再被添加到主页里了。
云之彼端的素材我没怎么找到，你可以自行添加

注意：这段代码并不能独立运行,你需要在< body >内部添加一个播放器和图片并与此段代码产生连接.

如果觉得不错的话可以<a href='/others/about#donate'>打赏</a>(这样下次更新会更快!)
