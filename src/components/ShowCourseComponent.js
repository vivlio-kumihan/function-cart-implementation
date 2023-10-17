//components/ShowCourseComponent.js
import React from 'react';

const ShowCourseComponent = ({ courses, filterCourseFunction, addCourseToCartFunction }) => {
	return (
		<div className="product-list">
			{filterCourseFunction.length === 0 ? (
				<p className="no-results">
					Sorry Geek, No matching Product found.
				</p>
			) : (
				filterCourseFunction.map((product) => (
					<div className="product" key={product.id}>
						<img src={product.image} alt={product.name} />
						<h2>{product.name}</h2>
						<p>Price: ₹{product.price}</p>
						<button
							className="add-to-cart-button"
							onClick={() => addCourseToCartFunction(product)}
						>
							カートに追加
						</button>
					</div>
				))
			)}
		</div>
	);
}

export default ShowCourseComponent;