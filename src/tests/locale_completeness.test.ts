import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import type { ToolLocaleContent } from '../types';

describe('Locale Completeness Validation', () => {
  ALL_TOOLS.forEach((tool) => {
    describe(`Tool: ${tool.entry.id}`, () => {
      Object.keys(tool.entry.i18n).forEach((locale) => {
        describe(`Locale: ${locale}`, () => {
          it('faqTitle should be defined when faq items exist', async () => {
            const loader = tool.entry.i18n[locale as keyof typeof tool.entry.i18n];
            const content = (await loader?.()) as ToolLocaleContent;

            if (content.faq.length > 0) {
              expect(
                content.faqTitle,
                `Tool "${tool.entry.id}" locale "${locale}" has ${content.faq.length} FAQ items but is missing faqTitle`,
              ).toBeTruthy();
            }
          });

          it('bibliography should be available (from independent file)', async () => {
            const loader = tool.entry.i18n[locale as keyof typeof tool.entry.i18n];
            const content = (await loader?.()) as ToolLocaleContent;

            expect(
              content.bibliography,
              `Tool "${tool.entry.id}" locale "${locale}" should have bibliography available`,
            ).toBeDefined();
          });
        });
      });
    });
  });

  it('all 16 tools registered', () => {
    expect(ALL_TOOLS.length).toBe(16);
  });
});

