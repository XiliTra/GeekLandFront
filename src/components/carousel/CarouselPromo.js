import React, { Suspense } from 'react'
import './../../css/components/carousel/CarouselHomeArticle.css'
import Article from './Article'
import axios from 'axios';

export default class CarouselPromo extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			index: 1,
			items: []
		}

		this.right = this.right.bind(this)
		this.left = this.left.bind(this)

	}

	componentDidMount() {
		this.resizeItems()
		this.resizeContainer()
		let carousel__btn = document.getElementById('carousel__btn_left')

		if (this.state.index == 1) {
			carousel__btn.style.visibility = 'hidden';
		} else {
			carousel__btn.style.display = 'visible';

		}

		this.fetchImages()

	}


	componentDidUpdate(){
		this.resizeItems()
		this.resizeContainer()
		let carousel__btn = document.getElementById('carousel__btn_left')

		if (this.state.index == 1) {
			carousel__btn.style.visibility = 'hidden';
		} else {
			carousel__btn.style.display = 'visible';

		}
	}

	resizeContainer() {
		let carousel__container = document.querySelector('.carousel__container')

		let childs = carousel__container.childNodes;

		let scaleChilds = this.props.display < childs.length ? 100 / this.props.display : (100 / childs.length);

		let scaleContainer = scaleChilds * childs.length;

		carousel__container.style.width = scaleContainer + '%';
	}

	resizeItems() {
		let carousel__container = document.querySelector('.carousel__container')
		let childs = carousel__container.childNodes

		let scale = this.props.display > childs.length ? (100 / this.props.display) : (100 / childs.length);

		childs.forEach((item) => {
			item.style.width = scale + '%'
		})
	}

	right() {


		let carousel__container = document.querySelector('.carousel__container')
		let childs = carousel__container.childNodes
		let lastIndex = this.state.index;
		let newIndex = lastIndex + (this.props.display);


		let scale = newIndex * -100 / childs.length

		let carousel__btn_left = document.getElementById('carousel__btn_left')
		let carousel__btn_right = document.getElementById('carousel__btn_right')



		carousel__btn_left.style.visibility = 'visible';


		if ((newIndex + this.props.display) >= childs.length) {
			console.log('test');

			carousel__btn_right.style.visibility = 'hidden';
		} else {
			carousel__btn_right.style.visibility = 'visible';

		}
		carousel__container.style.transform = `translate3d(${scale}%, 0, 0)`;

		this.setState({
			index: newIndex
		})

		console.log(newIndex);
	}


	left() {

		let carousel__btn_left = document.getElementById('carousel__btn_left')
		let carousel__btn_right = document.getElementById('carousel__btn_right')
		let carousel__container = document.querySelector('.carousel__container')
		let childs = carousel__container.childNodes
		let lastIndex = this.state.index;




		let newIndex = lastIndex - (this.props.display);

		carousel__btn_left.style.visibility = 'visible';


		if (newIndex == 1) {

			carousel__btn_left.style.visibility = 'hidden';
			carousel__btn_right.style.visibility = 'visible';


		} else {

			carousel__btn_left.style.visibility = 'visible';
			carousel__btn_right.style.visibility = 'visible';

		}

		let scale = newIndex * -100 / childs.length
		// console.log(newIndex);


		carousel__container.style.transform = `translate3d(${scale}%, 0, 0)`;

		this.setState({
			index: newIndex
		})


	}


	fetchImages() {
		axios.get('https://picsum.photos/v2/list?limit=30').then((response) => {

			let items = []


			response.data.forEach((data) => {
				items.push(<Article url={data.download_url} />)
			})


			this.setState({
			    items: items
			})
		})
		

	}


	render() {
		return (
			<div className='carousel'>
				<ul className='carousel__container'>

					{this.state.items}
				</ul>

				<div className='carousel__conatiner_btn'>
					<div id='carousel__btn_left' className="carousel__btn_left carousel__btn" onClick={this.left}></div>
					<div id='carousel__btn_right' className="carousel__btn_right carousel__btn" onClick={this.right}></div>
				</div>

			</div>
		);
	}

}