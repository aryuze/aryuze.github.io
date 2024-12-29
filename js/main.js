import { get_picture } from './pictures.js'

window.scrollTo(0,0);
const img_tar = document.querySelector('.img');
img_tar.src=get_picture();

function setattr(seletor,styleon,styleoff){
    var winheight=window.innerHeight;
    const target = document.querySelectorAll(seletor);
    for (var a=0;a<target.length;a++){
        var clientRect = target[a].getBoundingClientRect()
        if (0.2*winheight<=clientRect.y && clientRect.y+clientRect.height<=0.8*winheight){
            target[a].setAttribute('style', styleon)
        }
        else{
            target[a].setAttribute('style',styleoff)
        }
    }
}

function check_ttls(){
    var winheight=window.innerHeight;
    setattr('#common-para','color:black;font-weight:bolder;','color:#ccc;font-weight:normal;')
    setattr('.ttl','color:black;font-weight:bolder;','color:#ccc;font-weight:normal;')
    setattr('.program','width: 80dvw;background:rgb(65,105,225);margin-left: 5dvw;','margin-left: 5dvw;background:rgb(240,255,255);width: 70dvw;')
    setattr('.warning','width: 40dvw;background:rgb(243, 26, 26);margin-left: 5dvw;','margin-left: 5dvw;background:rgb(240,255,255);width: 30dvw;')
    setattr('.program-word','margin-left: 5dvw;color:rgb(255,255,255);','margin-left: 5dvw;color:#ccc;')
    setattr('.program-word-more','margin-left: 5dvw;color:rgb(175,235,235);font-style: italic;','margin-left: 5dvw;color:#ccc;font-style: normal;')

    const target_pic = document.querySelector('.img-container');
    const target_word = document.querySelector('.main_content');
    const target_mainttl = document.querySelector('.toptxt');
    var clientRect = target_pic.getBoundingClientRect()
    var t = document.documentElement.scrollTop||document.body.scrollTop;
    if (t/winheight<0.4){
        target_pic.setAttribute('style', 'top:0dvh;')
        target_word.setAttribute('style', 'margin-top:20dvh;')
        target_mainttl.setAttribute('style', 'transform:scale(1.2,1.2);')
    }
    else{
        target_pic.setAttribute('style', 'top:-40dvh;')  
        target_word.setAttribute('style', 'margin-top:-20dvh;')
        target_mainttl.setAttribute('style', 'transform:scale(0.8,0.8);')
    }
}
//check_ttls()
window.addEventListener('scroll',check_ttls, true);