import {
  SIDEBAR_TOGGLE,
  SUBMENU_OPEN,
  SUBMENU_CLOSE,
  GET_ABOUT_BEGIN,
  GET_ABOUT_SUCCESS,
  GET_ABOUT_ERROR,
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

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_TOGGLE) {
    return { ...state, isSidebarOpen: !state.isSidebarOpen }
  }
  if (action.type === SUBMENU_OPEN) {
    return { ...state, isSubmenuOpen: true, page: action.payload.page, location:action.payload.coordinates }
  }
  if (action.type === SUBMENU_CLOSE) {
    return { ...state, isSubmenuOpen: false, location:{}}}
  if (action.type === GET_ABOUT_BEGIN) {
    return { ...state, about_loading: true }
  }
  if (action.type === GET_ABOUT_SUCCESS) {
    return {
      ...state,
      about_loading: false,
      about: action.payload,
    }
  }
  if (action.type === GET_ABOUT_ERROR) {
    return { ...state, about_loading: false, about_error: true }
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true }
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter(
      (product) => product.featured === true
    )
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products,
    }
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true }
  }
  if (action.type === GET_PACKAGES_BEGIN) {
    return { ...state, packages_loading: true }
  }
  if (action.type === GET_PACKAGES_SUCCESS) {
    return {
      ...state,
      packages_loading: false,
      packages: action.payload,
    }
  }
  if (action.type === GET_PACKAGES_ERROR) {
    return { ...state, packages_loading: false, packages_error: true }
  }
  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    }
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload,
    }
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    }
  }
  if (action.type === GET_SINGLE_PACKAGE_BEGIN) {
    return {
      ...state,
      single_package_loading: true,
      single_package_error: false,
    }
  }
  if (action.type === GET_SINGLE_PACKAGE_SUCCESS) {
    return {
      ...state,
      single_package_loading: false,
      single_package: action.payload,
    }
  }
  if (action.type === GET_SINGLE_PACKAGE_ERROR) {
    return {
      ...state,
      single_package_loading: false,
      single_package_error: true,
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
