const carousel = document.querySelectorAll('[data-js= "carousel__img"]');

const nextButton = document.querySelector('[data-js="carousel__button--next"]')
const prevButton = document.querySelector('[data-js="carousel__button--prev"]')

let currentCarouselIndex = 0;

nextButton.addEventListener('click',() => {
  if(currentCarouselIndex === carousel.length -1 ){
    currentCarouselIndex = 0
  } else{
    currentCarouselIndex++
  }
  console.log(currentCarouselIndex);
   carousel.forEach (carousel =>{
      carousel.classList.remove('carousel--visible')
    })
    carousel[currentCarouselIndex].classList.add('carousel--visible')
     
})

prevButton.addEventListener('click', () => {
  if(currentCarouselIndex === 0 ) {
      currentCarouselIndex = carousel.length -1
    
  } else {
   currentCarouselIndex--
  }


  carousel.forEach(carousel => {
    carousel.classList.remove('carousel--visible')
  })
  carousel[currentCarouselIndex].classList.add('carousel--visible')
})