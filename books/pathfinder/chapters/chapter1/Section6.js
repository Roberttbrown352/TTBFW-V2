import Image from "../../../../components/Image";
import Header from "../../../../components/Header";
import Paragraph from "../../../../components/Paragraph";
import pf6 from "../../images/chapter1/pf6.webp"

export default function Section6(){
  return (
    <>
      <Header type="md" id="using-this-book">Using This Book</Header>
      <Paragraph>
        While this chapter is here to teach you the basics of Pathfinder, the rest of this rulebook serves as a reference manual during play, and it is organized to make finding the rule you need as easy as possible. Rules are grouped together in chapters, with the early chapters focusing on character creation. The last two chapters contain rules for GMs (see the <em>Core Rulebook</em>), with advice on how to run a game of Pathfinder and a rich array of treasure. The following is a summary of what you can expect to find in each chapter.
      </Paragraph>

      <Header type="sm" id="ch1-introduction">Chapter 1: Introduction</Header>
      <Paragraph>
        This introduction is designed to help you understand the basics of Pathfinder. This chapter also includes the rules for building and leveling up a character. The chapter ends with an example of building a 1st-level character.
      </Paragraph>

      <Header type="sm" id="ch2-ancestries-and-backgrounds">Chapter 2: Ancestries & Backgrounds</Header>
      <Paragraph>
        The rules for 4 of the most common ancestries in the Age of Lost Omens are in this chapter, including their ancestry feat options. Backgrounds are at the end of this chapter, along with a section about languages, as these are most often influenced by your choice of ancestry.
      </Paragraph>

      <Header type="sm" id="ch3-classes">Chapter 3: Classes</Header>
      <Paragraph>
        This chapter contains the rules for 4 of the 12 classes from the <em>Core Rulebook</em>. Each class entry includes guidelines on playing the class, rules for building and advancing a character of that class, sample builds, and all of the class feats available to members of that class. This chapter also includes rules for familiars, which can be acquired by the wizard class. At the end of this chapter are the rules for archetypes—special options available to characters as they increase in level. These rules allow a character to dabble in the abilities of another class or concept.
      </Paragraph>

      <Header type="sm" id="ch4-skills">Chapter 4: Skills</Header>
      <Paragraph>
        The rules for using skills are presented in this chapter, and they detail what a character can do with a given skill, based on that character’s proficiency rank. Ancestry, background, and class can define some of a character’s skill proficiencies, and each character can also select a few additional skills to reflect their personality and training.
      </Paragraph>

      <Header type="sm" id="ch5-feats">Chapter 5: Feats</Header>
      <Paragraph>
        As a character advances in level, they gain additional feats to represent their growing abilities. General feats and skill feats (which are a subset of general feats) are presented in this chapter.
      </Paragraph>

      <Header type="sm" id="ch6-equipment">Chapter 6: Equipment</Header>
      <Paragraph>
        Armor, weapons, and other gear can all be found in this chapter, along with the price for services, cost of living, and animals (such as horses, dogs, and pack animals).
      </Paragraph>

      <Header type="sm" id="ch7-spells">Chapter 7: Spells</Header>
      <Paragraph>
        This chapter starts with rules for casting spells, determining their effects, and getting rid of foes’ spells (called counteracting). After that, sample spell lists for the Arcane and Divine spellcasting traditions are included, making it easy to quickly find spells by their level. Next are rules for each spell, presented in alphabetical order. Following the spell descriptions are focus spells—special spells granted by specific class abilities and feats. While most spells appear on multiple spell lists, focus spells are granted only to members of a specific class and are grouped together by class for ease of reference.
      </Paragraph>

      <Header type="sm" id="ch8-religion-and-deities">Chapter 8: Religion & Deities</Header>
      <Paragraph>
        Characters who venerate a deity should look to this chapter to find the rules associated with their faith.
      </Paragraph>

      <Header type="sm" id="ch9-playing-the-game">Chapter 9: Playing the Game</Header>
      <Paragraph>
        This important chapter contains the universal rules needed to play Pathfinder, including rules for the various modes of play, the basic actions that every character can perform, the rules for combat, and the rules for death and dying. Every player should be familiar with this chapter, especially the GM.
      </Paragraph>

      <Header type="sm" id="ch10-character-wealth">Chapter 10: Character Wealth</Header>
      <Paragraph>
        This chapter includes rules for allocating treasure for characters who don't start at 1st level.
      </Paragraph>

      <Header type="sm" id="ch11-crafting-and-treasure">Chapter 11: Crafting & Treasure</Header>
      <Paragraph>
        The treasures characters find during their adventures take many forms, from gold and gemstones to powerful magical weapons. This chapter details guidelines for distributing treasure to characters, as well as descriptions of hundreds of magic items. This chapter also contains the rules for alchemical items.
      </Paragraph>

      <Header type="sm" id="conditions-appendix">Conditions Appendix</Header>
      <Paragraph>
        The back of this book has an appendix with the rules for all of the conditions that you will find in the game.
      </Paragraph>
      <Image src={pf6} alt="pf6" />
    </>
  );
}
