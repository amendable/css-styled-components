# CSS Styled components

This resolves `css` prop into [styled-components](https://www.styled-components.com).

## Usage

```jsx sandbox
import { render } from 'react-dom'
import Box, { AmendableProvider } from '@amendable/core'
import cssStyledComponents from '@amendable/css-styled-components'

render(
  <AmendableProvider
    resolvers={[
      cssStyledComponents(),
    ]}
  >
    <Box css={{ color: 'red' }}>
      Color resolved through styled components
    </Box>
  </AmendableProvider>
)
```
