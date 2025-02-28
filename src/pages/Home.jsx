import React from 'react'
import Hero from '../components/Hero'
import Categories from "../components/Categories"
import Research from "../components/Research"

const Home = () => {
  return (
    <div>
      <Hero />
      <Research />
      <Categories/>
    </div>
  )
}

export default Home