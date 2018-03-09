import React from "react";
import Card from "../components/Card";
import ProductDetailsForm from "./ProductDetailsForm";

export default class ProductCards extends React.Component {
	state = {
		data: this.props.data,
		visibleModalId: false
	};

	showEditModalFor = id => {
		this.setState({
			visibleModalId: id
		});
	};

	removeModal = () => {
		this.setState({
			visibleModalId: false
		});
	};

	render() {
		const { data, visibleModalId } = this.state;
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
				{visibleModalId === product.id ? (
					<ProductDetailsForm
						closeForm={this.removeModal}
						product={product}
					/>
				) : null}
			</div>
		));
		return <div className="cards-list">{CardList}</div>;
	}
}
