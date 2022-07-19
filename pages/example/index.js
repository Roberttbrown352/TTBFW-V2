import example from "../../books/example"
import TopMenu from "../../components/TopMenu"
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import pathfinderTheme from "../../themes/pathfinder"
import vampireTheme from "../../themes/vampireTheMasquerade"


export default function ExampleMain() {
  const {Example1, Example2} = example

  const [current, setCurrent] = useState("light")

  return (
    <>
      <ThemeProvider theme={current === "light" ? pathfinderTheme.light : pathfinderTheme.dark}>
        <TopMenu theme={{current, setCurrent}} />
        <Example1 />
      </ThemeProvider>
      <ThemeProvider theme={current === "light" ? vampireTheme.light : vampireTheme.dark}>
        <TopMenu theme={{current, setCurrent}} />
        <Example2 />
      </ThemeProvider>
    </>
  )
}
