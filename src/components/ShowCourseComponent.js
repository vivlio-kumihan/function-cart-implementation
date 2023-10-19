//components/ShowCourseComponent.js
import React from 'react';

// 親から渡ってきたプロップス（科目が入ったオブジェクトと関数）を受け取る。
const ShowCourseComponent = ({ courses, filterCourseFunction, addCourseToCartFunction }) => {
	return (
		<div className="product-list">
      {/* オブジェクトのデータを出力しているだけ。 */}
      {/* { */}
        {/* courses.map((item) => ( */}
          {/* <ul> */}
            {/* <li>{item.name}</li> */}
            {/* <li>{item.id}</li> */}
            {/* <li>{item.price}</li> */}
            {/* <li>{item.image}</li> */}
          {/* </ul> */}
        {/* )) */}
      {/* } */}
      {/* それを検索機能をつけた場合のコードになっているだけ。 */}
      {/* 条件で振り分けてる。 */}
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
            {/* このコンポーネントはここが鍵。 */}
            {/* クリックしたらプロップス(選択した商品情報)を引数に */}
            {/* カートに商品を追加する関数を実行する。 */}
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