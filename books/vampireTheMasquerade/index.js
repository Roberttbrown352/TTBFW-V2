import Book from "../../components/Book"
import Page from "../../components/Page"
import Section1 from "./chapters/chapter1/section1"

export default function VamprieTheMasquerade({theme}){

  return(
    <Book>
      <Page>
        <Section1 theme={theme}/>
      </Page>
    </Book>
  )
}
