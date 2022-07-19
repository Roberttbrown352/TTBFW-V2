import Image from "../../../../components/Image";
import Header from "../../../../components/Header";
import Block from "../../../../components/Block";
import Paragraph from "../../../../components/Paragraph";
import TitleHeader from "../../components/TitleHeader";
import Decor from "../../components/Decor";
import AsideUL from "../../components/AsideUL";
import AsideLI from "../../components/AsideLI";
import AsideBlock from "../../components/AsideBlock";
import QuoteAuthor from "../../components/QuoteAuthor";
import EM from "../../components/EM";
import vtm1 from "../../../../public/images/vampireTheMasquerade/chapter1/vtm1.webp";
import vtm1Black from "../../../../public/images/vampireTheMasquerade/chapter1/vtm1-black.webp";
import vtm2 from "../../../../public/images/vampireTheMasquerade/chapter1/vtm2.webp";

export default function Section1({theme}){

  const TitleImage = () => {
    if(theme === 'light'){
      return (
        <Image src={vtm1Black} alt="Title Image" width="480px" height="180px"/>
      )
    }

    return (
      <Image src={vtm1} alt="Title Image" width="480px" height="180px"/>
    )
  }

  return(
    <>
      <TitleImage />
      <TitleHeader>
        <Decor>†</Decor>
        Companion
        <Decor>¢</Decor>
      </TitleHeader>
      <AsideBlock>
        <Header type="aside">Behold the Burgeoning Darkness</Header>
        <Paragraph>
          As a thank you to World of Darkness enthusiasts, this free supplement contains:
        </Paragraph>
        <AsideUL>
            <AsideLI>Clan descriptions for the doomed Ravnos, the hunted Salubri, and the covetous Tzimisce</AsideLI>
            <AsideLI>Rules for playing mortals and ghouls</AsideLI>
            <AsideLI>Extensive new traits to expand your chronicles, from Discipline powers to clan-specific Advantages to Merits and Flaws</AsideLI>
          </AsideUL>
      </AsideBlock>

      <Header>Introduction</Header>
      <Block type="header">
        I think — don’t you? — that there are some things one is not meant to know, and some one is meant not to know.
      </Block>
      <QuoteAuthor>— EDITH NESBIT, “HURST OF HURSTCOTE”</QuoteAuthor>

      <Header type="medium" id={"welcome-to-the-darkness..."}>Welcome to the darkness...</Header>
      <Paragraph>
        <strong><EM>The Vampire: The Masquerade Companion</EM></strong> is intended as a thank you to World of Darkness enthusiasts, provided as a complimentary gift to those who have long been with us or who have just joined us on their first steps into this world of shadows and secrets.
      </Paragraph>
      <Paragraph>
        This book provides a number of fresh options for players and Storytellers alike. From new clans to new Traits to a more expanded look at mortals and ghouls as players’ characters, the <strong><EM>Vampire: The Masquerade Companion</EM></strong> expands opportunities for characters to explore the World of Darkness.
      </Paragraph>
      <Paragraph>
        We hope you enjoy it!
      </Paragraph>
      <Image src={vtm2} alt="vtm2" />
    </>
  )
}
