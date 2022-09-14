import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./client";
import {ProductsProvider} from "./context/products_context";
import {FilterProvider} from "./context/filter_context";
import {CartProvider} from "./context/cart_context";
import {FormProvider} from "./context/form_context";

ReactDOM.render(
  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
        <FormProvider>
          <App />
        </FormProvider>
      </CartProvider>
    </FilterProvider>
  </ProductsProvider>,
  document.getElementById("root")
);
