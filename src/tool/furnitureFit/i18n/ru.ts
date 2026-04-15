import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FurnitureFitUI } from '../ui';

const slug = 'kalkulyator-prostranstva-dlya-mebeli';
const title = 'Калькулятор пространства для переезда и мебели';
const description = 'Проверьте, поместится ли ваш диван, шкаф или стол в лифт или пройдет ли в дверь. Используйте теорему Пифагора в 3D, чтобы рассчитать наклоны.';

const faqData = [
  {
    question: 'Почему диван может не пройти, хотя он меньше дверного проема?',
    answer: 'Из-за угла поворота. Если коридор узкий, диван нужно заносить боком или под наклоном. Ограничивающим фактором является не только ширина двери, но и доступный радиус поворота в помещении.',
  },
  {
    question: 'Что такое диагональ мебели и почему она важна?',
    answer: 'Это самое длинное расстояние между двумя противоположными углами. Это жизненно важно для понимания того, можно ли будет поднять высокий предмет мебели в комнате с низким потолком после его сборки на полу.',
  },
  {
    question: 'Как правильно измерить лифт?',
    answer: 'Не меряйте только пол. Измерьте ширину открытой двери, полезную глубину и общую высоту. Диагональ от основания двери до верхнего заднего угла — самый важный показатель.',
  },
  {
    question: 'Какие детали нужно снимать в первую очередь?',
    answer: 'Ножки диванов, ручки шкафов и дверцы холодильников часто дают те самые критические 5–10 см, которые определяют, поместится мебель или останется на улице.',
  },
];

const howToData = [
  { name: 'Измерить мебель (длина, ширина, высота)', text: 'Возьмите максимальные размеры объекта, включая любые выступы, такие как подлокотники или ручки.' },
  { name: 'Измерить критические проходы', text: 'Измерьте свободный проем двери (от косяка до косяка), внутреннюю часть лифта и ширину коридоров.' },
  { name: 'Ввести данные в симулятор', text: 'Введите размеры в инструмент, чтобы увидеть, совместим ли объем мебели с пространством прохода.' },
  { name: 'Рассчитать наклоны', text: 'Если мебель очень высокая, используйте рассчитанную диагональ, чтобы проверить, сможете ли вы повернуть ее на лестничной площадке или внутри лифта.' },
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

export const content: ToolLocaleContent<FurnitureFitUI> = {
  slug,
  title,
  description,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Технические справочники',
  bibliography: [
    { name: 'Geometric Fit in Confined Spaces (MDPI Buildings)', url: 'https://www.mdpi.com/2075-5309/15/2/157' },
    { name: 'Moving Sofa Problem: Wolfram MathWorld', url: 'https://mathworld.wolfram.com/MovingSofaProblem.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Наука переезда и теорема Пифагора', level: 2 },
    { type: 'paragraph', html: 'Переезд — это не просто испытание физической силы; это сложная геометрическая головоломка. Видимое пространство комнаты или лифта часто обманчиво, особенно если игнорировать третье измерение. Математика может сэкономить вам немало денег на возврате товаров и неудачных перевозках.' },
    { type: 'title', text: 'Трюк с 3D-диагональю', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Золотое правило', html: '<p>Никогда не меряйте только саму мебель. Всегда измеряйте <strong>критические точки доступа</strong>: ширину дверной коробки, самую низкую точку потолка в подъезде и реальную глубину лифта при закрытых дверях. Формула <code>d = √(w² + h² + z²)</code> покажет, пройдет ли вещь под наклоном.</p>' },
    { type: 'title', text: 'Проблема дивана в коридоре', level: 3 },
    { type: 'card', icon: 'mdi:sofa', title: 'Запас для маневра', html: '<p>Распространенная ошибка — полагать, что если мебель 80 см и проем 80 см, то она пройдет. Это не так. Руки грузчиков, эластичность ткани и неровности стен требуют минимального запаса от <strong>2 до 5 см</strong>. Без этого запаса мебель поцарапается или намертво застрянет.</p>' },
    { type: 'title', text: '3 ошибки, которые портят переезд', level: 3 },
    { type: 'paragraph', html: 'Даже при правильных замерах эти невидимые факторы часто приводят к катастрофам: <strong>Потолочный светильник</strong> — забытый во время диагонального поворота; <strong>Радиус поворота мебели</strong> — жесткая мебель не гнется; <strong>Упаковка</strong> — пузырчатая пленка может добавить по 1–3 см с каждой стороны.' },
  ],
  ui: {
    conTitle: 'Размеры пространства',
    conHint: 'Напр.: стандартный лифт, дверной проем или фургон.',
    objTitle: 'Размеры мебели',
    labelWidth: 'Ширина (см)',
    labelHeight: 'Высота (см)',
    labelDepth: 'Глубина (см)',
    labelLength: 'Длина (см)',
    labelMargin: 'Погрешность (см)',
    vizLabel: 'Упрощенный вид пространства',
    verdictDefault: 'Поместится?',
    verdictHint: 'Введите размеры, чтобы проверить совместимость.',
    verdictYes: 'ДА, ПОМЕСТИТСЯ!',
    verdictNo: 'НЕ ПОМЕСТИТСЯ',
    fitDirect: 'Мебель идеально проходит напрямую.',
    fitDiagonal3d: 'Проходит под наклоном по диагонали (3D Пифагор).',
    fitDiagonalPlane: 'Проходит под наклоном в одной из плоскостей.',
    fitNope: 'Мебель слишком велика даже для диагонального прохода.',
    diagLabel: 'Макс. диагональ (3D Пифагор):',
    objLabel: 'Мебель',
  },
};
