$("#myRange").roundSlider({
   handleShape: "dot",
   width: 40,
   radius: 130,
   max: 40,
   lineCap: "square",
   sliderType: "min-range",
   startAngle: 270,
   handleSize: "-2"
});


$(".js-range-slider").ionRangeSlider({
   type: "single",
   min: 0,
   max: 4,
   from: 2,
   hide_from_to: true,
   to: 5,
   grid: false
});


const on = document.querySelector('.blue-button')

document.querySelector('.body').addEventListener('click', function (e) {
   console.log(e.target.tagName === 'BUTTON');
   if (e.target.tagName === 'BUTTON') {
      e.target.classList.toggle('on');
   }
})
