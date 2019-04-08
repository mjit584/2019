
//Add your images, we'll set the path in the next step
var images = ['404-bts-1.JPG', '404-bts-2.JPG', '404-bts-3.JPG'];

//Build the img, then do a bit of maths to randomize load and append to a div. Add a touch off css to fade them badboys in all sexy like.

var randomImg = images[Math.floor(Math.random() * images.length)]
console.log('We picked you out a new photo', randomImg);
$('<img alt="This image is a behind-the-scenes exclusive of the Uprooted team" src="/images/404/' + randomImg + '">').appendTo('.error__container');