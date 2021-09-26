export let getPathFromString = (string) => {
  let result;
  result = string.trim().toLowerCase().split(" ").join("-");
  return result;
};

export let addData = (data) => {
  let result = [];
  data[0].index = 0;
  data[1].index = 1;
  result.push(data[0]);
  result.push(data[1]);
  for (let i = 0; i < 80; i++) {
    let firstData = {
      ...data[0],
      index: 2 + i * 2,
    };
    let secondData = {
      ...data[1],
      index: 3 + i * 2,
    };
    result.push(firstData);
    result.push(secondData);
  }
  return result;
};
