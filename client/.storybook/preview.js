import GlobalStyles from "../src/GlobalStyles/GlobalStyles"
import { MemoryRouter as Router } from "react-router"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <>
      <Router>
        <GlobalStyles />
        <Story />
      </Router>
    </>
  )
] 