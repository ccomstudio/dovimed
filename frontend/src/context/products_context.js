import axios from 'axios'
import { links } from '../utils/constants'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url, packages_url, about, /* products, packages, singleProduct, singlePackage */ } from '../utils/constants'

import {
  SIDEBAR_TOGGLE,
  SUBMENU_OPEN,
  SUBMENU_CLOSE,
  // GET_ABOUT_BEGIN,
  GET_ABOUT_SUCCESS,
  // GET_ABOUT_ERROR,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PACKAGES_BEGIN,
  GET_PACKAGES_SUCCESS,
  GET_PACKAGES_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PACKAGE_BEGIN,
  GET_SINGLE_PACKAGE_SUCCESS,
  GET_SINGLE_PACKAGE_ERROR,
} from '../actions'

const initialState = {
  isSidebarOpen: false,
  isSubmenuOpen: false,
  page: {page: '', links: []},
  location:{},
  about_loading: false,
  about_error: false,
  about: {},
  products_loading: false,
  products_error: false,
  products: [],
  packages_loading: false,
  packages_error: false,
  packages: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
  single_package_loading: false,
  single_package_error: false,
  single_package: {},
}

const ProductsContext = React.createContext(initialState)

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleSidebar = () => {
    dispatch({ type: SIDEBAR_TOGGLE })
  }
  const openSubmenu = (text, coordinates) => {
    const page = links.find((link) => {return link.text === text});
    dispatch({ type: SUBMENU_OPEN, payload:{page, coordinates}})
  }
  const closeSubmenu = () => {
    dispatch({ type: SUBMENU_CLOSE})
  }
  const fetchAbout = async (url) => {
      dispatch({ type: GET_ABOUT_SUCCESS, payload: about })
  }
  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN })
    try {
      const {data:products} = await axios.get(url)
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products })
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR })
    }
  }
  const fetchPackages = async (url) => {
    dispatch({ type: GET_PACKAGES_BEGIN })
    try {
      const {data:packages} = await axios.get(url)
      dispatch({ type: GET_PACKAGES_SUCCESS, payload: packages })
    } catch (error) {
      dispatch({ type: GET_PACKAGES_ERROR })
    }
  }

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
    try {
      const {data:singleProduct} = await axios.get(url)
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct })
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
    }
  }
  const fetchSinglePackage = async (url) => {
    dispatch({ type: GET_SINGLE_PACKAGE_BEGIN })
    try {
      const {data:singlePackage} = await axios.get(url)
      dispatch({ type: GET_SINGLE_PACKAGE_SUCCESS, payload: singlePackage })
    } catch (error) {
      dispatch({ type: GET_SINGLE_PACKAGE_ERROR })
    }
  }

  useEffect(() => {
    fetchProducts(products_url)
    fetchPackages(packages_url)
  }, [])

  return (
    <ProductsContext.Provider
      value={{ ...state, toggleSidebar, openSubmenu, closeSubmenu, fetchAbout, fetchSingleProduct, fetchSinglePackage }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
