var modalBtn = document.getElementById('modal-btn');
var modalWindow = document.getElementById('modal-window');
var modalContent = document.getElementById('modal-content');

modalBtn.addEventListener('click' , function() {
  modalWindow.classList.add('modal-open');
});

modalWindow.addEventListener('click' , function() {
  modalWindow.classList.remove('modal-open');
});

modalContent.addEventListener('click' , function(e) {
  e.stopPropagation();
});
