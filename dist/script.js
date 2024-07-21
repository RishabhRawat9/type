// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

const paraEl = document.body.querySelector(".textContainer");
const timerEl = document.body.querySelector(".timer");

const arr_para = [
  "Three rulers all need to wed their cousin Nouronnihar, and the Grand Sultan, their dad, ensures the lady's hand to the sibling who tracks down the thing with the most elevated esteem. They each work to offer the best thing of real value, including an enchanted floor covering to ride, a supernatural cylinder that shows the watcher his most profound wishes, and a recuperating apple. Subsequent to finding the things, the rulers hear that Nouronnihar is sick, and instead of battling about her, they bring each of their things together to save her life. The Grand Sultan is so moved by their activities that he chooses to wed Nouronnihar himself, and the three siblings are compensated with the title of Vizier",
  "A far, far away galaxy simmers with conflict. The tyrannical Galactic Empire enforces order with an iron fist, while the ragtag Rebel Alliance fights for freedom. Farmboy Luke Skywalker, yearning for adventure, stumbles into the fight after meeting a wise Jedi Knight and a swashbuckling smuggler. With the fate of the galaxy hanging in the balance, Luke must learn to harness the mystical power of the Force and strike a blow against the Empire's ultimate weapon, the planet-destroying Death Star",
  "The Mandalorian dives into the Star Wars universe five years after the fall of the Empire.We follow Din Djarin, a bounty hunter clad in beskar armor, navigating the fringes of the galaxy.A hardened loner, his world gets turned upside down when he takes on a bounty that turns out to be Grogu, an adorable child with a mysterious connection to the Force.Din becomes Grogu's protector, facing off against bounty hunters, Moff Gideon and his Imperial remnants, all while seeking out others like Grogu.Their journey takes them across the cosmos, exploring the Mandalorian culture and the lingering effects of the Empire's fall.",
];
const PARA = arr_para[2];
const Data = PARA.split(" ");
Data.forEach((text) => {
  const div = document.createElement("div");
  const node = document.createTextNode(text);
  div.appendChild(node);
  div.classList.add("text-lg");
  div.classList.add("font-mono");
  div.classList.add("h-6");
  paraEl.appendChild(div);
});
// doing this so that i can highlight an individual word that i am curretly typing.

const words = paraEl.childNodes; //returns nodelist

let arr = Array.from(words);
arr.shift(); //removing the text node at thhe start of the array

let secs = timerEl.textContent;
const timer = setInterval(function(){
  document.querySelector('.timer').innerHTML='00:'+secs;
  secs--;
  if (secs < 0) {
      clearInterval(timer);
  }
}, 1000);

let index = 0;
arr[0].style.fontWeight = 800;
const userTextEl = document.body.querySelector("textarea");
userTextEl.addEventListener("keyup", (ev) => {
  // console.log(ev.keyCode);
  const key = ev.keyCode;
  if (key == 32) {
    //32 for space

    const currWord = arr[index].textContent;

    const word = userTextEl.value;

    userTextEl.value = ""; // resetting the input

    if (currWord.trim() === word.trim()) {
      arr[index].style.backgroundColor = "green";
      arr[index].style.fontWeight = 200;
    } else {
      arr[index].style.backgroundColor = "red";
      arr[index].style.fontWeight = 200;
    }
    //highlighting the current word/
    index++;
    arr[index].style.fontWeight = 800; //marks the word that need to be typed
  }
});
