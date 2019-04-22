---
title: "Colombian Healthcare"
story: "Heath"
graphics:
- "Carlos Salas"
---

<section class="interactive">
  <div class="interactive__health">
    <h2 class="interactive__title">Colombian Healthcare</h2>
    <h3 class="interactive__subhead">Analyzing Coverage Options</h3>
    {{< ybr-line >}}
    <div class="interactive__intro">Under Colombian law, every documented resident is required to have basic medical, dental, and vision healthcare coverage. Those who can afford the minimum for contributory healthcare must buy it, while those who can’t afford it can apply to receive free subsidized healthcare.</div>
    <div class="interactive__instructions">Hover or click below to learn more.</div>
    <div class="health__cards flex">
      <div class="health__card flex-column" id="card1">
        <div class="card__title -red">SUBSIDIZED HEALTHCARE</div>
        <div class="card__title card__title--back -red-bkg card1-hidden">SUBSIDIZED HEALTHCARE</div>
        <div class="card__body flex-column" id="card1-body">
          <div class="card-front__middle -red-bkg flex">
            <div class="card__icon-group">
              <div class="card__subtitle">BASIC COVERAGE</div>
              <div class="card__icons flex">
                <div class="card__icon">
                  <img class="icon__svg" src="assets/basic-medical.svg" alt="basic-medical">
                  <div class="icon__title">Basic Medical</div>
                </div>
                <div class="card__icon">
                  <img class="icon__svg" src="assets/basic-dental.svg" alt="basic-dental">
                  <div class="icon__title">Basic Dental</div>
                </div>
                <div class="card__icon">
                  <img class="icon__svg" src="assets/basic-vision.svg" alt="basic-vision">
                  <div class="icon__title">Basic Vision</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-front__bottom flex-column">
            <p class="card__text"><span class="card__text-em -red">FREE</span><br />
            for qualifying residents*</p>
            <div class="card__button -red-bkg" id="card1-button">LEARN MORE</div>
          </div>
          <div class="card-back__body card1-hidden" id="card1-back">
            <p class="card__text">The <strong>System for the Selection of Beneficiaries of Social Programs </strong>(Sisbén) assigns Colombian residents to free government-subsidized health and social programs based on need.</p>
            <p class="card__text">Residents who qualify are eligible to receive free basic healthcare coverage through government contracts established with private insurers. Most health subsidies are received by poverty-stricken Colombians, but a large influx of documented Venezuelan immigrants has strained an already-struggling system.</p>
            <p class="card__text">Like the Verenzuela family, most Venezuelan migrants are unable to afford private insurance and many face the additional challenge of being undocumented and ineligible for Sisbén coverage.  To be considered for free healthcare access under the Sisben, they must be issued a <strong>Special Permit of Permanence</strong> (PEP).</p>
          </div>
        </div>
      </div>
      <div class="health__card flex-column" id="card2">
        <div class="card__title -blue">CONTRIBUTORY HEALTHCARE</div>
        <div class="card__title card__title--back -blue-bkg card2-hidden">CONTRIBUTORY HEALTHCARE</div>
        <div class="card__body flex-column" id="card2-body">
          <div class="card-front__middle -blue-bkg flex">
            <div class="card__icon-group">
              <div class="card__subtitle">BASIC COVERAGE</div>
              <div class="card__icons flex">
                <div class="card__icon">
                  <img class="icon__svg" src="assets/basic-medical.svg" alt="basic-medical">
                  <div class="icon__title">Basic Medical</div>
                </div>
                <div class="card__icon">
                  <img class="icon__svg" src="assets/basic-dental.svg" alt="basic-dental">
                  <div class="icon__title">Basic Dental</div>
                </div>
                <div class="card__icon">
                  <img class="icon__svg" src="assets/basic-vision.svg" alt="basic-vision">
                  <div class="icon__title">Basic Vision</div>
                </div>
              </div>
            </div>
            <div class="card__icon-group">
              <div class="card__subtitle">ADDITIONAL COVERAGE
                <span class="card__subtitle-em">- optional</span>
              </div>
              <div class="card__icons flex">
                <div class="card__icon">
                  <img class="icon__svg" src="assets/complementary-plan.svg" alt="complementary-plan">
                  <div class="icon__title">Complementary Plan</div>
                </div>
                <div class="card__icon">
                  <img class="icon__svg" src="assets/prepaid-medicine.svg" alt="prepaid-medicine">
                  <div class="icon__title">Prepaid Medicine</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-front__bottom flex-column">
            <p class="card__text">Starting at 
            <span class="card__text-em -blue">12.5%</span><br />
            of Gross Monthly Income</p>
            <div class="card__button -blue-bkg" id="card2-button">LEARN MORE</div>
          </div>
          <div class="card-back__body card2-hidden" id="card2-back">
            <p class="card__text">The Colombian government’s National Health Superintendent is responsible for selecting and recognizing eligible private insurance organizations based on capital, and coverage to participate in the healthcare system. These recognized insurers are known as <strong>Health Promoting Entities</strong> (EPS) and are able to sell basic and premium healthcare packages to the public.</p>
            <p class="card__text">A basic coverage plan through an EPS comes at a government-defined base price of 12.5% of one’s gross monthly income. While most of Colombia’s population affiliates itself with the basic coverage option, most EPS’s offer additional coverage and priority access to care at a higher cost.</p>
            <p class="card__text">Those who can afford the higher premiums have the option to buy a complementary plan. This gives them access to specialist appointments without a referral, along with other priority access perks. Most EPS’s also offer prepaid medicine plans at even higher premiums that come with access to the highest priority of medical care and service available in Colombia.</p>
          </div>
        </div>
      </div>
      <div class="background-blur"></div>
    </div>
  </div>
</section>
