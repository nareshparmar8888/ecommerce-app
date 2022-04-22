import React, { FC } from 'react';
import styles from './ProductsAdd.module.css';
import { useEffect, useState } from 'react';
import { getCategoryList, addProduct } from '../../services/list';
import  { useNavigate } from 'react-router-dom';

interface ProductsAddProps {}

const ProductsAdd: FC<ProductsAddProps> = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<any>({
    name : "",
    description : "",
    avatar : "",
    price : "",
    category :"",
  })
  const [categoryList, setCategoryList] = useState<any[]>([])
  useEffect(() => {
    let mounted = true;    
    getCategoryList().then(items => {
       if(mounted) {
         setCategoryList(items)
       }
    })

   }, [])
  
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors_d = errors;

    switch (name) {
      case 'name': 
        errors.name = 
          value.length <= 0
            ? 'Name is Required'
            : '';
        break;
      case 'description': 
        errors.email = 
          value.length <= 0
            ? ''
            : 'Description is Required!';
        break;
      case 'avatar': 
        errors.avatar =
          value.length <= 0
            ? 'Avatar is Required.'
            : '';
        break;
      case 'price': 
        errors.price =
          value.length <= 0
            ? 'Price is Required.'
            : '';
        break;
      case 'category': 
        errors.catagory =
          value.length <= 0
            ? 'Category is Required.'
            : '';
        break;
      default:
        break;
    }
    setErrors(errors_d);
  }

  const categoryOptions = () => {
    return categoryList.map(category => {
      return (
          <option value={category.name} key={category.name}>{category.name}</option>
      );
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let form_data = {
      'Name' : event.target.name.value,
      'Description' : event.target.description.value,
      'Avatar' : event.target.avatar.value,
      'Category' : event.target.category.value,
      'Price' : event.target.price.value,
      'DeveloperEmail' : 'test@gmail.com',
    }
    debugger
    addProduct(form_data).then(items => {
      alert("data added.");
      navigate("/");
    })
  }

  return (
    <div className={styles.ProductsAdd} data-testid="ProductsAdd">
      <div className="mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Create Product</h2>
        <form className="mt-10" onSubmit={handleSubmit}>
            <div className='fullName'>
              <label htmlFor="fullName text-left">Product Name</label>
              <input type='text' name='name' onChange={handleChange} placeholder="Product Name" required/>
              {errors.name.length > 0 && 
                <span className='error'>{errors.name}</span>}
            </div>
            <div className='fullName'>
              <label htmlFor="fullName text-left">Description</label>
              <textarea name='description' onChange={handleChange} placeholder="Description" required/>
              {errors.description.length > 0 && 
                <span className='error'>{errors.description}</span>}
            </div>
            <div className='fullName'>
              <label htmlFor="fullName text-left">Image URL</label>
              <input type='text' name='avatar' onChange={handleChange} placeholder="Image URL" required/>
              {errors.avatar.length > 0 && 
                <span className='error'>{errors.avatar}</span>}
            </div>
            <div className='fullName'>
              <label htmlFor="fullName text-left">Catagories</label>
              <select name="category" required placeholder="Catagories">
                {categoryOptions()}
              </select>
              {errors.category.length > 0 && 
                <span className='error'>{errors.category}</span>}
            </div>
            <div className='fullName'>
              <label htmlFor="fullName text-left">Price</label>
              <input type='number' name='price' onChange={handleChange} placeholder="Price" required/>
              {errors.price.length > 0 && 
                <span className='error'>{errors.price}</span>}
            </div>
            
            <div className='submit text-center'>
              <button className="btn btn-primary" type="submit">Create</button>
            </div>
          </form>
      </div>
    </div>
  );
}

export default ProductsAdd;
