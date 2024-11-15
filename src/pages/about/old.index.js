// about page
import React from 'react'
import Layout from '../../components/Layout/layout'
import Seo from '../../components/seo'
import About from '../../components/about'
import TeamMember from '../../components/TeamMember'

const AboutPage = () => {
  return (
    <Layout>
      <About />
      <TeamMember />
    </Layout>
  )
}

export const Head = () => <Seo title="About us" />

export default AboutPage
