import Pathfinder from "../../books/pathfinder"
import TopMenu from "../../components/TopMenu"

import { ThemeProvider } from "styled-components"
import theme from "../../themes/pathfinder"

export default function PathfinderMain() {
  return (
    <ThemeProvider theme={theme.light}>
      <TopMenu />
      <Pathfinder />
    </ThemeProvider>
  )
}
