function selectImage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1. Image Selected");
      resolve();
    }, 4000);
  });
}

function applyFilter() {
  return new Promise((resolve,_) => {
    setTimeout(() => {
      console.log("2. Filter Applied");
      resolve();
    }, 2000);
  });
}

function addCaption() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("3. Caption Added");
      resolve();
    }, 5000);
  });
}

function uploadPost() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("4. Post Uploaded");
      resolve();
    }, 3000);
  });
}

selectImage()
  .then(() => applyFilter())
  .then(() => addCaption())
  .then(() => uploadPost())
  .then(() => {
    console.log("✅ Instagram Post Created Successfully!");
  })
  .catch((error) => {
    console.log("❌ Error occurred:", error);
  })
  .finally(() => {
    console.log("🔚 Process Finished.");
  });
