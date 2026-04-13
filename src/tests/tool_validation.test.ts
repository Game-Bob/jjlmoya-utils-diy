import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { diyCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 6 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(6);
    });

    it('diyCategory should be defined', () => {
      expect(diyCategory).toBeDefined();
      expect(diyCategory.i18n).toBeDefined();
    });
  });
});

