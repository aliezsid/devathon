import React from "react";
import uniqueId from "lodash/fp/uniqueId";

import Input from "../components/Input";
import Button from "../components/Button";
import ImageThumb from "../components/ImageThumb";

export default class ProductDetailsForm extends React.Component {
	state = {
		product: this.props.product
	};

	render() {
		const { product } = this.state;
		const placeholderImageLink =
			"http://scottishstainedglass.net/wp-content/uploads/2017/09/sample-img-2-600x400.png";
		return (
			<div className="product-detail-wrapper">
				<div className="image-container">
					{product.images.map(imgUrl => (
						<ImageThumb key={uniqueId()} imageSource={imgUrl} />
					))}
					<ImageThumb imageSource={placeholderImageLink} />
				</div>
				<div className="input-container width-50">
					<Input placeholder="Product Title" />
					<Input placeholder="Price" />
					<Input placeholder="Offer Price" />
					<Input placeholder="Shipping Cost" />
					<Input placeholder="Inventory" />
				</div>
				<div className="flex width-100">
					<Input placeholder="Description" />
				</div>
				<Button styleId="modal-button" square label="->" />
			</div>
		);
	}
}
