import React from 'react'

const Dishes = ({ products }) => {
    return (
        <div>
            {products.map((product) => {
                return <p>{product.title}</p>
            })}
        </div>
    )
}

export default Dishes
