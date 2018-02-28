(function() {
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
    while (modalContent.firstChild) {
      modalContent.removeChild(modalContent.firstChild);
    }
    // removeModalContent();
  });

  modalContent.addEventListener('click', function(e) {
    // イベントの伝播を止める
    e.stopPropagation();
  });

  var images = [
    {
      url: './img/img01.jpg',
      title: '雪だるまつくろう！'
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
        console.log(url);
        var imgSrc = url.split('/');
        var img = document.createElement('img');
        console.log(imgSrc);
        var imgSrcLastElem = imgSrc[imgSrc.length - 1];
        img.src = './img/' + imgSrcLastElem;
        var text = document.createElement('p');
        text.innerHTML = images[index].title;
        // modalImg.src = './img/' + imgSrcLastElem;
        modalContent.appendChild(img);
        modalContent.appendChild(text);
        modal.classList.add('modal-open');
      }
    })(i));
  }

})();
