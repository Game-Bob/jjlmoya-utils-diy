import { createLadderLocale } from '../locale';

export const content = createLadderLocale({
  language: 'pt', slug: 'calculadora-de-angulo-e-alcance-de-escada', title: 'Calculadora de ângulo e alcance de escada', description: 'Calcule a base, o ângulo e o alcance de uma escada com duas medidas e compare com a referência 1:4.', faqTitle: 'Perguntas frequentes', faq: [
    { question: 'O que esta calculadora de escadas calcula?', answer: 'A partir de dois valores entre altura pretendida, comprimento da escada e distância da base, calcula a terceira medida geométrica. Também mostra o ângulo, o alcance e a referência 1:4 separadamente.' },
    { question: 'Porque é que a base real pode ser diferente da base 1:4?', answer: 'São respostas diferentes. Com 3 m de altura e uma escada de 4 m, o triângulo real tem 2,65 m de base e 48,6°. A referência 1:4 para 3 m é 0,75 m e requer pelo menos 3,09 m de escada.' },
    { question: 'Como calculo uma escada para chegar a 3 m?', answer: 'Introduza 3 m como altura pretendida e o comprimento disponível. A ferramenta mostra a geometria real e, separadamente, os 0,75 m da referência 1:4 e os cerca de 3,09 m mínimos.' },
    { question: 'Quais são os três modos?', answer: 'Altura + escada verifica a base real, altura + base calcula o comprimento e escada + base calcula a altura alcançável.' },
    { question: 'O resultado garante que a escada é segura?', answer: 'Não. É apenas uma verificação geométrica. Siga a etiqueta da escada, as instruções do fabricante e as regras locais.' },
  ],
  howTo: [
    { name: 'Escolha duas medidas', text: 'Selecione altura e escada, altura e base, ou escada e base.' },
    { name: 'Introduza os valores', text: 'Use o mesmo sistema de unidades nos dois campos.' },
    { name: 'Leia a geometria', text: 'Verifique base, ângulo e alcance vertical do triângulo.' },
    { name: 'Compare com 1:4', text: 'Compare a base de referência e o comprimento mínimo antes de posicionar a escada.' },
  ],
  seo: [
    { type: 'title', text: 'O que calcula esta calculadora de escadas', level: 2 },
    { type: 'paragraph', html: 'Use-a quando conhece duas medidas e precisa de decidir se uma escada alcança determinada altura, qual a base do triângulo real ou que comprimento é necessário. A referência 1:4 fica separada da geometria efetiva.' },
    { type: 'title', text: 'Geometria real das suas medidas', level: 3 },
    { type: 'paragraph', html: 'Com <strong>altura + escada</strong>, a base real é <code>√(comprimento² − altura²)</code>. Com <strong>altura + base</strong>, obtém o comprimento; com <strong>escada + base</strong>, obtém a altura alcançável.' },
    { type: 'title', text: 'Referência de colocação 1:4', level: 3 },
    { type: 'paragraph', html: 'A referência 1:4 coloca a base uma unidade para cada quatro unidades de altura. Para 3 m são 0,75 m; o comprimento mínimo correspondente é <code>√(3² + 0,75²) = 3,09 m</code>. Uma escada mais comprida pode alterar o ângulo e o alcance.' },
    { type: 'title', text: 'Como interpretar o resultado', level: 3 },
    { type: 'list', items: ['Um ângulo mais baixo do que 1:4 significa que a base está mais afastada.', 'Um ângulo mais alto significa que a base está mais próxima.', 'Uma escada maior do que o mínimo pode ultrapassar a altura pretendida.'] },
    { type: 'tip', title: 'Geometria não é certificado de segurança', html: 'Verifique a escada, o piso, o apoio, a carga, o acesso e as instruções do fabricante antes de usar.' },
  ],
  ui: {
    unitSystemLabel: 'Sistema de unidades', unitMetric: 'Métrico', unitImperial: 'Imperial', intro: 'Introduza duas medidas. A geometria e a referência 1:4 ficam separadas.', solveTitle: 'Escolha duas medidas', modeHeightLength: 'Altura + escada', modeHeightBase: 'Altura + base', modeLengthBase: 'Escada + base', modeHeightLengthHint: 'Verificar a base real', modeHeightBaseHint: 'Calcular o comprimento', modeLengthBaseHint: 'Calcular o alcance', fieldHeight: 'Altura pretendida', fieldLength: 'Comprimento disponível', fieldBase: 'Distância da base', fieldHeightHelp: 'Altura que precisa de alcançar', fieldLengthHelp: 'Comprimento da escada', fieldBaseHelp: 'Distância horizontal ao apoio', calculatedTitle: 'Calculado para si', calculatedBase: 'Base real', calculatedBaseHelp: 'com estas duas medidas', calculatedLength: 'Comprimento da escada', calculatedLengthHelp: 'para esta altura e base', calculatedHeight: 'Altura alcançável', calculatedHeightHelp: 'com esta escada e base', diagramTitle: 'Geometria do resultado', angleTitle: 'Ângulo', angleGuide: 'Vista lateral com escada, apoio, altura pretendida e referência 1:4', reachTitle: 'Alcance vertical', reachHelp: 'altura no apoio', targetTitle: 'Altura pretendida', targetHelp: 'altura solicitada', guideDistanceTitle: 'Base 1:4 para a altura', guideDistanceHelp: 'altura pretendida ÷ 4', requiredLengthTitle: 'Comprimento mínimo a 1:4', requiredLengthHelp: 'para a altura pretendida', verdictReach: 'A escada alcança a altura', verdictShort: 'A escada não alcança a altura', verdictReachHelp: 'O alcance vertical atinge ou supera a altura pretendida.', verdictShortHelp: 'Precisa de mais comprimento ou de outra geometria.', angleTooFlat: 'Mais baixa do que a referência', angleWithinGuide: 'Perto da referência 1:4', angleTooSteep: 'Mais alta do que a referência', ladderLabel: 'escada', wallLabel: 'apoio', targetLabel: 'objetivo', baseLabel: 'distância da base', groundLabel: 'solo', guideLabel: 'referência 1:4', invalidPositive: 'Introduza duas medidas positivas.', invalidBase: 'A base deve ser menor do que o comprimento da escada.', invalidTarget: 'A altura pretendida deve ser menor do que o comprimento.', warning: 'Apenas geometria. Siga a etiqueta e as instruções do fabricante.', unitLengthMetric: 'm', unitLengthImperial: 'ft',
  },
});
