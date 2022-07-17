import Image from "../../../../components/Image";
import Header from "../../../../components/Header";
import Block from "../../../../components/Block"
import Paragraph from "../../../../components/Paragraph";
import pf4 from "../../../../public/images/pathfinder/chapter1/pf4.webp"

export default function Section3(){
  return (
    <>
      <Header id="basics-of-play" type="medium">Basics of Play</Header>
      <Paragraph>
        Before creating your first character or adventure, you should understand a number of basic concepts used in the game. New concepts are presented in bold to make them easy to find, but this chapter is only an introduction to the basics of play. The complete game rules are defined in later chapters, and the Glossary and Index in the Core Rulebook will help you find specific rules you need.
      </Paragraph>

      <Header id="defining-characters" type="small">Defining Characters</Header>
      <Paragraph>
        In Pathfinder, the players take on the role of <strong>player characters (PCs)</strong>, while the Game Master portrays <strong>nonplayer characters (NPCs)</strong> and <strong>monsters</strong>. While PCs and NPCs are both important to the story, they serve very different purposes in the game. PCs are the protagonists—the narrative is about them—while NPCs and monsters are allies, contacts, adversaries, and villains. That said, PCs, NPCs, and monsters share several characteristics.
      </Paragraph>
      <Paragraph>
        <strong>Level</strong> is one of the most important statistics of the game, as it conveys the approximate power and capabilities of every individual creature. PCs range in level from 1st, at the start of the character’s adventuring career, to 20th, the very height of power. As the characters overcome challenges, defeat foes, and complete adventures, they accumulate <strong>Experience Points (XP)</strong>. Every time a character amasses 1,000 XP, they go up a level, gaining new abilities so they can take on even greater challenges. A 1st-level PC might face off against a giant rat or a group of bandits, but at 20th level, that same character might be able to bring ruin to an entire city with a single spell.
      </Paragraph>
      <Paragraph>
        In addition to level, characters are defined by <strong>ability scores</strong>, which measure a character’s raw potential and are used to calculate most of their other statistics. There are six ability scores in the game. <strong>Strength</strong> represents a character’s physical might, while <strong>Dexterity</strong> represents agility and the ability to avoid danger. <strong>Constitution</strong> indicates a character’s overall health and well-being. <strong>Intelligence</strong> represents raw knowledge and problem-solving ability, while <strong>Wisdom</strong> measures a character’s insight and the ability to evaluate a situation. Finally, <strong>Charisma</strong> indicates charm, persuasiveness, and force of personality. Ability scores for ordinary folk range from as low as 3 to as high as 18, with 10 representing average human capabilities. High-level characters can have ability scores that range much higher than 18.
      </Paragraph>
      <Paragraph>
        An ability score that’s above the average increases your chance of success at tasks related to the ability score, while those below the average decrease your chance. This adjustment is called an <strong>ability modifier</strong>.
      </Paragraph>
      <Paragraph>
        Your player character is also defined by some key choices you make. The first choice is a PC’s <strong>ancestry</strong>, representing the character’s parents and heritage, such as human, elf, or goblin. Next up is the PC’s <strong>background</strong>, which describes their upbringing, from lowly street urchin to wealthy noble. Finally, and most importantly, a PC’s <strong>class</strong> defines the majority of their aptitudes and abilities, like a wizard’s command of powerful arcane spells or a druid’s power to transform into a fearsome beast!
      </Paragraph>
      <Paragraph>
        In addition to these key choices, player characters also have a number of <strong>feats</strong>—individual abilities selected during character creation and as the character increases in level. Every feat has a type to denote where its explanation can be found (for example, elf feats can be found in the elf ancestry) and its theme (wizard feats, for example, grant abilities that deal with spells). Finally, characters have <strong>skills</strong> that measure their ability to hide, swim, bargain, and perform other common tasks.
      </Paragraph>

      <Block type="aside">
        <Header type="aside">The World as a Participant</Header>
        <Paragraph>
          Aside from characters and monsters, the world of Pathfinder itself can be a force at the table and in the narrative. While the presence of the larger world can sometimes be an obvious hazard, such as when a powerful storm lashes the countryside, the world can also act in subtle, small ways. Traps and treasures are just as important in many tales as cunning beasts. To help you understand these game elements, many of them use the same characteristics as characters and monsters. For example, most environmental hazards have a level, which indicates how dangerous they are, and the level of a magic item gives you a sense of its overall power and impact on a story.
        </Paragraph>
      </Block>

      <Header id="creating-a-narrative" type="small">Creating a Narrative</Header>
      <Paragraph>
        Characters and their choices create the story of Pathfinder, but how they interact with each other and the world around them is governed by rules. So, while you might decide that your character undertakes an epic journey to overcome terrifying foes and make the world a safer place, your character’s chance of success is determined by their abilities, the choices you make, and the roll of the dice.
      </Paragraph>
      <Paragraph>
        The GM determines the premise and background of most adventures, although character histories and personalities certainly play a part. Once a game session begins, the players take turns describing what their characters attempt to do, while the GM determines the outcome, with the table working together toward a specific goal. The GM also describes the environment, other characters’ actions, and events. For example, the GM might announce that the characters’ hometown is under attack by marauding trolls. The characters might track the trolls to a nearby swamp—only to discover that the trolls were driven from their swamp by a fearsome dragon! The PCs then have the choice of taking on an entire tribe of trolls, the dragon, or both. Whatever they decide, their success depends on their choices and the die rolls they make during play.
      </Paragraph>
      <Paragraph>
        A single narrative—including the setup, plot, and conclusion—is called an <strong>adventure</strong>. A series of adventures creates an even larger narrative, called a <strong>campaign</strong>. An adventure might take several sessions to complete, whereas a campaign might take months or even years!
      </Paragraph>

      <Image src={pf4} alt="pf4" />
    </>
  );
}
