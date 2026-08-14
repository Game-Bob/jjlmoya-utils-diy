import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrywallCalculatorUI } from '../ui';
import { drywallCalculatorBibliography } from '../bibliography';

const slug = 'kalkulyator-gipsokartona';
const title = 'Калькулятор Гипсокартона и Металлического Профиля';
const description = 'Профессиональный калькулятор материалов для перегородок и облицовок из гипсокартона (ГКЛ). Точный расчет листов ГКЛ, стоечных профилей ПС (C), направляющих ПН (U), саморезов, ленты и шпаклевки.';

const faqData = [
  {
    question: 'Как рассчитать количество листов гипсокартона для перегородки?',
    answer: 'Умножьте длину перегородки на высоту потолка, чтобы получить площадь стены. Для двухсторонней перегородки умножьте площадь на 2, а при двухслойной обшивке с двух сторон - на 4. Разделите общую площадь на полезную площадь одного листа (2.88 м2 для листа 120х240 см) и добавьте 10% на обрезки.',
  },
  {
    question: 'Когда применять шаг стоек 40 см или 60 см?',
    answer: 'Стандартный шаг стоек 60 см подходит для обычных внутренних сухих перегородок высотой до 3.0 м. Переходите на шаг 40 см при укладке тяжелой керамической плитки, во влажных помещениях (ванная, кухня), для звукоизолирующих стен или при высоте потолка более 3.0 метров.',
  },
  {
    question: 'Какой тип гипсокартонного листа выбрать для помещения?',
    answer: 'Используйте Обычный ГКЛ Серый (Тип А) для жилых комнат; Влагостойкий ГКЛВ Зеленый (Тип H1) для санузлов и кухонь; Огнестойкий ГКЛО Розовый (Тип F) для дымоходов и котельных; и Акустический ГКЛ Синий высокой плотности для звукоизоляции.',
  },
  {
    question: 'Сколько саморезов требуется на один лист гипсокартона?',
    answer: 'Рассчитывайте около 30 саморезов ГМ (3.5х25 мм) на один лист 120х240 см при однослойной обшивке. Шаг крепления составляет 25 см по периметру и 30 см по центральным стойкам.',
  },
  {
    question: 'Зачем нужна уплотнительная демпферная лента под направляющие профили?',
    answer: 'Самоклеящаяся пенополиэтиленовая лента виброизолирует направляющие профили ПН от пола и перекрытий, предотвращая передачу структурного шума.',
  },
];

const howToData = [
  { name: 'Ввести размеры стены', text: 'Укажите длину перегородки и высоту потолка в метрах или футах.' },
  { name: 'Настроить шаг стоек и слои обшивки', text: 'Выберите шаг стоек (40 см или 60 см), количество слоев и сторон обшивки.' },
  { name: 'Проверить спецификацию и чертеж CAD', text: 'Ознакомьтесь с расчетом профилей, саморезов, шпаклевки и графической схемой каркаса.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ru',
};

export const content: ToolLocaleContent<DrywallCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Часто Задаваемые Вопросы',
  faq: faqData,
  bibliography: drywallCalculatorBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Принципы Расчета Металлокаркасных Гипсокартонных Перегородок',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Монтаж легких гипсокартонных перегородок требует точного расчета оцинкованных профилей (стоечных ПС и направляющих ПН) и разбежки стыков листов по ГОСТ и СП 163.1325800.',
    },
    {
      type: 'title',
      text: 'Правила Шага Профилей: 40 см против 60 см',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Стандартный шаг 60 см</strong> соответствует ширине листов 120 см. <strong>Шаг 40 см</strong> обязателен при облицовке тяжелой плиткой и высотах стен более 3.0 метров.',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: 'Разбежка Стыков и Схема Крепления',
      html: '<p>Избегайте крестообразных стыков. Смещайте торцевые швы минимум на 40 см. Закрепляйте листы саморезами 3.5х25 мм с шагом <strong>25 см по краям</strong> и <strong>30 см по центру</strong>.</p>',
    },
    {
      type: 'title',
      text: 'Запас на Захоронение и Расход Шпаклевки',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Всегда учитывайте <strong>10% запас на обрезку</strong> вокруг проемов. Заделка швов требует около 0.8 кг шпаклевочной смеси на квадратный метр.',
    },
  ],
  ui: {
    unitSystemLabel: 'Система Измерения',
    unitMetric: 'Метрическая (м, см, кг)',
    unitImperial: 'Имперская (ft, in, lb)',

    paramLengthLabel: 'Длина Перегородки',
    paramHeightLabel: 'Высота Потолка',
    paramSpacingLabel: 'Шаг Стоечных Профилей',
    paramSpacing40Metric: '40 см (Высокая Нагрузка)',
    paramSpacing60Metric: '60 см (Стандарт)',
    paramSpacing40Imperial: '16 in (Высокая Нагрузка)',
    paramSpacing60Imperial: '24 in (Стандарт)',
    paramLayersLabel: 'Слои Обшивки',
    paramSingleLayer: 'Однослойная Обшивка',
    paramDoubleLayer: 'Двухслойная Обшивка',
    paramSidesLabel: 'Стороны Обшивки',
    paramDoubleSided: '2 Стороны (Перегородка)',
    paramSingleSided: '1 Сторона (Облицовка)',
    paramBoardTypeLabel: 'Тип Гипсокартона',
    boardTypeStandard: 'Стандартный ГКЛ (Тип А)',
    boardTypeMoisture: 'Влагостойкий ГКЛВ (Тип H1)',
    boardTypeFire: 'Огнестойкий ГКЛО (Тип F)',
    boardTypeAcoustic: 'Акустический (Тип А)',
    paramWasteLabel: 'Запас на Обрезки',

    summaryWallArea: 'Чистая Площадь Стены',
    summaryBoardArea: 'Общая Площадь Листов',

    resBoardsLabel: 'Листы Гипсокартона',
    resBoardsUnit: 'штук',
    resStudsLabel: 'Стоечные Профили ПС (C)',
    resStudsUnit: 'штук',
    resTracksLabel: 'Направляющие Профили ПН (U)',
    resTracksUnit: 'штук',
    resDrywallScrewsLabel: 'Саморезы по ГКЛ',
    resDrywallScrewsUnit: 'штук',
    resFramingScrewsLabel: 'Саморезы по Металлу (LN)',
    resFramingScrewsUnit: 'штук',
    resJointTapeLabel: 'Армирующая Лента',
    resJointTapeUnit: 'длина',
    resJointCompoundLabel: 'Шпаклевка для Швов',
    resJointCompoundUnit: 'вес',
    resAcousticBandLabel: 'Уплотнительная Демпферная Лента',
    resAcousticBandUnit: 'длина',

    diagramWallTitle: 'Чертеж Элевации CAD',
    diagramStudLegend: 'Стоечные Профили ПС',
    diagramTrackLegend: 'Направляющие ПН',
    diagramBoardLegend: 'Разбежка Стыков Листов',
    diagramModeStructure: 'Металлокаркас',
    diagramModeBoard: 'Схема Обшивки',
  },
};
