const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('focus', function () {
    if (!this.value) {
        this.value = '+38 (0';
    }
});

phoneInput.addEventListener('input', function () {
    let value = this.value.replace(/\D/g, '');

    if (!value.startsWith('38')) {
        value = '38' + value;
    }

    value = value.substring(0, 12);

    let formatted = '+';

    if (value.length > 0) {
        formatted += value.substring(0, 2);
    }
    if (value.length >= 3) {
        formatted += ' (' + value.substring(2, 5);
    }
    if (value.length >= 5) {
        formatted += ') ' + value.substring(5, 8);
    }
    if (value.length >= 8) {
        formatted += '-' + value.substring(8, 10);
    }
    if (value.length >= 10) {
        formatted += '-' + value.substring(10, 12);
    }

    this.value = formatted;
});

const appointmentForm = document.querySelector('.appoinment-form');

appointmentForm.addEventListener('submit', function (event) {
  event.preventDefault();

  if (!appointmentForm.checkValidity()) {
    appointmentForm.reportValidity();
    return;
  }

  $('#appointmentSuccessModal').modal('show');

  appointmentForm.reset();
});


// LIST
const researchTypeSelect = document.getElementById('researchTypeSelect');
const analysisSelect = document.getElementById('analysisSelect');

const analysesByType = {
    general: [
      'Загальний аналіз крові',
      'Загальний аналіз сечі',
      'ШОЕ',
      'Гематокрит',
      'Лейкоцитарна формула',
      'Коагулограма',
      'Група крові та резус-фактор'
    ],
  
    biochemistry: [
      'Глюкоза',
      'Креатинін',
      'Сечовина',
      'Білірубін загальний',
      'Білірубін прямий',
      'АЛТ',
      'АСТ',
      'Холестерин',
      'ЛПВЩ',
      'ЛПНЩ',
      'Тригліцериди',
      'Залізо',
      'Феритин'
    ],
  
    hormones: [
      'ТТГ',
      'Т3 вільний',
      'Т4 вільний',
      'Інсулін',
      'Пролактин',
      'Кортизол',
      'Тестостерон',
      'Естрадіол',
      'Прогестерон',
      'ФСГ',
      'ЛГ'
    ],
  
    infections: [
      'ВІЛ 1/2',
      'Сифіліс',
      'Гепатит B',
      'Гепатит C',
      'TORCH-комплекс',
      'Хламідії',
      'Герпес 1/2',
      'Цитомегаловірус',
      'Токсоплазмоз'
    ],
  
    pcr: [
      'ПЛР COVID-19',
      'ПЛР грип A/B',
      'ПЛР хламідії',
      'ПЛР мікоплазма',
      'ПЛР уреаплазма',
      'ПЛР ВПЛ',
      'ПЛР герпес',
      'ПЛР цитомегаловірус'
    ],
  
    allergy: [
      'Панель алергенів (пилок)',
      'Панель алергенів (харчові)',
      'Панель алергенів (побутові)',
      'IgE загальний',
      'IgE специфічний'
    ],
  
    oncology: [
      'ПСА',
      'СА-125',
      'СА 19-9',
      'АФП',
      'РЕА',
      'НЕ4'
    ],
  
    vitamins: [
      'Вітамін D',
      'Вітамін B12',
      'Фолієва кислота',
      'Кальцій',
      'Магній',
      'Цинк'
    ],
  
    immunity: [
      'Імуноглобулін A',
      'Імуноглобулін G',
      'Імуноглобулін M',
      'Циркулюючі імунні комплекси'
    ],
  
    genetics: [
      'Генетичний скринінг',
      'Аналіз на спадкові захворювання',
      'Генетичні мутації',
      'ДНК-діагностика'
    ],
  
    complex: [
      'Базовий check-up',
      'Жіночий check-up',
      'Чоловічий check-up',
      'Кардіо пакет',
      'Печінковий пакет',
      'Щитоподібна залоза пакет',
      'Вітамінний пакет'
    ]
  };

function getAllAnalyses() {
  return Object.values(analysesByType).flat();
}

function renderAnalyses(analyses, placeholder = 'Оберіть аналіз') {
  analysisSelect.innerHTML = '';

  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = placeholder;
  analysisSelect.appendChild(defaultOption);

  analyses.forEach((analysis) => {
    const option = document.createElement('option');
    option.value = analysis;
    option.textContent = analysis;
    analysisSelect.appendChild(option);
  });
}

researchTypeSelect.addEventListener('change', function () {
  const selectedType = this.value;

  if (!selectedType) {
    renderAnalyses([], 'Спочатку оберіть тип дослідження');
    return;
  }

  if (selectedType === 'all') {
    renderAnalyses(getAllAnalyses(), 'Оберіть аналіз');
    return;
  }

  renderAnalyses(analysesByType[selectedType], 'Оберіть аналіз');
});

const dateInput = document.getElementById('date');

if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
}