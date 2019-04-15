// Women laws interactive

var slider = document.getElementById("myRange");
var output = slider.value;
var category = document.getElementById("category");
var legal = document.getElementById("legal");
var depends = document.getElementById("depends");
var illegal = document.getElementById("illegal");

slider.oninput = function () {
	'use strict';
	output = this.value;
	if (this.value < 25) {
		category.innerHTML = "<div class='laws'><div class='map'><img src='assets/venezuela.png'><p>VENEZUELA</p></div><div class='desc'><p>The prostitution of minors (younger than 16 years old) is illegal.</p><h3>Did You Know?</h3><ul><li>A pack of 36 condoms was sold online for the equivalent of $755. This reflects the growing cost of safe sex in Venezuela which is leading to a spike in sexually transmitted diseases and teen pregnancies.</li><li>Traffickers are targeting Venezuelan women, especially of poor and indigenous populations, and forcing them into prostitution. They promise clothes, food and lodging which causes many women to become trapped and feel indebted. In one study, attorneys Beatriz Borge and Lilian Aya found that the number of sex-trafficked women has more than doubled since 2016.</li></ul></div></div>";
		slider.style.background = "#46BF21";
		legal.style.fontWeight = "700";
		depends.style.fontWeight = "200";
		illegal.style.fontWeight = "200";
	}
	else if (this.value > 25 && this.value < 75) {
		category.innerHTML = "<div class='laws'><div class='map'><img src='assets/colombia.png'><p>COLOMBIA</p></div><div class='desc'><h3>Regulation</h3><p>While prostitution is permitted, it is supposed to be confined to tolerance zones. Despite this, activity outside of these designated brothels is rarely enforced by law enforcement.</p><h3>Major City</h3><p>Cartagena</p><h3>By the Numbers</h3><ul><li>35,000: the number of minors that face sexual exploitation in Colombia. The country’s general inspector states, “I think that this is one of the worst problems that the country has.”</li><li>3: the average difference in U.S. dollars between what Venezuelan sex workers charge versus Colombian ones. The price difference can create a tense, competitive environment.</li></ul></div></div>";
		slider.style.background = "#FBBC00";
		legal.style.fontWeight = "200";
		depends.style.fontWeight = "700";
		illegal.style.fontWeight = "200";
	}
	else if (this.value > 75 && this.value < 100) {
		category.innerHTML = "<div class='laws'><div class='map'><img src='assets/usa.png'><p>USA</p></div><div class='desc'><h3>Regulation</h3><p>It is prohibited throughout the United States, except in 12 of Nevada’s 16 counties.</p><h3>Major City</h3><p>Atlanta</p><h3>By the Numbers</h3><ul><li>290,000,000: how much in U.S. dollars the sex trade is worth in Atlanta as of 2007. Although prostitution is legal in Nevada, Atlanta’s capital has a robust sex industry.</li><li>100,000 to 300,000: the range of children estimated to be sex trafficked in the U.S. according to several studies. However, these numbers conflict with other estimates that say only a few hundred minors are trafficked. More solid research is needed to prevent news sources from publishing exaggerated data.</li></ul></div></div>";
		slider.style.background = "#C70032";
		legal.style.fontWeight = "200";
		depends.style.fontWeight = "200";
		illegal.style.fontWeight = "700";
	}
}
