import Pathfinder from "../../books/pathfinder"
import navItems from "../../books/pathfinder/navItems"
import TopMenu from "../../components/TopMenu"
import SideNav from "../../components/SideNav"
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import theme from "../../themes/pathfinder"

export default function PathfinderMain() {

  const [current, setCurrent] = useState("light")

  return (
    <ThemeProvider theme={current === "light" ? theme.light : theme.dark}>
      <TopMenu theme={{current, setCurrent}} />
      <SideNav title={"Pathfinder Primer"} items={navItems}/>
      <Pathfinder />
    </ThemeProvider>
  )
}
