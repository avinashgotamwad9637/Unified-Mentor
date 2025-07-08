function fetchData(callback) {
  setTimeout(() => {
    callback("Data received!");
  }, 1000);
}

fetchData(function(result) {
  console.log(result); 
  // Output after 1 second: "Data received!"
});

// callback styling
function getData(callback) {
  setTimeout(() => {
    callback(null, "Data loaded");
  }, 1000);
}

// promise styling
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 1000);
  });
}

// changing promises
getData()
  .then(data => {
    console.log(data);
    return "Next step";
  })
  .then(next => console.log(next));


// asyn /await (bouns)
async function fetchData() {
  try {
    const result = await getData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
