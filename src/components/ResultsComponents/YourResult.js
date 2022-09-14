import React from 'react'
import "../br.css" 
import SearchYear from './SearchYear'
import styled from "styled-components";


const YourResult = () => {
  return (
    <div className='bg-white'>
        <SearchYear />
        <br />
        <div className='ml-4'>
        <YourResultRoot>Your Result</YourResultRoot>  
        </div>
        

         <div className='bg-white ml-5 '> 
     <table className='Youresult' style={{width:""}}>  
     <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
         <th style={{width:"60px"}}></th>
         <th style={{width:"100px"}}>Course Code</th>
         <th style={{width:"140px"}} >Department</th>
         <th style={{width:"140px"}}>Course Title</th>
         <th style={{paddingLeft:"0px", width:"90px"}}>Unit</th>
         <th style={{width:"90px"}}>Score</th>
         <th style={{width:"90px"}}>Grade</th> 
         <th style={{width:"90px"}}>Point</th>  
         
     </tr>
     <tr style={{height:"70px"}}> 
         <td > <input style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td> 
         <td>STA 101</td>
         <td style={{paddingLeft:"10px"}}>Statistics</td>
         <td>Introduction to Statistics and Maths</td>
         <td>4</td>
         <td>60</td>
         <td>8</td>
         <td>16</td>
     </tr>
     <tr className='bg-gray-100' style={{height:"70px"}}> 
         <td> <input style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/> </td>
         <td>STA 101</td>
         <td style={{paddingLeft:"10px"}}>Statistics</td>
         <td>Introduction to Statistics and Maths</td>
         <td>4</td>
         <td>60</td>
         <td>8</td>
         <td>16</td>
     </tr>
     <tr style={{height:"70px"}}> 
         <td ><input style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
         <td >STA 101</td>
         <td style={{paddingLeft:"10px"}}>Statistics</td>
         <td>Introduction to Statistics and Maths</td>
         <td>4</td>
         <td>60</td>
         <td>8</td>
         <td>16</td>
     </tr>
     <tr className='bg-gray-100' style={{height:"70px"}}> 
         <td ><input style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
         <td>STA 101</td>
         <td style={{paddingLeft:"10px"}}>Statistics</td>
         <td>Introduction to Statistics and Maths</td>
         <td>4</td>
         <td>60</td>
         <td>8</td>
         <td>16</td>
     </tr>
     <tr style={{height:"70px"}}> 
         <td><input style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/> </td>
         <td>STA 101</td>
         <td style={{paddingLeft:"10px"}}>Statistics</td>
         <td>Introduction to Statistics and Maths</td>
         <td>4</td>
         <td>60</td>
         <td>8</td>
         <td>16</td> 
     </tr>

     <tr className='bg-gray-100' style={{height:"70px"}}> 
         <td ><input style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
         <td>STA 101</td>
         <td style={{paddingLeft:"10px"}}>Statistics</td>
         <td>Introduction to Statistics and Maths</td>
         <td>4</td>
         <td>60</td>
         <td>8</td>
         <td>16</td> 
     </tr>

     <tr style={{height:"70px",}}> 
         <td colspan="2" >Total Point </td>
         <td></td>
         <td></td>
         <td></td>
         <td>16</td>
         <td></td>
         <td>120</td>
         <td></td>  
     </tr>

     <tr style={{height:"70px"}}> 
         <td >GPA </td>
         <td></td>
         <td></td>
         <td></td>
         <td>4.0</td>
         <td></td>
         <td></td>
         <td></td>  
     </tr>
     
     
 </table>

  
 
</div>
        
    </div>
  )
}
const YourResultRoot = styled.div`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #2d0353;
`;

export default YourResult