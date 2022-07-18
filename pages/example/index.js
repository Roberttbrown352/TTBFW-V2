import Example from "../../books/example"
import TopMenu from "../../components/TopMenu"
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import theme from "../../themes/pathfinder"

export default function ExampleMain() {

  const [current, setCurrent] = useState("light")

  return (
    <ThemeProvider theme={current === "light" ? theme.light : theme.dark}>
      <TopMenu theme={{current, setCurrent}} />
      <Example />
    </ThemeProvider>
  )
}
