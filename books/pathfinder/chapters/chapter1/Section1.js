import Image from "../../../../components/Image";
import Header from "../../../../components/Header";
import Block from "../../../../components/Block";
import Paragraph from "../../../../components/Paragraph";
import pf1 from "../../images/chapter1/pf1.webp";
import pf2 from "../../images/chapter1/pf2.webp";

export default function Section1(){
  return(
    <>
      <Image src={pf1} alt="pf1" />
      <Block type="header">
        <Paragraph>
          With a haunting moan, shambling bodies rose up from the forgotten battlefield. Given foul unlife by the necromancy of the Whispering Tyrant, the corpses still wore the tattered raiment of their former lives. These crusaders had been the first to stand against the lich when he returned, and they were the first to fall in his rebirth.
        </Paragraph>
        <Paragraph>
          “Aroden is dead!” Valeros spat out the dead god’s name like a curse as he drew his sword and readied his battered shield. “He’s not coming back to save us this time.” Kyra and Merisiel shared his sentiment. The Whispering Tyrant was back, and it was up to them to return the lich to his grave.
        </Paragraph>
        <Paragraph>
          As Kyra strode up beside Valeros, blade in hand, she called out a prayer to her goddess. Sarenrae’s light would guide and fortify her against the coming darkness, but there would be no direct divine intervention in this war. Victory would be bought with the sweat and blood of mortals, and both the brave and the innocent would give their lives.
        </Paragraph>
        <Paragraph>
          Merisiel nodded to the others, a look of determination upon her face. Quickly scanning the horde, she found her first target and let fly a small blade. It sank to the hilt in the rotting eye socket of one of the dead crusaders, but while the foul creature staggered back, it did not fall. Unfazed, she drew another dagger and prepared to throw again.
        </Paragraph>
        <Paragraph>
          Provoked by the attack, the undead advanced as one, a wave of rotting flesh and clattering bone that descended on the heroes…
        </Paragraph>
      </Block>

      <Header id="chapter-1-introduction">Chapter 1: Introduction</Header>

      <Block type="header">
        <p>
          Pathfinder is a fantasy tabletop roleplaying game (RPG) where you and a group of friends gather to tell a tale of brave heroes and cunning villains in a world filled with terrifying monsters and amazing treasures. More importantly, Pathfinder is a game where your character’s choices determine how the story unfolds.
        </p>
      </Block>

      <Image src={pf2} alt="pf2" />
      <p>
        Pathfinder adventures take place in the Age of Lost Omens, a perilous fantasy world rife with ancient empires; sprawling city-states; and countless tombs, dungeons, and monster lairs packed with plunder. A Pathfinder character’s adventures might take them to forsaken underwater ruins, haunted gothic crypts, or magical universities in jungle cities. A world of endless adventure awaits!
      </p>
    </>
  )
}
