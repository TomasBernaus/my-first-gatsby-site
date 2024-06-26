import React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import About from '../../components/about'
import TeamMember from '../../components/teamMember'

const AboutPage = () => {
  return (
    <Layout pageTitle="About us">
      <About />
      <TeamMember />
    </Layout>
  )
}

export const Head = () => <Seo title="About us" />

export default AboutPage
