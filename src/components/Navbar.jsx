import { Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import JobPosting from './JobPosting'
import JobListing from './JobListing'

const Navbar = () => {
 
  return ( <>
     <div style={{display: 'flex', justifyContent:'space-around'}}>
        <a  href="/jobpost">Job Posting</a>
        <a   href="/joblist">Job Listing </a>
         
     </div>
    
  </>
  )
}

export default Navbar