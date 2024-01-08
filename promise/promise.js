const Posts = [{ title: 'POST1' }, { title: 'POST2' }];

function getPost() {
  Posts.forEach((post) => {
    console.log(post.title);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lastActiveTime = new Date().toISOString();
      console.log(`User's last activity time updated: ${lastActiveTime}`);
      resolve(lastActiveTime);
    }, 1000);
  });
}

function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      Posts.push({ title: post });
      updateLastUserActivityTime().then((lastActiveTime) => {
        resolve(lastActiveTime);
      });
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve) => {
    setTimeout(() => {
      Posts.pop();
      resolve();
    }, 1000);
  });
}

Promise.all([
  createPost("POST3"),
  updateLastUserActivityTime()
])
  .then(([lastActiveTime]) => {
    console.log(`Posts and last activity time after creation:`);
    getPost();
    console.log(`Last Activity Time: ${lastActiveTime}`);
    return deletePost();
  })
  .then(() => {
    console.log("Post deleted successfully.");
    console.log("Remaining Posts:");
    getPost();
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
