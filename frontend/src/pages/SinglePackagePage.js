import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import {Loading,Error,ToggleStar,PageHero,} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Collection from '../components/Collection'
import { useCartContext } from '../context/cart_context'
import Accordeon from '../components/Accordeon'


const SinglePackagePage = () => {
  const {id} = useParams();
  const history = useHistory();
  const {single_package_loading: loading, single_package_error: error, single_package: packagee, fetchSinglePackage, packages, products} = useProductsContext();
  const { cart } = useCartContext()
  const inCart=cart.find(item=>item.id===id&&!item.isExamination)

  useEffect(() => {
    fetchSinglePackage(`${url}${id}`);
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
  const {personel, available} = packagee;
  const {name,description} = packages.find((item) => item.id === +id) || {}; //bierzący pakiet
  const packProducts=products.filter(product=>product.package.includes(+id)) //produkty w pakiecie
  return (
    <Wrapper>
      <PageHero title={name} />
      <div className='section section-center page'>
        <header className="package">
          <Link to='/products' className='btn'>
            all products
          </Link>
          <div className="watch">
          <p className="phrase">{inCart?'remove from ':'add page to '}watchlist</p> 
            <ToggleStar id={id} inCart={inCart}/>
          </div>
        </header>
        
        <section className=' product-grid'>
          {packProducts&&<Collection packProducts={packProducts} className='main'/>}
          <article className='content'>
            <h2>Package: {name}</h2>
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
              <Link to={`/appointment/package/${id}`} className='btn'>
                make appointment
              </Link>
            </p>
            <hr />
          </article>
        </section>
        {packProducts&&<Accordeon packProducts={packProducts}/>}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-grid {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .package {
    display: block;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    justify-items: start;
    font-size: 1.25rem;
    text-transform: capitalize;
    font-weight: bold;
    p{
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
  .content h2{color:var(--clr-grey-2);}
  .phrase{width:15rem;}
  .watch svg{margin-left:1rem;font-size:2rem;}
  svg{
    cursor: pointer;
    transition: var(--transition);
  }
  svg:hover{
    transform: scale(1.1);
  }

  .capitalize {
    text-transform: capitalize;
  }
  .watch{display:flex}
  @media (min-width: 576px) {
    .package{
      display: grid;
      align-items: center;
      p {margin: 0;}
    }
  }
  @media (min-width: 992px) {
    .product-grid {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }
`;

export default SinglePackagePage;
