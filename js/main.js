

console.log(window.innerHeight);
function check_ttls(){
    const target = document.querySelectorAll('#common-para');
    //console.log('');
    for (var a=0;a<target.length;a++){
        const clientRect = target[a].getBoundingClientRect()
        var winheight=window.innerHeight;
        //console.log(clientRect.y);
        
        if (0.2*winheight<=clientRect.y && clientRect.y+clientRect.height<=0.8*winheight){
            
            target[a].setAttribute('style', 'color:black;')
            target[a].setAttribute('style', 'font-weight:bolder;')
        }
        /*else if (0<=clientRect.y && clientRect.y+clientRect.height>=winheight){
            
            target[a].setAttribute('style', 'color:black;')
            target[a].setAttribute('style', 'font-weight:bolder;')
        }
        else if (clientRect.y+clientRect.height<=0.9*winheight && clientRect.y<=0){
                
                target[a].setAttribute('style', 'color:black;')
                target[a].setAttribute('style', 'font-weight:bolder;')
        }*/
        else{
            target[a].setAttribute('style', 'font-weight:normal;')
            target[a].setAttribute('style', 'color:#ccc;')
        }
    }
}

window.addEventListener('scroll',check_ttls, true);



/* Make request to external URL
const response = await fetch('https://github.com/aryuze?tab=repositories');

// Parse response as text 
const html = await response.text(); 

// Load HTML into DOM parser
const parser = new DOMParser();
const doc = parser.parseFromString(html, 'text/html');

// Select element and get text
const element = doc.getElementsByTagName('a');
const text = element.textContent;*/
