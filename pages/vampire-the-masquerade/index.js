import Vampire from "../../books/vampireTheMasquerade"
import TopMenu from "../../components/TopMenu"
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import theme from "../../themes/vampireTheMasquerade"

export default function VampireMain() {

  const [current, setCurrent] = useState("dark")

  return (
    <ThemeProvider theme={current === "light" ? theme.light : theme.dark}>
      <TopMenu theme={{current, setCurrent}} />
      <Vampire />
    </ThemeProvider>
  )
}
