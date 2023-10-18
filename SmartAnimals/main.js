let animalPictures = [
"https://as2.ftcdn.net/v2/jpg/04/94/16/81/1000_F_494168120_cGCMYdO3pysYaaYGRlWUmaxlWJVbP1wM.jpg", 
"https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210806141558-restricted-04b-truffles-the-kitty-glasses-kids.jpeg",
"https://www.looper.com/img/gallery/the-criminal-minds-actor-you-didnt-know-played-simon-in-alvin-and-the-chipmunks/intro-1642697851.jpg",
"https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/guthrie-ky-cow-with-sunglasses-enzwell-designs.jpg",
"https://media.npr.org/assets/img/2011/10/06/deer-glasses-cb9052df3f102390957a83f714a24e31a4ce138f-s1100-c50.jpg",
"https://kaykosdogshades.com/cdn/shop/products/image_4c0197c1-7216-46ee-ab46-6fab33778c22_2048x.jpg?v=1659209111",
"https://pbs.twimg.com/media/BnIw-djIYAABewr.jpg",
"https://t4.ftcdn.net/jpg/05/65/13/25/360_F_565132544_SjKzizYovbj5QKsulR4HixhYsLFkgnWJ.jpg",
"https://img.freepik.com/premium-photo/guinea-pig-with-glasses-bow-tie-that-says-word-guinea-pig-it_899894-32781.jpg",
"https://media.istockphoto.com/id/143177058/photo/chip-the-chimp.jpg?s=612x612&w=0&k=20&c=cqAotOYFhOh1TToLJEehGGb9wj69CKhqKrv10CxPvTg=",
"https://media.istockphoto.com/id/1164125477/photo/little-owl-wearing-glasses-athene-noctua-standing-on-a-white-background.jpg?s=612x612&w=0&k=20&c=9nJ-6FDDJfz27ueFXufVdQqAUEjSMf-9CaEvM3Sxw5E=",
"https://m.media-amazon.com/images/I/41d3LaSLcRL.jpg",
"https://st5.depositphotos.com/11036638/65385/i/450/depositphotos_653850210-stock-photo-macaw-parrot-glasses-sitting.jpg"
];
let animalSounds = [
    "WOOF!",
    "Meow",
    "Quack!",
    "ooh ooh AHH AHH",
    "squeak squeak!",
    "tsk tsk tsK TSK TSK",
    "reEEEEEEEEEE",
    "SQUAAAAAAAAAAAWWWK",
    "Moooooooooooo",
    "Polly want a cracker!"
];

const images = document.getElementsByTagName("img");

for(let i = 0; i < images.length; i++)
{
    const randomImage = Math.floor(Math.random() * animalPictures.length);
    images[i].src = animalPictures[randomImage];
}

const bigHeaders = document.getElementsByTagName("h1");
const mediumHeaders = document.getElementsByTagName("h2");
const smallHeaders = document.getElementsByTagName("h3");
const text = document.getElementsByTagName("p");

for(let i = 0; i < text.length; i++)
{
    const randomSound = Math.floor(Math.random() * animalSounds.length);
    if(bigHeaders[i]?.innerText)
    {
        bigHeaders[i].innerText = animalSounds[randomSound];
    }
    if(mediumHeaders[i]?.innerText)
    {
        mediumHeaders[i].innerText = animalSounds[randomSound];
    }
    if(smallHeaders[i]?.innerText)
    {
        smallHeaders[i].innerText = animalSounds[randomSound];
    }
    text[i].innerText = animalSounds[randomSound];
}