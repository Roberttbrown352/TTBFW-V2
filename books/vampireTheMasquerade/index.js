import { ThemeProvider } from "styled-components"
import theme from "../../themes/vampireTheMasquerade"
import Book from "../../components/Book"
import Page from "../../components/Page"
import Section1 from "./chapters/chapter1/section1"

export default function VamprieTheMasquerade(){
  return(
    <ThemeProvider theme={theme.dark}>
    <Book>
        <Page>
          <Section1 />
        </Page>
      </Book>
  </ThemeProvider>
  )
}
