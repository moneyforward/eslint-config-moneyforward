// @ts-check
import essentials from './essentials.mjs';
import jsdoc from './jsdoc.mjs';
import next from './next.mjs';
import node from './node.mjs';
import react from './react.mjs';
import storybook from './storybook.mjs';
import testReact from './test/react.mjs';
import typescript from './typescript.mjs';

const test = {
  react: testReact,
};

export { essentials, jsdoc, next, node, react, storybook, test, typescript };
