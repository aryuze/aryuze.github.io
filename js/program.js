window.onload =
    function() {
        const target = document.querySelectorAll('.program-word-more');
        for (var a=0;a<target.length;a++){
            target[a].onclick=click(a);
        }

        const exit = document.querySelector('.program-button-word');
        exit.onclick = exitnow;
        exitnow()
}

function lockScroll() {
    let widthBar = 17, root = document.documentElement;
    if (typeof window.innerWidth == 'number') {
        widthBar = window.innerWidth - root.clientWidth;
    }
    root.style.overflow = 'hidden';
    root.style.borderRight = widthBar + 'px solid transparent';
}
function unlockScroll() {
    let root = document.documentElement;
    root.style.overflow = '';
    root.style.borderRight = '';
}

function exitnow(){
    const container = document.querySelector('.container');
    const cover = document.querySelector('.modal');
    container.setAttribute('style', 'display:none;')
    cover.setAttribute('style', 'display:none;')
    unlockScroll()
}
var all_text=['Aryuze Music Player是我最新制作的音乐播放软件,有时间我会传到网上.'
            ,'Aryuze Translator是我之前写的一个翻译软件.']
function click(textplace){
    const container = document.querySelector('.container');
    const cover = document.querySelector('.modal');
    container.setAttribute('style', 'display:block;')
    cover.setAttribute('style', 'display:block;')
    lockScroll()
    container.innerHTML=all_text[textplace]
}