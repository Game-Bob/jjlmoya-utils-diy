import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WorkshopFractionConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'konverter-drobnyh-dyujmov-v-millimetry';
const title = 'Мастерской конвертер дробей в миллиметры';
const description = 'Мгновенно переводите дробные значения дюймов в миллиметры. Подбирайте ближайшие стандартные болты, винты и головки. Создано для работы в мастерской, когда руки в масле или перчатках.';

const faqData = [
  {
    question: 'Зачем переводить дроби в миллиметры?',
    answer: 'Большинство современных инструментов и крепежа используют метрическую систему, но многие винтажные инструменты и чертежи до сих пор опираются на дробные дюймы. Этот конвертер помогает найти точный метрический эквивалент или ближайший стандартный размер крепежа.',
  },
  {
    question: 'В чем разница между 1/2 дюйма и 12,7 мм?',
    answer: '1/2 дюйма — это ровно 12,7 миллиметра (0,5 × 25,4 = 12,7). Метрические и дюймовые инструменты часто взаимозаменяемы для стандартных размеров, так как производители стараются унифицировать размеры крепежа в обеих системах.',
  },
  {
    question: 'Почему инструмент показывает «ближайший крепеж»?',
    answer: 'Потому что точные результаты преобразования часто оказываются между стандартными размерами крепежа. Инструмент находит болт или головку, которые максимально близки к вашему замеру, чтобы вы могли использовать то, что есть под рукой.',
  },
  {
    question: 'В чем разница между столярной и слесарной точностью?',
    answer: 'В столярном деле погрешность в 0,5 мм часто несущественна. В металлообработке и токарном деле важны каждые 0,1 мм. Режим точности подсказывает допустимые диапазоны допусков для вашего материала.',
  },
  {
    question: 'Можно ли использовать этот инструмент без интернета?',
    answer: 'Да. Все вычисления происходят прямо в вашем браузере. После первой загрузки инструмент работает полностью офлайн, что идеально подходит для мастерской, где нет Wi-Fi.',
  },
  {
    question: 'Зачем в инструменте нужна история?',
    answer: 'При разборке механизмов или работе над проектом из множества деталей история позволяет быстро сверяться с прошлыми замерами без их повторного ввода, помогая составлять список необходимых запчастей прямо в процессе работы.',
  },
];

const howToData = [
  {
    name: 'Выберите тип измерения',
    text: 'Выберите «Прямой», чтобы перевести дробь в миллиметры, или «Обратный», чтобы найти ближайшую дробь для размера, снятого штангенциркулем.',
  },
  {
    name: 'Введите значение',
    text: 'Используйте три колонки (целое, числитель, знаменатель) или нажимайте кнопки быстрых пресетов. Кнопки «плюс/минус» позволяют подгонять значения без набора на клавиатуре.',
  },
  {
    name: 'Проверьте результаты',
    text: 'Вы увидите точный перевод, а также ближайшие стандартные размеры болтов и головок. Визуальная шкала поможет оценить пропорции.',
  },
  {
    name: 'Сохраните в историю',
    text: 'Нажмите «Сохранить в историю», чтобы зафиксировать замеры. История хранится в вашем браузере даже после закрытия вкладки.',
  },
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

export const content: ToolLocaleContent<WorkshopFractionConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { title: 'FAQ', type: 'faq', schema: faqSchema },
    { title: 'Инструкция', type: 'howto', schema: howToSchema },
    { title: 'Приложение', type: 'app', schema: appSchema },
  ],
  ui: {
    labelFraction: 'Тип измерения',
    labelWhole: 'Целое',
    labelNumerator: 'Числитель',
    labelDenominator: 'Знаменатель',
    labelInches: 'Дюймы',
    labelMillimeters: 'Миллиметры',
    resultTitle: 'Результат перевода',
    resultFraction: 'Дробь',
    resultInches: 'Дюймы',
    resultMillimeters: 'Миллиметры',
    matchTitle: 'Ближайший стандартный крепеж',
    matchClosestFastener: 'Стандартный размер болта или винта',
    matchClosestSocket: 'Стандартный размер головки или ключа',
    matchDifference: 'Разница с вашим замером',
    matchRecommendation: 'Используйте этот размер, если он доступен',
    reverseSearchTitle: 'Обратный поиск',
    reverseSearchLabel: 'Замеренный размер (мм)',
    reverseSearchButton: 'Найти дробь',
    reverseSearchHint: 'Замерьте штангенциркулем и введите значение',
    unitMm: 'мм',
    unitInch: 'дюйм',
    modeForward: 'Дробь → Метрика',
    modeReverse: 'Метрика → Дробь',
    precisionLabel: 'Режим точности',
    precisionCarpentry: 'Столярный',
    precisionMetal: 'Слесарный',
    buttonConvert: 'Перевести',
    buttonClear: 'Очистить',
    buttonCopyResult: 'Копировать результат',
    buttonSaveToHistory: 'В историю',
    historyTitle: 'История',
    historyEmpty: 'Замеров пока нет',
    historyRemove: 'Удалить',
    helpText: 'Выберите размер или введите дробь для начала работы.',
    toolOverline: 'Инструменты мастерской',
    labelVisualReference: 'Визуальная справка (1 дюйм = 96 пикселей)',
  },
};
