---
title: "Venezuelan Bolívar Timeline"
story: "Employment"
graphics:
- "Kailee Akers"
---
<style>
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}
.timeline::after {
  content: '';
  position: absolute;
  width: 1px;
  background-color: #000;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}
.bolivar {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}
.bolivar::after {
  content: '';
  position: absolute;
  width: 35px;
  height: 35px;
  right: -15px;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}
.yellow::after {
    background-color: yellow;
}
.red::after {
    background-color: red;
}
.blue::after {
    background-color: blue;
}
.left {
  left: 0;
  text-align:right;
}
.right {
  left: 50%;
  text-align:left;
}
.right::after {
  left: -20px;
}
.timeline-content {
  padding: 20px 30px;
  position: relative;
  border-radius: 6px;
}
@media screen and (max-width: 600px) {
  .timeline::after {
    left: 31px;
  }
  .bolivar {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }
  .bolivar::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }
  .left::after, .right::after {
    left: 15px;
  }
  .right {
    left: 0%;
  }
  .left {
    text-align:left;
  }
}
</style>

<section>
  <h2 class="interactive__title">Venezuelan Bolívar Timeline</h2>
  <h3>The Bolívar is an ever-changing currency</h3>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="ybr-line" x="0px" y="0px" viewBox="0 0 192 10" xml:space="preserve" preserveAspectRatio="none" style="opacity: 1;">
    <g>
      <line class="ybr-section" fill="none" stroke="#fbbc00" stroke-miterlimit="10" stroke-width="2" x1="0" y1="1.5" x2="64.993" y2="1.5"></line>
    </g>
    <g>
      <line class="ybr-section" fill="none" stroke="#1457D3" stroke-miterlimit="10" stroke-width="2" x1="64.718" y1="1.5" x2="128.058" y2="1.5"></line>
    </g>
    <g>
      <line class="ybr-section" fill="none" stroke="#C70032" stroke-miterlimit="10" stroke-width="2" x1="127.507" y1="1.5" x2="190.847" y2="1.5"></line>
    </g>
  </svg>

<!-- Beginning of Timeline -->
<div class="timeline">
  <div class="bolivar left yellow">
    <div class="timeline-content">
      <h2>1879</h2>
      <h3>Bolívar</h3>
      <p>The Bolívar (Bs.) was a stable currency pegged to silver, gold, and the US dollar.</p>
    </div>
  </div>
  <div class="bolivar right yellow">
    <div class="timeline-content">
      <h2>1998</h2>
      <h3>Bolívar</h3>
      <p>Due to economic inflation, coins and bank notes of larger values had to be issued.</p>
    </div>
  </div>
  <div class="bolivar left blue">
    <div class="timeline-content">
      <h2>2008</h2>
      <h3>Bolívar fuerte</h3>
      <p>The Bolívar fuerte (BsF.) replaced the Bolívar, taking off three zeros from the currency.  Inflation remained even though the numbers were smaller.</p>
    </div>
  </div>
  <div class="bolivar right blue">
    <div class="timeline-content">
      <h2>2016</h2>
      <h3>Bolívar fuerte</h3>
      <p>Economic inlfation strikes again, requiring larger coins and bank notes to be issued.</p>
    </div>
  </div>
  <div class="bolivar left red">
    <div class="timeline-content">
      <h2>2018</h2>
      <h3>Bolívar soberano</h3>
      <p>The Bolívar soberano (BsS.) replaced the Bolívar fuerte and took five zeros off the currency. </p>
    </div>
  </div>
  <div class="bolivar right red">
    <div class="timeline-content">
      <h2>2019</h2>
      <h3>Bolívar soberano</h3>
      <p>The Bolívar soberano is the most recent reissue but due to hyperinflation the currency is virtually worthless.</p>
    </div>
  </div>
</div>
</section>
