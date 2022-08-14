const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});

    // accordion
    const accordionHeaders = document.querySelectorAll(".accordion__header");
      const accordion = document.querySelector(".accordion");
      accordionHeaders.forEach((item) => {
        item.addEventListener("click", (e) => {
          console.log(e.target.parentElement);
          e.target.parentElement.classList.toggle("accordion__expanded");
        });
      });
      const tabs = document.querySelectorAll(".tab");
      const tabContents = document.querySelectorAll(".tab__content");
      tabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
          const targeTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);
      
          // REMOVE PREVIOUS ACTIVED CLASSES
      tabs.forEach((tab) => tab.classList.remove("active"));
      tabContents.forEach((tabContent) => tabContent.classList.remove("active"));
  
      
          // ADD NEW ACTIVE CLASSES
          tab.classList.add("active");
          targeTabContent.classList.add("active");
        });
      });
// <!-- Learn how to create tabs with CSS and JavaScript. -->
//     <ul>
//       <li  class="tab active" data-tab-target="nav-tab1"> tab-one</li>
//       <li class="tab" data-tab-target="nav-tab2">tab-two</li>
//       <li class="tab" data-tab-target="nav-tab3">tab-3</li>
//     </ul>
//     <div>
//       <!-- All <div> elements with class="tab-content" are hidden by default -->
//       <div class="tab-content active " id="nav-tab1">one</div>
//       <div class="tab-content" id="nav-tab2">two</div>
//       <div class="tab-content" id="nav-tab3">three</div>
//     </div>
/* <section class="services">
      <div class="sernices__tabs">
        <a  class="tab active" data-tab-target="nav-classic-tab"></a>
        <a  class="tab" data-tab-target="nav-motopeyk-tab"></a>
        <a  class="tab" data-tab-target="nav-autopeyk-tab"></a>
        <a  class="tab" data-tab-target="nav-plus-tab"></a>
        <a  class="tab" data-tab-target="nav-tel-tab"></a>
        <a  class="tab" data-tab-target="nav-hamyar-tab"></a>
        <a class="tab" data-tab-target="nav-hamkhat-tab">
        <a class="tab" data-tab-target="nav-taxi-tab">
        <a class="tab" data-tab-target="nav-line-tab">

      </div>
      <div class="services__content ">
        <div class="tab__content active" id="nav-classic-tab"></div>
        <div class="tab__content" id="nav-motopryk-tab"></div>
        <div class="tab__content" id="nav-autopeyk-tab"></div>
        <div class="tab__content" id="nav-plus-tab"></div>
        <div class="tab__content" id="nav-tel-tab"></div>
        <div class="tab__content" id="nav-hamyar-tab"></div>
        <div class="tab__content" id="nav-hamkhat-tab"></div>
        <div class="tab__content" id="nav-taxi-tab"></div>
        <div class="tab__content" id="nav-line-tab"></div>


      </div>
    </section> */
  
