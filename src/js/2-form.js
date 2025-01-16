// Ініціалізація об'єкта formData
const formData = {
    email: "",
    message: "",
};

// Ключ для локального сховища
const STORAGE_KEY = "feedback-form-state";

// Отримуємо елементи форми
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

// Завантаження даних з локального сховища при старті
function loadFormData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formData.email = parsedData.email || "";
        formData.message = parsedData.message || "";

        // Заповнюємо поля форми
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
}

// Збереження даних у локальне сховище
function saveFormData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Обробник події input
form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim(); // Оновлюємо значення в об'єкті formData
    saveFormData(); // Зберігаємо в локальне сховище
});

// Обробник події submit
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Перевірка заповнення полів
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    // Вивід об'єкта formData у консоль
    console.log(formData);

    // Очищення форми, локального сховища та formData
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
});

// Завантажуємо дані при старті
loadFormData();
