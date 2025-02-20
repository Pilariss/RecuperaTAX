import { db } from "./firebaseConfig.js";
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";

export const createDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log(`${collectionName} adicionada com ID:`, docRef.id);
    return docRef.id;
  } catch (error) {
    console.error(`Erro ao adicionar documento em ${collectionName}: `, error);
    throw error;
  }
};

export const readDocuments = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(`Erro ao buscar documentos de ${collectionName}: `, error);
    throw error;
  }
};

export const readDocumentById = async (collectionName, documentId) => {
  try {
    const docRef = doc(db, collectionName, documentId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("Documento não encontrado!");
      return null;
    }
  } catch (error) {
    console.error(`Erro ao buscar documento com ID ${documentId} em ${collectionName}: `, error);
    throw error;
  }
};

export const updateDocument = async (collectionName, documentId, newData) => {
  try {
    const docRef = doc(db, collectionName, documentId);
    await updateDoc(docRef, newData);
    console.log(`Documento com ID ${documentId} atualizado com sucesso em ${collectionName}`);
  } catch (error) {
    console.error(`Erro ao atualizar documento com ID ${documentId} em ${collectionName}: `, error);
    throw error;
  }
};

export const deleteDocument = async (collectionName, documentId) => {
  try {
    const docRef = doc(db, collectionName, documentId);
    await deleteDoc(docRef);
    console.log(`Documento com ID ${documentId} excluído com sucesso de ${collectionName}`);
  } catch (error) {
    console.error(`Erro ao excluir documento com ID ${documentId} de ${collectionName}: `, error);
    throw error;
  }
};