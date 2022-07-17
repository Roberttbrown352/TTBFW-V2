import { ThemeProvider } from "styled-components"
import theme from "../../themes/pathfinder"
import Book from "../../components/Book"
import Page from "../../components/Page"
import Chapters from "./chapters/"

export default function Pathfinder(){
  console.log(theme.light)
  return(
    <ThemeProvider theme={theme.light}>
      <Book>
        <Page>
          <Chapters />
        </Page>
      </Book>
    </ThemeProvider>
  )
}
