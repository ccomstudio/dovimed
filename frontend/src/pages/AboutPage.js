import React, {useEffect} from "react";
import {useProductsContext} from "../context/products_context";
import {single_product_url as url} from "../utils/constants";
import {Loading, Error, PageHero} from "../components";
import styled from "styled-components";
import Tabs from "../components/Tabs";
import {useHistory} from "react-router-dom";

const AboutPage = () => {
  const {about_loading: loading, about_error: error, about, fetchAbout} = useProductsContext();
  const history = useHistory();
  const {intro, features} = about;
  useEffect(() => {
    fetchAbout(url);
    // eslint-disable-next-line
  }, []);

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

  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page'>
        <header className='about-header section-center section'>
          <img src={"https://res.cloudinary.com/dkm9cvsyg/image/upload/v1647959394/lab/team2_l2qn4n.jpg"} alt='nice desk' />
          <article>
            <div className='title'>
              <h2>our mission</h2>
              <div className='underline'></div>
            </div>
            <p className='dsc'>{intro}</p>
          </article>
        </header>
        {features && <Tabs features={features} />}
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  .about-header {
    display: grid;
    gap: 2rem;
    align-items: center;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 300px;
    object-fit: cover;
  }
  .dsc {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    .about-header {
      grid-template-columns: 1fr 1fr;
      gap:4rem;
    }
    img{
      height: 500px;
    }
  }
`;
export default AboutPage;
