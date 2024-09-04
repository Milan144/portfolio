document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('cv-modal');
  const modalImg = document.getElementById('modal-img');
  const cvImage = document.getElementById('cv-image');
  const closeBtn = document.getElementsByClassName('close')[0];

  cvImage.onclick = function(event) {
    event.preventDefault();
    modal.style.display = 'block';
    modalImg.src = this.src;
  }

  closeBtn.onclick = function() {
    modal.style.display = 'none';
  }

  modal.onclick = function() {
    modal.style.display = 'none';
  }
});