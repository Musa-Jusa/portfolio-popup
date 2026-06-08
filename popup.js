// 1. Находим элементы в DOM
const openBtn = document.getElementById('open-modal-btn');
const closeBtn = document.getElementById('close-modal-btn');
const modalOverlay = document.getElementById('modal-overlay');
const agreeCheckbox = document.getElementById('agree-checkbox');
const submitBtn = document.getElementById('submit-btn');

const YANDEX_URL = 'https://travel.yandex.ru/'; // Ссылка для виджета

// 2. Функции управления видимостью
function openModal() {
  modalOverlay.classList.remove('hidden');
}

function closeModal() {
  modalOverlay.classList.add('hidden');
  // Опционально: сбрасываем чекбокс при закрытии
  agreeCheckbox.checked = false;
  submitBtn.disabled = true;
}

// 3. Навешиваем обработчики событий (Event Listeners)

// Открытие по клику на главную кнопку
openBtn.addEventListener('click', openModal);

// Закрытие по кнопке "Закрыть" или клику вне окна (на оверлей)
closeBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

// 4. ГЛАВНАЯ ЛОГИКА ЗАКАЗА: Чекбокс управляет кнопкой
agreeCheckbox.addEventListener('change', (event) => {
  // event.target.checked возвращает true или false
  // Мы присваиваем это значение атрибуту disabled (инвертируя его)
  submitBtn.disabled = !event.target.checked;
});

// 5. Логика кнопки отправки
submitBtn.addEventListener('click', () => {
  closeModal();
  // Открываем ссылку в новой вкладке
  window.open(YANDEX_URL, '_blank');
});
