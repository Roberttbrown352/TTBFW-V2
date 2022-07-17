import Image from "../../../../components/Image";
import Header from "../../../../components/Header";
import Paragraph from "../../../../components/Paragraph";
import pf5 from "../../../../public/images/pathfinder/chapter1/pf5.webp"

export default function Section4(){
  return (
    <>
      <Header id="playing-the-game" type="medium">Playing the Game</Header>
      <Paragraph>
        In a Pathfinder game, three modes of play determine the pacing of each scene in the story. Most of your character’s time is spent in <strong>exploration</strong>, uncovering mysteries, solving problems, and interacting with other characters. The Age of Lost Omens abounds with danger, however, and characters often find themselves in an <strong>encounter</strong>, fighting savage beasts and terrifying monsters. Finally, time moves quickly when the characters enjoy <strong>downtime</strong>, a respite from the world’s troubles and a chance to rest and train for future expeditions. Throughout an adventure, game play moves between these three modes many times, as needed for the story. The more you play the game, the more you’ll see that each mode has its own play style, but moving from mode to mode has few hard boundaries.
      </Paragraph>
      <Paragraph>
        During the game, your character will face situations where the outcome is uncertain. A character might need to climb a sheer cliff, track down a wounded chimera, or sneak past a sleeping dragon, all of which are dangerous tasks with a price for failure. In such cases, the acting character (or characters) will be asked to attempt a <strong>check</strong> to determine whether or not they succeed. A check is usually made by rolling a single 20-sided die (a d20) and adding a number based on the relevant ability. In such cases, rolling high is always good.
      </Paragraph>
      <Paragraph>
        Once a check is rolled, the GM compares the result to a target number called the <strong>difficulty class (DC)</strong> to determine the outcome. If the result of the check is equal to or greater than the DC, the check is successful. If it is less, the check is a failure. Beating the DC by 10 or more is referred to as a <strong>critical success</strong>, which usually grants an especially positive outcome. Similarly, failing the check by 10 or more is a <strong>critical failure</strong> (sometimes called a fumble). This sometimes results in additional negative effects. You also often score a critical success by rolling a 20 on the die when attempting a check (before adding anything). Likewise, rolling a 1 on the die when attempting a check often results in a critical failure. Note that not all checks have a special effect on a critical success or critical failure and such results should be treated just like an ordinary success or failure instead.
      </Paragraph>
      <Paragraph>
        For example, in pursuit of the wounded chimera, your character might find the path blocked by a fast-moving river. You decide to swim across, but the GM declares this a dangerous task and asks you to roll an Athletics skill check (since swimming is covered by the Athletics skill). On your character sheet, you see that your character has a +8 modifier for such checks. Rolling the d20, you get an 18, for a total of 26. The GM compares this to the DC (which was 16) and finds that you got a critical success (since the result exceeded the DC by 10). Your character swims quickly across the river and continues the pursuit, drenched but unharmed. Had you gotten a result less than 26 but equal to or greater than 16, your character would have made it halfway across the river. Had your result been less than 16, your character might have been swept downriver or, worse, been pulled under the current and begun to drown!
      </Paragraph>
      <Paragraph>
        Checks like this are the heart of the game and are rolled all the time, in every mode of play, to determine the outcome of tasks. While the roll of the die is critical, the statistic you add to the roll (called a <strong>modifier</strong>) often makes the difference between success and failure. Every character is made up of many such statistics governing what the character is good at, each consisting of a relevant ability modifier plus a <strong>proficiency</strong> bonus, and sometimes modified further by other factors, such as bonuses or penalties from gear, spells, feats, magic items, and other special circumstances.
      </Paragraph>
      <Paragraph>
        Proficiency is a simple way of assessing your character’s general level of training and aptitude for a given task. It is broken into five different ranks: <strong>untrained</strong>, <strong>trained</strong>, <strong>expert</strong>, <strong>master</strong>, and <strong>legendary</strong>. Each rank grants a different proficiency bonus. If you’re untrained at a statistic, your proficiency bonus is +0—you must rely solely on the raw potential of your ability modifier. If your proficiency rank for a statistic is trained, expert, master, and legendary, your bonus equals your character’s level plus another number based on the rank (2, 4, 6, and 8, respectively). Proficiency ranks are part of almost every statistic in the game.
      </Paragraph>

      <Header id="exploration" type="small">Exploration</Header>
      <Paragraph>
        Most of the time, your character will explore the world, interact with characters, travel from place to place, and overcome challenges. This is called exploration. Game play is relatively free-form during exploration, with players responding to the narrative whenever they have an idea of what to do next. Leaving town via horseback, following the trail of a marauding orc tribe, avoiding the tribe’s scouts, and convincing a local hunter to help in an upcoming fight are all examples of things that might occur during exploration.
      </Paragraph>
      <Paragraph>
        Throughout this mode of play, the GM asks the players what their characters are doing as they explore. This is important in case a conflict arises. If combat breaks out, the tasks the PCs undertook while exploring might give them an edge or otherwise inform how the combat begins.
      </Paragraph>

      <Header id="encounters" type="small">Encounters</Header>
      <Paragraph>
        In the course of your adventures, there will be times when a simple skill check is not enough to resolve a challenge—when fearsome monsters stand in your character’s way and the only choice is to do battle. In Pathfinder, this is called an encounter. Encounters usually involve combat, but they can also be used in situations where timing is critical, such as during a chase or when dodging hazards.
      </Paragraph>
      <Paragraph>
        While exploration is handled in a free-form manner, encounters are more structured. The players and GM roll <strong>initiative</strong> to determine who acts in what order. The encounter occurs over a number of <strong>rounds</strong>, each of which is equal to about 6 seconds of time in the world of the game. During a round, each participant takes a <strong>turn</strong>. When it’s your turn to act, you can use up to three <strong>actions</strong>. Most simple things, such as drawing a weapon, moving a short distance, opening a door, or swinging a sword, use a single action to perform. There are also <strong>activities</strong> that use more than a single action to perform; these are often special abilities from your character’s class and feats. One common activity in the game is casting a spell, which usually uses two actions.
      </Paragraph>
      <Paragraph>
        <strong>Free actions</strong>, such as dropping an object, don’t count toward the three actions you can take on your turn. Finally, each character can use up to one <strong>reaction</strong> during a round. This special type of action can be used even when it’s not your turn, but only in response to certain events, and only if you have an ability that allows it. Rogues, for example, can select a feat that lets them use their reaction to dodge an incoming attack.
      </Paragraph>
      <Paragraph>
        Attacking another creature is one of the most common actions in combat, and is done by using the <strong>Strike action</strong>. This requires an attack roll—a kind of check made against the <strong>Armor Class (AC)</strong> of the creature you’re attacking. Strikes can be made using weapons, spells, or even parts of a creature’s body, like a fist, claw, or tail. You add a modifier to this roll based on your proficiency rank with the type of attack you’re using, your ability scores, and any other bonuses or penalties based on the situation. The target’s AC is calculated using their proficiency rank in the armor they’re wearing and their Dexterity modifier. An attack deals damage if it hits, and rolling a critical success results in the attack dealing double damage!
      </Paragraph>
      <Paragraph>
        You can use more than one Strike action on your turn, but each additional attack after the first becomes less accurate. This is reflected by a <strong>multiple attack penalty</strong> that starts at –5 on the second attack, but increases to –10 on the third. There are many ways to reduce this penalty, and it resets at the end of your turn.
      </Paragraph>
      <Paragraph>
        If your character finds themself the target of a magical lightning bolt or the freezing breath of a fearsome white dragon, you will be called on to attempt a <strong>saving throw</strong>, representing your character’s ability to avoid danger or otherwise withstand an assault to their mind or body. A saving throw is a check attempted against the DC of the spell or special ability targeting your character. There are three types of saving throws, and a character’s proficiency in each says a great deal about what they can endure. A <strong>Fortitude</strong> saving throw is used when your character’s health or vitality is under attack, such as from poison or disease. A <strong>Reflex</strong> saving throw is called for when your character must dodge away from danger, usually something that affects a large area, such as the scorching blast of a fireball spell. Finally, a <strong>Will</strong> saving throw is often your defense against spells and effects that target your character’s mind, such as a charm or confusion spell. For all saving throws, a success lessens the harmful effect, and scoring a critical success usually means your character escapes unscathed.
      </Paragraph>
      <Paragraph>
        Attacks, spells, hazards, and special abilities frequently either deal <strong>damage</strong> to a character or impose one or more <strong>conditions</strong>—and sometimes both. Damage is subtracted from a creature’s <strong>Hit Points (HP)</strong>—a measure of health—and when a creature is reduced to 0 HP, it falls unconscious and may die! A combat encounter typically lasts until one side has been defeated, and while this can mean retreat or surrender, it most often happens because one side is dead or dying. Conditions can hinder a creature for a time, limiting the actions they can use and applying penalties to future checks. Some conditions are even permanent, requiring a character to seek out powerful magic to undo their effects.
      </Paragraph>

      <Image src={pf5} alt="pf5" />

      <Header id="downtime" type="small">Downtime</Header>
      <Paragraph>
        Characters don’t spend every waking moment adventuring. Instead, they recover from wounds, plan future conquests, or pursue a trade. In Pathfinder, this is called downtime, and it allows time to pass quickly while characters work toward long-term tasks or objectives. Most characters can practice a trade in downtime, earning a few coins, but those with the right skills can instead spend time crafting, creating new gear or even magic items. Characters can also use downtime to retrain, replacing one character choice with another to reflect their evolving priorities. They might also research a problem, learn new spells, or even run a business or kingdom!
      </Paragraph>

      <Header id="key-terms" type="small">Key Terms</Header>
      <Paragraph>
        There are a number of important terms that you’ll need to know as you create your first character or adventure. Some of the most important terms mentioned in previous sections are also included here for reference.
      </Paragraph>

      <Header id="ability-score" type="ability">Ability Score</Header>
      <Paragraph>
        Each creature has six ability scores: Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma. These scores represent a creature’s raw potential and basic attributes. The higher the score, the greater the creature’s potential in that ability. Ability scores are described in full later in this chapter.
      </Paragraph>

      <Header id="alignment" type="ability">Alignment</Header>
      <Paragraph>
        Alignment represents a creature’s fundamental moral and ethical attitude.
      </Paragraph>

      <Header id="ancestry" type="ability">Ancestry</Header>
      <Paragraph>
        An ancestry is the broad family of people that a character belongs to. Ancestry determines a character’s starting Hit Points, languages, senses, and Speed, and it grants access to ancestry feats. Ancestries can be found in Chapter 2.
      </Paragraph>

      <Header id="armor-class" type="ability">Armor Class (AC)</Header>
      <Paragraph>
        All creatures in the game have an Armor Class. This score represents how hard it is to hit and damage a creature. It serves as the Difficulty Class for hitting a creature with an attack.
      </Paragraph>

      <Header id="attack" type="ability">Attack</Header>
      <Paragraph>
        When a creature tries to harm another creature, it makes a Strike or uses some other attack action. Most attacks are Strikes made with a weapon, but a character might Strike with their fist, grapple or shove with their hands, or attack with a spell.
      </Paragraph>

      <Header id="background" type="ability">Background</Header>
      <Paragraph>
        A background represents what a character experienced before they took up the life of an adventurer. Each background grants a feat and training in one or more skills. You can read more about backgrounds in Chapter 2.
      </Paragraph>

      <Header id="bonuses-and-penalties" type="ability">Bonuses and Penalties</Header>
      <Paragraph>
        Bonuses and penalties apply to checks and certain statistics. There are several types of bonuses and penalties. If you have more than one bonus of the same type, you use only the highest bonus. Likewise, you use only the worst penalty of each type.
      </Paragraph>

      <Header id="class" type="ability">Class</Header>
      <Paragraph>
        A class represents the adventuring profession chosen by a character. A character’s class determines most of their proficiencies, grants the character Hit Points each time they gain a new level, and gives access to a set of class feats. Classes appear in Chapter 3.
      </Paragraph>

      <Header id="condition" type="ability">Condition</Header>
      <Paragraph>
        An ongoing effect that changes how a character can act, or that alters some of their statistics, is called a condition. The rules for the basic conditions used in the game can be found in the Conditions Appendix at the back of this book.
      </Paragraph>

      <Header id="currency" type="ability">Currency</Header>
      <Paragraph>
        The most common currencies in the game are gold pieces (gp) and silver pieces (sp). One gp is worth 10 sp. In addition, 1 sp is worth 10 copper pieces (cp), and 10 gp are worth 1 platinum piece (pp). Characters begin play with 15 gp (or 150 sp) to spend on equipment.
      </Paragraph>

      <Header id="feat" type="ability">Feat</Header>
      <Paragraph>
        A feat is an ability you can select for your character due to their ancestry, background, class, general training, or skill training. Some feats grant the ability to use special actions.
      </Paragraph>

      <Header id="game-master" type="ability">Game Master (GM)</Header>
      <Paragraph>
        The Game Master is the player who adjudicates the rules and narrates the various elements of the Pathfinder story and world that the other players explore.
      </Paragraph>

      <Header id="golarion" type="ability">Golarion</Header>
      <Paragraph>
        Pathfinder is set on the planet Golarion during the Age of Lost Omens. It is an ancient world with a rich diversity of people and cultures, exciting locations to explore, and deadly villains. More information on the Age of Lost Omens, the world of Golarion, and its deities can be found in Chapter 8.
      </Paragraph>

      <Header id="hit-points" type="ability">Hit Points</Header>
      <Paragraph>
        Hit Points represent the amount of punishment a creature can take before it falls unconscious and begins dying. Damage decreases Hit Points on a 1-to-1 basis, while healing restores Hit Points at the same rate.
      </Paragraph>

      <Header id="initiative" type="ability">Initiative</Header>
      <Paragraph>
        At the start of an encounter, all creatures involved roll for initiative to determine the order in which they act. The higher the result of its roll, the earlier a creature gets to act. Initiative and combat are described in Chapter 9.
      </Paragraph>

      <Header id="level" type="ability">Level</Header>
      <Paragraph>
        A level is a number that measures something’s overall power. Player characters have a level, ranging from 1st to 20th, representing their level of experience. Monsters, NPCs, hazards, diseases, and poisons have levels ranging from –1 to 30 that measure the danger they pose. An item’s level, usually within the range of 0 to 20 but sometimes higher, indicates its power and suitability as treasure.
      </Paragraph>
      <Paragraph>
        Spells have levels ranging from 1st to 10th, which measure their power; characters and monsters can usually cast only a certain number of spells of any given level.
      </Paragraph>

      <Header id="nonplayer-character" type="ability">Nonplayer Character (NPC)</Header>
      <Paragraph>
        A nonplayer character, controlled by the GM, interacts with players and helps advance the story.
      </Paragraph>

      <Header id="perception" type="ability">Perception</Header>
      <Paragraph>
        Perception measures your character’s ability to notice hidden objects or unusual situations, and it usually determines how quickly the character springs into action in combat. It is described in full in Chapter 9.
      </Paragraph>

      <Header id="player-character" type="ability">Player Character (PC)</Header>
      <Paragraph>
        This is a character created and controlled by a player.
      </Paragraph>

      <Header id="proficiency" type="ability">Proficiency</Header>
      <Paragraph>
        Proficiency is a system that measures a character’s aptitude at a specific task or quality, and it has five ranks: untrained, trained, expert, master, and legendary. Proficiency gives you a bonus that’s added when determining the following modifiers and statistics: AC, attack rolls, Perception, saving throws, skills, and the effectiveness of spells. If you’re untrained, your proficiency bonus is +0. If you’re trained, expert, master, or legendary, your proficiency bonus equals your level plus 2, 4, 6, or 8, respectively.
      </Paragraph>

      <Header id="rarity" type="ability">Rarity</Header>
      <Paragraph>
        Some elements of the game have a rarity to denote how often they’re encountered in the game world. Rarity primarily applies to equipment and magic items, but spells, feats, and other rules elements also have a rarity. If no rarity appears in the traits of an item, spell, or other game element, it is of common rarity. Uncommon items are available only to those who have special training, grew up in a certain culture, or come from a particular part of the world. Rare items are almost impossible to find and are usually given out only by the GM, while unique ones are literally one-of-a-kind in the game. The GM might alter the way rarity works or change the rarity of individual items to suit the story they want to tell.
      </Paragraph>

      <Header id="roleplaying" type="ability">Roleplaying</Header>
      <Paragraph>
        Describing a character’s actions, often while acting from the perspective of the character, is called roleplaying. When a player speaks or describes action from the perspective of a character, they are “in character.”
      </Paragraph>

      <Header id="round" type="ability">Round</Header>
      <Paragraph>
        A round is a period of time during an encounter in which all participants get a chance to act. A round represents approximately 6 seconds in game time.
      </Paragraph>

      <Header id="saving-throw" type="ability">Saving Throw (Save)</Header>
      <Paragraph>
        When a creature is subject to a dangerous effect that must be avoided, it attempts a saving throw to mitigate the effect. You attempt a saving throw automatically—you don’t have to use an action or a reaction. Unlike for most checks, the character who isn’t acting rolls the d20 for a saving throw, and the creature who is acting provides the DC.
      </Paragraph>
      <Paragraph>
        There are three types of saving throws: Fortitude (to resist diseases, poisons, and physical effects), Reflex (to evade effects a character could quickly dodge), and Will (to resist effects that target the mind and personality).
      </Paragraph>

      <Header id="skill" type="ability">Skill</Header>
      <Paragraph>
        A skill represents a creature’s ability to perform certain tasks that require instruction or practice. Skills are fully described in Chapter 4. Each skill includes ways anyone can use that skill even if untrained, as well as uses that require a character to be trained in the skill.
      </Paragraph>

      <Header id="speed" type="ability">Speed</Header>
      <Paragraph>
        Speed is the distance a character can move using a single action, measured in feet.
      </Paragraph>

      <Header id="spell" type="ability">Spell</Header>
      <Paragraph>
        Spells are magical effects created by performing mystical incantations and gestures known only to those with special training or inborn abilities. Casting a spell is an activity that usually uses two actions. Each spell specifies what it targets, the actions needed to cast it, its effects, and how it can be resisted. If a class grants spells, the basics of that ability are provided in the class description in Chapter 3, while the spells themselves are detailed in Chapter 7.
      </Paragraph>

      <Header id="trait" type="ability">Trait</Header>
      <Paragraph>
        A trait is a keyword that conveys additional information about a rules element, such as a school of magic or rarity. Often, a trait indicates how other rules interact with an ability, creature, item, or another rules element that has that trait. All the traits used in this source appear in the Glossary and Index of the <em>Core Rulebook</em>.
      </Paragraph>

      <Header id="turn" type="ability">Turn</Header>
      <Paragraph>
        During the course of a round, each creature takes a single turn according to initiative. A creature can typically use up to three actions during its turn.
      </Paragraph>
    </>
  );
}
