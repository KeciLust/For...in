export default function orderByProps(obj, arr) {
  const arrFinish = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj) {
      arrFinish.push(`key: '${arr[i]}', value: '${obj[arr[i]]}'`);
      // eslint-disable-next-line no-param-reassign
      delete obj[arr[i]];
    }
  }
  const arrSort = Object.entries(obj).sort();
  for (const [key, value] of arrSort) {
    arrFinish.push(`key: '${key}', value: '${value}'`);
  }
  return arrFinish;
}
