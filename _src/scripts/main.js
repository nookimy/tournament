document.getElementById('copy-username').addEventListener('click', function () {
const usernameElement = document.getElementById('username');
const textToCopy = usernameElement.textContent || usernameElement.innerText;

// Создаём временный элемент textarea
const tempTextarea = document.createElement('textarea');
tempTextarea.value = textToCopy;
document.body.appendChild(tempTextarea);

// Выделяем и копируем текст
tempTextarea.select();
try {
    document.execCommand('copy');
    console.log('Текст скопирован:', textToCopy);
} catch (err) {
    console.error('Ошибка при копировании:', err);
}

// Удаляем временный элемент
document.body.removeChild(tempTextarea);
});