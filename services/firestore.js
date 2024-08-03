// services/firestore.js
import { collection, addDoc, updateDoc, deleteDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const pantryCollection = collection(db, "pantry");

export const addItem = async (item) => {
  return await addDoc(pantryCollection, item);
};

export const updateItem = async (id, updatedItem) => {
  const itemDoc = doc(db, "pantry", id);
  return await updateDoc(itemDoc, updatedItem);
};

export const deleteItem = async (id) => {
  const itemDoc = doc(db, "pantry", id);
  return await deleteDoc(itemDoc);
};

export const getItems = async () => {
  const querySnapshot = await getDocs(pantryCollection);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
