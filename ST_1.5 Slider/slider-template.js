const API_URL = 'https://picsum.photos/';
const BIG_SIZE = '600/400';
const SMALL_SIZE = '60/';

const IMAGES = [
  '?image=1080', 
  '?image=1079', 
  '?image=1069', 
  '?image=1063', 
  '?image=1050',
  '?image=1039'
];
$(document).ready(() => {
  const currBlock = $('.slider-current');
  const othersImg = $('.slider-previews');
  let index = 0;
  $(window).on('keydown', function (event) {
    let imgNext;
    if (event.which === 39) {
        imgNext = $('.current').next();
        if(index === 5) {
            index = 0;
            imgNext = $('.slider-previews li:first-child');
        } else {
            index++;
        }
        change(API_URL+BIG_SIZE+IMAGES[index],index);
    }
    if (event.which === 37) {
        imgNext = $('.current').prev();
        if(index === 0) {
            index = 5;
            imgNext = $('.slider-previews li:last-child');
        } else {
            index--;
        }
        change(API_URL+BIG_SIZE+IMAGES[index],index);
    }
    if(imgNext) {
        imgNext.addClass('current');
    }
  });

    currBlock.append(`<img src="${API_URL + BIG_SIZE + IMAGES[0]}" alt="0">`);
    for (let i = 0; i < IMAGES.length; i++) {
      let img = `<li><img src="${API_URL + SMALL_SIZE + IMAGES[i]}" alt="${i}"></li>`;
      if(i === 0) {
        img = `<li class="current"><img src="${API_URL + SMALL_SIZE + IMAGES[i]}" alt="${i}"></li>`;
      }
      othersImg.append(img);
    }
    function change(imgSrc,imgIndex) {
        imgSrc = imgSrc.replace(SMALL_SIZE, BIG_SIZE);
        $('.slider-current img').attr('src',imgSrc).attr('alt',imgIndex);
        $('.current').toggleClass('current');
    }
    $('.slider-previews img').on('click', function(e) {
        change(this.src,+this.alt);
        index = +this.alt;
        $(this).parent().addClass('current');
  });
});