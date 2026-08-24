import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ExcavationCalculatorUI } from '../ui';
import { excavationVolumeCalculatorBibliography } from '../bibliography';

const slug = 'kalkulyator-obema-kotlovana-koeffitsienta-razryhleniya';
const title = 'Калькулятор Объема Котлована и Коэффициента Разрыхления Грунта';
const description = 'Рассчитайте объем грунта в плотном теле (в котловане) и оцените объем разрыхленного грунта с учетом коэффициента разрыхления для песка, растительного грунта, глины и гравия.';

const faq = [
  {
    question: 'В чем разница между объемом в плотном теле и объемом в разрыхленном состоянии?',
    answer: 'Объем в плотном теле - это геометрический объем котлована до выемки. Объем в разрыхленном состоянии - это объем, который вынятый грунт займет при транспортировке и складировании с учетом коэффициента разрыхления.',
  },
  {
    question: 'Как рассчитывается объем выемки грунта?',
    answer: 'Умножьте длину котлована на ширину и глубину. Например, выемка 4 м на 3 м и глубиной 0,5 м дает объем в плотном теле 6 кубических метров.',
  },
  {
    question: 'Почему для глины используется более широкий диапазон разрыхления?',
    answer: 'Свойства глины сильно зависят от влажности, плотности и состава. Инструмент использует более широкий диапазон, так как разрыхление глины варьируется сильнее.',
  },
  {
    question: 'Может ли этот калькулятор заменить инженерно-геологические изыскания?',
    answer: 'Нет. Расчет является ориентировочным для планирования вывоза грунта и заказа самосвалов. Для фундаментов требуется геологическое заключение.',
  },
];

const howTo = [
  { name: 'Введите размеры выемки', text: 'Укажите длину, ширину и глубину котлована.' },
  { name: 'Выберите тип грунта', text: 'Выберите песок, растительный грунт, глину или гравий для применения коэффициента разрыхления.' },
  { name: 'Спланируйте вывоз грунта', text: 'Используйте объем в плотном теле для выемки, а разрыхленный объем - для расчета самосвалов и контейнеров.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<ExcavationCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Часто Задаваемые Вопросы',
  faq,
  bibliographyTitle: 'Источники и технические примечания',
  bibliography: excavationVolumeCalculatorBibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Два объема для решения двух задач на стройплощадке', level: 2 },
    { type: 'paragraph', html: '<strong>Объем в плотном теле</strong> (также называемый естественным объемом) - это геометрия ненарушенного массива грунта: длина, умноженная на ширину и глубину выемки. <strong>Объем в разрыхленном состоянии</strong> - это объем, который грунт реально займет в кузове самосвала, контейнере или временном отвале после выемки. Четкое разделение этих двух показателей предотвращает ошибки при планировании вывоза грунта и заказе строительной техники.' },
    { type: 'title', text: 'Использование разрыхленного объема для логистики', level: 3 },
    { type: 'paragraph', html: 'Выберите наиболее соответствующий тип грунта в калькуляторе и сравните нижнюю и верхнюю границы разрыхленного объема с полезной вместимостью самосвалов, контейнеров и площадью складирования. Диапазон значений отображается преднамеренно, так как влажность, способ выемки и плотность грунта существенно влияют на конечный результат.' },
    { type: 'tip', title: 'Коэффициент разрыхления не заменяет изыскания', html: 'Влажность грунта, уровень грунтовых вод и степень естественного уплотнения влияют на реальный объем. Для фундаментов, подпорных стен и транспортировки зараженного грунта необходимы официальные инженерно-геологические изыскания.' },
    { type: 'title', text: 'Проверка до заказа техники', level: 3 },
    { type: 'paragraph', html: 'При неоднородном или неопределенном грунте выполните расчет для двух возможных типов и ориентируйтесь на больший объем вывоза до получения точных полевых замеров.' },
  ],
  ui: {
    unitSystemLabel: 'Система измерения',
    unitMetric: 'Метрическая',
    unitImperial: 'Имперская',
    onboarding: 'Введите размеры котлована, выберите тип грунта и используйте оба объема для планирования работ и вывоза.',
    dimensionLabel: 'Размеры котлована',
    lengthLabel: 'Длина',
    widthLabel: 'Ширина',
    depthLabel: 'Глубина',
    soilLabel: 'Тип грунта',
    soilSand: 'Песок',
    soilTopsoil: 'Растительный грунт',
    soilClay: 'Глина / Суглинок',
    soilGravel: 'Гравий',
    soilSandBand: 'Разрыхление от 10 до 15%',
    soilTopsoilBand: 'Разрыхление от 15 до 25%',
    soilClayBand: 'Разрыхление от 25 до 40%',
    soilGravelBand: 'Разрыхление от 15 до 25%',
    bankVolumeLabel: 'Объем в плотном теле',
    bankVolumeHelp: 'Ненарушенный грунт в котловане',
    looseVolumeLabel: 'Объем в разрыхленном состоянии',
    looseVolumeHelp: 'Оценка объема после выемки',
    expansionLabel: 'Примененное разрыхление',
    expansionHelp: 'Диапазон для выбранного грунта',
    sceneTitle: 'От котлована до отвала',
    sceneBank: 'в плотном теле',
    sceneLoose: 'разрыхленный грунт',
    sceneGround: 'уровень земли',
    sceneCut: 'вырытый котлован',
    interpretationTitle: 'Как использовать результаты.',
    interpretationText: 'Первое число показывает объем котлована. Диапазон показывает объем разрыхленного грунта для вывоза.',
    warning: 'Ориентировочный расчет для логистики. Влажность и метод выемки меняют реальный разрыхленный объем.',
    unitLengthMetric: 'м',
    unitLengthImperial: 'фут',
    unitVolumeMetric: 'м³',
    unitVolumeImperial: 'фут³',
    soilStatusLow: 'низкое разрыхление',
    soilStatusMedium: 'умеренное разрыхление',
    soilStatusHigh: 'высокое разрыхление',
    soilStatusLabel: 'Диапазон расчета',
  },
};
