import React from "react";
import Card from "../components/Card";
import ProductDetailsForm from "./ProductDetailsForm";

export default class ProductCards extends React.Component {
	state = {
		data: this.props.data,
		visibleModals: []
	};

	showEditModalFor = id => {
		const currModals = [...this.state.visibleModals];
		currModals.push(id);
		this.setState({
			visibleModals: currModals
		});
	};

	render() {
		const { data, visibleModals } = this.state;
		const CardList = data.map(product => (
			<div key={product.id}>
				<Card
					clickHandler={() => {
						this.showEditModalFor(product.id);
					}}
					title={product.title}
					price={product.price}
					images={product.images}
				/>
				{visibleModals.includes(product.id) ? (
					<ProductDetailsForm product={product} />
				) : null}
			</div>
		));
		return <div className="cards-list">{CardList}</div>;
	}
}
