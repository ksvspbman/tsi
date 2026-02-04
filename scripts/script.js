const filterItems = document.querySelectorAll('.cars-filter li');
const carItems = document.querySelectorAll('.car');
const carsContent = document.getElementById('cars-content');

filterItems.forEach((item) => {
  item.onclick = () => {
    filterItems.forEach((el) => el.classList.remove('active'));
    item.classList.add('active');

    const filterText = item.textContent.toLowerCase();

    carItems.forEach((car) => {
      if (
        filterText === 'все бренды' ||
        car.querySelector('h4').textContent.toLowerCase().includes(filterText)
      ) {
        car.style.display = 'flex';
      } else {
        car.style.display = 'none';
      }
    });

    carsContent.scrollIntoView({ behavior: 'instant' });
  };
});

//гига чат написал проаерку 10 цыфр в поле phone:

// Начало: Получаем поля формы order-action заранее
const carField = document.getElementById('car');
const nameField = document.getElementById('name');
const phoneField = document.getElementById('phone');


// Обработчик для кнопки с id "order-action"
document.getElementById('order-action').addEventListener('click', function () {
  // Собираем поля в массив
  const fields = [carField, nameField, phoneField];

  let hasError = false;

  // Проверяем поля циклом
  fields.forEach((field) => {
    if (field.value.trim() === '') {
      field.style.borderColor = 'red'; // Поле пустое — помечаем красным цветом
      hasError = true;
    } else if (field.id === 'phone' && field.value.replace(/\D/g,'').length < 10) {
      field.style.borderColor = 'red'; // Номер телефона короче 10 цифр — помечаем ошибкой
      hasError = true;
    } else {
      field.style.borderColor = 'white'; // Все хорошо — восстанавливаем белый фон
    }
  });

  // Если все поля валидны
  if (!hasError) {
    alert('Спасибо за заявку! Мы скоро свяжемся с вами');

    // Очищаем поля
    fields.forEach((field) => (field.value = ''));
  }
});
// Конец обработки order-action