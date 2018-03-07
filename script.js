// (function() {
var modalBtn = document.getElementById('modal-btn');
var modal = document.getElementById('modal');
var closeBtn = document.getElementById('close-btn');
var modalContent = document.getElementById('modal-content');

// modalBtn.addEventListener('click', function() {
//   modal.classList.add('modal-open');
//   createModalContent();
// });

// closeBtn.addEventListener('click', function() {
//   modal.classList.remove('modal-open');
//   removeModalContent();
// });
//
modal.addEventListener('click', function() {
  modal.classList.remove('modal-open');
  // while (modalContent.firstChild) {
  //   modalContent.removeChild(modalContent.firstChild);
  // }
  // removeModalContent();
});

modalContent.addEventListener('click', function(e) {
  // イベントの伝播を止める
  e.stopPropagation();
});


var imageLists = document.getElementById('images');
var modalImg = document.getElementById('modal-img');

// for (var i = 0; i < imageLists.children.length; i++) {
//   console.log(images);
//   imageLists.children[i].addEventListener('click', (function(index) {
//     return function() {
//       modalImg.src = images[index].url;
//       modal.classList.add('modal-open');
//     }
//   })(i));
// }

for (var i = 0; i < imageLists.children.length; i++) {
  imageLists.children[i].addEventListener('click',
  (function(index) {
    return function() {
      var url = imageLists.children[index].children[0].src;
      // console.log(url);
      var imgSrc = url.split('/');
      // var img = document.createElement('img');
      // console.log(imgSrc);
      var imgSrcLastElem = imgSrc[imgSrc.length - 1];
      modalImg.src = './img/' + imgSrcLastElem;
      // var text = document.createElement('p');
      // text.innerHTML = images[index].title;
      // modalImg.src = './img/' + imgSrcLastElem;
      // modalContent.appendChild(img);
      // modalContent.appendChild(text);
      modal.classList.add('modal-open');
    }
  })(i));
}
// })();

var images = [
  {
    url: './img/img01.jpg',
    title: '雪だるまのつくろう！'
  },
  {
    url: './img/img02.jpg',
    title: '夏の海'
  },
  {
    url: './img/img03.jpg',
    title: '都会の喧騒'
  },
];

var prevBtn = document.getElementById('prev-btn');
var nextBtn = document.getElementById('next-btn');

// prevBtn.addEventListener('click', function(event) {
//   console.log(event.target);
//   event.preventDefault();
//   var currentImgSrc = modalImg.getAttribute('src');
//   var currentImgSrcSplit = currentImgSrc.split('/');
//   var currentImgNumber = +currentImgSrcSplit[currentImgSrcSplit.length - 1].substr(4, 1);
//   // var nextImgNumber = currentImgNumber;
//
//   // 表示する画像の枚数によって変更する
//   // 3枚目から1枚目の表示の場合の処理
//   if (currentImgNumber !== 1) {
//     currentImgNumber--;
//   } else {
//     currentImgNumber = 3;
//   }
//   // currentImgNumber = 1;
//
//   var nextImgSrc = './img/img0' + currentImgNumber + '.jpg';
//   // var nextImgSrc = images[nextImgNumber].url;
//
//   modalImg.setAttribute('src', nextImgSrc);
// });
//
// nextBtn.addEventListener('click', function(event) {
//   console.dir(event.target);
//   event.preventDefault();
//   var currentImgSrc = modalImg.getAttribute('src');
//   var currentImgSrcSplit = currentImgSrc.split('/');
//   var currentImgNumber = +currentImgSrcSplit[currentImgSrcSplit.length - 1].substr(4, 1);
//   // var nextImgNumber = currentImgNumber;
//
//   // 表示する画像の枚数によって変更する
//   // 3枚目から1枚目の表示の場合の処理
//   if (currentImgNumber !== imageLists.children.length) {
//     currentImgNumber++;
//   } else {
//     currentImgNumber = 1;
//   }
//   // currentImgNumber = 1;
//
//
//
//   var nextImgSrc = './img/img0' + currentImgNumber + '.jpg';
//   // var nextImgSrc = images[nextImgNumber].url;
//
//   modalImg.setAttribute('src', nextImgSrc);
//   console.log(nextImgSrc);
// });
//
// preventDeafult();
//
prevBtn.addEventListener('click', function(event) {
  modalSlide(event);
});

nextBtn.addEventListener('click', function(event) {
  modalSlide(event);
});

function modalSlide(e) {
  e.preventDefault();
  var currentImgSrc = modalImg.getAttribute('src');
  var currentImgSrcSplit = currentImgSrc.split('/');
  var currentImgNumber = +currentImgSrcSplit[currentImgSrcSplit.length - 1].substr(4, 1);

  if (e.target.classList.contains('fa-caret-left')) {
    console.log('prevBtnが押された時の処理');
    currentImgNumber--;
    if (currentImgNumber === 0){
      currentImgNumber = 3;
    }

  } else { // 次に行くボタンを押している場合
    console.log('nextBtnが押された時の処理');
    currentImgNumber++;
    if (currentImgNumber === 4) {
      currentImgNumber = 1;
    }
  }
     var nextImgSrc = './img/img0' + currentImgNumber + '.jpg';
      modalImg.setAttribute('src', nextImgSrc);
}
