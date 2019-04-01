$(function(){console.log('Hello world');});console.log('testing to make sure headers.js is linked up');var prevScrollpos=window.pageYOffset;window.onscroll=function(){var currentScrollPos=window.pageYOffset;if(prevScrollpos>currentScrollPos){document.getElementById("header").style.top="0";}else{document.getElementById("header").style.top="-75px";}
prevScrollpos=currentScrollPos;}
var storyDropdown=document.getElementById('header__story-dropdown');var mainMenu=document.getElementById('main-menu');storyDropdown.onmouseenter=function(){storyDropdown.classList.toggle('is-active');mainMenu.classList.toggle('open');}
storyDropdown.onmouseleave=function(){storyDropdown.classList.toggle('is-active');mainMenu.classList.toggle('open');}
var videoTop;var videoHeight;var windowWidth;$(document).ready(function(){windowWidth=$(window).width();videoTop=$('#video-top').offset().top;videoHeight=$('iframe').outerHeight();$(window).scroll(function(event){if(windowWidth>1240){goDark();}})});$(window).resize(function(){windowWidth=$(window).width();videoTop=$('#video-top').offset().top;videoHeight=$('iframe').outerHeight();if(windowWidth>1240){goDark();}else{$('.story-page').css('background-color','#fff')
$('p, h1, h2, h3, h4, h5, h6, .story-byline, .story-hero, .ybr-line').css('opacity','1')}});function goDark(){var scrollTop=$(this).scrollTop();if(scrollTop>=videoTop-(videoHeight/2)&&scrollTop<=videoTop+(videoHeight/10)){$('body').css('background-color','#000')
$('p, h1, h2, h3, h4, h5, h6, .story-byline, .story-hero, .ybr-line').css('opacity','0')}else if(scrollTop>videoTop+(videoHeight/10)){$('body').css('background-color','#fff')
$('p, h1, h2, h3, h4, h5, h6, .story-byline, .story-hero, .ybr-line').css('opacity','1')}else if(scrollTop<videoTop-(videoHeight/2)){$('body').css('background-color','#fff')
$('p, h1, h2, h3, h4, h5, h6, .story-byline, .story-hero, .ybr-line').css('opacity','1')};};var body=document.querySelector('body');var menuTrigger=document.querySelector('#toggle-main-menu-mobile');var menuContainer=document.querySelector('#main-menu-mobile');menuTrigger.onclick=function(){menuContainer.classList.toggle('open');menuTrigger.classList.toggle('is-active');body.classList.toggle('lock-scroll');}
console.log('script start');$(document).ready(function(){$("#r-2-c-2").click(function(){$("#PEP-body").fadeIn(300);});$("#PEP-button").click(function(){$("#PEP-body").fadeOut(300);});$("#r-2-c-1").click(function(){$("#passport-body").fadeIn(300);});$("#passport-button").click(function(){$("#passport-body").fadeOut(300);});$("#r-2-c-3").click(function(){$("#ID-body").fadeIn(300);});$("#ID-button").click(function(){$("#ID-body").fadeOut(300);});});var slideIndexPassport=1;showSlidesPassport(slideIndexPassport);function plusSlidesPassport(n){console.log('plusSlidesPassport');showSlidesPassport(slideIndexPassport+=n);}
function currentSlidePassport(n){console.log('currentSlidePassport');showSlidesPassport(slideIndexPassport=n);}
function showSlidesPassport(n){var i;var slides=$(".mySlides-passport");var dots=$(".dot-passport");if(n>slides.length){slideIndexPassport=1}
if(n<1){slideIndexPassport=slides.length}
for(i=0;i<slides.length;i++){slides[i].style.display="none";}
for(i=0;i<dots.length;i++){dots[i].className=dots[i].className.replace(" active","");}
slides[slideIndexPassport-1].style.display="block";dots[slideIndexPassport-1].className+=" active";}
var slideIndex=1;showSlides(slideIndex);function plusSlides(n){showSlides(slideIndex+=n);}
function currentSlide(n){showSlides(slideIndex=n);}
function showSlides(n){var i;var slides=document.getElementsByClassName("mySlides");var dots=document.getElementsByClassName("dot");if(n>slides.length){slideIndex=1}
if(n<1){slideIndex=slides.length}
for(i=0;i<slides.length;i++){slides[i].style.display="none";}
for(i=0;i<dots.length;i++){dots[i].className=dots[i].className.replace(" active","");}
slides[slideIndex-1].style.display="block";dots[slideIndex-1].className+=" active";}
var slideIndexID=1;showSlidesID(slideIndexID);function plusSlidesID(n){console.log('plusSlidesID');showSlidesID(slideIndexID+=n);}
function currentSlideID(n){console.log('currentSlideID');showSlidesID(slideIndexID=n);}
function showSlidesID(n){var i;var slides=$(".mySlides-ID");var dots=$(".dot-ID");if(n>slides.length){slideIndexID=1}
if(n<1){slideIndexID=slides.length}
for(i=0;i<slides.length;i++){slides[i].style.display="none";}
for(i=0;i<dots.length;i++){dots[i].className=dots[i].className.replace(" active","");}
slides[slideIndexID-1].style.display="block";dots[slideIndexID-1].className+=" active";}