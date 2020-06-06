// immediate invoked function expression

( function() {
  const imag = [
  "img1",
  "img2",
  "img3",
  "img4",
  ];

// grabbing the buttons and main container
const buttons = document.querySelectorAll('.btn');
const div = document.querySelector('.wrap');
let counter = 0

buttons.forEach(function(button){
  button.addEventListener('click', function(e){
    if (button.classList.contains('btn-left')) {
      counter--
      if (counter < 0){
        counter = imag.length -1
      }
      div.style.backgroundImage = `url("counter/../images/${imag[counter]}.jpeg")`
    }
     if (button.classList.contains('btn-right')) {
        counter++
        if(counter > imag.length -1){
          counter = 0
        }
        div.style.backgroundImage = `url("counter/../images/${imag[counter]}.jpeg")`
      }
    })
  })
})();












