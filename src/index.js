import styled from 'styled-components';

const defaultMatch = 'css';

export default ({ match = defaultMatch } = {}) => ({
  match,
  resolve: ({ key, value, props: { component = 'div' } }) => ({
    component: styled(component)(value),
  }),
});
