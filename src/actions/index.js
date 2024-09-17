import { SUBMIT_CONTACT, POST_PROMO, GET_QUOTE } from '../constants/types';

export const submitContact = (contactData) => {
    return {
        type: SUBMIT_CONTACT,
        contactData
    };
};

export const postPromo = (promoData) => {
    return {
        type: POST_PROMO,
        promoData
    };
};

export const getQuote = (quoteData) => {
    return {
        type: GET_QUOTE,
        quoteData
    };
};
