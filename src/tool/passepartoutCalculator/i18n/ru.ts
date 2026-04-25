import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PassepartoutCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulyator-passepartu';
const title = 'Калькулятор паспарту: поля с оптической коррекцией для оформления';
const description = 'Инструмент для расчета полей паспарту с оптической коррекцией (bottom weighting). Оформляйте свои фотографии и искусство с галерейными пропорциями.';

const faqData = [
  {
    question: 'Что такое оптическая коррекция центра (Bottom Weighting)?',
    answer: 'Это принцип дизайна и оформления, при котором нижнее поле делается чуть шире остальных. Это корректирует оптическую иллюзию, из-за которой геометрический центр кажется «просевшим», когда смотришь на висящую работу.',
  },
  {
    question: 'Из какого материала должно быть паспарту?',
    answer: 'Для художественной сохранности следует использовать безкислотный картон или картон с нейтральным pH (альфа-целлюлоза или хлопок). Дешевый картон со временем желтеет и может повредить работу из-за содержания лигнина.',
  },
  {
    question: 'Как выбрать цвет полей?',
    answer: 'Стандартом являются цвет слоновой кости или мягкий кремовый цвета, которые не отвлекают от самой работы. Темные поля могут подчеркнуть белые тона фотографии, тогда как цветные поля следует использовать осторожно, чтобы они не спорили с тональностью произведения.',
  },
  {
    question: 'Какова идеальная ширина поля?',
    answer: 'Профессиональный стандарт составляет от 5 до 8 см. Если поле слишком узкое, работа кажется «зажатой». Если очень широкое, оно может придать небольшим работам монументальный и минималистичный вид.',
  },
];

const howToData = [
  { name: 'Измерить произведение искусства', text: 'Измерьте точную ширину и высоту бумаги или холста, которые вы собираетесь оформить. Вычтите несколько миллиметров, если хотите, чтобы паспарту немного заходило на изображение.' },
  { name: 'Измерить внутреннюю часть рамы', text: 'Возьмите внутренние размеры рамы или четверти, куда будет вставляться картон паспарту.' },
  { name: 'Активировать оптическую коррекцию', text: 'Отметьте этот пункт в калькуляторе, если хотите, чтобы нижнее поле автоматически было больше для профессионального результата.' },
  { name: 'Вырезать картон', text: 'Используйте полученные размеры для вырезания окна и внешней части картона, желательно с косым срезом под 45 градусов для чистого края.' },
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

export const content: ToolLocaleContent<PassepartoutCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Наука идеального оформления', level: 2 },
    { type: 'paragraph', html: '<strong>Паспарту</strong> — это не просто декоративный картон; это легкие, которые позволяют вашему произведению искусства дышать. Этот калькулятор поможет вам определить точные размеры для вырезания картона, гарантируя, что работа будет идеально центрирована или оптически сбалансирована внутри рамы.' },
    { type: 'title', text: 'Почему важен «тяжелый низ» или Bottom Weighting?', level: 3 },
    { type: 'card', icon: 'mdi:eye-outline', title: 'Оптическая иллюзия геометрического центра', html: '<p>Человеческий глаз склонен воспринимать вертикальный геометрический центр чуть ниже, чем он есть на самом деле. Если вы оформите работу точно по центру, будет казаться, что она «падает».</p><p><strong>Bottom Weighting</strong> корректирует эту иллюзию, оставляя нижнее поле чуть больше, визуально приподнимая работу, чтобы она казалась идеально центрированной.</p>' },
    { type: 'title', text: 'Материалы для консервационного оформления', level: 3 },
    { type: 'card', icon: 'mdi:palette-swatch-outline', title: 'Безкислотный картон для консервации', html: '<p>При выборе картона всегда ищите пометки <strong>«Acid-Free»</strong> или <strong>«Museum Quality»</strong>. Дешевый картон из древесной массы может со временем пожелтеть и выделять кислоты, которые «прожгут» ваше произведение искусства (фоксинг), непоправимо испортив его.</p>' },
  ],
  ui: {
    sectionTitle: 'Размеры',
    sectionDesc: 'Введите размеры в сантиметрах.',
    frameSizeTitle: 'Размер рамы',
    artSizeTitle: 'Размер работы',
    labelWidth: 'Ширина (см)',
    labelHeight: 'Высота (см)',
    labelBottomWeighting: 'Bottom Weighting',
    descBottomWeighting: 'Увеличить нижнее поле для визуального баланса',
    labelOffset: 'Смещение (%)',
    errorMsg: 'Размер работы должен быть меньше размера рамы.',
    labelTop: 'Верх',
    labelBottom: 'Низ',
    labelLeft: 'Лев',
    labelRight: 'Прав',
    artPlaceholder: 'Ваша работа',
  },
};
