import { Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import JobCard from './JobCard'
import { baseUrl } from './Url'
import axios from 'axios'



const JobListing = () => {

const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])
  

  const getData = async() => {
    let res = await axios(`${baseUrl}/jobData`)
    console.log(res.data)

    setData(res.data)
  }

  // getData()

  return (
    <Stack>

      {data.length >0 && data.map((e)=> <JobCard key={e.id}   {...e}  />) }
      
    </Stack>
  )
}

export default JobListing