import { $large, $upToMedium, $upToSmall } from '../styles/variables';

const upToSmall = window.matchMedia($upToSmall);
const upToMedium = window.matchMedia($upToMedium);
const large = window.matchMedia($large);

export const isUpToSmall = () => upToSmall.matches;

export const isUpToMedium = () => upToMedium.matches;

export const isLarge = () => large.matches;
