import clients from './clients';

const all = ({ res }) => res.status(200).json({ clients });

export default all;
