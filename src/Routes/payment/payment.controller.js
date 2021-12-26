export const handlePayment = async (req, res) => {
	const { amount, token, description = 'none' } = req.body;
	const body = {
		amount,
		source: token.id,
		description,
        currency: 'usd'
	};

	Object.keys(token).forEach(key => {
		if (key.includes('address')) body[key] = token[key];
	});

	try {
		const stripeRes = await req.stripe?.charges.create(body);
		res.status(200).json(stripeRes);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};
