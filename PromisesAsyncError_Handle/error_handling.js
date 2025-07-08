const outputDiv = document.getElementById('output');

// A function returning a promise that resolves or rejects after 2 seconds
function fetchData(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve('Data fetched successfully!');
      } else {
        reject('Error: Unable to fetch data.');
      }
    }, 2000);
  });
}

// Using Promises with then() and catch()
document.getElementById('promiseBtn').addEventListener('click', () => {
  outputDiv.textContent = 'Fetching data with Promise...';
  
  fetchData(true)
    .then(result => {
      outputDiv.textContent = `Promise resolved: ${result}`;
    })
    .catch(error => {
      outputDiv.textContent = `Promise rejected: ${error}`;
    });
});

// Using async/await with try/catch
document.getElementById('asyncBtn').addEventListener('click', async () => {
  outputDiv.textContent = 'Fetching data with async/await...';
  
  try {
    const result = await fetchData(false); // Change to false to simulate error
    outputDiv.textContent = `Async/Await success: ${result}`;
  } catch (error) {
    outputDiv.textContent = `Async/Await error: ${error}`;
  }
});
