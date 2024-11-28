import React from 'react'
import './ServicesCard.css'
import { search, drug,consult,info, emergencyCare, tracking } from '../../assets'


let serviceList = [
  {
    id: 1,
    title: "Search doctor",
    description: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    image: search,
  },
  {
    id: 2,
    title: "Online pharmacy",
    description: "Buy  your medicines with our mobile application with a simple delivery system",
    image: drug,
  },
  {
    id: 3,
    title: "Consultation",
    description: "Free consultation with our trusted doctors and get the best recomendations",
    image: consult,
  },
  {
    id: 4,
    title: "Details info",
    description: "Free consultation with our trusted doctors and get the best recomendations",
    image: info,
  },
  {
    id: 5,
    title: "Emergency care",
    description: "You can get 24/7 urgent care for yourself or your children and your lovely family",
    image: emergencyCare,
  },
  {
    id: 6,
    title: "Tracking",
    description: "Track and save your medical history and health data ",
    image: tracking,
  },
];

const ServicesCard = () => {
  return (
    <div className='services-card section__container'>
        {serviceList.map((service) => (
          <div className='service-card' key={service.id}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
    </div>
  )
}

export default ServicesCard