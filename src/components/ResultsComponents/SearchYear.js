import Sidebar from 'components/Sidebar'
import React from 'react'
import styled from "styled-components";
import SearchFeature from './SearchFeature';
import RegistrationHeader from './RegistrationHeader'


const SearchYear = () => {

    




  return (
    <>
    <div className='bg-white'>
    <div > 
        <Sidebar />  
        <RegistrationHeader /> 
           <SelectAcademicYearRoot>Select academic year </SelectAcademicYearRoot>
           <SearchFeature />
   
      

    </div>
    </div> 
    </> 
  )
}

const SelectAcademicYearRoot = styled.div`
  font-size: 16px;
  font-family: Product Sans Medium;
  line-height: 15.52px;
  color: #2d0353;
  padding-bottom: 40px; 
  padding-left: 18px;
`;


export default SearchYear