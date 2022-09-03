import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title="About"/>
    <Wrapper className='page section section-center'>
<img src={aboutImg} alt="desk" />
<article className='title'>
  <div>
    <h2>Our story</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum deleniti quaerat doloribus facilis facere nesciunt ipsum nostrum id reiciendis laudantium. Non rem quos, molestiae perspiciatis explicabo ipsa veniam incidunt, qui provident eligendi cumque id, blanditiis temporibus modi! Asperiores sit aspernatur quae beatae distinctio et reprehenderit, eius cupiditate dolores dicta ratione.</p>
  </div>
</article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
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
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
