import React from 'react';
import { useCountLines } from 'use-count-lines';
import Masonry from 'react-masonry-css';
import './example.css';

export default {
  title: 'Example',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const texts = [
  'Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead. Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens.',
  'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.',
  'Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby.',
  'The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro.',
  'Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and infect, aere implent left four dead.',
  'In Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead historiarum. Golums, zombies unrelenting et Raimi fascinati beheading. Maleficia! Vel cemetery man a modern bursting eyeballs perhsaps morbi. A terrenti flesh contagium. Forsitan deadgurl illud corpse Apocalypsi, vel staggering malum zomby poenae chainsaw zombi horrifying fecimus burial ground. Indeflexus shotgun coup de poudre monstra per plateas currere. Fit de decay nostra carne undead. Poenitentiam violent zom biehig hway agite RE:dead pœnitentiam! Vivens mortua sunt apud nos night of the living dead. Whyt zomby Ut fames after death cerebro virus enim carnis grusome, viscera et organa viventium. Sicut spargit virus ad impetum, qui supersumus flesh eating. Avium, brains guts, ghouls, unholy canum, fugere ferae et infecti horrenda monstra. Videmus twenty-eight deformis pale, horrenda daemonum. Panduntur brains portae rotting inferi. Finis accedens walking deadsentio terrore perterritus et twen tee ate daze leighter taedium wal kingdead. The horror, monstra epidemic significant finem. Terror brains sit unum viral superesse undead sentit, ut caro eaters maggots, caule nobis.',
  'Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis. Romero morbo Congress amarus in auras. Nihil horum sagittis tincidunt, zombie slack-jawed gelida survival portenta. The unleashed virus est, et iam zombie mortui ambulabunt super terram. Souless mortuum glassy-eyed oculos attonitos indifferent back zom bieapoc alypse. An hoc dead snow braaaiiiins sociopathic incipere Clairvius Narcisse, an ante? Is bello mundi z?',
];

const Card = ({ children }) => {
  const { ref, ...info } = useCountLines();
  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        marginBottom: 30,
        marginLeft: 30,
        border: '1px solid black',
        borderRadius: 8,
        padding: 24,
      }}
    >
      <p style={{ marginTop: 0, color: '#030303d3' }} ref={ref}>
        {children}
      </p>
      <div>
        {Object.entries(info).map(([key, value]) => (
          <p
            style={{
              fontSize: 15,
              fontWeight: key === 'lines' ? 'bold' : 'normal',
              marginTop: 0,
              marginBottom: 2,
            }}
            key={key}
          >
            {key}: {value}
          </p>
        ))}
      </div>
    </div>
  );
};

export const example = () => (
  <Masonry
    breakpointCols={{ default: 3, 575: 1, 1200: 2, 1600: 4 }}
    className="masonry"
  >
    {texts.map((text) => (
      <Card key={text}>{text}</Card>
    ))}
  </Masonry>
);
