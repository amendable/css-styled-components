import React from 'react';
import renderer from 'react-test-renderer';
import cssResolver from '../src';

const resolver = cssResolver({});

test('returns correct component', () => {
  const resolved = resolver.resolve({ key: 'css', value: { backgroundColor: 'red' }, props: { component: 'div' } });
  const Component = resolved.component;
  const tree = renderer.create(<Component>Test</Component>).toJSON();

  expect(tree).toMatchSnapshot();
})
