import React from 'react'
import CareerContent from './CareerContent'
import CareerForm from './CareerForm'
import CareerBanner from './CareerBanner'
import JobCategories from './JobCategories'
import JobOpenings from './JobOpenings'

const CareerHome = () => {
  return (
    <>
    <CareerBanner/>
    <CareerContent/>
    <JobCategories/>
    <JobOpenings/>
    <CareerForm/>
    </>
  )
}

export default CareerHome
