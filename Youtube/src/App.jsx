import React from 'react'
import Card from './Components/Card'
const App = () => {

 const touristData = [
  {
    id: 1,
    name: "The Hill Guest House",
    address: "58 Hullbrook Road, Billesley",
    image: "https://i.pinimg.com/736x/c7/7f/08/c77f08a9ac3fcb1c0d637f1ff1bc780c.jpg",
    beds: 2,
    baths: 1,
    sqft: 1150,
  },
  {
    id: 2,
    name: "Ocean View Resort",
    address: "Palm Beach Road, Goa",
    image: "https://i.pinimg.com/1200x/23/db/2d/23db2d19dd6558d0299c8ccb9c7d9c30.jpg",
    beds: 3,
    baths: 2,
    sqft: 1450,
  },
  {
    id: 3,
    name: "Mountain Escape Villa",
    address: "Manali Hills, Himachal",
    image: "https://i.pinimg.com/736x/73/96/bb/7396bbd4082e24a73bd1835bb4b010e9.jpg",
    beds: 4,
    baths: 3,
    sqft: 2100,
  },
  {
    id: 4,
    name: "City Lights Apartment",
    address: "Andheri West, Mumbai",
    image: "https://i.pinimg.com/736x/80/14/48/801448791f3b16e46afeb34113306754.jpg",
    beds: 2,
    baths: 2,
    sqft: 980,
  },
  {
    id: 5,
    name: "Desert Pearl Stay",
    address: "Jaisalmer Fort Road, Rajasthan",
    image: "https://i.pinimg.com/1200x/33/10/8d/33108da5434b4e777f7cecb23ff6e2d5.jpg",
    beds: 5,
    baths: 4,
    sqft: 3200,
  }


 
];



  return (
    <div className='m-[30px] flex items-center gap-11 flex-wrap'>
      {touristData.map(function(elem){
       return  <Card name = {elem.name} address = {elem.address} image = {elem.image} beds = {elem.beds} baths = {elem.baths} sqft ={elem.sqft}/>
      })}
     
    </div>
  )
}

export default App

