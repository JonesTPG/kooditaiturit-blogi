async function f() {
  return "hello";
}

f().then(data => console.log("with then: " + data)); // 1
main = async () => {
  let data = await f();
  console.log("with await: " + data);
};

main();
