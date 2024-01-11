import React from 'react'
import { Item_shopingCart } from './Item_shopingCart'

export const ShoppingCart = () => {
  const colorNav = {
    backgroundColor: '#F8E559', 
    color: '#402B3A',
  }
  return (
    <div className="container mt-5">
      <div>
          <div className="row">

            <div className="col-9">
              <Item_shopingCart/>
            </div>

            <div className="card col-3">

              <div class="card-header" style={ colorNav }>
                <span className="fs-5 text-center">Resumen de la compra</span>
              </div>

              <div className='row my-4'>
                <div className='col-7'>
                  <span className='fs-4'>Productos</span>
                </div>
                <div className='col-5'>
                  <span className='fs-4'>Total $</span>
                </div>
              </div>

              <button className='btn btn-danger mb-5'>Continuar Compra</button>

            </div>

        </div>
      </div>
    </div>
  )
}