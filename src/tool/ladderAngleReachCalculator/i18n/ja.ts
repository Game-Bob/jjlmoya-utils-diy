import { createLadderLocale } from '../locale';

export const content = createLadderLocale({
  language: 'ja', slug: 'ladder-angle-and-reach-calculator', title: 'はしごの角度・到達距離計算機', description: '2つの寸法から、はしごの設置距離、角度、到達高さを計算し、1:4の目安と比較します。', faqTitle: 'よくある質問',
  faq: [
    { question: 'この計算機で何を計算できますか？', answer: '目標の高さ、はしごの長さ、壁から足元までの距離のうち2つを入力し、残りの値を求めます。角度、垂直方向の到達高さ、1:4の目安も別々に表示します。' },
    { question: '実際の足元距離と1:4の距離が違うのはなぜですか？', answer: '計算している内容が違うためです。高さ3 m、長さ4 mなら、目標高さに届く三角形の足元距離は2.65 mです。一方、1:4の目安は0.75 mで、最低長さは約3.09 mです。' },
    { question: '高さ3 mに届くはしごを調べるには？', answer: '目標の高さに3 mと、用意したはしごの長さを入力します。実際の足元距離と角度に加えて、1:4の目安も確認できます。' },
    { question: '3つの計算モードは何ですか？', answer: '高さ＋はしごで足元距離、高さ＋足元距離ではしごの長さ、はしご＋足元距離で到達できる高さを求めます。' },
    { question: 'この結果だけで安全だと判断できますか？', answer: 'いいえ。これは幾何学的な確認にすぎません。はしごの表示、床面、支え、荷重、アクセス、地域の規則を確認してください。' },
  ],
  howTo: [
    { name: '2つの寸法を選ぶ', text: '高さ＋はしご、高さ＋足元距離、はしご＋足元距離から選びます。' },
    { name: '数値を入力する', text: '2つの入力欄で同じ単位系を使います。' },
    { name: '結果を読む', text: '入力値からできる足元距離、角度、到達高さを確認します。' },
    { name: '1:4と比較する', text: '設置を決める前に、目安の距離と最低長さを確認します。' },
  ],
  seo: [
    { type: 'title', text: 'このはしご計算機で分かること', level: 2 },
    { type: 'paragraph', html: '2つの寸法から、はしごがどの高さに届くか、足元がどれだけ離れるか、どの角度になるかを確認できます。実際の三角形と1:4の設置目安は分けて表示します。' },
    { type: 'title', text: '入力値から求める実際の形', level: 3 },
    { type: 'paragraph', html: '<strong>高さ＋はしご</strong>では足元距離を <code>√(長さ² − 高さ²)</code> で計算します。<strong>高さ＋足元距離</strong>では長さを、<strong>はしご＋足元距離</strong>では到達高さを求めます。' },
    { type: 'title', text: '1:4の設置目安', level: 3 },
    { type: 'paragraph', html: '1:4の目安では、高さ4に対して足元を1離します。高さ3 mなら距離は0.75 m、必要な最低長さは約3.09 mです。' },
    { type: 'title', text: '結果の読み方', level: 3 },
    { type: 'list', items: ['角度が浅いほど足元は支えから遠くなります。', '角度が急なほど足元は支えに近くなります。', '最低長さより長いはしごは目標より上に伸びる場合があります。'] },
    { type: 'tip', title: '計算結果は安全証明ではありません', html: '使用前には、はしご、床面、支え、荷重、周囲の空間、メーカーの指示を確認してください。' },
  ],
  ui: {
    unitSystemLabel: '単位系', unitMetric: 'メートル法', unitImperial: 'ヤード・ポンド法', intro: '2つの寸法を入力してください。実際の形と1:4の目安を分けて表示します。', solveTitle: '2つの寸法を選ぶ', modeHeightLength: '高さ＋はしご', modeHeightBase: '高さ＋足元距離', modeLengthBase: 'はしご＋足元距離', modeHeightLengthHint: '足元距離を確認', modeHeightBaseHint: 'はしごの長さを計算', modeLengthBaseHint: '到達高さを計算', fieldHeight: '目標の高さ', fieldLength: 'はしごの長さ', fieldBase: '壁から足元まで', fieldHeightHelp: '届かせたい高さ', fieldLengthHelp: 'はしごに沿った長さ', fieldBaseHelp: '地面上の水平距離', calculatedTitle: '計算結果', calculatedBase: '実際の足元距離', calculatedBaseHelp: '入力した2つの寸法から', calculatedLength: 'はしごの長さ', calculatedLengthHelp: 'この高さと足元距離の場合', calculatedHeight: '到達できる高さ', calculatedHeightHelp: 'このはしごと足元距離の場合', diagramTitle: '結果の形', angleTitle: '角度', angleUnit: '°', angleGuide: 'はしご、支え、目標高さ、足元距離、1:4の目安を示す側面図', reachTitle: '垂直方向の到達高さ', reachHelp: '支えの位置での高さ', targetTitle: '目標の高さ', targetHelp: '指定した高さ', baseTitle: '足元距離', baseHelp: '地面上の水平距離', guideDistanceTitle: '目標に対する1:4距離', guideDistanceHelp: '目標の高さ ÷ 4', requiredLengthTitle: '1:4での最低長さ', requiredLengthHelp: '目標の高さに対して', verdictReach: '目標に届きます', verdictShort: 'この配置では目標より低くなります', verdictReachHelp: '垂直方向の到達高さが目標以上です。', verdictShortHelp: 'より長いはしごなどを選ぶ場合も、最終的な配置が適切か確認してください。', angleTooFlat: '目安より浅い', angleWithinGuide: '1:4の目安に近い', angleTooSteep: '目安より急', ladderLabel: 'はしご', wallLabel: '支え', targetLabel: '目標', baseLabel: '足元距離', groundLabel: '地面', guideLabel: '1:4の目安', invalidPositive: '正の数を2つ入力してください。', invalidBase: '足元距離ははしごの長さより短くしてください。', invalidTarget: '目標の高さははしごの長さより低くしてください。', warning: '幾何学的な計算です。はしごの表示とメーカーの指示に従ってください。', unitLengthMetric: 'm', unitLengthImperial: 'ft',
  },
});
