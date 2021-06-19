import {OFFERS_COUNT} from './data.js';
import {generateOffer} from './data.js';
import {renderCards} from './offer.js';

const listOffer = new Array(OFFERS_COUNT).fill(null).map(generateOffer);

renderCards(listOffer);
