// Day 11: Promises And Async/Await
// Tasks/Activities:

// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console .
const chaiTimeOutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Your chai is ready !");
  }, 2000);
});

chaiTimeOutPromise
  .then((chaiMessage) => {
    console.log(chaiMessage);
  })
  .catch((error) => {
    console.error("Oops");
  });

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch() .

const chaiErrorPromise = new Promise((resolve, reject) => {
  reject("Oops, your chai spilled !");
}, 2000);

chaiErrorPromise
  .then((resolveMesage) => {
    console.log(resolveMesage);
  })
  .catch((rejectMessage) => {
    console.error(rejectMessage);
  });

// Activity 2: Chaining Promises
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const chaiFetchData = (data, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

chaiFetchData("Fetching user data...", 1000)
  .then((message) => {
    console.log(message);
    return chaiFetchData("User data fetched successfully", 2000);
  })
  .then((message) => {
    console.log(message);
    return chaiFetchData("Fetching posts...", 1500);
  })
  .then((message) => {
    console.log(message);
    return chaiFetchData("Posts fetched successfully", 2000);
  })
  .then((message) => {
    console.log(message);
    return chaiFetchData("Fetching comments...", 1000);
  })
  .then((message) => {
    console.log(message);
    return chaiFetchData("Comments fetched successfully", 1500);
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Activity 3: Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

const chaiPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Chai is Ready!");
  }, 2000);
});

async function logChaiMessage() {
  try {
    const chaiMessage = await chaiPromise;
    console.log(chaiMessage);
  } catch (error) {
    console.error("Error:", error);
  }
}

logChaiMessage();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const chaiErrorPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Oops, your chai spilled twice!');
    }, 2000);
  });
  
  async function handleChaiError() {
    try {
      const chaiMessage = await chaiErrorPromise2;
      console.log(chaiMessage);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  handleChaiError();
  
// Activity 4: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
const chaiFetchData2 = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log('Data fetched from API:', data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };
  
  chaiFetchData2();

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await
const chaiFetchData3 = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      console.log("Using Async/Await")
      console.log('Data fetched from API:', data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  
  chaiFetchData3();
  
// Activity 5: Concurrent Promises
// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values
const chaiFetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      });
  };
  
  const chaiFetchComments = () => {
    return fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      });
  };
  
  const chaiFetchUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      });
  };
  
  Promise.all([chaiFetchPosts(), chaiFetchComments(), chaiFetchUsers()])
    .then(([posts, comments, users]) => {
      console.log('Posts:', posts);
      console.log('Comments:', comments);
      console.log('Users:', users);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  
// Task 9: Use Promise.race to log the value of the first promise that resolves among multipl promises

const chaiFetchPosts4 = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      });
  };
  
  const chaiFetchComments4 = () => {
    return fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      });
  };
  
  const chaiFetchUsers4 = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      });
  };
  
  Promise.race([chaiFetchPosts4(), chaiFetchComments4(), chaiFetchUsers4()])
    .then((firstResolved) => {
      console.log('First resolved data:', firstResolved);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  
