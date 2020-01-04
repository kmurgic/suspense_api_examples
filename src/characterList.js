import luke from './images/luke.jpg';
import leia from './images/leia.jpg';
import han from './images/hanSolo.jpg';
import obiwan from './images/obiwan.jpg';
import yoda from './images/Yoda.png';
import vader from './images/vader.png';
import palpatine from './images/palpatine.jpeg';

const characterList = [
  {
    id: 0,
    name: 'Luke Skywalker',
    quote: "I'm Luke Skywalker. I'm here to rescue you.",
    img: luke,
    about: 'Luke Skywalker is the son of Jedi Knight Anakin Skywalker and Senator '
      + 'of Naboo, Padmé Amidala. He is taken in by his uncle and aunt, Owen and Beru '
      + "Lars, after the death of Padmé and Anakin's fall to the dark side. He is "
      + 'Force-sensitive and skilled with a lightsaber.'
  },
  {
    id: 1,
    name: 'Leia Organa',
    quote: "Help me, Obi-Wan Kenobi. You're my only hope.",
    img: leia,
    about: 'Leia Organa, a Force-sensitive human female, was a princess of Alderaan, '
      + 'a member of the Imperial Senate, a leader of the Alliance to Restore the '
      + 'Republic, a member of the Galactic Senate, and general of the Resistance.'
  },
  {
    id: 2,
    name: 'Han Solo',
    quote: 'You know, sometimes I amaze even myself.',
    img: han,
    about: 'Han Solo was a human male smuggler who became a leader in the Alliance to '
      + 'to Restore the Republic and an instrumental figure in the defeat of the '
      + 'Galactic Empire during the Galactic Civil War. He hailed from Corellia and '
      + 'became a smuggler in the employ of Jabba the Hutt, even completing the '
      + 'Kessel Run in just twelve parsecs with his prized ship, the Millennium '
      + 'Falcon.',
  },
  {
    id: 3,
    name: 'Obi-Wan Kenobi',
    quote: 'If you strike me down, I shall become more powerful than you can possibly imagine.',
    img: obiwan,
    about: 'Obi-Wan Kenobi was a Force-sensitive human male and a legendary Jedi '
      + 'Master and member of the Jedi High Council during the Fall of the Republic. '
      + 'During the Age of the Empire, he went by the alias of Ben Kenobi in order to '
      + 'hide from the regime that drove the Jedi to near extinction in the aftermath '
      + 'of the Clone Wars.',
  },
  {
    id: 4,
    name: 'Yoda',
    quote: 'Judge me by my size, do you?',
    img: yoda,
    about: 'Yoda, a Force-sensitive male being belonging to a mysterious species, '
      + 'was a legendary Jedi Master who witnessed the rise and fall of the Galactic '
      + 'Republic, followed by the rise of the Galactic Empire. Small in stature but '
      + 'revered for his wisdom and power, Yoda trained generations of Jedi, '
      + 'ultimately serving as the Grand Master of the Jedi Order.'
  },
  {
    id: 5,
    name: 'Vader',
    quote: 'I find your lack of faith disturbing.',
    img: vader,
    about: 'Once a heroic Jedi Knight, Darth Vader was seduced by the dark side of '
      + 'the Force, became a Sith Lord, and led the Empire’s eradication of the Jedi '
      + 'Order. He remained in service of the Emperor -- the evil Darth Sidious -- '
      + 'for decades, enforcing his Master’s will and seeking to crush the fledgling '
      + 'Rebel Alliance.'
  },
  {
    id: 6,
    name: 'Emperor Palpatine',
    quote: 'Soon the rebellion will be crushed and young Skywalker will be one of us.',
    img: palpatine,
    about: 'Emperor Palpatine was a Force-sensitive Human male who served as the last '
      + 'Supreme Chancellor of the Galactic Republic and the first Emperor of the '
      + 'Galactic Empire. A Dark Lord of the Sith in the Order of the Sith Lords, '
      + 'recorded by history as the most successful who had ever lived, his deeds '
      + 'resulted in overthrow the ancient Republic and the noble Jedi Order from '
      + 'within.'
  }
];

export default characterList;
