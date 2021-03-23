import React from 'react'
import styled from 'styled-components'

import { breakPoints } from '../components/MediaType'
import Layout from '../components/Layout'
import Seo from '../components/seo'

const AboutMe = styled.section`
  margin-top: 30px;
  margin-bottom: 45px;
  padding: 1px 22px;
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: 1px;

  @media ${breakPoints.phone} {
     font-size: 17px;
  }
`
export default () => {
  return (
    <Layout>
      <Seo title='About' />
      <AboutMe>
        <p>
          We are SourceRT, your partner for Real-Time engagement, service and support in Tech, Software, Projects and Logistics.
          <br />
          <br />
          <br />
          We are always looking for projects and great team members. 
           </p>
        <marquee direction="right">#SourceRT</marquee>
      </AboutMe>
    </Layout>
  )
}
