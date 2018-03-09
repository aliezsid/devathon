import uniqueId from "lodash/fp/uniqueId";

const mockData = [
	{
		id: uniqueId(),
		title: "Lion",
		images: [
			"https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?w=1260&h=750&auto=compress&cs=tinysrgb"
		],
		price: "3,000,000",
		offerPrice: "",
		shippingPrice: "",
		inventory: "",
		productDescription: ""
	},
	{
		id: uniqueId(),
		title: "Mountain",
		images: [
			"https://images.pexels.com/photos/640781/pexels-photo-640781.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
			"https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?w=1260&h=750&auto=compress&cs=tinysrgb",
			"https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?w=1260&h=750&auto=compress&cs=tinysrgb"
		],
		price: "3,000,000",
		offerPrice: "2,00,000",
		shippingPrice: "",
		inventory: "",
		productDescription: ""
	},
	{
		id: uniqueId(),
		title: "",
		images: [
			"https://images.pexels.com/photos/753994/pexels-photo-753994.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
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
			"https://images.pexels.com/photos/681405/pexels-photo-681405.jpeg?h=350&auto=compress&cs=tinysrgb",
			"https://images.pexels.com/photos/97904/pexels-photo-97904.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
		],
		price: "",
		offerPrice: "",
		shippingPrice: "",
		inventory: "",
		productDescription: ""
	}
];

export default mockData;
