window.onload =
    function() {
        const cover = document.querySelector('.program-word-more');
        cover.onclick = click;
        const exit = document.querySelector('.program-word-exit');
        exit.onclick = exitnow;
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
function click(){
    const container = document.querySelector('.container');
    const cover = document.querySelector('.modal');
    container.setAttribute('style', 'display:block;')
    cover.setAttribute('style', 'display:block;')
    lockScroll()
    container.innerHTML='Aryuze Music Player是我最新制作的音乐播放软件,有时间我会传到网上.'
}