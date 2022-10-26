     
     window.addEventListener('scroll', function () {  /* Window k scroll hone par ek function chalna chahiye */
     	
     var scroll = document.querySelector('.scrollTop');  /* Scroll ki value ko ek Variable me store kr li */ 
 
     scroll.classList.toggle("active" , window.scrollY > 500)  /* Jaise hi scroll > 500 ho,to active class shuru ho jaye */
 
      })
 
      /* upar jo bhi kuch code likha hai vo bus Button ko show karne k liye.For ex. Jaise hi page scroll > 500 par aaye to button dikhna show ho jaye else Hide it */
 
 
      function scrolltoTop(){     /* Button Click Working ( Upar onlick Event laga diya hai div me)*/
          
          window.scrollTo({
 
              top:0,
              behavior:'smooth'
 
 
          })
      }