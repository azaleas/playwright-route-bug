self.onmessage = (event) => {
  if (event.data === "test") {
    self.postMessage("alan received message: test");
    const betaWorker = new Worker("beta.js");
    betaWorker.onmessage = (event) => {
      self.postMessage(`beta sent message: ${event.data}`);
    };
    betaWorker.postMessage("test");
  }
};
