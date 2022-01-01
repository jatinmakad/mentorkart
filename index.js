var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
// $(document).ready(function(){
  $("#carousel").owlCarousel({
    autoplay: true,
    rewind: true /* use rewind if you don't want loop */,
    margin: 20,
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 3
      },
  
      1024: {
        items: 4
      },
  
      1366: {
        items: 4
      }
    }
  });
// });
// jQuery("#carousel").owlCarousel({
//     autoplay: true,
//     rewind: true /* use rewind if you don't want loop */,
//     margin: 20,
//     /*
//     animateOut: 'fadeOut',
//     animateIn: 'fadeIn',
//     */
//     responsiveClass: true,
//     autoHeight: true,
//     autoplayTimeout: 7000,
//     smartSpeed: 800,
//     nav: true,
//     responsive: {
//       0: {
//         items: 1
//       },
  
//       600: {
//         items: 3
//       },
  
//       1024: {
//         items: 4
//       },
  
//       1366: {
//         items: 4
//       }
//     }
//   });
  