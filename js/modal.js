// Script for modal window
document.addEventListener('DOMContentLoaded', function() {
  const openModalBtn = document.querySelector('.btn-hero');
  const closeModalBtn = document.querySelector('.modal-close-btn');
  const backdrop = document.querySelector('.backdrop');
  const body = document.body;

  // Function to open modal
  function openModal() {
    backdrop.classList.add('is-open');
    body.classList.add('modal-open');
  }

  // Function to close modal
  function closeModal() {
    backdrop.classList.remove('is-open');
    body.classList.remove('modal-open');
  }

  // Opening the modal window
  if (openModalBtn) {
    openModalBtn.addEventListener('click', function() {
      openModal();
    });
  }

  // Closing the modal window
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', function() {
      closeModal();
    });
  }

  // Closing when clicking on backdrop
  if (backdrop) {
    backdrop.addEventListener('click', function(e) {
      if (e.target === backdrop) {
        closeModal();
      }
    });
  }

  // Closing when pressing Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && backdrop.classList.contains('is-open')) {
      closeModal();
    }
  });
});
