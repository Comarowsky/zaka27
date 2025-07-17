function openModal(src) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modalImg.src = src;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  }

document.getElementById('modal').addEventListener('click', function (e) {
  const modalImg = document.getElementById('modal-img');
  if (!modalImg.contains(e.target)) {
    closeModal();
  }
