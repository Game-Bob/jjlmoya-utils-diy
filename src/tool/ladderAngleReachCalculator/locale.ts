import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../types';
import type { LadderAngleReachUI } from './ui';
import { ladderAngleReachCalculatorBibliography } from './bibliography';
import { content as englishContent } from './i18n/en';

export interface LadderLocaleData {
  language: string;
  slug: string;
  title: string;
  description: string;
  faqTitle: string;
  faq: Array<{ question: string; answer: string }>;
  howTo: Array<{ name: string; text: string }>;
  seo: ToolLocaleContent['seo'];
  ui: Partial<LadderAngleReachUI>;
}

// eslint-disable-next-line max-lines-per-function
export function createLadderLocale(data: LadderLocaleData): ToolLocaleContent<LadderAngleReachUI> {
  const faqSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  };
  const howToSchema: WithContext<HowTo> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: data.title,
    description: data.description,
    step: data.howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
  };
  const appSchema: WithContext<SoftwareApplication> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: data.title,
    description: data.description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    inLanguage: data.language,
  };
  return {
    ...englishContent,
    slug: data.slug,
    title: data.title,
    description: data.description,
    faqTitle: data.faqTitle,
    faq: data.faq,
    bibliographyTitle: englishContent.bibliographyTitle,
    bibliography: ladderAngleReachCalculatorBibliography,
    howTo: data.howTo,
    seo: data.seo,
    schemas: [faqSchema, howToSchema, appSchema],
    ui: { ...englishContent.ui, ...data.ui } as LadderAngleReachUI,
  };
}
