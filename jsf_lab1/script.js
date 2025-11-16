// Показ деталей картки у модальному вікні
document.querySelectorAll('.more-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('modalTitle').textContent = btn.dataset.title;
    document.getElementById('modalBody').textContent = btn.dataset.text;
    new bootstrap.Modal(document.getElementById('infoModal')).show();
  });
});

// Валідація форми + toast
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.checkValidity()) {
    e.stopPropagation();
    form.classList.add('was-validated');
  } else {
    const toast = new bootstrap.Toast(document.getElementById('liveToast'));
    toast.show();
    form.reset();
    form.classList.remove('was-validated');
  }
});

// Tooltip ініціалізація
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
  new bootstrap.Tooltip(el);
});
