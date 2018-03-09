import React from "react";
import uniqueId from "lodash/fp/uniqueId";

import Input from "../components/Input";
import Button from "../components/Button";
import ImageThumb from "../components/ImageThumb";

export default class ProductDetailsForm extends React.Component {
	state = {
		product: this.props.product,
		currency: "₹"
	};

	inputChange = e => {
		const { name, value } = e.target;
		this.setState(prevState => {
			const a = Object.assign({}, prevState);
			a.product[name] = value;
			return a;
		});
	};

	uploadImage = () => {};

	saveData = () => {
		//API CALL to push product data
		this.props.closeForm();
	};

	render() {
		const { currency, product } = this.state;
		const placeholderImageLink =
			"http://scottishstainedglass.net/wp-content/uploads/2017/09/sample-img-2-600x400.png";
		return (
			<div className="product-detail-wrapper">
				<div className=" grid grid-2">
					<ImageThumb imageSource={product.images[0]} />
					{product.images.length > 1 ? (
						<div className="grid grid-3">
							{product.images.map(imgUrl => (
								<ImageThumb
									key={uniqueId()}
									width="90px"
									imageSource={imgUrl}
								/>
							))}
							<ImageThumb
								width="90px"
								upload
								clickHandler={this.uploadImage}
								imageSource={placeholderImageLink}
							/>
						</div>
					) : (
						<ImageThumb
							upload
							clickHandler={this.uploadImage}
							imageSource={placeholderImageLink}
						/>
					)}
				</div>
				<div className="input-container">
					<Input
						label="Product Title"
						placeholder="Enter Product Title"
						name="title"
						onChange={this.inputChange}
						value={product.title}
					/>
					<Input
						prefix={currency}
						type="number"
						onChange={this.inputChange}
						label="Price"
						placeholder="Enter Product Title"
						name="price"
						placeholder="0"
						value={product.price}
					/>
					<Input
						onChange={this.inputChange}
						label="Offer Price"
						placeholder="Enter Offer Price"
						name="offerPrice"
						value={product.offerPrice}
					/>
					<Input
						prefix={currency}
						type="number"
						onChange={this.inputChange}
						label="Shipping Cost"
						name="shippingPrice"
						placeholder="0"
						value={product.shippingPrice}
					/>
					<Input
						onChange={this.inputChange}
						name="inventory"
						value={product.inventory}
						label="Inventory"
					/>
				</div>
				<div className="padding-left-25">
					<Input
						label="Description"
						onChange={this.inputChange}
						placeholder="Enter Description for Product"
					/>
				</div>
				<Button
					styleId="modal-button"
					clickHandler={this.saveData}
					square
					label="&rarr;"
				/>
			</div>
		);
	}
}
