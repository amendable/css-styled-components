import styled from 'styled-components'
const defaultMatch = 'css'

export default ({ colors = {}, match = defaultMatch }) => ({
  match,
  resolve: ({
    key,
    value,
    props: {
      component,
    },
  }) => ({
    component: styled(component)(value)
  }),
})
