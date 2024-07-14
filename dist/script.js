// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

const paraEl = document.body.querySelector(".textContainer");
const PARA =
  "Three rulers all need to wed their cousin Nouronnihar, and the Grand Sultan, their dad, ensures the lady's hand to the sibling who tracks down the thing with the most elevated esteem. They each work to offer the best thing of real value, including an enchanted floor covering to ride, a supernatural cylinder that shows the watcher his most profound wishes, and a recuperating apple. Subsequent to finding the things, the rulers hear that Nouronnihar is sick, and instead of battling about her, they bring each of their things together to save her life. The Grand Sultan is so moved by their activities that he chooses to wed Nouronnihar himself, and the three siblings are compensated with the title of Vizier";
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

console.log(paraEl.childNodes);
const words = paraEl.childNodes; //returns nodelist
console.log(words[1].firstChild);

let arr = Array.from( words );
arr.shift(); //removing the text node at thhe start of the array



let index=0;
arr[0].style.fontWeight = 800;
const userTextEl = document.body.querySelector("textarea");
userTextEl.addEventListener("keyup", (ev) => {
  // console.log(ev.keyCode);
  const key = ev.keyCode;
  if (key == 32) {
    //32 for space
    
    const currWord = arr[index].textContent;
    
    const word = userTextEl.value;
    console.log(word);
    
    userTextEl.value = ""; // resetting the input
    
    if (currWord.trim()===word.trim()){
      arr[index].style.backgroundColor = "green";
      arr[index].style.fontWeight = 200;
     

    }
    else{
      arr[index].style.backgroundColor = "red";
      arr[index].style.fontWeight = 200;

    }
    //highlighting the current word/
    index++
    arr[index].style.fontWeight = 800;//marks the word that need to be typed
  }
  
});

