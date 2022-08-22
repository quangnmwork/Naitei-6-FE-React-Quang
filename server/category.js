import fs from 'fs';
import path from 'path';
import { root } from 'postcss';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rawdata = fs.readFileSync(path.resolve(__dirname, 'db.json'));
const data = JSON.parse(rawdata)['products'];
const categoryObj = {
  categories: []
};
const addDataToId = (arr, id, children) => {
  arr.forEach((i) => {
    if (i.id == id) {
      const check = [...(i.children || [])].some(
        (item) => item.id === children[0].id
      );
      if (!check) i.children = [...(i.children || []), ...children];
    } else {
      addDataToId(i.children || [], id, children);
    }
  });
};

// function deepEqual(x, y) {
//   return x && y && typeof x === 'object' && typeof y === 'object'
//     ? Object.keys(x).length === Object.keys(y).length &&
//         Object.keys(x).reduce(function (isEqual, key) {
//           return isEqual && deepEqual(x[key], y[key]);
//         }, true)
//     : x === y;
// }

let cnt = 0;
for (const item of data) {
  for (let i = 0; i < item.categories.length; i++) {
    if (i > 0) {
      addDataToId(categoryObj.categories, item.categories[i - 1], [
        { id: item.categories[i], name: item.categories[i] }
      ]);
    } else {
      const index = categoryObj.categories.findIndex(
        (category) => category.id == item.categories[0]
      );
      if (index != -1) {
        continue;
      } else {
        categoryObj.categories.push({
          id: item.categories[0],
          name: item.categories[0]
        });
      }
    }
  }
  cnt++;
}
// console.log(categoryObj.categories.length);
fs.writeFileSync(
  path.resolve(__dirname, 'categories.json'),
  JSON.stringify(categoryObj, null, 2),
  'utf-8'
);
