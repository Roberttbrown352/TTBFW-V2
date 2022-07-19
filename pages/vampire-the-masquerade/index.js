import Vampire from "../../books/vampireTheMasquerade"
import navItems from "../../books/vampireTheMasquerade/navitems"
import TopMenu from "../../components/TopMenu"
import SideNav from "../../components/SideNav"
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import theme from "../../themes/vampireTheMasquerade"

export default function VampireMain() {

  const [current, setCurrent] = useState("dark")

  return (
    <ThemeProvider theme={current === "light" ? theme.light : theme.dark}>
      <TopMenu theme={{current, setCurrent}} />
      <SideNav title={"Vampire the Masquerade Companion"} items={navItems}/>
      <Vampire theme={current}/>
    </ThemeProvider>
  )
}
