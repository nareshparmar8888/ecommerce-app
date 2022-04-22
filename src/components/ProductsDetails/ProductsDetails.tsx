import React, { FC } from 'react';
import styles from './ProductsDetails.module.css';
import { useSearchParams } from 'react-router-dom';
import { getProductDetails } from '../../services/list';
import { useEffect, useState } from 'react';
import { StarIcon } from '@heroicons/react/solid'
import ProductModel from '../../models/Product';

interface ProductsDetailsProps {}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ProductsDetails: FC<ProductsDetailsProps> = () => {
  const [searchParams] = useSearchParams();
  const [productDetails, setProductDetails] = useState<ProductModel>(new ProductModel())

  useEffect(() => {
    let mounted = true;
    getProductDetails(searchParams.get('id')).then(items => {
       if(mounted) {
         setProductDetails(items)
       }
    })

   }, [])

  return (
    <div className={styles.ProductsDetails} data-testid="ProductsDetails">
      <div className="pt-6">

        {/* Image gallery */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8 border-b-2 border-b-black pb-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={productDetails?.avatar}
              alt={productDetails?.avatar}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-left text-3xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{productDetails.name}</h1>
            <p className="text-left text-xl text-gray-900 mt-10">$ {productDetails.price}</p>
          </div>
        </div>

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">

          
          <div className="lg:mt-0 lg:row-span-3">

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="text-left text-xl font-bold">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key='4'
                      className={classNames( 'text-gray-900',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="">4 out of 5 stars</p>
              </div>
            </div>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <div>
              <h3 className="text-left text-xl font-bold">Description</h3>

              <div className="space-y-6">
                <p className="text-left text-gray-900">{productDetails.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetails;
