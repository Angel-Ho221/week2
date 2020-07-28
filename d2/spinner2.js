const spin = "\r\\\r-\r/\r|\r\\\r-\r/\r|\n";
const spinner = (spin) => {
  let startTime = 100;
  for(const char in spin) {
    setTimeout(() => {process.stdout.write(spin[char])
    }, (startTime + 200 * char)); 
  }
}

spinner(spin);
