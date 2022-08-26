import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';
import PRODUCTS from './db.json';
import Fuse from 'fuse.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

const keys = ['categories', 'types', 'brand', 'price', 'rating', 'name'];
const options = {
  includeScore: true,
  threshold: 0.5,
  keys
};
const fuse = new Fuse(PRODUCTS.products, options);

server.get('/products', (req, res) => {
  const query = req.query;
  const objSearch = { ...query };
  delete objSearch.compare;
  delete objSearch.price;
  delete objSearch.rating;
  const products = fuse
    .search({
      $and: [objSearch]
    })
    .filter((product) => {
      const rating = query.rating || 0;

      if (product.item.rating >= rating && (query.compare || query.price)) {
        const compare = query.compare || 'less';
        if (compare == 'less' && +product.item.price <= +query.price) {
          return product;
        }
        if (
          compare == 'equal' &&
          +product.item.price > +query.price &&
          +product.item.price <= +query.secondPrice
        )
          return product;
        if (compare == 'great' && +product.item.price > +query.price)
          return product;
      } else {
        return product;
      }
    });
  console.log(query, products.length, objSearch);

  res.jsonp({
    ...products
  });
});

server.use(middlewares);
server.use(router);
server.listen(8000, () => {
  console.log('JSON Server is running');
});
