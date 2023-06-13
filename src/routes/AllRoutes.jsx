import React from 'react'
import { Route, Routes } from 'react-router-dom'
import JobPosting from '../components/JobPosting'
import JobListing from '../components/JobListing'

const AllRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<h1>Welcome to Job Portal</h1>} />
    <Route path='/jobpost' element={<JobPosting />} />
    <Route path='/joblist' element={<JobListing />} />
   </Routes>
  )
}

export default AllRoutes