

console.log(window.innerHeight);
function check_ttls(){
    const target = document.querySelectorAll('#common-para');
    //console.log(target);
    for (var a=0;a<target.length;a++){
        const clientRect = target[a].getBoundingClientRect()
        var winheight=window.innerHeight;
        //console.log(clientRect.y);
        
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
    //console.log(target);
    for (var a=0;a<target_ttl.length;a++){
        const clientRect = target_ttl[a].getBoundingClientRect()
        var winheight=window.innerHeight;
        //console.log(clientRect.y);
        
        if (0.2*winheight<=clientRect.y && clientRect.y+clientRect.height<=0.8*winheight){
            
            target_ttl[a].setAttribute('style', 'color:black;')
            target_ttl[a].setAttribute('style', 'font-weight:bolder;')
        }
        else{
            target_ttl[a].setAttribute('style', 'font-weight:normal;')
            target_ttl[a].setAttribute('style', 'color:#ccc;')
        }
    }

    const target_pic = document.querySelector('img-container');
    if (0.2*winheight<=clientRect.y && clientRect.y+clientRect.height<=0.8*winheight){
            
        target_ttl[a].setAttribute('style', 'color:black;')
        target_ttl[a].setAttribute('style', 'font-weight:bolder;')
    }
    else{
        target_ttl[a].setAttribute('style', 'font-weight:normal;')
        target_ttl[a].setAttribute('style', 'color:#ccc;')
    }
}

window.addEventListener('scroll',check_ttls, true);