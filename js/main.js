import { get_picture } from './pictures.js'


const img_tar = document.querySelector('.img');
img_tar.src=get_picture();
img_tar.setAttribute('style', 'transform:scale(1.1,1.1);')

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
    const target_word = document.querySelector('.toptxt_cover');
    var clientRect = target_pic.getBoundingClientRect()
    if (clientRect.y+clientRect.height>=0){
        console.log(clientRect.y+clientRect.height);
        target_pic.setAttribute('style', 'transform:scale(1.1,1.1);')
        target_word.setAttribute('style', 'transform:scale(0.9,0.9);')
    }
    else{
        target_pic.setAttribute('style', 'transform:scale(1.0,1.0);')
        target_word.setAttribute('style', 'transform:scale(1.1,1.1);')
    }
    
}

window.addEventListener('scroll',check_ttls, true);