import clients from './clients';

// TODO: source should be graphQL
const single = (req, res) => {
  let { clientId } = req.params;
  clientId = parseInt(clientId, 10);
  const promo = clients.find(p => p.id === clientId);

  res.status(200).json({ promo });
};

export default single;
