import React, {useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import {useCartContext} from "../context/cart_context";
import {useProductsContext} from "../context/products_context";
import {single_product_url as url} from "../utils/constants";
import {Loading, Error, ToggleStar, PageHero} from "../components";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Tabs from "../components/Tabs";

const SingleProductPage = () => {
  const {id} = useParams();
  const history = useHistory();
  const {single_product_loading: loading, single_product_error: error, single_product: product, fetchSingleProduct, products} = useProductsContext();
  const {cart} = useCartContext();
  const inCart = cart.find((item) => item.id === id && item.isExamination);
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [error,history]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const {personel, available, features} = product;
  const {name, image, description} = products.find((item) => item.id === +id) || {};
  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className='section section-center page'>
        <header className='product'>
          <Link to='/products' className='btn'>
            all products
          </Link>
          <div className='watch'>
            <p className='phrase'>{inCart ? "remove from " : "add page to "}watchlist</p>
            <ToggleStar id={id} inCart={inCart} isExamination />
          </div>
        </header>
        <div className=' product-grid'>
          <img src={image} alt='main' className='main' />
          <section className='content'>
            <h2>{name}</h2>
            <p className='desc'> {description}</p>
            <p className='info capitalize'>
              <span>Doctor : </span>
              {personel}
            </p>
            <p className='info capitalize'>
              <span>Available : </span>
              {available?.map((day) => `${day} `)}
            </p>
            <p className='info'>
              <span>Visit : </span>
              <Link to={`/appointment/product/${id}`} className='btn'>
                make appointment
              </Link>
            </p>
            <hr />
          </section>
        </div>
      </div>
      {features&&<Tabs features={features}/>}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-grid {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .product {
    display: block;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    justify-items: start;
    font-size: 1.25rem;
    text-transform: capitalize;
    font-weight: bold;
    p {
      margin: 1rem 0 0;
    }
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    justify-items: start;
    span {
      font-weight: 700;
    }
  }
  img {
    height: 18rem;
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .phrase {
    width: 15rem;
  }
  .star {
    font-size: 2rem;
    margin-left: 1rem;
    cursor: pointer;
    transition: var(--transition);
  }
  .star:hover {
    transform: scale(1.1);
  }

  .capitalize {
    text-transform: capitalize;
  }
  .watch {
    display: flex;
    align-items: center;
  }
  @media (min-width: 576px) {
    .product {
      display: grid;
      align-items: center;
      p {
        margin: 0;
      }
    }
    img {
      height: 20rem;
    }
  }
  @media (min-width: 992px) {
    .product-grid {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
    img {
      height: 25rem;
    }
  }
`;

export default SingleProductPage;
