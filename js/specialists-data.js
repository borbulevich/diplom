const specialistCategories = [
    { id: 'cat1', name: 'Лабораторія' },
    { id: 'cat2', name: 'Біохімія' },
    { id: 'cat3', name: 'ПЛР' },
    { id: 'cat4', name: 'Імунологія' },
    { id: 'cat5', name: 'Мікробіологія' },
    { id: 'cat6', name: 'Забір' }
  ];
  
  const specialists = [
    {
      id: 1,
      slug: 'ivanenko-oleksandr',
      name: 'Іваненко Олександр Петрович',
      position: 'Лікар-лаборант',
      category: ['cat1'],
      categoryName: 'Лабораторія',
      image: 'images/team/1.jpg',
      experience: '12 років досвіду',
      shortDescription: 'Фахівець із загальноклінічних досліджень та контролю якості лабораторних результатів.',
      about: [
        'Іваненко Олександр Петрович спеціалізується на проведенні загальноклінічних лабораторних досліджень. Основний напрям роботи — аналіз показників крові, сечі та інших біоматеріалів.',
        'У роботі дотримується внутрішніх стандартів якості, контролює коректність результатів та бере участь у впровадженні сучасних методик лабораторної діагностики.'
      ],
      education: [
        {
          period: '2008–2014',
          title: 'Івано-Франківський національний медичний університет',
          text: 'Спеціальність «Лабораторна діагностика».'
        },
        {
          period: '2015–2017',
          title: 'Інтернатура з клінічної лабораторної діагностики',
          text: 'Поглиблена підготовка з методів загальноклінічних досліджень.'
        },
        {
          period: '2019',
          title: 'Курс з контролю якості лабораторних процесів',
          text: 'Навчання з внутрішнього контролю якості результатів.'
        },
        {
          period: '2022',
          title: 'Підвищення кваліфікації з лабораторної діагностики',
          text: 'Оновлення знань щодо сучасних лабораторних методик.'
        }
      ],
      skills: [
        'Загальноклінічні дослідження',
        'Аналіз крові та сечі',
        'Контроль якості результатів',
        'Робота з лабораторним обладнанням',
        'Підготовка біоматеріалу',
        'Перевірка лабораторних показників'
      ],
      schedule: [
        { day: 'Пн – Пт', time: '08:00 – 16:00' },
        { day: 'Сб', time: '09:00 – 14:00' },
        { day: 'Нд', time: 'Вихідний' }
      ],
      phone: '+38 (067) 123-45-67'
    },
    {
      id: 2,
      slug: 'melnyk-iryna',
      name: 'Мельник Ірина Василівна',
      position: 'Фахівчиня з біохімії',
      category: ['cat2'],
      categoryName: 'Біохімія',
      image: 'images/team/2.jpg',
      experience: '9 років досвіду',
      shortDescription: 'Спеціалізується на біохімічних дослідженнях крові та оцінці основних показників організму.',
      about: [
        'Мельник Ірина Василівна працює з біохімічними показниками крові, які допомагають оцінити роботу печінки, нирок, обмін речовин та загальний стан організму.',
        'Фахівчиня забезпечує точність виконання досліджень, контролює підготовку зразків і перевіряє відповідність результатів встановленим лабораторним нормам.'
      ],
      education: [
        {
          period: '2010–2016',
          title: 'Львівський національний медичний університет',
          text: 'Підготовка за напрямом лабораторної медицини.'
        },
        {
          period: '2017',
          title: 'Спеціалізація з клінічної біохімії',
          text: 'Поглиблене вивчення біохімічних методів дослідження.'
        },
        {
          period: '2020',
          title: 'Курс з автоматизованих біохімічних аналізаторів',
          text: 'Практична робота з сучасним лабораторним обладнанням.'
        },
        {
          period: '2023',
          title: 'Підвищення кваліфікації з лабораторної біохімії',
          text: 'Оновлення практичних навичок у сфері біохімічної діагностики.'
        }
      ],
      skills: [
        'Біохімічні дослідження крові',
        'Печінкові проби',
        'Ниркові показники',
        'Ліпідограма',
        'Робота з аналізаторами',
        'Перевірка точності результатів'
      ],
      schedule: [
        { day: 'Пн – Пт', time: '08:30 – 16:30' },
        { day: 'Сб', time: '09:00 – 13:00' },
        { day: 'Нд', time: 'Вихідний' }
      ],
      phone: '+38 (067) 123-45-67'
    },
    {
      id: 3,
      slug: 'kovalchuk-andrii',
      name: 'Ковальчук Андрій Ігорович',
      position: 'Фахівець з ПЛР-діагностики',
      category: ['cat3'],
      categoryName: 'ПЛР',
      image: 'images/team/3.jpg',
      experience: '8 років досвіду',
      shortDescription: 'Працює з молекулярними методами діагностики інфекцій та контролем ПЛР-досліджень.',
      about: [
        'Ковальчук Андрій Ігорович спеціалізується на ПЛР-діагностиці інфекційних захворювань. Його робота пов’язана з виявленням збудників на молекулярному рівні.',
        'Фахівець контролює правильність підготовки матеріалу, дотримання етапів дослідження та точність результатів, що мають важливе значення для діагностики.'
      ],
      education: [
        {
          period: '2011–2017',
          title: 'Тернопільський національний медичний університет',
          text: 'Освіта у сфері лабораторної діагностики.'
        },
        {
          period: '2018',
          title: 'Спеціалізація з молекулярної діагностики',
          text: 'Поглиблена підготовка з ПЛР-методів.'
        },
        {
          period: '2020',
          title: 'Курс з біобезпеки в лабораторії',
          text: 'Практичні принципи безпечної роботи з біоматеріалом.'
        },
        {
          period: '2023',
          title: 'Сучасні методи ПЛР-досліджень',
          text: 'Оновлення знань з молекулярної лабораторної діагностики.'
        }
      ],
      skills: [
        'ПЛР-діагностика',
        'Молекулярні дослідження',
        'Підготовка зразків',
        'Контроль біобезпеки',
        'Діагностика інфекцій',
        'Оцінка результатів ПЛР'
      ],
      schedule: [
        { day: 'Пн – Пт', time: '09:00 – 17:00' },
        { day: 'Сб', time: '09:00 – 14:00' },
        { day: 'Нд', time: 'Вихідний' }
      ],
      phone: '+38 (067) 123-45-67'
    },
    {
      id: 4,
      slug: 'shevchenko-nataliia',
      name: 'Шевченко Наталія Олегівна',
      position: 'Фахівчиня з імунології',
      category: ['cat4'],
      categoryName: 'Імунологія',
      image: 'images/team/6.jpeg',
      experience: '10 років досвіду',
      shortDescription: 'Виконує імунологічні дослідження та контролює показники імунної відповіді організму.',
      about: [
        'Шевченко Наталія Олегівна працює з імунологічними дослідженнями, які використовуються для оцінки стану імунної системи та виявлення порушень імунної відповіді.',
        'У своїй роботі фахівчиня приділяє увагу точності лабораторних процесів, правильній підготовці зразків та перевірці результатів перед їх видачею пацієнтам.'
      ],
      education: [
        {
          period: '2009–2015',
          title: 'Буковинський державний медичний університет',
          text: 'Підготовка у сфері лабораторної медицини.'
        },
        {
          period: '2016',
          title: 'Спеціалізація з імунологічних досліджень',
          text: 'Поглиблене вивчення методів імунологічної діагностики.'
        },
        {
          period: '2019',
          title: 'Курс з лабораторної імунології',
          text: 'Практичні методи оцінки імунологічних показників.'
        },
        {
          period: '2022',
          title: 'Підвищення кваліфікації',
          text: 'Сучасні підходи до контролю якості імунологічних досліджень.'
        }
      ],
      skills: [
        'Імунологічні дослідження',
        'Імуноглобуліни',
        'Оцінка імунної відповіді',
        'Контроль якості',
        'Підготовка зразків',
        'Інтерпретація лабораторних показників'
      ],
      schedule: [
        { day: 'Пн – Пт', time: '08:00 – 15:30' },
        { day: 'Сб', time: '09:00 – 13:00' },
        { day: 'Нд', time: 'Вихідний' }
      ],
      phone: '+38 (067) 123-45-67'
    },
    {
      id: 5,
      slug: 'bondarenko-serhii',
      name: 'Бондаренко Сергій Миколайович',
      position: 'Мікробіолог',
      category: ['cat5'],
      categoryName: 'Мікробіологія',
      image: 'images/team/4.jpg',
      experience: '11 років досвіду',
      shortDescription: 'Проводить мікробіологічні дослідження та працює з виявленням бактеріальних збудників.',
      about: [
        'Бондаренко Сергій Миколайович спеціалізується на мікробіологічних дослідженнях, що дозволяють виявляти бактеріальні збудники та оцінювати мікрофлору.',
        'Фахівець контролює правильність забору, транспортування та обробки біоматеріалу, а також дотримання вимог стерильності під час лабораторної роботи.'
      ],
      education: [
        {
          period: '2007–2013',
          title: 'Національний медичний університет імені О. О. Богомольця',
          text: 'Освіта за напрямом лабораторної діагностики.'
        },
        {
          period: '2014',
          title: 'Спеціалізація з мікробіології',
          text: 'Поглиблене вивчення бактеріологічних методів.'
        },
        {
          period: '2018',
          title: 'Курс з лабораторної біобезпеки',
          text: 'Організація безпечної роботи з біологічним матеріалом.'
        },
        {
          period: '2021',
          title: 'Сучасна мікробіологічна діагностика',
          text: 'Оновлення практичних навичок у мікробіологічних дослідженнях.'
        }
      ],
      skills: [
        'Мікробіологічні дослідження',
        'Бактеріологічний посів',
        'Оцінка мікрофлори',
        'Контроль стерильності',
        'Підготовка середовищ',
        'Робота з біоматеріалом'
      ],
      schedule: [
        { day: 'Пн – Пт', time: '08:30 – 16:00' },
        { day: 'Сб', time: '09:00 – 13:00' },
        { day: 'Нд', time: 'Вихідний' }
      ],
      phone: '+38 (067) 123-45-67'
    },
    {
      id: 6,
      slug: 'romaniuk-viktor',
      name: 'Романюк Віктор Степанович',
      position: 'Фахівець із забору біоматеріалу',
      category: ['cat6'],
      categoryName: 'Забір',
      image: 'images/team/5.jpg',
      experience: '7 років досвіду',
      shortDescription: 'Відповідає за якісний та безпечний забір біоматеріалу для лабораторних досліджень.',
      about: [
        'Романюк Віктор Степанович працює з пацієнтами на етапі забору біоматеріалу. Основна увага приділяється комфорту, безпеці та правильній підготовці зразків.',
        'Фахівець дотримується правил асептики, маркування пробірок і первинної підготовки біоматеріалу, що впливає на точність подальших лабораторних досліджень.'
      ],
      education: [
        {
          period: '2012–2016',
          title: 'Івано-Франківський медичний фаховий коледж',
          text: 'Спеціальність «Медсестринство».'
        },
        {
          period: '2017',
          title: 'Курс із забору венозної крові',
          text: 'Практична підготовка з техніки забору біоматеріалу.'
        },
        {
          period: '2020',
          title: 'Навчання з інфекційного контролю',
          text: 'Дотримання санітарних норм і правил безпеки.'
        },
        {
          period: '2023',
          title: 'Підвищення кваліфікації медичного персоналу',
          text: 'Комунікація з пацієнтами та якість сервісу.'
        }
      ],
      skills: [
        'Забір венозної крові',
        'Підготовка біоматеріалу',
        'Маркування пробірок',
        'Асептика та антисептика',
        'Комунікація з пацієнтами',
        'Первинна обробка зразків'
      ],
      schedule: [
        { day: 'Пн – Пт', time: '07:30 – 15:30' },
        { day: 'Сб', time: '08:00 – 13:00' },
        { day: 'Нд', time: 'Вихідний' }
      ],
      phone: '+38 (067) 123-45-67'
    },
    {
      id: 7,
      slug: 'hrytsenko-oksana',
      name: 'Гриценко Оксана Володимирівна',
      position: 'Фахівчиня з біохімії',
      category: ['cat2'],
      categoryName: 'Біохімія',
      image: 'images/team/10.jpg',
      experience: '8 років досвіду',
      shortDescription: 'Працює з біохімічними показниками крові та контролем автоматизованих досліджень.',
      about: [
        'Гриценко Оксана Володимирівна виконує біохімічні дослідження, які використовуються для оцінки роботи внутрішніх органів та метаболічних процесів.',
        'Фахівчиня контролює роботу лабораторного обладнання, підготовку реагентів та правильність отриманих результатів відповідно до внутрішніх протоколів.'
      ],
      education: [
        {
          period: '2011–2017',
          title: 'Івано-Франківський національний медичний університет',
          text: 'Підготовка у сфері лабораторної діагностики.'
        },
        {
          period: '2018',
          title: 'Клінічна біохімія',
          text: 'Спеціалізація з біохімічних лабораторних досліджень.'
        },
        {
          period: '2021',
          title: 'Курс з автоматизованої лабораторної діагностики',
          text: 'Робота з сучасними біохімічними аналізаторами.'
        },
        {
          period: '2024',
          title: 'Контроль якості лабораторних досліджень',
          text: 'Внутрішній контроль і перевірка лабораторних процесів.'
        }
      ],
      skills: [
        'Клінічна біохімія',
        'Біохімічні аналізатори',
        'Контроль реагентів',
        'Ліпідний профіль',
        'Печінкові показники',
        'Верифікація результатів'
      ],
      schedule: [
        { day: 'Пн – Пт', time: '09:00 – 17:00' },
        { day: 'Сб', time: '09:00 – 14:00' },
        { day: 'Нд', time: 'Вихідний' }
      ],
      phone: '+38 (067) 123-45-67'
    },
    {
      id: 8,
      slug: 'lysenko-dmytro',
      name: 'Лисенко Дмитро Юрійович',
      position: 'ПЛР-спеціаліст',
      category: ['cat3'],
      categoryName: 'ПЛР',
      image: 'images/team/7.jpg',
      experience: '6 років досвіду',
      shortDescription: 'Виконує ПЛР-дослідження для виявлення інфекційних збудників.',
      about: [
        'Лисенко Дмитро Юрійович працює у напрямі ПЛР-діагностики, що дозволяє виявляти інфекційні збудники з високою точністю навіть на ранніх етапах.',
        'Фахівець контролює етапи підготовки зразків, проведення досліджень та перевірку результатів перед їх передачею до системи лабораторії.'
      ],
      education: [
        {
          period: '2013–2019',
          title: 'Львівський національний медичний університет',
          text: 'Освіта у сфері лабораторної медицини.'
        },
        {
          period: '2020',
          title: 'Курс з ПЛР-діагностики',
          text: 'Практична підготовка з молекулярних методів дослідження.'
        },
        {
          period: '2021',
          title: 'Лабораторна біобезпека',
          text: 'Організація безпечної роботи з біологічним матеріалом.'
        },
        {
          period: '2023',
          title: 'Молекулярна діагностика інфекцій',
          text: 'Сучасні методи виявлення інфекційних агентів.'
        }
      ],
      skills: [
        'ПЛР-дослідження',
        'Діагностика інфекцій',
        'Молекулярні методи',
        'Підготовка проб',
        'Біобезпека',
        'Контроль результатів'
      ],
      schedule: [
        { day: 'Пн – Пт', time: '08:30 – 16:30' },
        { day: 'Сб', time: '09:00 – 13:00' },
        { day: 'Нд', time: 'Вихідний' }
      ],
      phone: '+38 (067) 123-45-67'
    },
    {
      id: 9,
      slug: 'tkachuk-mariia',
      name: 'Ткачук Марія Іванівна',
      position: 'Фахівчиня з імунології',
      category: ['cat4'],
      categoryName: 'Імунологія',
      image: 'images/team/11.jpg',
      experience: '7 років досвіду',
      shortDescription: 'Спеціалізується на імунологічних показниках та дослідженнях захисних реакцій організму.',
      about: [
        'Ткачук Марія Іванівна виконує імунологічні дослідження, які допомагають оцінити особливості імунної відповіді організму.',
        'У своїй роботі фахівчиня контролює правильність підготовки біоматеріалу, стабільність дослідницького процесу та якість отриманих результатів.'
      ],
      education: [
        {
          period: '2012–2018',
          title: 'Тернопільський національний медичний університет',
          text: 'Підготовка за напрямом лабораторної діагностики.'
        },
        {
          period: '2019',
          title: 'Спеціалізація з лабораторної імунології',
          text: 'Поглиблена підготовка з імунологічних методів.'
        },
        {
          period: '2021',
          title: 'Курс з контролю якості',
          text: 'Внутрішня перевірка якості лабораторних результатів.'
        },
        {
          period: '2024',
          title: 'Сучасні імунологічні дослідження',
          text: 'Оновлення знань щодо лабораторної імунології.'
        }
      ],
      skills: [
        'Імунологічні показники',
        'Імуноглобуліни',
        'Контроль якості',
        'Підготовка проб',
        'Лабораторна документація',
        'Робота з аналізаторами'
      ],
      schedule: [
        { day: 'Пн – Пт', time: '09:00 – 17:00' },
        { day: 'Сб', time: '09:00 – 13:00' },
        { day: 'Нд', time: 'Вихідний' }
      ],
      phone: '+38 (067) 123-45-67'
    },
    {
      id: 10,
      slug: 'savchuk-yuliia',
      name: 'Савчук Юлія Сергіївна',
      position: 'Медична сестра',
      category: ['cat6'],
      categoryName: 'Забір',
      image: 'images/team/13.jpg',
      experience: '6 років досвіду',
      shortDescription: 'Забезпечує комфортний забір біоматеріалу та первинну підготовку зразків до досліджень.',
      about: [
        'Савчук Юлія Сергіївна відповідає за забір біоматеріалу та підготовку пацієнтів до лабораторних досліджень. Особливу увагу приділяє безпеці та комфорту.',
        'Фахівчиня дотримується правил асептики, правильно маркує проби та забезпечує коректну передачу біоматеріалу до лабораторного відділу.'
      ],
      education: [
        {
          period: '2014–2018',
          title: 'Івано-Франківський медичний фаховий коледж',
          text: 'Спеціальність «Медсестринство».'
        },
        {
          period: '2019',
          title: 'Курс із забору біоматеріалу',
          text: 'Техніка забору крові та підготовки проб.'
        },
        {
          period: '2021',
          title: 'Навчання з інфекційного контролю',
          text: 'Безпечна робота з біологічним матеріалом.'
        },
        {
          period: '2023',
          title: 'Комунікація з пацієнтами',
          text: 'Підвищення якості сервісу під час обслуговування.'
        }
      ],
      skills: [
        'Забір крові',
        'Комунікація з пацієнтами',
        'Підготовка біоматеріалу',
        'Маркування зразків',
        'Асептика',
        'Первинна документація'
      ],
      schedule: [
        { day: 'Пн – Пт', time: '07:30 – 15:00' },
        { day: 'Сб', time: '08:00 – 13:00' },
        { day: 'Нд', time: 'Вихідний' }
      ],
      phone: '+38 (067) 123-45-67'
    },
    {
      id: 11,
      slug: 'petrenko-ihor',
      name: 'Петренко Ігор Васильович',
      position: 'Мікробіолог',
      category: ['cat5'],
      categoryName: 'Мікробіологія',
      image: 'images/team/8.jpg',
      experience: '9 років досвіду',
      shortDescription: 'Працює з мікробіологічними дослідженнями та контролем бактеріологічних процесів.',
      about: [
        'Петренко Ігор Васильович спеціалізується на мікробіологічних дослідженнях, що використовуються для виявлення бактеріальних інфекцій та оцінки мікрофлори.',
        'Фахівець контролює лабораторні процеси, умови зберігання зразків та правильність виконання бактеріологічних досліджень.'
      ],
      education: [
        {
          period: '2010–2016',
          title: 'Буковинський державний медичний університет',
          text: 'Підготовка у сфері лабораторної діагностики.'
        },
        {
          period: '2017',
          title: 'Спеціалізація з мікробіології',
          text: 'Поглиблене вивчення бактеріологічних досліджень.'
        },
        {
          period: '2020',
          title: 'Курс з лабораторної стерильності',
          text: 'Контроль стерильності та якості мікробіологічних процесів.'
        },
        {
          period: '2023',
          title: 'Сучасні бактеріологічні методи',
          text: 'Оновлення практичних навичок у мікробіології.'
        }
      ],
      skills: [
        'Бактеріологічні дослідження',
        'Мікрофлора',
        'Контроль стерильності',
        'Підготовка матеріалу',
        'Лабораторна безпека',
        'Оцінка результатів'
      ],
      schedule: [
        { day: 'Пн – Пт', time: '08:30 – 16:30' },
        { day: 'Сб', time: '09:00 – 13:00' },
        { day: 'Нд', time: 'Вихідний' }
      ],
      phone: '+38 (067) 123-45-67'
    },
    {
      id: 12,
      slug: 'danyliuk-olena',
      name: 'Данилюк Олена Андріївна',
      position: 'Лікар-лаборант',
      category: ['cat1'],
      categoryName: 'Лабораторія',
      image: 'images/team/14.avif',
      experience: '13 років досвіду',
      shortDescription: 'Контролює виконання лабораторних досліджень та відповідність результатів стандартам якості.',
      about: [
        'Данилюк Олена Андріївна має досвід у проведенні лабораторних досліджень різної складності. Основний напрям роботи — контроль якості та організація лабораторних процесів.',
        'Фахівчиня бере участь у перевірці результатів, координує роботу з біоматеріалом та стежить за дотриманням внутрішніх стандартів лабораторії.'
      ],
      education: [
        {
          period: '2006–2012',
          title: 'Івано-Франківський національний медичний університет',
          text: 'Підготовка за напрямом лабораторної медицини.'
        },
        {
          period: '2013',
          title: 'Інтернатура з клінічної лабораторної діагностики',
          text: 'Поглиблена практична підготовка.'
        },
        {
          period: '2018',
          title: 'Курс з управління якістю лабораторії',
          text: 'Організація лабораторних процесів і перевірка результатів.'
        },
        {
          period: '2022',
          title: 'Сучасні стандарти лабораторної діагностики',
          text: 'Підвищення кваліфікації з лабораторної медицини.'
        }
      ],
      skills: [
        'Лабораторна діагностика',
        'Контроль якості',
        'Організація процесів',
        'Перевірка результатів',
        'Робота з документацією',
        'Верифікація досліджень'
      ],
      schedule: [
        { day: 'Пн – Пт', time: '08:00 – 16:00' },
        { day: 'Сб', time: '09:00 – 14:00' },
        { day: 'Нд', time: 'Вихідний' }
      ],
      phone: '+38 (067) 123-45-67'
    }
  ];



  function renderHomeTeam() {
    const container = document.getElementById('team-container');
  
    if (!container) return;
  
    const topSpecialists = specialists.slice(0, 4);
  
    topSpecialists.forEach((item, index) => {
      const col = document.createElement('div');
  
      col.className = 'col-lg-3 col-md-6 col-sm-6';
  
      col.innerHTML = `
        <div class="team-block ${index !== 3 ? 'mb-5 mb-lg-0' : ''}">
          <img src="${item.image}" alt="${item.name}" class="img-fluid w-100">
  
          <div class="content">
            <h4 class="mt-4 mb-0">
              <a href="doctor-single.html?slug=${item.slug}">
                ${item.name}
              </a>
            </h4>
            <p>${item.position}</p>
          </div>
        </div>
      `;
  
      container.appendChild(col);
    });
  }
  
  function renderSpecialistsList() {
    const specialistsList = document.getElementById('specialists-list');
    const loader = document.getElementById('specialists-loader');
  
    if (!specialistsList) return;
  
    specialistsList.innerHTML = '';
  
    specialists.forEach((specialist) => {
      const item = document.createElement('div');
  
      item.className = 'col-lg-3 col-sm-6 col-md-6 mb-4 specialist-item';
      item.dataset.groups = specialist.category.join(',');
  
      item.innerHTML = `
        <div class="position-relative doctor-inner-box">
          <div class="doctor-profile">
            <div class="doctor-img">
              <img src="${specialist.image}" alt="${specialist.name}" class="img-fluid w-100">
            </div>
          </div>
  
          <div class="content mt-3">
            <h4 class="mb-0">
              <a href="doctor-single.html?slug=${specialist.slug}">
                ${specialist.name}
              </a>
            </h4>
            <p>${specialist.position}</p>
          </div>
        </div>
      `;
  
      specialistsList.appendChild(item);
    });
  
    if (loader) loader.style.display = 'none';
  
    initSpecialistsFilter();
  }
  
  function initSpecialistsFilter() {
    const filterWrapper = document.querySelector('.btn-group');
    const items = document.querySelectorAll('.specialist-item');
  
    if (!filterWrapper || !items.length) return;
  
    filterWrapper.addEventListener('click', function (event) {
      const label = event.target.closest('label');
  
      if (!label) return;
  
      const input = label.querySelector('input[name="shuffle-filter"]');
  
      if (!input) return;
  
      const selectedCategory = input.value;
  
      document.querySelectorAll('.btn-group label').forEach((btn) => {
        btn.classList.remove('active');
      });
  
      label.classList.add('active');
      input.checked = true;
  
      items.forEach((item) => {
        const groups = item.dataset.groups ? item.dataset.groups.split(',') : [];
  
        if (selectedCategory === 'all' || groups.includes(selectedCategory)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  function renderSpecialistSingle() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');
  
    const specialist = specialists.find((item) => item.slug === slug) || specialists[0];
  
    if (!document.getElementById('doctor-name')) return;
  
    document.title = `MED-IF – ${specialist.name}`;
  
    document.getElementById('doctor-name').textContent = specialist.name;
    document.getElementById('doctor-breadcrumb').textContent = specialist.name;
  
    document.getElementById('doctor-image').src = specialist.image;
    document.getElementById('doctor-image').alt = specialist.name;
  
    document.getElementById('doctor-info-name').textContent = specialist.name;
    document.getElementById('doctor-position').textContent = specialist.position;
  
    document.getElementById('doctor-about-1').textContent = specialist.about?.[0] || '';
    document.getElementById('doctor-about-2').textContent = specialist.about?.[1] || '';
  
    document.getElementById('doctor-short-description').textContent =
      specialist.shortDescription || '';
  
    document.getElementById('doctor-phone').textContent =
      specialist.phone || '+38 (067) 123-45-67';
  
    renderSpecialistEducation(specialist.education || []);
    renderSpecialistSkills(specialist.skills || []);
    renderSpecialistSchedule(specialist.schedule || []);
  }
  
  function renderSpecialistEducation(education) {
    const educationContainer = document.getElementById('doctor-education');
  
    if (!educationContainer) return;
  
    educationContainer.innerHTML = '';
  
    const columns = [education.slice(0, 2), education.slice(2, 4)];
  
    columns.forEach((columnItems) => {
      const column = document.createElement('div');
      column.className = 'col-lg-6';
  
      columnItems.forEach((item, index) => {
        const block = document.createElement('div');
        block.className = index === 0 ? 'edu-block mb-5' : 'edu-block';
  
        block.innerHTML = `
          <span class="h6 text-muted">${item.period}</span>
          <h4 class="mb-3 title-color">${item.title}</h4>
          <p>${item.text}</p>
        `;
  
        column.appendChild(block);
      });
  
      educationContainer.appendChild(column);
    });
  }
  
  function renderSpecialistSkills(skills) {
    const skillsContainer = document.getElementById('doctor-skills');
  
    if (!skillsContainer) return;
  
    skillsContainer.innerHTML = '';
  
    skills.forEach((skill) => {
      const li = document.createElement('li');
      li.innerHTML = `<i class="icofont-check mr-2"></i>${skill}`;
      skillsContainer.appendChild(li);
    });
  }
  
  function renderSpecialistSchedule(schedule) {
    const scheduleContainer = document.getElementById('doctor-schedule');
  
    if (!scheduleContainer) return;
  
    scheduleContainer.innerHTML = '';
  
    schedule.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'd-flex justify-content-between align-items-center';
  
      li.innerHTML = `
        <span>${item.day}</span>
        <span>${item.time}</span>
      `;
  
      scheduleContainer.appendChild(li);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    renderHomeTeam();
    renderSpecialistsList();
    renderSpecialistSingle();
  });