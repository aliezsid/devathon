import uniqueId from "lodash/fp/uniqueId";

const mockData = [
	{
		id: uniqueId(),
		title: "",
		images: [
			"https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?w=1260&h=750&auto=compress&cs=tinysrgb"
		],
		price: "",
		offerPrice: "",
		shippingPrice: "",
		inventory: "",
		productDescription: ""
	},
	{
		id: uniqueId(),
		title: "",
		images: [
			"https://images.pexels.com/photos/640781/pexels-photo-640781.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
			"https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?w=1260&h=750&auto=compress&cs=tinysrgb"
		],
		price: "",
		offerPrice: "",
		shippingPrice: "",
		inventory: "",
		productDescription: ""
	}
	// {
	// 	id: uniqueId(),
	// 	title: "",
	// 	images: [],
	// 	price: "",
	// 	offerPrice: "",
	// 	shippingPrice: "",
	// 	inventory: "",
	// 	productDescription: ""
	// },
	// {
	// 	id: uniqueId(),
	// 	title: "",
	// 	images: [],
	// 	price: "",
	// 	offerPrice: "",
	// 	shippingPrice: "",
	// 	inventory: "",
	// 	productDescription: ""
	// },
	// {
	// 	id: uniqueId(),
	// 	title: "",
	// 	images: [],
	// 	price: "",
	// 	offerPrice: "",
	// 	shippingPrice: "",
	// 	inventory: "",
	// 	productDescription: ""
	// },
	// {
	// 	id: uniqueId(),
	// 	title: "",
	// 	images: [],
	// 	price: "",
	// 	offerPrice: "",
	// 	shippingPrice: "",
	// 	inventory: "",
	// 	productDescription: ""
	// }
];

export default mockData;
