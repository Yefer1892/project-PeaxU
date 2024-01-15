import React from 'react';
import { ProductCard } from '../graphic- interface/components/ProductCard';
import { NavSignedIn } from '../graphic- interface/components/NavSignedIn';
import { Carousel } from '../graphic- interface/components/Carousel';
import { Footer } from '../graphic- interface/components/Footer';

export const FishFood = () => {

  return (
    <div className="fishfood">
        <NavSignedIn/>
        <Carousel/>
        <h1 className='text-center m-5'>
            Alimento para peces
        </h1>
        <div className="container mt-4">
            <div className="row m-5 d-flex justify-content-between">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
            <div className="row m-5 d-flex justify-content-between">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div> 
        <Footer/> 
    </div>
  )
}



