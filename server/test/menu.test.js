import { test } from 'node:test';
import assert from 'node:assert/strict';
import { menu } from '../menu.js';

test('every menu item has a unique id', () => {
  const ids = menu.map((item) => item.id);
  assert.equal(new Set(ids).size, ids.length);
});
