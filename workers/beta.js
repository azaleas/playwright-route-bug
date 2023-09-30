self.onmessage = async event => {
  if (event.data === 'test') {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await response.json()
    self.postMessage(json.title) // delectus aut autem
  }
}
