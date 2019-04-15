$(function(){console.log('Hello world');});console.log('testing to make sure headers.js is linked up');var prevScrollpos=window.pageYOffset;window.onscroll=function(){var currentScrollPos=window.pageYOffset;if(prevScrollpos>currentScrollPos){document.getElementById("header").style.top="0";}else{document.getElementById("header").style.top="-75px";}
prevScrollpos=currentScrollPos;fillProgress();}
var storyDropdown=document.getElementById('header__story-dropdown');var mainMenu=document.getElementById('main-menu');var overlay=document.getElementById("home-overlay");storyDropdown.onmouseenter=function(){storyDropdown.classList.toggle('is-active');mainMenu.classList.toggle('open');overlay.style.display="flex";}
storyDropdown.onmouseleave=function(){storyDropdown.classList.toggle('is-active');mainMenu.classList.toggle('open');overlay.style.display="none";}
var photoDropdown=document.getElementById('header__photo-dropdown');var photoMainMenu=document.getElementById('main-menu-photos');photoDropdown.onmouseenter=function(){photoDropdown.classList.toggle('is-active');photoMainMenu.classList.toggle('open');overlay.style.display="flex";}
photoDropdown.onmouseleave=function(){photoDropdown.classList.toggle('is-active');photoMainMenu.classList.toggle('open');overlay.style.display="none";}
function fillProgress(){var winScroll=document.body.scrollTop||document.documentElement.scrollTop;var height=document.documentElement.scrollHeight-document.documentElement.clientHeight;var scrolled=(winScroll/height)*100;document.getElementById("photo-bar").style.width=scrolled+"%";}
var videoTop;var videoHeight;var windowWidth;$(document).ready(function(){windowWidth=$(window).width();videoTop=$('#video-top').offset().top;videoHeight=$('iframe').outerHeight();$(window).scroll(function(event){if(windowWidth>1240){goDark();}})});$(window).resize(function(){windowWidth=$(window).width();videoTop=$('#video-top').offset().top;videoHeight=$('iframe').outerHeight();if(windowWidth>1240){goDark();}else{$('.story-page').css('background-color','#fff')
$('p, h1, h2, h3, h4, h5, h6, .story-byline, .story-hero, .ybr-line').css('opacity','1')}});function goDark(){var scrollTop=$(this).scrollTop();if(scrollTop>=videoTop-(videoHeight/2)&&scrollTop<=videoTop+(videoHeight/10)){$('body').css('background-color','#000')
$('p, h1, h2, h3, h4, h5, h6, .story-byline, .story-hero, .ybr-line').css('opacity','0')}else if(scrollTop>videoTop+(videoHeight/10)){$('body').css('background-color','#fff')
$('p, h1, h2, h3, h4, h5, h6, .story-byline, .story-hero, .ybr-line').css('opacity','1')}else if(scrollTop<videoTop-(videoHeight/2)){$('body').css('background-color','#fff')
$('p, h1, h2, h3, h4, h5, h6, .story-byline, .story-hero, .ybr-line').css('opacity','1')};};var body=document.querySelector('body');var menuTrigger=document.querySelector('#toggle-main-menu-mobile');var menuContainer=document.querySelector('#main-menu-mobile');menuTrigger.onclick=function(){menuContainer.classList.toggle('open');menuTrigger.classList.toggle('is-active');body.classList.toggle('lock-scroll');}
console.log('script start');$(document).ready(function(){$("#r-2-c-2").click(function(){$("#PEP-body").fadeIn(300);$(".container-body").css("display","none");$("#pep-slide-buttons").css({"display":"flex","opacity":"1"});});$("#PEP-button").click(function(){$("#PEP-body").fadeOut(300);$(".container-body").css("display","flex");});$("#r-2-c-1").click(function(){$("#passport-body").fadeIn(300);$(".container-body").css("display","none");$("#passport-slide-buttons").css({"display":"flex","opacity":"1"});});$("#passport-button").click(function(){$("#passport-body").fadeOut(300);$(".container-body").css("display","flex");});$("#r-2-c-3").click(function(){$("#ID-body").fadeIn(300);$(".container-body").css("display","none");$("#ID-slide-buttons").css({"display":"flex","opacity":"1"});});$("#ID-button").click(function(){$("#ID-body").fadeOut(300);$(".container-body").css("display","flex");});});$(document).ready(function(){$(window).scroll(function(){if($(window).scrollTop()>$("#passport-body-top").offset().top-250&&$(window).scrollTop()<$("#passport-body-bottom").offset().top-350){console.log('test');$("#passport-slide-buttons").css("opacity","1");$("#passport-slide-buttons").css("display","flex");}
else{console.log('test2');$("#passport-slide-buttons").css("opacity","0");$("#passport-slide-buttons").css("display","none");}});$(window).scroll(function(){if($(window).scrollTop()>$("#pep-body-top").offset().top-250&&$(window).scrollTop()<$("#pep-body-bottom").offset().top-350){console.log('test');$("#pep-slide-buttons").css("display","flex");$("#pep-slide-buttons").css("opacity","1");}
else{console.log('test2');$("#pep-slide-buttons").css("opacity","0");$("#pep-slide-buttons").css("display","none");}});$(window).scroll(function(){if($(window).scrollTop()>$("#ID-body-top").offset().top-250&&$(window).scrollTop()<$("#ID-body-bottom").offset().top-350){console.log('test');$("#ID-slide-buttons").css("display","flex");$("#ID-slide-buttons").css("opacity","1");}
else{console.log('test2');$("#ID-slide-buttons").css("opacity","0");$("#ID-slide-buttons").css("display","none");}});});var slideIndexPassport=1;showSlidesPassport(slideIndexPassport);function showSlidesPassport(n){var i;var slides=$(".mySlides-passport");var dots=$(".dot-passport");if(n>slides.length){slideIndexPassport=1}
if(n<1){slideIndexPassport=slides.length}
for(i=0;i<slides.length;i++){slides[i].style.display="none";}
for(i=0;i<dots.length;i++){dots[i].className=dots[i].className.replace(" active","");}
slides[slideIndexPassport-1].style.display="flex";dots[slideIndexPassport-1].className+=" active";}
function plusSlidesPassport(n){console.log('plusSlidesPassport');showSlidesPassport(slideIndexPassport+=n);console.log(slideIndexPassport+n);}
function currentSlidePassport(n){console.log('currentSlidePassport');showSlidesPassport(slideIndexPassport=n);}
var slideIndex=1;showSlides(slideIndex);function showSlides(n){var i;var slides=document.getElementsByClassName("mySlides");var dots=document.getElementsByClassName("dot");if(n>slides.length){slideIndex=1}
if(n<1){slideIndex=slides.length}
for(i=0;i<slides.length;i++){slides[i].style.display="none";}
for(i=0;i<dots.length;i++){dots[i].className=dots[i].className.replace(" active","");}
slides[slideIndex-1].style.display="flex";dots[slideIndex-1].className+=" active";}
function plusSlides(n){console.log('plusSlides');showSlides(slideIndex+=n);console.log(slideIndex+n);}
function currentSlide(n){showSlides(slideIndex=n);}
var slideIndexID=1;showSlidesID(slideIndexID);function showSlidesID(n){var i;var slides=$(".mySlides-ID");var dots=$(".dot-ID");if(n>slides.length){slideIndexID=1}
if(n<1){slideIndexID=slides.length}
for(i=0;i<slides.length;i++){slides[i].style.display="none";}
for(i=0;i<dots.length;i++){dots[i].className=dots[i].className.replace(" active","");}
slides[slideIndexID-1].style.display="flex";dots[slideIndexID-1].className+=" active";}
function plusSlidesID(n){console.log('plusSlidesID');showSlidesID(slideIndexID+=n);console.log(slideIndexID+n);}
function currentSlideID(n){console.log('currentSlideID');showSlidesID(slideIndexID=n);}
$(document).ready(function(){$(window).scroll(function(){if($(window).scrollTop()>$("#birthright-body-top").offset().top-250&&$(window).scrollTop()<$("#birthright-body-bottom").offset().top-350){$("#birthright-slide-buttons").css("opacity","1");$("#birthright-slide-buttons").css("display","flex");}
else{$("#birthright-slide-buttons").css("opacity","0");$("#birthright-slide-buttons").css("display","none");}});});var slideIndexBirthright=1;showSlidesBirthright(slideIndexBirthright);function showSlidesBirthright(n){var i;var slides=$(".mySlides-birthright");var dots=$(".dot-Birthright");if(n>slides.length){slideIndexBirthright=1}
if(n<1){slideIndexBirthright=slides.length}
for(i=0;i<slides.length;i++){slides[i].style.display="none";}
for(i=0;i<dots.length;i++){dots[i].className=dots[i].className.replace(" active","");}
slides[slideIndexBirthright-1].style.display="flex";dots[slideIndexBirthright-1].className+=" active";}
function plusSlidesBirthright(n){showSlidesBirthright(slideIndexBirthright+=n);}
function currentSlideBirthright(n){showSlidesBirthright(slideIndexBirthright=n);}