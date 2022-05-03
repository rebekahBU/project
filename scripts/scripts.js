
const textArea = document.getElementById("info");

const eel = document.getElementById('eel');
const bonito = document.getElementById('bonito');
const shark = document.getElementById('shark');
const blueCrab = document.getElementById('blueCrab');

const closeBox = document.getElementById('closeBox');
const showInfo = document.getElementById('showInfo');
const showName = document.getElementById('showName');
const showPic = document.getElementById('showPic');
var closePopup = document.getElementById("popupclose");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");
var button = document.getElementById("button");


blueCrab.addEventListener('click', function() {
    logAniimal(blueCrab.id);
   
});
shark.addEventListener('click', function() {
    logAniimal(shark.id);
    
   
});

eel.addEventListener('click', function() {
    logAniimal(eel.id);
    
});

bonito.addEventListener('click', function() {
 
    logAniimal(bonito.id);
   
});

$(document).ready(function(){
    animateDiv('#eel');
    animateDiv('#bonito');
    animateDiv('#shark');
    animateDiv('#blueCrab');
   
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height()-200;
    var w = $(window).width() - 600;
    
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

const fishInfo =  [
    { name: "American Eel: (Anguilla rostrata)", 
    id: 'eel',
    img: 'images/eel.jpeg',
    info:" Can be up to 5 feet long and weigh up to 16 pounds. Typically, eels are around 2 to 3 feet in length. The color of eels varies based on their habitat. They can change colors to match the surface around them. Typically, eels are a dark brown with faded yellow on the sides. Their belly can be pale brown, yellow or white. Prey on ultimately any small fish or invertebrate that crosses its path. Fun Fact: They arrive to our coast with their sex undetermined and years later swim offshore for over a thousand miles to spawn once and die."
    },
    { name: "Atlantic Bonito (Sarda sarda) ", 
    id:'bonito',
    img:'images/bonito.png',
    info:"The Atlantic bonito can grow up to 12 pounds and 30 inches long. The Atlantic bonito has the same body shape as the tuna species. The only difference is that Atlantic bonito are skinnier than tuna. The Atlantic bonito has small, sharp teeth, as well as short pectoral fins. The Atlantic bonito is a ram ventilator, meaning it cannot bite. They must eat their pray whole. That is why they eat mostly smaller fishes like mackerels, menhaden, and sand lance. Predators of the Atlantic bonito are larger fish like tuna, marlin and wahoo. Atlantic bonito are a pelagic species, meaning they live in the middle of the sea in the open water. "
    },
    { name: "Blue Shark (Prionace glauca)", 
    id: 'shark',
    img: 'images/shark.png',
    info:" Blue sharks can get up to 13 feet in length but generally are closer to 10 feet long. Young blue sharks are preyed upon by larger pelagic predators. White sharks and shortfin mako sharks are a few of the animals that prey on adult blue sharks  . Blue shark’s birth live young that hatch internally. The gestation period is 9-12 months. Average blue shark litters are 25-50 pups, but can get up to 135 pups. The health and size of the female are what determine the litter size." },
    { name: "Blue Crab (Callinectes sapidus)", 
    id: 'blueCrab',
    img: 'images/bluecrab.png',
    info:"Blue crabs generally live for 3 or 4 years.They reach maturity in 12 to 18 months. Growth rates are affected by water temperature—they grow more quickly in warmer water. Blue crabs eat almost anything, including clams, oysters, mussels, smaller crustaceans, freshly dead fish, plant and animal detritus—and smaller and soft-shelled blue crabs. Crabs are eaten by large fish, some fish-eating birds (like great blue herons), and sea turtles. The blue crab’s shell—called the “carapace”—is a blue to olive green."},
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
  }

  function filterCrust(){
    const a = document.getElementById('blueCrab');
     if (a.style.display === "none") {
      a.style.display = "block";
    } else {
      a.style.display = "none";
    }
  }


function filterMoll(){
//put animals here
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
      };/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */