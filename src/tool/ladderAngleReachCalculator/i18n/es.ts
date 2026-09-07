import { createLadderLocale } from '../locale';

export const content = createLadderLocale({
  language: 'es', slug: 'calculadora-angulo-y-alcance-escalera', title: 'Calculadora de ángulo y alcance de escaleras', description: 'Calcula la base, el ángulo y el alcance de una escalera con dos medidas y compara el resultado con la referencia 1:4.', faqTitle: 'Preguntas frecuentes', faq: [
    { question: '¿Qué calcula esta calculadora de escaleras?', answer: 'Convierte dos medidas entre altura objetivo, longitud de escalera y distancia de la base en la tercera medida geométrica. También muestra el ángulo, el alcance vertical y la referencia 1:4 por separado.' },
    { question: '¿Por qué la base real puede diferir de la referencia uno a cuatro?', answer: 'Responden a preguntas distintas. Con 3 m de altura y una escalera de 4 m, el triángulo exacto tiene una base de 2,65 m y un ángulo de 48,6°. La referencia 1:4 para 3 m es 0,75 m y necesita una escalera mínima de 3,09 m.' },
    { question: '¿Cómo calculo una escalera para alcanzar 3 m?', answer: 'Introduce 3 m como altura objetivo y la longitud disponible. La herramienta muestra la geometría real y, aparte, los 0,75 m de referencia 1:4 y los 3,09 m mínimos para esa altura.' },
    { question: '¿Qué significan los tres modos?', answer: 'Altura + escalera comprueba la base real; altura + base calcula la longitud; escalera + base calcula la altura alcanzable.' },
    { question: '¿El resultado certifica que la escalera es segura?', answer: 'No. Es una comprobación geométrica. Revisa la etiqueta de la escalera, el suelo, el apoyo, la carga, los accesos y la normativa aplicable.' },
  ],
  howTo: [
    { name: 'Elige dos medidas', text: 'Selecciona altura y escalera, altura y base, o escalera y base.' },
    { name: 'Introduce los valores', text: 'Usa el mismo sistema de unidades en ambos campos.' },
    { name: 'Lee la geometría', text: 'Comprueba la base, el ángulo y el alcance que forman tus medidas.' },
    { name: 'Compara con 1:4', text: 'Usa la base de referencia y la longitud mínima antes de decidir la colocación.' },
  ],
  seo: [
    { type: 'title', text: 'Qué resuelve esta calculadora de escaleras', level: 2 },
    { type: 'paragraph', html: 'Úsala cuando conozcas dos medidas y necesites decidir si una escalera alcanza una altura, qué distancia forma la base o qué longitud necesitas. Calcula el triángulo real y muestra aparte la referencia 1:4.' },
    { type: 'title', text: 'Geometría real de tus medidas', level: 3 },
    { type: 'paragraph', html: 'Con <strong>altura + escalera</strong>, la base real es <code>√(longitud² − altura²)</code>. Con <strong>altura + base</strong> obtienes la longitud, y con <strong>escalera + base</strong> obtienes la altura alcanzable. El ángulo siempre procede de esos mismos datos.' },
    { type: 'title', text: 'Referencia de colocación 1:4', level: 3 },
    { type: 'paragraph', html: 'La regla 1:4 coloca la base a una unidad por cada cuatro unidades de altura. Para 3 m son 0,75 m; la longitud mínima de ese triángulo es <code>√(3² + 0,75²) = 3,09 m</code>. Esta referencia no sustituye a la geometría real de una escalera más larga.' },
    { type: 'title', text: 'Cómo interpretar el resultado', level: 3 },
    { type: 'list', items: ['Un ángulo más tendido que 1:4 significa que la base queda más lejos.', 'Un ángulo más cerrado significa que la base queda más cerca.', 'Una escalera más larga que la mínima puede sobresalir por encima de la altura objetivo.'] },
    { type: 'tip', title: 'La geometría no es un certificado de seguridad', html: 'Comprueba la escalera, la superficie, el apoyo, la carga, el acceso y las instrucciones del fabricante antes de usarla.' },
  ],
  ui: {
    unitSystemLabel: 'Sistema de unidades', unitMetric: 'Métrico', unitImperial: 'Imperial', intro: 'Introduce dos medidas. La geometría y la referencia 1:4 aparecen separadas.', solveTitle: 'Elige dos medidas', modeHeightLength: 'Altura + escalera', modeHeightBase: 'Altura + base', modeLengthBase: 'Escalera + base', modeHeightLengthHint: 'Comprueba la base real', modeHeightBaseHint: 'Calcula la longitud', modeLengthBaseHint: 'Calcula el alcance', fieldHeight: 'Altura objetivo', fieldLength: 'Longitud disponible', fieldBase: 'Distancia de la base', fieldHeightHelp: 'Altura que necesitas alcanzar', fieldLengthHelp: 'Longitud de la escalera', fieldBaseHelp: 'Distancia horizontal al apoyo', calculatedTitle: 'Calculado para ti', calculatedBase: 'Base real', calculatedBaseHelp: 'con estas dos medidas', calculatedLength: 'Longitud de escalera', calculatedLengthHelp: 'para esta altura y base', calculatedHeight: 'Altura alcanzable', calculatedHeightHelp: 'con esta escalera y base', diagramTitle: 'Geometría del resultado', angleTitle: 'Ángulo', angleGuide: 'Diagrama lateral de escalera, apoyo, altura objetivo y referencia 1:4', reachTitle: 'Alcance vertical', reachHelp: 'altura en el apoyo', targetTitle: 'Altura objetivo', targetHelp: 'altura solicitada', guideDistanceTitle: 'Base 1:4 para la altura', guideDistanceHelp: 'altura objetivo ÷ 4', requiredLengthTitle: 'Longitud mínima a 1:4', requiredLengthHelp: 'para la altura objetivo', verdictReach: 'La escalera alcanza la altura', verdictShort: 'La escalera no alcanza la altura', verdictReachHelp: 'El alcance vertical iguala o supera la altura objetivo.', verdictShortHelp: 'Necesitas más longitud o una geometría distinta.', angleTooFlat: 'Más tendida que la guía', angleWithinGuide: 'Cerca de la guía 1:4', angleTooSteep: 'Más cerrada que la guía', ladderLabel: 'escalera', wallLabel: 'apoyo', targetLabel: 'objetivo', baseLabel: 'distancia de base', groundLabel: 'suelo', guideLabel: 'guía 1:4', invalidPositive: 'Introduce dos medidas positivas.', invalidBase: 'La distancia de la base debe ser menor que la longitud.', invalidTarget: 'La altura objetivo debe ser menor que la longitud.', warning: 'Solo geometría. Sigue la etiqueta y las instrucciones del fabricante.', unitLengthMetric: 'm', unitLengthImperial: 'ft',
  },
});
