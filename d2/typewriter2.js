const sentence = "hello there from lighthouse labs \n";

let startTime = 1000;

const typewriter = (sentence) => {
  let startTime = 100;
  for (const char in sentence) {
    setTimeout(() => {process.stdout.write(sentence[char]) 
    }, (startTime + 100 * char));
  }
}

typewriter(sentence);
