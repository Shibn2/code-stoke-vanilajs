function sleep(duration) {
  return new Promise((res, rej) => setTimeout(res, duration));
}

async function sleepUtil() {
  console.log("Sleep util started...");

  await sleep(2000);

  console.log("Sleep util continues...");

  await sleep(1000);

  console.log("Sleep util ends.");
}

export default sleepUtil;
