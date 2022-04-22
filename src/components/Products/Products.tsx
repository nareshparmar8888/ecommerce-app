import React, { FC } from 'react';
import styles from './Products.module.css';
import { useEffect, useState } from 'react';
import { getProductList, getCategoryList } from '../../services/list';
import { Menu } from '@headlessui/react'
import ProductModel from '../../models/Product';
import Skeleton from 'react-loading-skeleton'

interface ProductsProps {}

const Products: FC<ProductsProps> = () => {
  const [list, setList] = useState<any[]>([]);
  const [categoryList, setCategoryList] = useState<any[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getProductList().then(items => {
       if(mounted) {
         setList(items);
         setLoading(false);
       }
    })
    
    getCategoryList().then(items => {
       if(mounted) {
         setCategoryList(items)
       }
    })

   }, [])

  const productCards = () => {
    if(loading){
      return (
        <>
        <div className="group relative">
          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-xl overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <Skeleton count={10}/>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-xl">
                <a href="" className="text-md">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  <Skeleton count={5}/>
                </a>
              </h3>
            </div>
            <p className="text-xl font-medium text-gray-900"><Skeleton count={5}/></p>
          </div>
        </div>
        <div className="group relative">
          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-xl overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <Skeleton count={10}/>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-xl">
                <a href="" className="text-md">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  <Skeleton count={5}/>
                </a>
              </h3>
            </div>
            <p className="text-xl font-medium text-gray-900"><Skeleton count={5}/></p>
          </div>
        </div>
        <div className="group relative">
          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-xl overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <Skeleton count={10}/>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-xl">
                <a href="" className="text-md">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  <Skeleton count={5}/>
                </a>
              </h3>
            </div>
            <p className="text-xl font-medium text-gray-900"><Skeleton count={5}/></p>
          </div>
        </div>
        <div className="group relative">
          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-xl overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <Skeleton count={10}/>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-xl">
                <a href="" className="text-md">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  <Skeleton count={5}/>
                </a>
              </h3>
            </div>
            <p className="text-xl font-medium text-gray-900"><Skeleton count={5}/></p>
          </div>
        </div>
        </>
      )
    }else{
      return list.map( (card: ProductModel) => {
        return (
            <div className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-xl overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img src={card?.avatar}  alt="Front " className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-xl">
                    <a href={"/details?id=" + card?.id} className="text-md">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      {card?.name}
                    </a>
                  </h3>
                </div>
                <p className="text-xl font-medium text-gray-900">$ {card?.price}</p>
              </div>
            </div>
        );
      });
    }
  };

  const categoryOptions = () => {
    return categoryList.map(category => {
      return (
          <option value={category.name}>{category.name}</option>
      );
    });
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    if(value === 'all'){
      setLoading(true);
      getProductList().then(items => {
        setList(items)
        setLoading(false);
      })
    }
    else{
      setLoading(true);
      getProductList().then(items => {
        setList(items.filter(s => s.category === value))
        setLoading(false);
      })
    }
  }

  return (
    <div className={styles.Products} data-testid="Products">
      <div className="filter">
          <div className="float-right">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <label className="mr-4 font-bold">Catagories</label>
                <select onChange={handleChange}>
                  <option value="all">All</option>
                  {categoryOptions()}
                </select>
              </div>

  
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none menu-items-z">
                  <div className="py-1">
                    {categoryOptions()}
                  </div>
                </Menu.Items>
            </Menu>
          </div>
      </div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 mt-4">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productCards()}
        </div>
      </div>
      <div className="product-add-button">
        <a href="/add">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Products;
