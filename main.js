const accordionHeader = document.querySelectorAll(".accordion-header");

accordionHeader.forEach(accordionHeader=> {
    accordionHeader.addEventListener("click", event => { 
       accordionHeader.classList.toggle("active");
    });
});