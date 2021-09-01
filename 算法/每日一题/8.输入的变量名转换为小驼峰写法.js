function format(name) {
  let arr = name.split("_");
  if (arr.length === 1) {
    name = name[0].toLowerCase();
  }
  arr[0] = arr[0][0].toLowerCase() + arr[0].slice(1);
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  name = arr.join("");
  console.log(name);
}

format("Hello_word_lala_laal");
