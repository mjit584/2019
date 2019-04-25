---
title: "The Legal Status of Prostitution"
story: "Women"
graphics:
- "Carlos Salas"
- "Sally Dillon"
---
<section class="interactive">
  <div id="womenSlider2">
    <h2 class="interactive__title">Come To Terms</h2>
    {{< ybr-line >}}
    <div class="interactive__intro">The main difference between prostitution and sex trafficking is that prostitution is voluntary while sex trafficking relies on the use of force. Prostitutes often become victims of sex trafficking because they find themselves in vulnerable situations. Sex tourists often exploit minors or hire victims of sex trafficking.</div>
    <div class="interactive__instructions">Click on parts of the venn diagram to learn more.</div>
    <svg class="venn-diagram" width="100%" height="60vh" style="max-height:700px" viewBox="-5 -5 807 690" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle class="vd-circle vd-big vd-yellow vd-prostitution" onclick="showDef('prostitution-def')" cx="263.109" cy="262.5" r="262.5" fill-opacity="0.5"/>
      <circle class="vd-circle vd-big vd-blue vd-sex-trafficking" onclick="showDef('sex-trafficking-def')" cx="538.891" cy="262.5" r="262.5" fill-opacity="0.5"/>
      <circle class="vd-circle vd-small vd-yellow vd-sex-worker1" onclick="showDef('sex-worker-def')" cx="174" cy="178" r="85"/>
      <circle class="vd-circle vd-small vd-yellow vd-sex-tourism1" onclick="showDef('sex-tourism-def')" cx="174" cy="366.832" r="85"/>
      <circle class="vd-circle vd-small vd-blue vd-sex-worker2" onclick="showDef('sex-worker-def')" cx="628" cy="178" r="85"/>
      <circle class="vd-circle vd-small vd-blue vd-sex-tourism2" onclick="showDef('sex-tourism-def')" cx="628" cy="366.832" r="85"/>
      <text class="vdt-heading vdt-black vdt-prostitution" x="263.109" y="65" fill="black"
        text-anchor="middle">Prostitution</text>
      <text class="vdt-heading vdt-white vdt-sex-trafficking" x="538.891" y="65" fill="black" text-anchor="middle">Sex Trafficking</text>
      <text class="vdt-heading vdt-middle vdt-white" x="401" y="247.5" fill="black" text-anchor="middle">Sexual act
        <tspan x="401" y="277.5">done for profit</tspan></text>
      <text class="vdt-subheading vdt-black vdt-sex-worker1" x="174" y="186" fill="black" text-anchor="middle">Sex Worker</text>
      <text class="vdt-subheading vdt-black vdt-sex-tourism1" x="174" y="374.832" fill="black" text-anchor="middle">Sex Tourism</text>
      <text class="vdt-subheading vdt-white vdt-sex-worker2" x="628" y="171" fill="black"
        text-anchor="middle">Involuntary<tspan x="628" y="201" text-anchor="middle">Sex Worker</tspan></text>
      <text class="vdt-subheading vdt-white vdt-sex-tourism2" x="628" y="374.832" fill="black" text-anchor="middle">Sex Tourism</text>
      <text class="vdt-def" id="prostitution-def" x="401" y="590" fill="black" text-anchor="middle">
        <tspan class="vdt-term">Prostitution:</tspan> Engaging in sexual activity for payment. 
      </text>
      <text class="vdt-def" id="sex-trafficking-def" x="401" y="590" fill="black" text-anchor="middle">
        <tspan class="vdt-term">Sex Trafficking:</tspan> Someone uses force, fraud or coercion <tspan x="401" y="620">to cause a commercial sex act (which includes </tspan><tspan x="401" y="650">pornography, prostitution and sexual performance in </tspan><tspan x="401" y="680">exchange for an item of value).</tspan>
      </text>
      <text class="vdt-def" id="sex-tourism-def" x="401" y="590" fill="black" text-anchor="middle">
        <tspan class="vdt-term">Sex Tourism:</tspan> Travel specifically arranged for, or planned by, <tspan x="401" y="620">travelers to facilitate the procurement of sex.</tspan>
      </text>
      <text class="vdt-def" id="sex-worker-def" x="401" y="590" fill="black" text-anchor="middle">
        <tspan class="vdt-term">Sex Worker:</tspan> Someone who sells their body for sex; <tspan x="401" y="620">a modern-day euphemism for a prostitute. An involuntary </tspan><tspan x="401" y="650">sex worker is also known as a victim of sex trafficking.</tspan>
      </text>
      <script type="text/javascript">
        <![CDATA[
          function showDef(id) {
            let allDefs = document.getElementsByClassName('vdt-def');
            for (let i = 0; i < allDefs.length; i++) {
              allDefs[i].style.opacity = 0;
            };
            let def = document.getElementById(id);
            def.style.opacity = 1;
          }
        ]]>
      </script>
    </svg>
  </div>
</section>