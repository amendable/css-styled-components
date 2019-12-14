# CSS Styled Components

This resolves `css` prop into [styled-components](https://www.styled-components.com).

## Usage

```jsx sandbox
import { render } from 'react-dom'
import Box, { AmendableProvider } from '@amendable/core'
import cssStyledComponents from '@amendable/css-styled-components'

const resolvers = [
  cssStyledComponents(),
]

render(
  <AmendableProvider resolvers={resolvers}>
    <Box css={{ color: 'red' }}>
      Color resolved through Styled Components
    </Box>
  </AmendableProvider>
)
```
