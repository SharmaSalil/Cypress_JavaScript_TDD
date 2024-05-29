function createTimestamp() {
  
    let currentDate = new Date();
    let timestamp = currentDate.getTime(); 

    return timestamp;
}

console.log(createTimestamp());