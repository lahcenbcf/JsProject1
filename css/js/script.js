const header=document.getElementById('header');
function showheader(){
    header.className="head";
}
setTimeout(showheader,1000);
var bg=document.getElementById('body')
function body(){
    bg.className="body";
}
setTimeout(body,3000);
var title=document.getElementById('h1');
title.setAttribute('style','color:white; font-family:monospace; width:30%; letter-spacing:5px; margin:80px ')
var show=document.getElementById('para');
var button=document.getElementById('show');
function showmore(){
    if (show.className=='open'){
              show.className='';
              button.innerHTML='show more'
    }else{
                  show.className='open';  
                  button.innerHTML='show less'  
    }
    };
    const footer=document.getElementsByTagName('footer')[0];
    function showfooter(){
        footer.className="end";
    }
    setTimeout(showfooter,5000);