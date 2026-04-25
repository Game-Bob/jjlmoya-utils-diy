import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ThermalExpansionCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulyator-teplovogo-rasshireniya';
const title = 'Калькулятор теплового расширения балок и конструкций';
const description = 'Рассчитайте, насколько удлиняется балка или конструкция при изменении температуры. Технический инструмент для инженеров и DIY. Коэффициенты расширения материалов.';

const faqData = [
  {
    question: 'Что такое коэффициент линейного расширения?',
    answer: 'Это физическое свойство материалов, которое показывает, насколько материал расширяется на каждый градус Цельсия при повышении его температуры. Измеряется в 1/°C или °C⁻¹.',
  },
  {
    question: 'Почему важно рассчитывать расширение балок?',
    answer: 'Если у балки нет места для расширения (деформационных швов), это приведет к возникновению огромных внутренних напряжений, которые могут деформировать конструкцию, привести к появлению трещин в бетоне или даже к обрушению.',
  },
  {
    question: 'Расширяется ли дерево одинаково во всех направлениях?',
    answer: 'Нет. Дерево — анизотропный материал. Оно очень мало расширяется вдоль волокон, но значительно в поперечном направлении (в ширину и толщину).',
  },
  {
    question: 'Какую температуру использовать в качестве начальной?',
    answer: 'Следует использовать температуру в момент монтажа или строительства. В качестве конечной следует брать максимально ожидаемую температуру в течение срока службы.',
  },
];

const howToData = [
  { name: 'Измерить исходную длину', text: 'Введите длину балки или материала в метрах.' },
  { name: 'Выбрать материал', text: 'Выберите металлы, строительные материалы или дерево, чтобы применить соответствующий коэффициент.' },
  { name: 'Определить температурный диапазон', text: 'Укажите начальную и максимально ожидаемую температуру для расчета теплового перепада.' },
  { name: 'Проанализировать рост', text: 'Обратите внимание на общее удлинение в миллиметрах и итоговую конечную длину для планирования швов.' },
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

export const content: ToolLocaleContent<ThermalExpansionCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Что такое тепловое расширение и как оно влияет на конструкции', level: 2 },
    { type: 'paragraph', html: '<strong>Тепловое расширение</strong> — это физический процесс, при котором материал увеличивает свою длину в ответ на повышение температуры. В строительстве это явление — сила, способная разрушить бетон, деформировать стальные балки и искривить железнодорожные рельсы.' },
    { type: 'title', text: 'Формула линейного расширения', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Формула линейного расширения', html: '<p>Расширение структурного элемента рассчитывается по формуле: <code>ΔL = L₀ · α · ΔT</code>. Где <strong>ΔL</strong> — общий рост, <strong>L₀</strong> — исходная длина, <strong>α</strong> — коэффициент расширения материала (в °C⁻¹), а <strong>ΔT</strong> — разница температур.</p>' },
  ],
  ui: {
    configTitle: 'Настройка',
    labelMaterial: 'Материал',
    groupMetals: 'Металлы',
    groupConstruction: 'Строительство',
    groupWood: 'Дерево и полимеры',
    matSteel: 'Сталь (12 ppm/°C)',
    matAluminum: 'Алюминий (23 ppm/°C)',
    matCopper: 'Медь (17 ppm/°C)',
    matIron: 'Железо (11 ppm/°C)',
    matConcrete: 'Бетон (12 ppm/°C)',
    matBrick: 'Кирпич (9 ppm/°C)',
    matGlass: 'Стекло (9 ppm/°C)',
    matWoodFiber: 'Дерево вдоль волокон (5 ppm/°C)',
    matWoodTransversal: 'Дерево поперек (40 ppm/°C)',
    matPvc: 'ПВХ (30 ppm/°C)',
    catMetals: 'Металлургия',
    catConstruction: 'Строительство',
    catWood: 'Дерево и полимеры',
    labelLength: 'Начальная длина (м)',
    labelTempStart: 'Т. начальная (°C)',
    labelTempEnd: 'Т. максимальная (°C)',
    deltaLabel: 'Тепловой перепад (ΔT)',
    vizTitle: 'Симуляция расширения',
    resultGrowthLabel: 'Общее удлинение (ΔL)',
    resultFinalLabel: 'Конечная длина',
    unitMm: 'ММ',
    unitM: 'М',
    riskTitle: 'Риск деформации',
    jointTitle: 'Мин. шов',
    riskLow: 'Низкий',
    riskModerate: 'Умеренный',
    riskCritical: 'Критический',
    tipDefault: 'Для точных коэффициентов спецсплавов обратитесь к руководству производителя.',
    tipSteel: 'Сталь и бетон имеют почти идентичные коэффициенты, что позволяет железобетону работать без внутренних трещин.',
    tipAluminum: 'Алюминий расширяется почти в два раза сильнее стали. При установке рам требуются эластичные герметики.',
    tipGlass: 'Стекло и сталь расширяются почти одинаково, что важно для проектирования больших стеклянных фасадов.',
    tipConcrete: 'Коэффициент бетона очень близок к стали, поэтому смешанные структуры так стабильны.',
    tipWood: 'Дерево мало расширяется от тепла, но сильно от влаги. В длинных конструкциях вдоль волокон оно очень стабильно.',
    tipPvc: 'ПВХ имеет очень высокое расширение. Требуются специальные швы для поглощения движения без поломок.',
  },
};
