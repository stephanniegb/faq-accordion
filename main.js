const accordionHeader = document.querySelectorAll(".accordion-header");

accordionHeader.forEach(accordionHeader=> {
    accordionHeader.addEventListener("click", event => { 
       accordionHeader.classList.toggle("active");
       const currentlyActiveAccordionHeader = document.querySelector(".accordion-header.active");
       if(currentlyActiveAccordionHeader && currentlyActiveAccordionHeader !==accordionHeader){
           currentlyActiveAccordionHeader.classList.toggle("active");
           currentlyActiveAccordionHeader.nextSibling.style.maxHeight = 0;
       }
    });
});