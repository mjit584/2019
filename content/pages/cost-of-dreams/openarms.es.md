---
intTitle: "Photo Scrollytelly 1"
---
<section class="interactive" style="background-color: transparent;">
  <div class="interactive__body">
    <div class="interactive__background flex-column" id="scrollytelly-1">
      <div class="scrollytelly__main">
        <div id="scrollytelly__title" class="flex-column">
          <img src="assets/TitleCard.png" alt="a graphic of school clothes">
          <h2 class="interactive__title">BRAZOS ABIERTOS</h2>
          <div class="interactive__intro">El sistema educativo de Medellín recibe a inmigrantes venezolanos</div>
        </div>
        <div class="scrollytelly__body flex-column">
          <div class="scrolly__text">Medellín, Colombia le ofrece la oportunidad de estudiar al <strong>100%</strong> de los niños inmigrantes.</div>
          <img src="assets/Screen1.png" alt="a graphic of hands and items representing education">
          <div class="scrolly__source">*Data from the Medellín Ministry of Education</div>
        </div>
        <div class="scrollytelly__body flex-column">
          <div class="scrolly__text">
            El <strong>3%</strong> de los estudiantes de Medellín son venezolanos, y aún así hay espacio para <strong>22.000 más.</strong><br><br>
            En cambio, el <strong>8%</strong> de los estudiantes en ciudades fronterizas son venezolanos. En esta región, <strong>faltan 8.000 puestos adicionales</strong> para suplir la necesidad.
          </div>
          <img src="assets/Screen2.png" alt="a graphic showing Colombia and Venezuela">
          <div class="scrolly__source">*Data from the Medellín Ministry of Education and The New Humanitarian</div>
        </div>
        <div class="scrollytelly__body flex-column">
          <div class="scrolly__text">
            La migración afecta la asistencia escolar de los niños y jóvenes venezolanos, con tasas de inasistencia de <strong>40%</strong> entre inmigrantes.
          </div>
          <img src="assets/Screen3.png"
            alt="two rows of desks with four of the chairs empty representing kids not in school">
          <div class="scrolly__source">*Data from The World Bank</div>
        </div>
        <div class="scrollytelly__body flex-column">
          <div class="scrolly__text">
            A pesar de que el sistema educativo de Medellín esté abierto para los estudiantes venezolanos, muchos jóvenes luchan con factores adicionales a estas garantías institucionales.
            <div class="scrolly__instructions">Haz clic en los íconos siguientes
para obtener más información.
</div>
          </div>
          <div class="bubbles-container flex">
            <img class="bubble__img" src="assets/Bubbles1.png" alt="graphic showing government documentation"
              onclick="showBubble('deportation')">
            <img class="bubble__img" src="assets/Bubbles2.png"
              alt="graphic showing three books stacked on top of each other" onclick="showBubble('resources')">
            <img class="bubble__img" src="assets/Bubbles3.png" alt="graphic representing traditional Colombian food"
              onclick="showBubble('hunger')">
            <img class="bubble__img" src="assets/Bubbles4.png" alt="graphic of Medellín, Colombia metro logo"
              onclick="showBubble('transportation')">
            <div id="deportation" class="bubble scrolly__text">
              <div class="closebubble" onclick="showBubble('deportation')">X</div>
              <div class="scrolly__text-container">Se estima que hay 104.173 niños en Colombia sin documentos legales que les den acceso a servicios públicos, incluyendo pasaportes, la Tarjeta de Movilidad Fronteriza (TMF) o cédulas de extranjería. Cuando un niño venezolano ingresa al sistema educativo de Colombia, debe ser reportado a Migración Colombia con documentos oficiales. Por miedo a ser deportados, muchos niños no van al colegio.</div>
              <div class="center"><img src="assets/Notecard1.png"
                  alt="graphic of government documentation such as passport"></div>
              <div class="scrolly__source">*Data from the Medellín Ministry of Education</div>
            </div>
            <div id="resources" class="bubble scrolly__text">
              <div class="closebubble" onclick="showBubble('resources')">X</div>
              <div class="scrolly__text-container">Los padres suficientemente afortunados de encontrar cupo escolar para sus hijos tienen problemas para pagar los uniformes y útiles escolares.<br><br>
                Todos los estudiantes deben usar uniformes en los colegios públicos y privados. La mayoría de ellos tienen dos versiones: uno de uso diario y uno para educación física. Cada uniforme cuesta aproximadamente 42.000 pesos ($16,80 USD).<br><br>
                Cada libro cuesta aproximadamente 32.000 pesos ($12,80 USD) y un morral cuesta 17.000 pesos ($6,80 USD).</div>
              <div class="center">
                <img src="assets/Notecard2-1.png" alt="a graphic of traditional colombian school uniform"><img
                  src="assets/Notecard2-2.png" alt="a graphic of books"><img src="assets/Notecard2-3.png"
                  alt="a graphic of a yellow pencil"><img src="assets/Notecard2-4.png"
                  alt="a graphic of a yellow backpack">
              </div>
              <div class="scrolly__source">*Data from The New Humanitarian and The Human Rights Watch</div>
            </div>
            <div id="hunger" class="bubble scrolly__text">
              <div class="closebubble" onclick="showBubble('hunger')">X</div>
              <div class="scrolly__text-container">La alimentación balanceada no sólo contribuye a la permanencia escolar, sino también al rendimiento en las clases. A los niños que van al colegio con hambre les cuesta más concentrarse y a menudo se atrasan.</div>
              <div class="center"><img src="assets/Notecard3.png"
                  alt="a graphic of a child sitting at a desk thinking about food"></div>
              <div class="scrolly__source">*Data from The Colombia Ministry of Education</div>
            </div>
            <div id="transportation" class="bubble scrolly__text">
              <div class="closebubble" onclick="showBubble('transportation')">X</div>
              <div class="scrolly__text-container">El transporte escolar cuesta 1.100 pesos colombianos, aproximadamente 35 centavos estadounidenses. La mayoría de los niños caminan al colegio para ahorrar, y la caminata puede tardar hasta 30 minutos. Cerca de la frontera, hay niños que caminan hasta 6 millas ida y vuelta cruzando el puente internacional Simón Bolívar de Venezuela a Colombia. Cada viaje tarda aproximadamente 2 horas.</div>
              <div class="center"><img src="assets/Notecard4-1.png"
                  alt="a graphic of the Medellín Colombia metro logo"><img src="assets/Notecard4-2.png"
                  alt="a graphic of shoeprints"></div>
              <div class="scrolly__source">*Data from The World Bank and The New Humanitarian</div>
            </div>
          </div>
          <img src="assets/BubbleSilhouette.png" alt="a graphic of a girl sitting at a desk writing">
        </div>
      </div>
    </div>
  </div>
</section>