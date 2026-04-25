import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StairCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulyator-lestnic';
const title = 'Калькулятор лестниц: проектирование и расчет';
const description = 'Рассчитайте точные размеры вашей лестницы: проступь, подступенок, угол наклона и материалы. Соблюдайте закон Блонделя и избегайте строительных ошибок.';

const faqData = [
  {
    question: 'Что такое закон Блонделя?',
    answer: 'Это формула, согласно которой для удобства лестницы сумма двух высот подступенка и одной ширины проступи должна составлять от 62 до 64 см (2h + s = 63 см). Этот закон основан на средней длине человеческого шага.',
  },
  {
    question: 'Какова максимальная высота ступени?',
    answer: 'В жилых домах рекомендуется не превышать 18–19 см. Для общественных мест максимум по нормам обычно составляет 17,5 см. Более высокие ступени сильнее утомляют и могут быть опасны.',
  },
  {
    question: 'Как рассчитать, если мало места?',
    answer: 'Если горизонтальное пространство ограничено, вам придется либо увеличить количество ступеней (уменьшив высоту подступенка), либо согласиться на более крутой уклон. Калькулятор поможет найти оптимальный баланс.',
  },
  {
    question: 'Что включает расчет объема бетона?',
    answer: 'Рассчитывается общий объем бетона с учетом ступеней и наклонной плиты (несущей плоскости, на которой держатся ступени). Если не учесть объем плиты, заказ бетона будет недостаточным.',
  },
  {
    question: 'Почему важна кумулятивная разметка?',
    answer: 'Измерение каждой ступени по отдельности ведет к накоплению ошибок. Кумулятивная разметка гарантирует, что все ступени будут иметь абсолютно одинаковую высоту, что повышает безопасность и комфорт.',
  },
];

const howToData = [
  { name: 'Измерить перепад высот', text: 'Измерьте общий перепад (H) от чистового пола нижнего уровня до чистового пола верхнего уровня. Это базовый параметр для всех расчетов.' },
  { name: 'Ввести доступную длину', text: 'Опционально: если у вас есть ограничения по месту, введите доступную горизонтальную длину. Используйте 0 для свободного расчета.' },
  { name: 'Настроить количество ступеней', text: 'Калькулятор предложит начальное количество, но вы можете его изменить. Следите за индикатором Блонделя: он должен быть зеленым (62–64 см).' },
  { name: 'Определить параметры объекта', text: 'Укажите толщину плиты, отделку, марку бетона и ширину лестницы. Эти данные влияют на итоговый расчет материалов.' },
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

export const content: ToolLocaleContent<StairCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Геометрическое проектирование лестниц: закон Блонделя', level: 2 },
    { type: 'paragraph', html: 'Комфорт лестницы зависит от длины человеческого шага. При подъеме или спуске тело ожидает предсказуемого ритма. Закон Блонделя гласит, что 2 высоты подступенка + 1 ширина проступи = 62–64 см — это стандарт, гарантирующий максимальный комфорт и безопасность.' },
    { type: 'title', text: 'Учет конструкций и материалов', level: 3 },
    { type: 'paragraph', html: 'Для профессионального исполнения жизненно важно учитывать бетонную плиту основания. Игнорирование этого объема приведет к нехватке материала при заказе. Калькулятор автоматически включает этот расчет.' },
    { type: 'title', text: 'Разметка и накопленная ошибка', level: 3 },
    { type: 'paragraph', html: 'В строительстве главный враг — миллиметровая ошибка. Если вы измеряете каждую ступень отдельно, сумма маленьких погрешностей может привести к тому, что последняя ступень окажется на 5 см выше или ниже первой.' },
  ],
  ui: {
    labelGeometry: 'Геометрия и габариты',
    labelTotalHeight: 'Общая высота (H)',
    labelAvailableLength: 'Доступная длина (L)',
    labelAvailableLengthHint: '0 — без ограничений.',
    labelNumSteps: 'Кол-во ступеней',
    labelOptimize: 'Оптимизация (18см)',
    labelWork: 'Строительство и отделка',
    labelSlabThickness: 'Толщина плиты (e)',
    labelFinishThickness: 'Отделка',
    labelCeilingHeight: 'Высота потолка',
    labelStairWidth: 'Ширина лестницы',
    labelConcreteStrength: 'Марка бетона',
    optionH150: 'B12.5 (Подготовка)',
    optionH200: 'B15 (Жилое)',
    optionH250: 'B20 (Конструктив)',
    labelRiser: 'Подступенок (h)',
    labelTread: 'Проступь (s)',
    labelSlope: 'Уклон',
    labelRealAdvance: 'Реальная длина',
    labelLayoutTable: 'Разметка и исполнение',
    colStep: 'Ступень',
    colConcreteHeight: 'Выс. бетона',
    colFinishedHeight: 'Выс. чистовая',
    colAdvance: 'Продвижение',
    adjustedNote: 'Скоррект.',
    labelMaterials: 'Материалы и объемы',
    labelTotalConcrete: 'Всего бетона:',
    labelCement: 'Цемент (мешки/25кг):',
    labelSand: 'Нужно песка:',
    unitM3: 'м³',
    unitBags: 'мешков',
    unitLiters: 'л',
    btnShare: 'Поделиться',
    btnPrint: 'Печать PDF',
    statusOptimalComfort: 'Оптимальный комфорт',
    statusMarginLimit: 'Предельное значение',
    statusCriticalDesign: 'Критический расчет',
    statusRiserError: 'Ошибка проступи',
    msgInvalidValues: 'Некорректные данные',
    msgInsufficientSpace: 'НЕДОСТАТОЧНО МЕСТА',
    msgDangerousTread: 'Проступь {val}см опасна.',
    msgBlondelValue: 'Значение Блонделя: {val}см.',
    msgOptimalStep: 'Удобный шаг: {val}cm.',
    msgLowCeiling: 'НИЗКИЙ ПРОЕМ (<2м)',
    msgCalculating: 'Расчет...',
    msgEnterMeasurements: 'Введите размеры',
    shareTitle: 'Итог расчетов',
    shareMessage: 'Лестница: H={h}см, N={n}, h={ch}см, Vol={vol}м3',
  },
};
