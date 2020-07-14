console.lo('Module working!')

async function start() {
  return await Promise.resolve('Async working!')
}

start().then(console.log)
