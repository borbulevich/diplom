const researches = [
    {
      id: 1,
      slug: 'general-tests',
      title: 'Загальноклінічні аналізи',
      short: 'Аналізи крові, сечі та інших показників для базової оцінки стану організму.',
      image: 'images/service/service-1.jpg',
  
      description: [
        'Загальноклінічні аналізи є базовими лабораторними дослідженнями, які дозволяють оцінити загальний стан організму та виявити можливі відхилення.',
        'До цієї категорії входять аналізи крові, сечі та інші базові дослідження, що застосовуються для первинної діагностики та контролю здоров’я.'
      ],
  
      features: [
        'Загальний аналіз крові',
        'Загальний аналіз сечі',
        'ШОЕ',
        'Гемоглобін',
        'Лейкоцитарна формула',
        'Контроль базових показників'
      ],
  
      schedule: [
        { day: 'Пн – Пт', time: '08:00 – 20:00' },
        { day: 'Сб', time: '09:00 – 18:00' },
        { day: 'Нд', time: '10:00 – 17:00' }
      ]
    },
  
    {
      id: 2,
      slug: 'biochemistry',
      title: 'Біохімічні дослідження',
      short: 'Дослідження показників крові для оцінки роботи внутрішніх органів.',
      image: 'images/service/service-2.jpg',
  
      description: [
        'Біохімічні аналізи дозволяють оцінити функціональний стан внутрішніх органів та обмін речовин.',
        'Використовуються для діагностики захворювань печінки, нирок, серцево-судинної системи та інших органів.'
      ],
  
      features: [
        'Глюкоза',
        'Білірубін',
        'Креатинін',
        'АЛТ, АСТ',
        'Холестерин',
        'Ліпідограма'
      ],
  
      schedule: [
        { day: 'Пн – Пт', time: '08:00 – 20:00' },
        { day: 'Сб', time: '09:00 – 18:00' },
        { day: 'Нд', time: '10:00 – 17:00' }
      ]
    },
  
    {
      id: 3,
      slug: 'hormones',
      title: 'Гормони',
      short: 'Визначення рівня гормонів для оцінки роботи ендокринної системи.',
      image: 'images/service/service-3.jpg',
  
      description: [
        'Гормональні дослідження допомагають оцінити роботу ендокринної системи та виявити порушення.',
        'Застосовуються при діагностиці захворювань щитоподібної залози, наднирників та інших органів.'
      ],
  
      features: [
        'ТТГ',
        'Т3, Т4',
        'Інсулін',
        'Кортизол',
        'Пролактин',
        'Гормональний профіль'
      ],
  
      schedule: [
        { day: 'Пн – Пт', time: '08:00 – 20:00' },
        { day: 'Сб', time: '09:00 – 18:00' },
        { day: 'Нд', time: '10:00 – 17:00' }
      ]
    },
  
    {
      id: 4,
      slug: 'infection',
      title: 'Інфекції',
      short: 'Виявлення інфекційних збудників за допомогою сучасних методів.',
      image: 'images/service/service-4.jpg',
  
      description: [
        'Інфекційна діагностика дозволяє виявити вірусні та бактеріальні захворювання.',
        'Дослідження виконуються сучасними методами з високою точністю результатів.'
      ],
  
      features: [
        'Гепатити',
        'ВІЛ',
        'TORCH-інфекції',
        'Сифіліс',
        'Антитіла',
        'Серологічні дослідження'
      ],
  
      schedule: [
        { day: 'Пн – Пт', time: '08:00 – 20:00' },
        { day: 'Сб', time: '09:00 – 18:00' },
        { day: 'Нд', time: '10:00 – 17:00' }
      ]
    },
  
    {
      id: 5,
      slug: 'pcr',
      title: 'ПЛР',
      short: 'Молекулярна діагностика інфекцій із високою точністю результатів.',
      image: 'images/service/service-6.jpg',
  
      description: [
        'ПЛР-дослідження дозволяють виявити інфекційні захворювання на ранніх стадіях.',
        'Метод характеризується високою чутливістю та точністю результатів.'
      ],
  
      features: [
        'COVID-19',
        'Грип',
        'Хламідії',
        'Мікоплазма',
        'ВПЛ',
        'Генетичні дослідження'
      ],
  
      schedule: [
        { day: 'Пн – Пт', time: '08:00 – 20:00' },
        { day: 'Сб', time: '09:00 – 18:00' },
        { day: 'Нд', time: '10:00 – 17:00' }
      ]
    },
  
    {
      id: 6,
      slug: 'packages',
      title: 'Пакети',
      short: 'Готові набори аналізів для комплексної перевірки стану здоров’я.',
      image: 'images/service/service-8.jpg',
  
      description: [
        'Комплексні пакети аналізів дозволяють швидко оцінити стан організму за основними показниками.',
        'Підходять для профілактики, регулярних перевірок та контролю здоров’я.'
      ],
  
      features: [
        'Check-up базовий',
        'Check-up розширений',
        'Жіночий пакет',
        'Чоловічий пакет',
        'Дитячий пакет',
        'Профілактичні обстеження'
      ],
  
      schedule: [
        { day: 'Пн – Пт', time: '08:00 – 20:00' },
        { day: 'Сб', time: '09:00 – 18:00' },
        { day: 'Нд', time: '10:00 – 17:00' }
      ]
    }
  ];

  const researchesList = document.getElementById('researches-list');

if (researchesList) {
  researchesList.innerHTML = '';

  researches.forEach((research) => {
    const item = document.createElement('div');
    item.className = 'col-lg-4 col-md-6';

    item.innerHTML = `
      <div class="department-block mb-5">
        <img src="${research.image}" alt="${research.title}" class="img-fluid w-100" style='height:230px;'>
        <div class="content">
          <h4 class="mt-4 mb-2 title-color">${research.title}</h4>
          <p class="mb-4">${research.short}</p>
          <a href="department-single.html?slug=${research.slug}" class="read-more">
            Детальніше <i class="icofont-simple-right ml-2"></i>
          </a>
        </div>
      </div>
    `;

    researchesList.appendChild(item);
  });
}

const params = new URLSearchParams(window.location.search);
const slug = params.get('slug');

// шукаємо дослідження
const research = researches.find(item => item.slug === slug);

// якщо не знайдено — беремо перше
const current = research || researches[0];

// TITLE
document.title = `MED-IF – ${current.title}`;

// HERO
document.getElementById('research-title').textContent = current.title;
document.getElementById('research-breadcrumb').textContent = current.title;

// IMAGE
document.getElementById('research-image').src = current.image;

// CONTENT
document.getElementById('research-content-title').textContent = current.title;
document.getElementById('research-lead').textContent = current.description[0];
document.getElementById('research-description').textContent = current.description[1];

// FEATURES (аналізи)
const featuresContainer = document.getElementById('research-features');
featuresContainer.innerHTML = '';

current.features.forEach(item => {
  const li = document.createElement('li');
  li.innerHTML = `<i class="icofont-check mr-2"></i>${item}`;
  featuresContainer.appendChild(li);
});

// SCHEDULE
const scheduleContainer = document.getElementById('research-schedule');
scheduleContainer.innerHTML = '';

current.schedule.forEach(item => {
  const li = document.createElement('li');
  li.className = 'd-flex justify-content-between align-items-center';

  li.innerHTML = `
    <span>${item.day}</span>
    <span>${item.time}</span>
  `;

  scheduleContainer.appendChild(li);
});