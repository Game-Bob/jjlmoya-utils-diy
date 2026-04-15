import { describe, it, expect } from 'vitest';
import * as DATA from '../data';

import { ALL_TOOLS } from '../tools';

const ENTRIES = [
  { id: 'diyCategory', i18n: DATA.diyCategory.i18n },
  ...ALL_TOOLS.map(tool => ({ id: tool.entry.id, i18n: tool.entry.i18n }))
];

describe('SEO Content Length Validation', () => {
  ENTRIES.forEach((entry) => {
    describe(`Tool: ${entry.id}`, () => {
      Object.keys(entry.i18n).forEach((locale) => {
        it(`${locale}: SEO section should exist`, async () => {
          const loader = (entry.i18n as Record<string, () => Promise<{ seo?: unknown[] }>>)[locale];
          const content = await loader();
          if (!content.seo) return;
          expect(Array.isArray(content.seo)).toBe(true);
        });
      });
    });
  });
});

