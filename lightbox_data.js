"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Image List

      Filename:lightbox_data.js
*/

// Title of the slideshow
let lightboxTitle = "Exploration of Space";

// Names of the image files shown in the slideshow
let imgFiles = ["photo01.jpg", "photo02.jpg", "photo03.jpg", "photo04.jpg",
                "photo05.jpg", "photo06.jpg", "photo07.jpg", "photo08.jpg",
                "photo09.jpg", "photo10.jpg", "photo11.jpg", "photo12.jpg"]

// Captions associated with each image
let imgCaptions = new Array(12);
imgCaptions[0]="The International Space Station (Astronauts from various countries conduct research here).";
imgCaptions[1]="Neil Armstrong was the first man on the moon and Buzz Aldrin was his co-pilot."; 
imgCaptions[2]="The Mars Rover Curiosity teaches us more about the red planet every day"; 
imgCaptions[3]="The Hubble Space Telescope has let us explore space by taking pictures of objects that are up to 10-15 billion lightyears away!"; 
imgCaptions[4]="Apollo 11 was the space ship that took the first man to the moon.";
imgCaptions[5]="Psyche is a mission that will travel to a planet core that has cooled and turned into an asteroid. This could tell us much more about our own planet.";
imgCaptions[6]="SpaceX is the first privatized company to successfully send a space ship into space.";
imgCaptions[7]="Sputnik was launched by the USSR and was the first satelite sent into space.";
imgCaptions[8]="Discovery was the space shuttle with the most successful space flights.";
imgCaptions[9]="This picture may not look like much but it is the first picture of a black hole which were only theorized before this picture!";
imgCaptions[10]="Yuri Gagarin was the first man in space and he completed one orbit of the earth which lasted 108 minutes.";
imgCaptions[11]="Nasa is planning on sending new astonauts to the moon and this is the artemis 2 spacecraft where the astronauts will complete a flyby of the moon to set up future moon landings.";

// Count of images in the slideshow
let imgCount = imgFiles.length;
