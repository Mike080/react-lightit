import React, { useEffect } from 'react';
import { getProducts } from './store/catalog/catalogAsyncThunk';
import { useAppDispatch, useAppSelector } from './store/hooks';

import Product from './components/product';

const App = () => {
  const { products, isLoading } = useAppSelector(state => state.product);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      {isLoading ? (
        <h1>loading</h1>
      ) : (
        <ul>
          {products?.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
