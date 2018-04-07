import promotions from './promotions';

// TODO: source should be graphQL
const all = ({ res }) => res.status(200).json({ promotions });

export default all;
