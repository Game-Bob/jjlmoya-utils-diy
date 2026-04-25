import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortarCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulyator-rastvora';
const title = 'Пропорции традиционных известковых растворов: штукатурка и отделка';
const description = 'Бесплатный калькулятор для известково-песчаных растворов. Получите точные пропорции для базового, промежуточного и чистового слоев по традиционным методам (Витрувий).';

const faqData = [
  {
    question: 'Почему стоит использовать известь вместо цемента?',
    answer: 'Известь — это «живой» и дышащий материал, который позволяет водяному пару выходить наружу, предотвращая появление сырости от конденсата. Кроме того, она более гибкая, чем цемент, что снижает риск появления трещин в старых стенах.',
  },
  {
    question: 'Какова идеальная пропорция для обрызга (базового слоя)?',
    answer: 'Согласно витрувианской традиции, для чистого речного песка используется пропорция 1:3 (одна часть извести на три части песка). Для карьерного песка рекомендуется 1:2, чтобы обеспечить связность раствора.',
  },
  {
    question: 'Что такое чистовая штукатурка или накрывка?',
    answer: 'Это последний слой стены. Используется гораздо более мелкий песок (иногда мраморная мука) и более высокая пропорция извести для получения гладкой, шелковистой поверхности, которую можно красить или оставить в естественном виде.',
  },
  {
    question: 'Как долго твердеет известковый раствор?',
    answer: 'Воздушная известь твердеет за счет карбонизации (поглощения CO2 из воздуха). Начальный процесс схватывания занимает несколько дней, но максимальная прочность достигается через месяцы, увеличиваясь с годами.',
  },
];

const howToData = [
  { name: 'Определить тип основания', text: 'Проверьте, будете ли вы работать по камню, старому кирпичу или блоку. Основание должно быть чистым и слегка влажным.' },
  { name: 'Выбрать гранулометрию песка', text: 'Используйте крупный песок для базового слоя и мелкий песок для декоративной отделки. Чистота песка определяет качество раствора.' },
  { name: 'Смешивание компонентов', text: 'Смешайте известь и песок всухую перед добавлением воды. Консистенция должна быть пластичной, а не жидкой.' },
  { name: 'Нанесение и затирка', text: 'Распределите раствор кельмой и используйте терку для выравнивания поверхности, когда раствор начнет «схватываться».' },
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

export const content: ToolLocaleContent<MortarCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Трактат о растворах: мудрость Витрувия', level: 2 },
    { type: 'paragraph', html: 'Марк Витрувий Поллион в VII книге своего труда <em>Десять книг об архитектуре</em> описал не только техники, но и философию. Он понимал, что долговечность здания заключается в его соединениях. Раствор — это не просто клей, это соединительная ткань. Его пропорции (1:3, 1:2, 1:1) являются наследием столетий римских эмпирических наблюдений в поисках идеального баланса между прочностью и гибкостью.' },
    { type: 'title', text: 'Гранулометрия заполнителя: ключ к качеству', level: 3 },
    { type: 'paragraph', html: 'Качество известкового раствора во многом зависит от гранулометрии заполнителя. Для <strong>Trullissatio</strong> (базового слоя) используется крупный речной песок 2-5 мм. Для <strong>Arenato</strong> (промежуточного слоя) — промытый средний песок 0,5-2 мм. Для <strong>Marmorato</strong> (чистовой отделки) — мраморная пыль менее 0,5 мм.' },
    { type: 'title', text: 'Тайна механического сцепления', level: 3 },
    { type: 'paragraph', html: 'Сцепление носит не химический, а <strong>механический</strong> характер. Представьте миллионы микроскопических корней. Раствор должен проникать в поры кирпича, создавая физический «замок». Без пористости не будет анкеровки.' },
  ],
  ui: {
    leftTitle: 'Витрувианская система',
    centerTitle: 'Доступные материалы',
    rightTitle: 'Оценочный расход',
    btnCal: 'Известь',
    btnArena: 'Песок',
    labelCalPasta: 'Известковое тесто (1.30 кг/л)',
    labelCalPolvo: 'Порошок NHL (0.65 кг/л)',
    labelQuantity: 'Доступное количество:',
    labelNeedsAlso: 'Вам также понадобится:',
    labelProportion: 'Пропорция: ',
    labelCoverage: 'Покрытие:',
    labelThickness: 'Общая толщина:',
    labelLayers: 'Слои:',
    labelWasteFactor: 'Коэффициент потерь: 20%',
    layersSingular: 'слой',
    layersPlural: 'слоя',
    layersSingularShort: 'слой',
    layersPluralShort: 'слоя',
    materialCal: 'Известь',
    materialArena: 'Песок',
    materialMarmol: 'Мрамор',
    phaseDescTrullissatio: 'Грубый базовый слой. 2 слоя по 15 мм. Пропорция 1:3 (Известь:Речной песок).',
    phaseDescArenato: 'Промежуточный слой. 2 слоя по 8 мм. Пропорция 1:2 (Известь:Промытый песок).',
    phaseDescMarmorato: 'Чистовая отделка. 1 двойной слой 4 мм. Пропорция 1:1 (Известь:Мраморная пыль).',
    granulometryTitle: 'Гранулометрия заполнителя',
    grainTitleCoarse: 'Крупный песок',
    grainSubtitleCoarse: 'Речной песок',
    grainUsageCoarse: 'Базовая штукатурка',
    grainTitleMedium: 'Средний песок',
    grainSubtitleMedium: 'Промытый песок',
    grainUsageMedium: 'Средний слой',
    grainTitleFine: 'Тонкий порошок',
    grainSubtitleFine: 'Мраморная пыль',
    grainUsageFine: 'Чистовая отделка',
    specSize: 'Размер:',
    specUse: 'Применение:',
    specDensity: 'Плотность:',
  },
};
