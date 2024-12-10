function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data " + dataId);
      resolve("success");
    }, 2000);
  });
}

//callback hell
getData(1, () => {
  console.log("Loading...");
  getData(2, () => {
    console.log("Loading...");
    getData(3, () => {
      console.log("Loading...");
      getData(4);
    });
  });
});

//promise chain
console.log("Loading...");
getData(1)
  .then((res) => {
    console.log("Loading...");
    return getData(2);
  })
  .then((res) => {
    console.log("Loading...");
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });

//async/await
async function getAllData() {
  console.log("Loading...");
  await getData(1);
  console.log("Loading...");
  await getData(2);
  console.log("Loading...");
  await getData(3);
}
