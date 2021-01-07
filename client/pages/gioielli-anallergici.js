import React, { useState, useEffect } from 'react'
import PageTitle from '../components/categories/PageTitle'
import ProductsList from '../components/categories/ProductsList'
import Footer from '../components/Footer'
import { filterByCategory, service, onCategoryChange } from '../components/categories/helpersFunctions/helpersFunctions'


const GioielliAnallergici = () => {
  const [products, setProducts] = useState([])
  const [productsToDisplay, setProductsToDisplay] = useState([])
  const [categoriesSelected, setCategoriesSelected] = useState([])

  //   Start subcategories
  const [accessori, setAccessori] = useState([])
  const [orecchini, setOrecchini] = useState([])
  const [bracciali, setBracciali] = useState([])
  const [collane, setCollane] = useState([])
  //   End subcategories

  const categories = ['Accessori', 'Orecchini', 'Bracciali', 'Collane']

  useEffect(() => {
    async function getProducts () {
      try {
        const response = await service.get('/api/category-products/3')
        setProducts(response.data)
        setAccessori(filterByCategory(response.data, '3.1'))
        setOrecchini(filterByCategory(response.data, '3.2'))
        setBracciali(filterByCategory(response.data, '3.3'))
        setCollane(filterByCategory(response.data, '3.4'))
        const newArray = products.filter(product => {
          if (categoriesSelected.includes(product.category)) {
            return product
          }
        })
        setProductsToDisplay(newArray)
      } catch (e) {
        console.error(e)
      }
    }
    // Execute the created function directly
    getProducts()
  }, [categoriesSelected])

  return (
    <div>
      <PageTitle
        title='Gioielli Anallergici'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, alias.'
      />      
      <div className="category-page-container">    
        <div className='wrapper-categories'>
        {/* name to be changed for each category */}
          {categories.map((category, i = 1) => {
            return (
            <div key={i} className='input-wrapper'>
              <div className='switch'>
                <input
                  onChange={(e) => onCategoryChange(e, setCategoriesSelected, categoriesSelected)}
                  name={`3.${i + 1}`}
                  id={`switch-${i +1}`}
                  type='checkbox'
                  className='switch-input'
                />
                <label htmlFor={`switch-${i + 1}`} className='switch-label'>
                  {category}
                </label>
              </div>
              <div>
                  <p className="category-name">{category}</p>
              </div>
           </div>
            )
          })}
        </div>
           {categoriesSelected.length < 1 ? 
            <ProductsList products={products}/> 
            :
            <ProductsList products={productsToDisplay}/>
           }
       </div>
      <Footer/>
           <style jsx>{`
             @media(min-width: 969px){
              .wrapper-categories {
                 margin: 0 10px;
                 display: flex;
                 overflow-x: scroll;
                }
                .input-wrapper {
                   padding-right: 60px;
               }
             }             
          `}</style>  
    </div>
  )
}
export default GioielliAnallergici