import "./style.css";
const alanWorker = new Worker(new URL("./workers/alan.js", import.meta.url), {
  type: "module",
});

// Send a message to the Alan worker to request the introduction
alanWorker.postMessage("test");

// Listen for the message event from the Alan worker
alanWorker.onmessage = function (event) {
  // Log the received message from Alan
  console.log(event.data);
};
