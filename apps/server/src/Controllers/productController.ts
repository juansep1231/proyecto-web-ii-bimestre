import { json } from 'express'
import { db } from '@web/firebase-shared'
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';

export const getProducts = async (req, res) => {
    const querySnapshot = await getDocs(collection(db, 'productos'));

    const products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    res.json(products);
    console.log(products);
}

export const getProduct = async (req, res) => {
    const { id } = req.params;

    const docRef = doc(db, 'productos', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        res.json(docSnap.data());
    } else {
        res.status(404).send('No such document!');
    }
};


export const postProduct = async (req, res) => {
    const { id, description, name, price, url } = req.body;

    const docRef = doc(db, 'productos', id);
    await setDoc(docRef, {
        description, 
        name, 
        price, 
        url
    });

    res.send('Nuevo producto creado');
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;

    const docRef = doc(db, 'productos', id);
    await updateDoc(docRef, req.body);

    res.send('Producto actualizado');
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    const docRef = doc(db, 'productos', id);
    await deleteDoc(docRef);

    res.send('Producto eliminado');
};

