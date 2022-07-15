"use strict";

import { getFirestore, collection, getDocs } from "firebase/firestore";

export const useFirestore = () => {
  const db = getFirestore();
  const getBooks = async () => {
    const booksCollection = collection(db, "books");
    const booksSnapshot = await getDocs(booksCollection);
    const booksList = booksSnapshot.docs.map(doc => doc.data());
    console.log(booksList);
  }
  return {
    getBooks,
  }
}