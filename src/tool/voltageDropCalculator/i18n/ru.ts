import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDropCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulyator-padeniya-napryazheniya';
const title = 'Калькулятор падения напряжения и сечения кабеля';
const description = 'Технический инструмент для предотвращения возгорания кабелей. Рассчитайте сечение для сетей 12В, 24В и 230В в зависимости от расстояния и мощности.';

const faqData = [
  {
    question: 'Что такое падение напряжения и почему это важно?',
    answer: 'Это потеря вольтажа, которая происходит при прохождении электричества по кабелю. Если кабель слишком тонкий или длинный, вы теряете напряжение. Результат: тусклый свет, моторы, которые не запускаются, или опасно греющиеся провода.',
  },
  {
    question: 'Какое сечение кабеля нужно для 12В на 10 метров?',
    answer: 'Зависит от мощности. Для 12В и 10А на 10 м нужно минимум 2.5 мм². Для 20А — 6 мм². При низком напряжении (12В/24В) падение гораздо критичнее, чем при 230В.',
  },
  {
    question: 'Можно ли использовать кабель 1.5 мм² для всей проводки?',
    answer: 'Нет. 1.5 мм² — для цепей освещения (макс. 10А). Для розеток нужно 2.5 мм². Для плиты или стиральной машины — 4 мм² или 6 мм². Использование тонкого кабеля опасно и может привести к пожару.',
  },
  {
    question: 'Какое максимально допустимое падение напряжения?',
    answer: 'В бытовых сетях (230В): макс. 3% для освещения, 5% для прочих нужд. В 12В/24В (автодома, солнечные панели): не более 3% в сумме. Большее падение означает потерю эффективности и риск перегрева.',
  },
];

const howToData = [
  { name: 'Определить напряжение системы', text: 'Выберите, является ли ваша сеть 12В, 24В (солнечная сеть/автодом) или 230В (бытовая).' },
  { name: 'Ввести силу тока', text: 'Укажите Амперы (А) или Ватты (Вт), которые будет потреблять прибор на конце кабеля.' },
  { name: 'Измерить расстояние', text: 'Введите длину кабеля (в одну сторону) в метрах от источника энергии до потребителя.' },
  { name: 'Выбрать материал проводника', text: 'Выберите медь (стандарт) или алюминий для точного расчета удельного сопротивления.' },
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

export const content: ToolLocaleContent<VoltageDropCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Полное руководство по падению напряжения', level: 2 },
    { type: 'paragraph', html: 'Если вы строите автодом, проектируете солнечную электростанцию или тянете кабель для освещения сада, у вас есть невидимый враг: <strong>падение напряжения</strong>. Это не просто технический нюанс; это разница между работающим холодильником и неисправным оборудованием, между безопасностью и риском пожара.' },
    { type: 'title', text: 'Формула падения напряжения', level: 3 },
    { type: 'card', icon: 'mdi:function-variant', title: 'Точный расчет по закону Ома', html: '<p>Формула: <strong>ΔV = (2 × L × I × ρ) / S</strong>, где L — длина в одну сторону, I — сила тока, ρ — удельное сопротивление (0.0178 для меди), S — сечение кабеля.</p>' },
  ],
  ui: {
    heroDropLabel: 'Общее падение напряжения',
    heroVoltsUnit: 'Вольт',
    heroPctLoss: '% потери',
    heroEffLabel: 'Эффективность',
    statusExcellent: 'Отлично',
    statusAcceptable: 'Допустимо',
    statusCritical: 'Критично',
    fieldVoltage: 'Напряжение',
    fieldMaterial: 'Материал',
    materialCopper: 'Медь',
    materialAlum: 'Алюм.',
    fieldLoad: 'Нагрузка',
    modeW: 'Вт',
    modeA: 'А',
    unitWatts: 'Ватт',
    unitAmps: 'Ампер',
    fieldLength: 'Длина кабеля (в одну сторону)',
    unitMeters: 'метров',
    fieldSection: 'Сечение кабеля',
    sectionInfo: 'Рекомендуется',
  },
};
