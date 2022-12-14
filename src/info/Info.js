import self from "../img/self.png"
import spridakunskapImage from "../img/spridakunskap.png"
import epolitikerImage from "../img/epolitiker.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Alexey",
    lastName: "Kalitin",
    initials: "React Node JS", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🕸',
            text: 'interested in web technologies'
        },
        {
            emoji: '🌎',
            text: 'based in the Taganrog'
        },
        {
            emoji: "💼",
            text: "SFEDU student"
        },
        {
            emoji: "📧",
            text: "kalitin.alecsey.01@gmail.com"
        }
    ],
    socials: [

// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Alexey. I study at Southern Federal University. During my studies, I participate in various events related to software development. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react','express', 'git','php', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs','reactjs','laravel' ]
        }
    ,
    hobbies: [
        {
            label: 'learning languages',
            emoji: '🈲'
        },
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'spiders',
            emoji: '🕷️'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'guitar',
            emoji: '🎸'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Spridakunskap",
            live: "https://spridakunskap.se", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            image: spridakunskapImage
        },
        {
            title: "Epolitiker",
            live: "https://epolitiker.no/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            image: epolitikerImage
        },

    ]
}