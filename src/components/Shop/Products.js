import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummyProducts = [
  { 
    title: "Book1",
    price: 5,
    description: "This is My First Book",
    id: 'b1'
  },
  { 
    title: "Book2",
    price: 6,
    description: "This is My Second Book",
    id: 'b2'
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyProducts.map(book => 
          <ProductItem
          key={book.id}
          id={book.id}
          title= {book.title}
          price={book.price}
          description= {book.description}
        />
        )}
      </ul>
    </section>
  );
};

export default Products;
