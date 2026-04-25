import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TwoStrokeMixtureCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-mistura-2-tempos';
const title = 'Calculadora de Mistura 2 Tempos: Proporções Óleo e Combustível Precisas';
const description = 'Calcule instantaneamente a mistura precisa para o seu motor 2 tempos. Ferramenta essencial para motosserras, ciclomotores, motos e pequenos motores. Suporta proporções 1:25, 1:33, 1:40 e 1:50.';

const faqData = [
  {
    question: 'O que é um motor de 2 tempos?',
    answer: 'Um motor de 2 tempos combina admissão e compressão em apenas dois movimentos do pistão, tornando-o mais simples e leve que os motores de 4 tempos. Equipam motosserras, sopradores, ciclomotores e algumas motos. Requerem óleo misturado no combustível para lubrificação.',
  },
  {
    question: 'Quais são as proporções de mistura mais comuns?',
    answer: 'As proporções comuns são 1:25 (rica, protetora), 1:33 (equipamento antigo), 1:40 (padrão) e 1:50 (pobre, motores modernos). Verifique sempre o manual do seu motor: uma proporção errada pode danificá-lo.',
  },
  {
    question: 'O que acontece se eu errar a mistura?',
    answer: 'Muito óleo (mistura rica) causa fumo excessivo, suja as velas e reduz o desempenho. Pouco óleo (mistura pobre) leva à gripagem do motor, danos no pistão e falha catastrófica.',
  },
  {
    question: 'Que tipo de óleo devo usar?',
    answer: 'Use óleo específico para motores de 2 tempos adequado ao seu equipamento. Óleos sintéticos premium oferecem melhor proteção e combustão mais limpa que os convencionais. Nunca use óleo de motor de 4 tempos — causará danos graves.',
  },
  {
    question: 'Como misturar combustível e óleo?',
    answer: 'Deite uma parte da gasolina num recipiente limpo, adicione a quantidade calculada de óleo e depois adicione a gasolina restante. Misture bem agitando durante 1-2 minutos. Etiquete o recipiente com a data da mistura.',
  },
];

const howToData = [
  { name: 'Saiba a sua proporção', text: 'Consulte o manual do seu motor. Proporções comuns: motosserras (1:40 ou 1:50), ciclomotores (1:33), motos antigas (1:25). Usar a proporção errada danifica o motor.' },
  { name: 'Meça a gasolina', text: 'Decida quanta gasolina precisa. Esta ferramenta aceita litros, galões ou qualquer unidade. Medição precisa da gasolina = quantidade correta de óleo.' },
  { name: 'Calcule o óleo necessário', text: 'Insira o volume de gasolina e a proporção. Esta calculadora mostra exatamente quanto óleo (em ml ou litros) precisa para uma mistura perfeita.' },
  { name: 'Misture com cuidado', text: 'Deite a gasolina num recipiente limpo, adicione o óleo calculado e depois a gasolina restante. Agite por 1-2 minutos para misturar bem.' },
  { name: 'Etiquete e use', text: 'Marque no recipiente a data e a proporção. Use a mistura em 30 dias para melhores resultados (especialmente com óleos sintéticos).' },
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

const howToSchema: WithContext<any> = {
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<TwoStrokeMixtureCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Calculadora de Mistura 2 Tempos: Proporções Óleo/Combustível Precisas para Motosserras e Ciclomotores', level: 2 },
    { type: 'paragraph', html: 'Motores a dois tempos requerem uma mistura precisa de gasolina e óleo para sobreviver. Uma mistura errada pode destruir o seu motor em minutos. Esta calculadora determina instantaneamente a quantidade exata de óleo necessária para o seu volume de combustível e tipo de motor — eliminando as dúvidas na oficina.' },

    { type: 'title', text: 'Por que motores 2 tempos requerem óleo no combustível', level: 3 },
    { type: 'card', icon: 'mdi:engine', title: 'A diferença crítica', html: 'Ao contrário dos motores de 4 tempos com cárteres de óleo separados, os motores de 2 tempos misturam o óleo diretamente no combustível. Em cada ciclo, o motor queima a mistura tanto para energia quanto para lubrificação. Não há cárter, nem bomba de óleo separada — apenas o combustível misturado mantém os pistões vivos.' },

    { type: 'title', text: 'Referência rápida de proporções 2 tempos', level: 3 },
    { type: 'table', headers: ['Proporção', '% Óleo', 'Uso Recomendado', 'Tipo de Motor', 'Características'], rows: [
      ['1:25', '3,85%', 'Proteção Máxima', 'Equipamento pré-1980, carga alta, motos clássicas', 'Mistura rica: mais fumo, mais carvão, proteção máxima contra gripagem'],
      ['1:33', '2,94%', 'Equipamento Clássico', 'Pequenos motores anos 80-90, motosserras antigas', 'Riqueza moderada: equilíbrio entre proteção e eficiência'],
      ['1:40', '2,44%', 'Padrão da Indústria', 'A maioria das motosserras e ciclomotores modernos', 'Recomendação padrão: desenhado para os óleos sintéticos atuais'],
      ['1:50', '1,96%', 'Eficiência Moderna', 'Últimas motosserras, ciclomotores de alto desempenho', 'Mistura pobre: menos fumo, combustão limpa, para óleos sintéticos premium']
    ] },

    { type: 'title', text: 'Consequências de proporções erradas', level: 3 },
    { type: 'proscons', items: [
      { pro: 'Muito Óleo (Mistura Rica)', con: 'Fumo branco excessivo, velas sujas, acumulação de carvão, má aceleração, falha do motor' },
      { pro: 'Pouco Óleo (Mistura Pobre)', con: 'Pistão gripa em segundos, paredes do cilindro riscadas, danos catastróficos no motor' },
      { pro: 'Proporção Correta', con: 'Funcionamento suave, lubrificação adequada, combustão ideal, vida útil prolongada, arranque fiável' }
    ] },

    { type: 'title', text: 'Proporções comuns por equipamento', level: 3 },
    { type: 'card', icon: 'mdi:tree', title: 'Motosserras', html: '<strong>Stihl, Husqvarna, Echo:</strong> Modelos modernos normalmente requerem 1:40 ou 1:50. Verifique sempre o manual — usar 1:25 numa motosserra moderna corre o risco de sujar as velas. Máquinas Stihl antigas (anos 90 e anteriores) podem especificar 1:25 ou 1:33.' },
    { type: 'card', icon: 'mdi:motorcycle', title: 'Ciclomotores e Motos', html: '<strong>Vespa, Honda, Yamaha:</strong> A maioria requer 1:33 para modelos antigos, 1:40–1:50 para versões modernas. Ciclomotores de alto desempenho especificam frequentemente 1:50. O manual de serviço é a sua fonte da verdade.' },
    { type: 'card', icon: 'mdi:tools', title: 'Sopradores e Roçadoras', html: '<strong>Stihl, Husqvarna, DeWalt:</strong> Tipicamente 1:50 (modernos) ou 1:40 (mais antigos). Estas ferramentas são feitas para uso sazonal rápido, por isso proporções pobres reduzem o fumo sem sacrificar a fiabilidade.' },

    { type: 'title', text: 'O tipo de óleo importa tanto quanto a proporção', level: 3 },
    { type: 'comparative', items: [
      { title: 'Óleo 2 Tempos Convencional', description: 'Opção económica para uso ocasional. Mais cinzas, mais fumo, proteção adequada para proporções padrão.', icon: 'mdi:beaker', points: ['Custo inferior', 'Fumo mais visível', 'Mais resíduos', 'Funciona para 1:40'] },
      { title: 'Óleo 2 Tempos Sintético', description: 'A escolha premium. Combustão mais limpa, melhor proteção, permite proporções mais pobres. Termoestável.', icon: 'mdi:flame', points: ['Menor fumo', 'Melhor proteção do motor', 'Permite 1:50 em segurança', 'Maior estabilidade no armazenamento'], highlight: true },
      { title: 'Mistura Sintética (Semi sintético)', description: 'Equilíbrio entre convencional e sintético. Boa proteção a custo moderado. Recomendação comum de fabricantes.', icon: 'mdi:beaker-outline', points: ['Desempenho equilibrado', 'Custo moderado', 'Bom para 1:40', 'Menos fumo que o convencional'] }
    ], columns: 3 },

    { type: 'title', text: 'Processo de mistura passo a passo', level: 3 },
    { type: 'card', icon: 'mdi:check-circle', title: 'A forma correta de misturar', html: '<ol style="margin: 1rem 0; padding-left: 1.5rem;"><li><strong>Use um recipiente dedicado</strong> reservado apenas para mistura. Limpo, seco e marcado.</li><li><strong>Deite metade da gasolina</strong> primeiro no recipiente.</li><li><strong>Adicione a quantidade de óleo calculada</strong> (use esta calculadora para precisão).</li><li><strong>Adicione a gasolina restante</strong> para atingir o volume pretendido.</li><li><strong>Agite vigorosamente por 1–2 minutos</strong> até a cor ficar uniforme. Mistura homogénea = lubrificação uniforme.</li><li><strong>Etiquete o recipiente</strong> com data, proporção e tipo de combustível.</li><li><strong>Use em 30 dias</strong> (óleos sintéticos estendem para 60 dias).</li></ol>' },

    { type: 'title', text: 'Quando duvidar do manual do equipamento', level: 3 },
    { type: 'tip', html: '<strong>Verifique sempre a proporção no manual do seu equipamento primeiro.</strong> Se não o encontrar, visite o site do fabricante ou contacte o suporte. Nunca adivinhe — uma proporção errada anula garantias e arrisca gripar o motor. Se o equipamento for antigo e o manual estiver perdido, pesquise online pelo modelo.' },

    { type: 'title', text: 'Glossário: Termos de 2 Tempos Explicados', level: 3 },
    { type: 'glossary', items: [
      { term: 'Mistura Pobre (Lean)', definition: 'Combustível com muito pouco óleo (proporção alta como 1:50). Risco de gripagem por lubrificação insuficiente.' },
      { term: 'Mistura Rica (Rich)', definition: 'Combustível com muito óleo (proporção baixa como 1:25). Causa fumo excessivo, suja as velas e cria carvão.' },
      { term: 'Mistura Homogénea', definition: 'Mistura uniforme de gasolina e óleo, obtida agitando bem. Essencial para lubrificação e combustão constantes.' },
      { term: 'Gripagem (Seizure)', definition: 'Quando o pistão bloqueia no cilindro por falta de lubrificação e atrito. Resulta em falha total do motor.' },
      { term: 'Óleo Sintético', definition: 'Óleo formulado em laboratório que oferece proteção superior, combustão limpa e estabilidade térmica vs óleos minerais.' },
      { term: 'Motor 2 Tempos', definition: 'Motor que completa o ciclo em dois movimentos do pistão. Mais leve e simples que motores de 4 tempos.' },
      { term: 'Motor 4 Tempos', definition: 'Motor com cárter de óleo separado e ciclo de quatro etapas. O óleo circula por canais e não se mistura na gasolina.' }
    ] },

    { type: 'title', text: 'Como esta calculadora poupa tempo e dinheiro', level: 3 },
    { type: 'stats', items: [
      { value: '100%', label: 'Cálculos precisos, sem erros de medida', icon: 'mdi:check-circle' },
      { value: 'Instante', label: 'Quantidades exatas em segundos', icon: 'mdi:flash' },
      { value: '4 Ratios', label: 'Cobre 1:25, 1:33, 1:40, 1:50', icon: 'mdi:counter', trend: { value: 'Mais ratios personalizados', positive: true } },
      { value: 'Partilhável', label: 'Copie e partilhe o seu setup via URL', icon: 'mdi:share-variant' }
    ], columns: 2 },

    { type: 'title', text: 'Erros comuns que matam motores', level: 3 },
    { type: 'diagnostic', variant: 'error', title: 'Usar óleo 4 tempos em motores 2 tempos', icon: 'mdi:alert', badge: 'Morte do Motor', html: 'Óleos de 4 tempos são feitos para circular num bloco motor. Num depósito de 2 tempos, não queimam bem e destruirão o motor em horas.' },
    { type: 'diagnostic', variant: 'warning', title: 'Esquecer de misturar bem', icon: 'mdi:alert', badge: 'Risco de Gripagem', html: 'Se o óleo e a gasolina se separarem por mistura incompleta, partes do motor queimarão sem lubrificação. Agite por pelo menos 1–2 minutos.' },
    { type: 'diagnostic', variant: 'warning', title: 'Usar combustível velho (mais de 60 dias)', icon: 'mdi:alert', badge: 'Resíduos Gomosos', html: 'Gasolina com etanol degrada-se com o tempo. Mistura velha deixa depósitos nos carburadores. Prepare apenas o que vai usar em 30 dias.' },

    { type: 'title', text: 'Resumo FAQ', level: 3 },
    { type: 'summary', title: 'Antes de misturar', items: [
      'Verifique o manual para a proporção exata — é a especificação do fabricante.',
      'Confirme que usa óleo de 2 tempos, não de 4 tempos ou outros.',
      'Use um recipiente limpo e dedicado apenas à mistura.',
      'Use gasolina fresca (não guardada há meses) e óleo compatível.',
      'Misture bem e etiquete com data, proporção e tipo de combustível.',
      'Use a mistura em 30 dias para melhores resultados.'
    ] },
  ],
  ui: {
    titleMain: 'Calculadora de Mistura 2 Tempos',
    labelFuelVolume: 'Volume de Gasolina',
    labelRatio: 'Proporção da Mistura',
    labelOilRequired: 'Óleo Necessário',
    labelTotalMixture: 'Mistura Total',
    labelRichness: 'Riqueza da Mistura',
    labelPresets: 'Proporções Comuns',
    labelCustomRatio: 'Proporção Custom (1:X)',
    btnClear: 'Limpar',
    btnCopyResults: 'Copiar Resultados',
    btnSwitchMode: 'Mudar Modo',
    unitLiters: 'L',
    unitMilliliters: 'ml',
    richLean: 'Pobre (menos óleo, risco de gripagem)',
    richBalanced: 'Equilibrada (mix padrão)',
    richRich: 'Rica (mais óleo, mais fumo, proteção motor)',
    msgReady: 'Pronto',
    msgMixtureReady: 'Mistura calculada',
    tooltipFuelVolume: 'Insira a quantidade de gasolina em litros',
    tooltipRatio: 'Insira a proporção como 25, 33, 40 ou 50 (para 1:25, 1:33, etc.)',
    recipientLabel: 'Recipiente da Mistura',
    oilPercentage: '% Óleo',
    labelVolume: 'Volume',
    labelRatioShort: 'Ratio',
    labelOilTip: 'Mix de óleo a 2% = proporção 1:50',
    labelMixingTips: 'Dicas de Mistura',
    labelMixingTipsDesc: 'Misture em recipiente limpo: gasolina primeiro, adicione óleo medido, depois o resto da gasolina. Agite bem (1-2 min) para mistura homogénea. Etiquete com data e proporção.',
    recipePrefix: 'Para',
    recipeAt: 'de gasolina a',
    recipeAdd: 'adicione exatamente',
    recipeOfOil: 'de óleo 2 tempos.',
    copyTextPrefix: 'Mistura 2T',
    copyTextFuel: 'gasolina',
    copyTextOil: 'óleo',
  },
};
