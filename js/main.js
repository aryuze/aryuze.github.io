import { get_picture } from './pictures.js'

window.scrollTo(0,0);
const img_tar = document.querySelector('.img');
img_tar.src=get_picture();
//img_tar.setAttribute('style', 'transform:scale(1.5,1.5);')
function check_ttls(){
    var winheight=window.innerHeight;
    const target = document.querySelectorAll('#common-para');
    for (var a=0;a<target.length;a++){
        var clientRect = target[a].getBoundingClientRect()
        if (0.2*winheight<=clientRect.y && clientRect.y+clientRect.height<=0.8*winheight){
            target[a].setAttribute('style', 'color:black;')
            target[a].setAttribute('style', 'font-weight:bolder;')
        }
        else{
            target[a].setAttribute('style', 'font-weight:normal;')
            target[a].setAttribute('style', 'color:#ccc;')
        }
    }

    const target_ttl = document.querySelectorAll('.ttl');
    for (var a=0;a<target_ttl.length;a++){
        var clientRect = target_ttl[a].getBoundingClientRect()
        if (0.2*winheight<=clientRect.y && clientRect.y+clientRect.height<=0.8*winheight){
            target_ttl[a].setAttribute('style', 'color:black;')
            target_ttl[a].setAttribute('style', 'font-weight:bolder;')
        }
        else{
            target_ttl[a].setAttribute('style', 'font-weight:normal;')
            target_ttl[a].setAttribute('style', 'color:#ccc;')
        }
    }

    const target_pic = document.querySelector('.img-container');
    const target_word = document.querySelector('.main_content');
    const target_mainttl = document.querySelector('.toptxt');
    var clientRect = target_pic.getBoundingClientRect()
    //console.log(clientRect.y)
    var t = document.documentElement.scrollTop||document.body.scrollTop;
    //console.log(t/winheight)
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

window.addEventListener('scroll',check_ttls, true);