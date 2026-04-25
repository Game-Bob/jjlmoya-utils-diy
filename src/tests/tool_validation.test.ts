import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { diyCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 15 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(15);
    });

    it('diyCategory should be defined', () => {
      expect(diyCategory).toBeDefined();
      expect(diyCategory.i18n).toBeDefined();
    });
  });
});

