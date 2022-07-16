import { ThemeProvider } from "styled-components"
import theme from "../../themes/pathfinder"
import Book from "../../components/Book"
import Page from "../../components/Page"

import Block from "../../components/Block"
import Header from "../../components/Header"
import Italic from "../../components/Italic"
import Paragraph from "../../components/Paragraph"
import Image from "../../components/Image"

import pf1 from "./images/chapter1/pf1.webp"
import pf3 from "./images/chapter1/pf3.webp"

export default function Pathfinder(){
  return(
    <ThemeProvider theme={theme}>
      <Book>
        <Page>
          <Block type="header">Header Block</Block>
          <Block type="aside">
            <Header type="aside">Aside Header</Header>
            Aside Block
          </Block>
          <Header type="ability">Ability Header</Header>
          <Header type="large">Large Header</Header>
          <Header type="medium">Medium Header</Header>
          <Header type="small">Small Header</Header>
          <Italic>Italic Text</Italic>
          <Paragraph>Paragraph Text</Paragraph>
          <Image type="center" src={pf1} alt="pf1" />
          <Block type="aside">
            <Header type="block">Dice</Header>
            <Image type="right" src={pf3} alt="pf3" width="230px"/>
            <Paragraph>
              Pathfinder requires a set of polyhedral dice. Each die has a different number of sides—four, six, eight, or more. When these dice are mentioned in the text, they’re indicated by a “d” followed by the number of sides on the die. Pathfinder uses 4-sided dice (or d4), 6-sided dice (d6), 8-sided dice (d8), 10-sided dice (d10), 12-sided dice (d12), and 20-sided dice (d20). If you need to roll multiple dice, a number before the “d” tells you how many. For example, “4d6” means you should roll four dice, all 6-sided. If a rule asks for d%, you generate a number from 1 to 100 by rolling two 10-sided dice, treating one as the tens place and the other as the ones place.
            </Paragraph>
          </Block>
        </Page>
      </Book>
    </ThemeProvider>
  )
}
