
//Add your images, we'll set the path in the next step
var images = ['404-bts-1.JPG', '404-bts-2.JPG', '404-bts-3.JPG'];
var quotes = [
  'Brooke to Alex: "We talked about this! Are you a 12-year-old boy?"',
  'Brooke: "It\'s greener than I thoguht Texas would be."',
  'Maria "fixer": These kind of stories aren\'t easy. If it\'s an easy story, then it\'s not a good one.',
  'Diane: "Dogs and fries..." Zayhra: "That\'s pretty much my life. Diane: and Colombia Zayhra: BOGOTA!"',
  'Alex: "Who the f*** took my fry?!?" Maria: "It\'s not a fry, it\'s YUCA!"',
  'Everyone (but mostly Zayhra): "F*** your trail mix, Haley."',
  'Pat: "Y\'all are doing a great job of staying alive." *everyone claps*',
  'Diane: "I write about town council meetings, not this s***." *in tears*',
  'Zayhra: "I don\'t like Venezuelan empanadas." Patty: "It\'s okay, you have a right to be wrong."',
  'Diane: "You wanna eat that arepa right there?" *points to the street vendor outside taxi* Haley: "...Campus Health would kill me."',
  'Diane: "My goal at the end of this trip is to feel comfortable enough to say, \'I f*** with you\' to Paul."',
  'Paul: "If you want to describe me as a graham cracker, go ahead."',
  'Lyric: "This trip has been like the fyre festival."',
  'Paul: My skin color is arepa, toasted...delicious and warm."',
  'Paul: "There are no real heroes. People are complex, that\'s what makes them interesting."',
  'Chris: "Everything\'s broken today." Paul: "So is my soul."',
  'Diane: "My [cell] connection hasn\'t been stable here and neither has my experience."',
  'Chris: "Freelancing is just a euphemism for being unemployed."',
  'Diane: "Eat lunch. Take a nap. Talk s***."',
  'Nash: "Chapel Hill is like a bubble. That\'s why I always run away..."',
  'Catie: "Do you have any hand sanitizer?" Haley: "Yes." Catie: "Oh wait, jk, I might wanna pet more dogs."',
  'Martin: "I\'m not drunk. I\'m happy."',
  'Landon: "PAT!! Will you shotgun a beer with me?!?" Pat: "No..."',
  'Jason: "Where y\'all wanna go?" Patsy: "IDK, somewhere I can shake my booty."',
  'Patsy: "Follow your heart and not Pat."',
  'Diane: "I feel like we need a spring break from this spring break."',
  'Ashton: "I love manspreading."',
  'Chris: "If it was actually raining men, \'Hallelujah\' would be my last reaction."',
  '*at the Panama airport chaos* Peggy: "I\'ve never wanted to see the skyline of Newark, NJ more."',
  '*watching safety instruction video on plane* Nash: "I feel like this just gives you false hope."',
  'Alex: "I\'d like to file a complaint for emotional trauma from start to finish."',
  'Peggy: "They took my Colombian honey, but they can never take my spirit!"'
]

//Build the img, then do a bit of maths to randomize load and append to a div. Add a touch off css to fade them badboys in all sexy like.

var randomImg = images[Math.floor(Math.random() * images.length)];
var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log('We picked you out a new photo', randomImg);
console.log('We picked you out a new quote', randomQuote);
$('<img alt="This image is a behind-the-scenes exclusive of the Uprooted team" src="https://brookenf.github.io/uprooted-mejo584/images/404/' + randomImg + '">').appendTo('.error__container');

$(`<p>${randomQuote}</p>`).appendTo('.error__text');