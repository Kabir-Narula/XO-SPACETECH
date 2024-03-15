import { atom } from 'jotai';

// Atom for storing favorite artworks (represented by an array of object IDs)
export const favouritesAtom = atom([]);

// Atom for storing the search history (represented by an array of query strings)
export const searchHistoryAtom = atom([]);
