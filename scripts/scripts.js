
const textArea = document.getElementById("info");

// Fish Const
const eel = document.getElementById('eel');
const bonito = document.getElementById('bonito');
const shark = document.getElementById('shark');
const bluefinTuna = document.getElementById('bluefinTuna');
const cusk = document.getElementById('cusk');
const monkfish = document.getElementById('monkfish');
const smelt = document.getElementById('smelt');

// Crust Const
const blueCrab = document.getElementById('blueCrab');
const americanLobster = document.getElementById('americanLobster');
const cancerCrab = document.getElementById('cancerCrab');


// Echi Const
const seaCucumber = document.getElementById('seaCucumber');
const brittleStar = document.getElementById('brittleStar');
const seaUrchin = document.getElementById('seaUrchin');

const closeBox = document.getElementById('closeBox');
const showInfo = document.getElementById('showInfo');
const showName = document.getElementById('showName');
const showPic = document.getElementById('showPic');
var closePopup = document.getElementById("popupclose");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");
var button = document.getElementById("button");


// Fish Event Listeners
shark.addEventListener('click', function() {
    logAniimal(shark.id);
});

eel.addEventListener('click', function() {
    logAniimal(eel.id);
});

bonito.addEventListener('click', function() {
  logAniimal(bonito.id);
});

bluefinTuna.addEventListener('click', function() {
  logAniimal(bluefinTuna.id);
});

cusk.addEventListener('click', function() {
  logAniimal(cusk.id);
});

monkfish.addEventListener('click', function() {
  logAniimal(monkfish.id);
});

smelt.addEventListener('click', function() {
  logAniimal(smelt.id);
});

// Crust Event Listeners
americanLobster.addEventListener('click', function() {
  logAniimal(americanLobster.id); 
});

blueCrab.addEventListener('click', function() {
  logAniimal(blueCrab.id);
});

cancerCrab.addEventListener('click', function() {
  logAniimal(cancerCrab.id);
});


 // Echi Event Listeners
  seaCucumber.addEventListener('click', function() {
    logAniimal(seaCucumber.id);
});

brittleStar.addEventListener('click', function() {
  logAniimal(brittleStar.id);
});

seaUrchin.addEventListener('click', function() {
  logAniimal(seaUrchin.id);
});

$(document).ready(function(){
  // Fish Animate
    animateDiv('#eel');
    animateDiv('#bonito');
    animateDiv('#shark');
    animateDiv('#bluefinTuna');
    animateDiv('#cusk');
    animateDiv('#monkfish');
    animateDiv('#smelt');

    
     // Crust Animate
    animateDiv('#americanLobster');
    animateDiv('#blueCrab');
    animateDiv('#cancerCrab');

    // Echi Animate
    animateDiv('#seaCucumber');
    animateDiv('#brittleStar');
    animateDiv('#seaUrchin');

   
   
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height()-200;
    var w = $(window).width() - 400;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];      
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 10000,   function(){
      animateDiv(myclass);        
    });
    
};


// Fish Info 
const fishInfo =  [
    { name: "American Eel: (Anguilla rostrata)", 
    id: 'eel',
    img: 'images/eel.jpeg',
    info:" Can be up to 5 feet long and weigh up to 16 pounds. Typically, eels are around 2 to 3 feet in length. The color of eels varies based on their habitat. They can change colors to match the surface around them. Typically, eels are a dark brown with faded yellow on the sides. Their belly can be pale brown, yellow or white. Prey on ultimately any small fish or invertebrate that crosses its path."
    },

    { name: "Atlantic Bonito (Sarda sarda) ", 
    id:'bonito',
    img:'images/Bonito.jpg',
    info:"The Atlantic bonito can grow up to 12 pounds and 30 inches long. The Atlantic bonito has the same body shape as the tuna species. The only difference is that Atlantic bonito are skinnier than tuna. The Atlantic bonito has small, sharp teeth, as well as short pectoral fins. The Atlantic bonito is a ram ventilator, meaning it cannot bite, they must eat their prey whole. "
    },
    { name: "Blue Shark (Prionace glauca)", 
    id: 'shark',
    img: 'images/shark.jpg',
    info:" Blue sharks can get up to 13 feet in length but generally are closer to 10 feet long. Young blue sharks are preyed upon by larger pelagic predators. White sharks and shortfin mako sharks are a few of the animals that prey on adult blue sharks. Blue shark’s birth live young that hatch internally. The gestation period is 9-12 months. Average blue shark litters are 25-50 pups, but can get up to 135 pups." },
    
    { name: "Bluefin Tuna ", 
    id: 'bluefinTuna',
    img: 'images/bluefin.jpg',
    info:" Atlantic bluefin tuna can reach 10 feet in length and 1,000 pounds. Most adults are around 200 pounds at 10 years of age. They prey on mackerel, sand lance, sea herring, and squid. When those species are absent, bluefin tuna will eat whatever they come across. This includes sea stars and kelp. On the other end, sharks and whales prey on bluefin tuna." 
  },

  { name: "Cusk (Brosme brosme) ", 
  id: 'cusk',
  img: 'images/Cusk.jpg',
  info:"Cusk rarely grow more than 3 feet and 20 pounds. It takes them a long time to grow, too. They reach 1.5 feet in more than 5 years. Cusk vary in color, from red-brown to green-brown to yellow. Cusk are known to eat crabs and mollusks and not much else. Common predators are the blackrim cusk-eel, thorny skate, and windowpane flounder.Cusk spawn between March and July."
},
  
{ name: "Monkfish (Lophius americanus) ", 
  id: 'monkfish',
  img: 'images/monfishMain.jpg',
  info:"Monkfish will feed on almost anything that crosses their path. This includes zooplankton, small fish, shrimp, squid, other monkfish, crabs, lobsters, squid, octopus, seabirds. Their predators include swordfish, sharks, and thorny skates. The larger the monkfish, the less likely it will be eaten. Monkfish inhabit muddy areas so they can bury themselves for an ambush. "
},

{ name: "Rainbow Smelt (Osmerus mordax) ", 
  id: 'smelt',
  img: 'images/smelt.jpg',
  info:"Rainbow smelt are rather small fish, generally growing to between 6 and 10 inches in length. They weigh between 1 and 6 ounces.  Female rainbow smelt lay roughly between 20,000 and 80,000 eggs depending on their size. Smelt are spring spawners; mainly from early March to early May. Young smelt eat zooplankton and adult smelt eat mostly small crustaceans and fish."
    },
    { name: "American Lobster: (Anguilla rostrata)", 
    id: 'americanLobster',
    img: 'images/lobster.jpg',
    info:" The American lobster is a crustacean with a large shrimp-like body and 10 legs, two of which are large, strong claws. Male and female lobsters can be distinguished by the first pair of swimmerets (pleopods) on the upper portion of the underside of the tail. The male swimmerets are larger and more rigid. The female swimmerets are softer, smaller, and have rounded edges. "
    },

    { name: "Blue Crab (Callinectes sapidus)", 
    id: 'blueCrab',
    img: 'images/Crab.jpg',
    info:"Blue crabs generally live for 3 or 4 years.They reach maturity in 12 to 18 months. Growth rates are affected by water temperature—they grow more quickly in warmer water. Blue crabs eat almost anything, including clams, oysters, mussels, smaller crustaceans, freshly dead fish, plant and animal detritus—and smaller and soft-shelled blue crabs. "
  },
    { name: "Cancer Crab", 
    id: 'cancerCrab',
    img: 'images/cancerCrab.jpg',
    info:"Cancer crabs range from Nova Scotia in Canada down to Florida along the eastern U.S. coast. Rock and Jonah crabs, subspecies of Cancer crabs, are harvested in coastal habitats along the eastern US. These and other cancer crabs are found in habitats spanning tidal waters to the continental shelf slope, with conditions that vary across a wide range of temperatures and bottom types (rocky to sandy environments)."

  },
    // Echi Info
    { name: "Orange Footed Sea Cucumber ", 
    id: 'seaCucumber',
    img: 'images/cucumber.jpg',
    info:" The orange-footed sea cucumber (Cucumaria frondosa) is the largest sea cucumber in New England, United States. They typically live around rocks, crevices or low-tide Arctic water, and are known to cover vast areas of the substrate at depths of less than 30 meters. These sea cucumbers reach around 20 cm (8 in) in length and have ten branched oral tentacles ranging in color from orange to black."
    },

    { name: "Long-Armed Brittle Star ", 
    id: 'brittleStar',
    img: 'images/star.jpg',
    info:" The long arm brittle star is found from the intertidal zone to a depth of 1600 m (5330'). It inhabits areas with sand-mud substrate, and is one of the most common brittle stars in its habitat. Its range stretches from Baja California to Alaska. Their arms readily break off but soon regrow. Each arm may branch multiple times, and the outstretched arms reach nearly 1 metre (about 3 feet) across."
    },

    { name: "Atlantic Purple Sea Urchin ", 
    id: 'seaUrchin',
    img: 'images/urchin.jpg',
    info:" The Atlantic Purple Sea Urchin (Arbacia punctulata) is native to the North Atlantic and found along the coasts of North America from Massachusetts, southward to the Yucatan Peninsula. They can reach up to 8 cm in diameter. Its shell (test) is covered with tube feet used for mobility and camouflage. Five tooth-like plates on bottom of its test, called Aristotle’s lantern, are used for grazing on marine algae."
  },



   
];


function logAniimal(data){
    console.log(data);
    fishInfo.forEach( (item) => {
        if (data === item.id){
           // console.log(`we matched ${data}`);

             document.getElementById('info').style.display='block';
             document.getElementById("showName").innerHTML = item.name;
             document.getElementById("showPic").src= item.img;
             document.getElementById("showInfo").innerHTML = item.info;
             //printData ('hello', showInfo) 
        
        }
    });
    
};


function closeInfo() {
  const x = document.getElementById("info");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };


  
// Filter Fish Funcitons

  function filterFish() {
    
    const x = document.getElementById('eel');
     if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    const y = document.getElementById('shark');
     if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
    const z = document.getElementById('bonito');
     if (z.style.display === "none") {
      z.style.display = "block";
    } else {
      z.style.display = "none";
    }

    const w = document.getElementById('bluefinTuna');
    if (w.style.display === "none") {
     w.style.display = "block";
   } else {
     w.style.display = "none";
   }

   const t = document.getElementById('cusk');
    if (t.style.display === "none") {
     t.style.display = "block";
   } else {
     t.style.display = "none";
   }

   const u = document.getElementById('monkfish');
   if (u.style.display === "none") {
    u.style.display = "block";
  } else {
    u.style.display = "none";
  }

  const v = document.getElementById('smelt');
  if (v.style.display === "none") {
   v.style.display = "block";
 } else {
   v.style.display = "none";
 }

  }


  // Filter Crust Funcitons
  function filterCrust(){
    const a = document.getElementById('blueCrab');
     if (a.style.display === "none") {
      a.style.display = "block";
    } else {
      a.style.display = "none";
    }

    const b = document.getElementById('americanLobster');
    if (b.style.display === "none") {
     b.style.display = "block";
   } else {
     b.style.display = "none";
   }

   const c = document.getElementById('cancerCrab');
   if (c.style.display === "none") {
    c.style.display = "block";
  } else {
    c.style.display = "none";
  }
  }



  // Filter Echi Funcitons
function filterEchi(){

const h = document.getElementById('brittleStar');
if (h.style.display === "none") {
 h.style.display = "block";
} else {
 h.style.display = "none";
}

const i = document.getElementById('seaCucumber');
if (i.style.display === "none") {
 i.style.display = "block";
} else {
 i.style.display = "none";
}


const j = document.getElementById('seaUrchin');
if (j.style.display === "none") {
 j.style.display = "block";
} else {
 j.style.display = "none";
}

}







	
//eventListener
	closePopup.onclick = function() {
	  overlay.style.display = 'none';
	  popup.style.display = 'none';
	};

	function popUpThing() {
	  overlay.style.display = 'block';
	  popup.style.display = 'block';
	}

//
    window.onload = function() {
        popUpThing();
      };