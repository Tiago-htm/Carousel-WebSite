const storeCarousel = document.querySelectorAll('[data-js="store-img"]');
const storeNext = document.querySelector('[data-js="store__button--next"]');

let storeImgIndex = 0;
let storeImgIndexTwo = 0;
let storeImgIndexOne = 0;


storeNext.addEventListener('click',() => {
  if(storeImgIndex === storeCarousel.length -1){
     storeImgIndex = 0;
        storeImgIndexOne = storeImgIndex + 1;
          storeImgIndexTwo = storeImgIndexOne + 1;
       } else if (storeImgIndex >= 3){
                storeImgIndex = 4;
                   storeImgIndexOne = storeImgIndex - 4;
                    storeImgIndexTwo = storeImgIndexOne + 1
         }else{
              storeImgIndex++
                 storeImgIndexOne = storeImgIndex + 1;
                if (storeImgIndexOne === 4){
                  storeImgIndexTwo = 0;
                }else{
                    storeImgIndexTwo = storeImgIndexOne + 1
                }
                     
  }    
  console.log(storeImgIndex)
  console.log(storeImgIndexOne +"l")
  console.log(storeImgIndexTwo +"J")
  storeCarousel.forEach(storeCarousel => {
    storeCarousel.classList.remove('store-img-visible')
    storeCarousel.classList.remove('store-img-visibleOne')
    storeCarousel.classList.remove('store-img-visibleTwo')
    
  })
    storeCarousel[storeImgIndex].classList.add('store-img-visible')
    storeCarousel[storeImgIndexOne].classList.add('store-img-visibleOne')
    storeCarousel[storeImgIndexTwo].classList.add('store-img-visibleTwo')
})


