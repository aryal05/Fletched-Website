import React from 'react'
import Hero from '../components/Hero'
import LatestCollectioon from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollectioon/>
      <BestSeller/>
    </div>
  )
}

export default Home
