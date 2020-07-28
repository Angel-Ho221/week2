const sentence = "hello there from lighthouse labs \n";

let startTime = 1000;

const typewriter = (sentence) => {
  let startTime = 100;
  for (const char in sentence) {
    setTimeout(() => {process.stdout.write(sentence[char]) // print the letters in one line
      // console.log(sentence[char])// prints each letter one at a time
    }, (startTime + 100 * char));
  }
}

typewriter(sentence);
