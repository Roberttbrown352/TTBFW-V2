import { ThemeProvider } from "styled-components"
import theme from "../../themes/pathfinder"
import Book from "../../components/Book"
import Page from "../../components/Page"
import Chapters from "./chapters/"

export default function Pathfinder(){
  return(
    <ThemeProvider theme={theme}>
      <Book>
        <Page>
          <Chapters />
        </Page>
      </Book>
    </ThemeProvider>
  )
}
