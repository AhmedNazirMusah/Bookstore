import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { categoryStatus } from '../redux/categories/categories';

const Categories = () => {
  const categoryState = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(categoryStatus())}>Check status</button>
      <h1>{categoryState}</h1>
    </div>
  );
};

export default Categories;
