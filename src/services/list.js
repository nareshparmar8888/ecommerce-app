export function getProductList() {
  return fetch('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/').then(data => data.json())
}

export function addProduct(form_data) {
   const requestOptions = {
        method: 'POST',
        body: JSON.stringify(form_data)
    };
  return fetch('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/', requestOptions).then(data => data.json())
}

export function getCategoryList() {
  return fetch('https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/').then(data => data.json())
}


export function getProductDetails(id){
  return fetch('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/' + id).then(data => data.json()) 
}