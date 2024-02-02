
// opens
let opens = document.getElementById('opens')
let nav = document.getElementsByClassName('nav')
opens.addEventListener('click' , function(){
    nav[0].classList.toggle('test')
})
// opens

let sun = document.getElementById('sun');
let text = document.getElementById('text').children;
let links = document.getElementById('links').children;
let home = document.getElementById('home');
let darkimage = document.getElementById('darkimage');
let logo = document.getElementById('logo').children;
let h2 = document.querySelectorAll('h2');
let p = document.querySelectorAll('p');
let h1 = document.querySelectorAll('h1');
let media = document.getElementsByClassName('media');
let card = document.getElementsByClassName('card');
let view = document.getElementsByClassName('view');






sun.addEventListener('click',function(){
    if(sun.classList.contains('fa-sun')) {
        setTimeout(()=>{
            sun.classList.replace('fa-sun','fa-moon')
        },400)
        home.style.cssText=`
        background: url(./images/darkmode.jpg);
        height: 100vh;
        background-size: cover;
        transition: 1s;        
        `
        darkimage.style.cssText =`
        background-color: #160040;
        // height: 330vh;
        height: 100%;
        transition: 1s;
        `
        for (let i=0; i<media.length; i++) {
            media[i].style.color='white';
        }              
        for (let i=0 ; i< text.length; i++) {
            text[i].style.color='purple'
        }
        for (let i=0 ; i<links.length; i++) {
            links[i].style.cssText=`
            color: purple;
            transition: 1s;
            `
        }
        for (let i=0; i<view.length; i++) {
            view[i].style.cssText=`
            background-color: purple;
            transition: 1s;
            `
        }
        for(let i=0; i<card.length; i++) {
            card[i].style.cssText=`
            background-color: #1F2544;
            transition: 1s;           `
        }
        for (let i=0 ; i<logo.length; i++) {
            logo[i].style.color='purple'         
        }
        for (let i=0; i<h2.length; i++) {
            h2[i].style.color='white'
        }
        for (let i=0; i<p.length; i++) {
            if (p[i]==p[0]) {
                continue;
            }
            p[i].style.color='white';
        }
        for (let i=0; i<p.length; i++) {
            if (h1[i]==h1[0]) {
                continue;
            }
            h1[i].style.color='white';
        }
       
       
        
    }
    else {
        setTimeout(()=>{
            sun.classList.replace('fa-moon','fa-sun')
        },400)
        home.style.cssText=`
        background: '';
        transition: 1s;
        `
        darkimage.style.cssText =`
        background-color: '';
        height: '';
        transition: 1s;
        `
        for (let i=0; i<view.length; i++) {
            view[i].style.cssText=`
            background-color: '';
            transition: 1s;
            `
        }
        for(let i=0; i<card.length; i++) {
            card[i].style.cssText=`
            background-color: '';
            transition: 1s;           `
        }
        for (let i=0; i<media.length; i++) {
            media[i].style.color='';
        }
        for (let i=0 ; i< text.length; i++) {
            text[i].style.color=''
        }
        for (let i=0 ; i<links.length; i++) {
            links[i].style.color=''
        }
        for (let i=0 ; i<logo.length; i++) {
            logo[i].style.color=''
        }
        for (let i=0; i<h2.length; i++) {
            h2[i].style.color=''
        }
        for (let i=0; i<p.length; i++) {
            if (p[i]==p[0]) {
                continue;
            }
            p[i].style.color='';
        }
        for (let i=0; i<p.length; i++) {
            if (h1[i]==h1[0]) {
                continue;
            }
            h1[i].style.color='';
        }
        
        
    }
})
// let index = document.getElementsByClassName('tt')
// for (let i=0; i<index.length; i++) {
//     index[i].style.color='red'
// }
