import promotions from './promotions';

// TODO: source should be graphQL
const single = (req, res) => {
  let { promoId } = req.params;
  promoId = parseInt(promoId, 10);
  const promo = promotions.find(p => p.id === promoId);

  res.status(200).json({ promo });
};

export default single;
