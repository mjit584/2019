
var slider = document.getElementById("myRange");
var output = slider.value;
var category = document.getElementById("category");
var legal = document.getElementById("legal");
var depends = document.getElementById("depends");
var illegal = document.getElementById("illegal");

slider.oninput = function() {
  'use strict';
  output = this.value;
	if (this.value < 25 ) {
		category.innerHTML = "<div class='laws'><div class='map'><img src='/story5/assets/venezuela.png'><p>VENEZUELA</p></div><div class='desc'>How it’s regulated: Venezuela’s Ministry of Health and Social Development (Ministerio de Salud y Desarrollo Social) requires that women working as sex workers in nightclubs have a free monthly health check.</div></div>";
		slider.style.background = "#46BF21";
    legal.style.fontWeight = "700";
    depends.style.fontWeight = "200";
    illegal.style.fontWeight = "200";
	}
	else if (this.value > 25 && this.value < 75 ) {
		category.innerHTML = "<div class='laws'><div class='map'><img src='/story5/assets/colombia.png'><p>COLOMBIA</p></div><div class='desc'>Yes but is supposed to be confined to \"tolerance zones\". <p>Child sexual exploitation is illegal but child labor and exploitation is still rampant in certain parts of the country such as Cartagena</p><h3>How it is regulated</h3><p>The government is supposed to discourage it</p><h3>Tensions</h3><ul><li>Venezuelan workers are competition for Colombian ones.</li><li>Venezuelans charge the equivalent of $10-13 for a 20-minute session; the Colombian rate is around $13-17.</li><li>In an hour a sex worker can make the equivalent of a month\'s minimum wage in Venezuela</li><li>Sex tourism is a strong part of the Colombian economy and is a stereotype</li><li>Child exploitation still an issue: the tradition of Colombian drug lords sexually exploiting girls goes back to the days of the late drug baron Pablo Escobar in the 1980s, whose demand for teenage virgins was notorious.</li></ul></div></div>";
		slider.style.background = "#FBBC00";
    legal.style.fontWeight = "200";
    depends.style.fontWeight = "700";
    illegal.style.fontWeight = "200";
	}
	else if (this.value > 75 && this.value < 100 ) {
		category.innerHTML = "<div class='laws'><div class='map'><img src='/story5/assets/usa.png'><p>USA</p></div><div class='desc'>How it’s regulated: Venezuela’s Ministry of Health and Social Development (Ministerio de Salud y Desarrollo Social) requires that women working as sex workers in nightclubs have a free monthly health check.</div></div>";
		slider.style.background = "#C70032";
    legal.style.fontWeight = "200";
    depends.style.fontWeight = "200";
    illegal.style.fontWeight = "700";
	}
}
