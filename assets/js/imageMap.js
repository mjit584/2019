
// Get the image map to work
var floor = document.getElementById('floor');
var bed = document.getElementById('bed');
var wall = document.getElementById('wall');
var bags = document.getElementById('bags');
var floorCircle = document.getElementById('dot-floor');
var bedCircle = document.getElementById('dot-bed');
var wallCircle = document.getElementById('dot-wall');
var bagsCircle = document.getElementById('dot-bags');
var infoBox = document.getElementById('room__info');
var svg = document.getElementById("interactive__svg");
var svgPos = svg.getBoundingClientRect();
var ttHeight = 130;
var ttWidth = 500;
var windowWidth;

windowWidth = $(window).width();

window.onload = function () {
  if (windowWidth > 1240) {
    function hoverRed(picSection) {
      picSection.style.fill = "rgba(199, 0, 50, 0.36)";
    }

    function stopHover(picSection) {
      picSection.style.fill = "rgba(199, 0, 50, 0)";
    }
    floorCircle.onmouseenter = function () {
      hoverRed(floor);
      var floorCircPos = floorCircle.getBoundingClientRect();
      console.log(floorCircPos);
      console.log("svgPos", svgPos);
      var html = '';
      html += '<p>Many Venezuelans rent out <em>Inquilinato</em>, or daily rooms, to sleep in. Rooms cost an average of $10 USD per day. Even though one room averages just 2 meters by 2 meters (43 square feet), it usually houses multiple families at a time</p>';
      infoBox.innerHTML = html;
      infoBox.classList.remove('hidden');
      var x = floorCircPos.x;
      var height = infoBox.getBoundingClientRect().height;
      var svgX = svgPos.x;
      var top = (x - svgX - height) + "px";
      var left = floorCircPos.left - (ttWidth / 2) + "px";
      console.log(top);
      console.log("height:", height);
      infoBox.style.top = top;
      infoBox.style.left = left;
      console.log("infoxBox top:", infoBox.style.top);
      console.log("infoxBox left:", infoBox.style.left);
    };

    floorCircle.onmouseleave = function () {
      stopHover(floor);
      infoBox.classList.add('hidden');
    };

    wallCircle.onmouseenter = function () {
      hoverRed(wall);
      var wallCircPos = this.getBoundingClientRect();
      var html = '';
      html += '<p>There are no windows in this tiny room, which is part of a hall-style dorm. The only entertainment is a small TV atop a dresser which everyone in the room shares.</p>';
      infoBox.innerHTML = html;
      infoBox.classList.toggle('hidden');
      var x = wallCircPos.x;
      console.log("wall x:", x);
      var height = infoBox.getBoundingClientRect().height;
      var svgX = svgPos.x;
      var top = (x - svgX - (height * 4)) + "px";
      console.log("wall y", wallCircPos.y);
      var left = wallCircPos.left - ttWidth + "px";
      console.log(top);
      console.log("height:", height);
      infoBox.style.top = top;
      infoBox.style.left = left;
      console.log("infoxBox top:", infoBox.style.top);
      console.log("infoxBox left:", infoBox.style.left);
    };

    wallCircle.onmouseleave = function () {
      stopHover(wall);
      infoBox.classList.add('hidden');
    };

    bagsCircle.onmouseenter = function () {
      hoverRed(bags);
      var bagsCircPos = this.getBoundingClientRect();
      var html = '';
      html += '<p>Venezuelans crossing over the border by foot leave with the clothes on their back and the few items they can stuff into a handful of suitcases, backpacks or duffel bags.</p>';
      infoBox.innerHTML = html;
      infoBox.classList.toggle('hidden');
      var x = bagsCircPos.x;
      var height = infoBox.getBoundingClientRect().height;
      var svgX = svgPos.x;
      var top = (x - svgX - (height * 1.5)) + "px";
      var left = bagsCircPos.left - (ttWidth / 2) + "px";
      console.log(top);
      console.log("height:", height);
      infoBox.style.top = top;
      infoBox.style.left = left;
      console.log("infoxBox top:", infoBox.style.top);
      console.log("infoxBox left:", infoBox.style.left);
    };

    bagsCircle.onmouseleave = function () {
      stopHover(bags);
      infoBox.classList.add('hidden');
    };

    bedCircle.onmouseenter = function () {
      hoverRed(bed);
      var bedCircPos = this.getBoundingClientRect();
      var html = '';
      html += '<p>Each room has one bed, so at night, the friends pull out rollaway beds to sleep on. It is common to develop bed sores and rashes from sleeping in such tight quarters.</p>';
      infoBox.innerHTML = html;
      infoBox.classList.toggle('hidden');
      var x = bedCircPos.x;
      var height = infoBox.getBoundingClientRect().height;
      var svgX = svgPos.x;
      var top = (x - svgX - height) + "px";
      var left = bedCircPos.left - (ttWidth / 2) + "px";
      console.log(top);
      console.log("height:", height);
      infoBox.style.top = top;
      infoBox.style.left = left;
      console.log("infoxBox top:", infoBox.style.top);
      console.log("infoxBox left:", infoBox.style.left);
    };

    bedCircle.onmouseleave = function () {
      stopHover(bed)
      infoBox.classList.add('hidden');
    };
  }
};


// On click, the infomration appears if mobile
floorCircle.onclick = function () {
  var floorCircPos = floorCircle.getBoundingClientRect();
  console.log(floorCircPos);
  console.log("svgPos", svgPos);
  var html = '';
  html += '<p>Many Venezuelans rent out <em>Inquilinato</em>, or daily rooms, to sleep in. Rooms cost an average of $10 USD per day. Even though one room averages just 2 meters by 2 meters (43 square feet), it usually houses multiple families at a time</p>';
  if (infoBox.innerHTML != html) {
    infoBox.innerHTML = html;
  } else {
    infoBox.classList.toggle('hidden');
  }
}

bedCircle.onclick = function () {
  var bedCircPos = this.getBoundingClientRect();
  var html = '';
  html += '<p>Each room has one bed, so at night, the friends pull out rollaway beds to sleep on. It is common to develop bed sores and rashes from sleeping in such tight quarters.</p>';
  if (infoBox.innerHTML != html) {
    infoBox.innerHTML = html;
  } else {
    infoBox.classList.toggle('hidden');
  }
}

bagsCircle.onclick = function () {
  var bagsCircPos = this.getBoundingClientRect();
  var html = '';
  html += '<p>Venezuelans crossing over the border by foot leave with the clothes on their back and the few items they can stuff into a handful of suitcases, backpacks or duffel bags.</p>';
  if (infoBox.innerHTML != html) {
    infoBox.innerHTML = html;
  } else {
    infoBox.classList.toggle('hidden');
  }
}

wallCircle.onclick = function () {
  var wallCircPos = this.getBoundingClientRect();
  var html = '';
  html += '<p>There are no windows in this tiny room, which is part of a hall-style dorm. The only entertainment is a small TV atop a dresser which everyone in the room shares.</p>';
  if (infoBox.innerHTML != html) {
    infoBox.innerHTML = html;
  } else {
    infoBox.classList.toggle('hidden');
  }
}