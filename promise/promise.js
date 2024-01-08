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

async function createPost(post) {
  return new Promise(async (resolve) => {
    setTimeout(async () => {
      Posts.push({ title: post });
      const lastActiveTime = await updateLastUserActivityTime();
      resolve(lastActiveTime);
    }, 1000);
  });
}

async function deletePost() {
  return new Promise(async (resolve) => {
    setTimeout(async () => {
      Posts.pop();
      resolve();
    }, 1000);
  });
}

(async () => {
  try {
    const [lastActiveTime] = await Promise.all([
      createPost("POST3"),
      updateLastUserActivityTime(),
    ]);

    console.log(`Posts and last activity time after creation:`);
    getPost();
    console.log(`Last Activity Time: ${lastActiveTime}`);

    await deletePost();

    console.log("Post deleted successfully.");
    console.log("Remaining Posts:");
    getPost();
  } catch (error) {
    console.error(`Error: ${error}`);
  }
})();
