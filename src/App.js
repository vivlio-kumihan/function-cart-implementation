import React, { useState } from 'react';

import SearchComponent from './components/SearchComponent';
import ShowCourseComponent from './components/ShowCourseComponent';
import UserCartComponent from './components/UserCartComponent';

import './App.css';

const App = () => {
  // 現状、商品データをトップで状態にしている。
  // 宿題: コードを理解してから別のファイルにするべき。
  // なお、courses => 『課目』のことです。
	const [courses, setCourses] = useState([
		{ id: 1, 
		name: 'GFG T-shirt', 
		price: 499, 
		image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230823165506/gfg1.png'
		},
		{ id: 2, 
		name: 'GFG Bag', 
		price: 699, 
		image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230823165553/gfg2.jpg'
		},
		{ id: 3, 
		name: 'GFG Hoodie', 
		price: 799, 
		image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230823165623/gfg3.jpg'
		}
	]);

  // カートの状態　空の配列
	const [cartCourses, setCartCourses] = useState([]);
  // 検索の状態　空の文字列
	const [searchCourse, setSearchCourse] = useState('');

  // カートに商品を追加していく関数
  // ShowCourseComponentコンポーネントでボタンが押されたら
  // プロップス(選択した課目)が渡ってくる。
	const addCourseToCartFunction = (GFGcourse) => {
    // カートがすでに開かれているか否かで処理を変える。
    // 最初は`undefined`。次のクリックから選択した課目がオブジェクトで入っている。
		const alreadyCourses = cartCourses.find(item => item.product.id === GFGcourse.id);
    console.log(alreadyCourses);
    // すでにカートに登録されている課目であれば追加する。
		if (alreadyCourses) {
      // 単純に追加してない。なかなか疑り深い。
      // 同じidだったらquantity=>数量を1つプラスする。それ以外は新規で追加。
			const latestCartUpdate = cartCourses.map(item =>
				item.product.id === GFGcourse.id ? { ...item, quantity: item.quantity + 1 } : item
			);
      // 処理を済ませて、この状態で更新する。
			setCartCourses(latestCartUpdate);
		} else {
      // 同一商品がなければカートに追加する。
			setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
		}
	};

	const deleteCourseFromCartFunction = (GFGCourse) => {
		const updatedCart = cartCourses
							.filter(item => item.product.id !== GFGCourse.id);
		setCartCourses(updatedCart);
	};

	const totalAmountCalculationFunction = () => {
		return cartCourses
			.reduce((total, item) => 
						total + item.product.price * item.quantity, 0);
	};

  // 課目の検索機能は一旦休止させておく。全体の理解が先。
	const courseSearchUserFunction = (event) => {
		setSearchCourse(event.target.value);
	};

  // 基本的には科目全部を子コンポーネントに持ち運びするための変数。
  // 検索したらその課目を子コンポーネントへ持ち出すためのフィルター付き。
  // このフィルターは今深く考えないことにする。
	const filterCourseFunction = courses.filter((course) =>
		course.name.toLowerCase().includes(searchCourse.toLowerCase())
	);

	return (
		<div className="App">
			<SearchComponent searchCourse={searchCourse} 
				courseSearchUserFunction={courseSearchUserFunction} />
			<main className="App-main">
				<ShowCourseComponent
          // コード先頭で定義した課目をプロップスで渡す。
					courses={courses}
          // トップで定義した関数を渡す。
					filterCourseFunction={filterCourseFunction}
					addCourseToCartFunction={addCourseToCartFunction}
				/>

				<UserCartComponent
					cartCourses={cartCourses}
					deleteCourseFromCartFunction={deleteCourseFromCartFunction}
					totalAmountCalculationFunction={totalAmountCalculationFunction}
					setCartCourses={setCartCourses}
				/>
			</main>
		</div>
	);
}

export default App;