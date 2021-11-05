import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBUDuVuSrEVw7L2fMcy8sJluYEhjOSTfvM',
	authDomain: 'crwn-clothing-db-ee0e1.firebaseapp.com',
	projectId: 'crwn-clothing-db-ee0e1',
	storageBucket: 'crwn-clothing-db-ee0e1.appspot.com',
	messagingSenderId: '135378218301',
	appId: '1:135378218301:web:95ea3d45d132bd0c2d6954',
	measurementId: 'G-WF7JMDKTJ0'
};

export const createUser = async (
	userAuth: firebase.User | null,
	additionalData?: any
) => {
	if (!userAuth) return null;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapshot = await userRef.get();

	if (snapshot.exists) return userRef;

	const { displayName, email } = userAuth;
	const createdAt = new Date();

	try {
		await userRef.set({
			displayName,
			email,
			createdAt,
			...additionalData
		});
	} catch (error) {
		console.log(error);
	}

	return userRef;
};

export const addCollectionAndDocs = async (
	collectionKey: string,
	objectsToAdd: any[]
) => {
	const collectionRef = firestore.collection(collectionKey);
	const batch = firestore.batch();

	for (const obj of objectsToAdd) {
		const newDocRef = collectionRef.doc(obj.title);
		batch.set(newDocRef, obj);
	}

	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (
	snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
) => {
	const transformedCollections = snapshot.docs.map(
		(doc: firebase.firestore.DocumentData) => {
			const { title, items } = doc.data();

			return {
				routeName: encodeURI(title.toLowerCase()),
				title,
				items,
				id: doc.id
			};
		}
	);

	return transformedCollections.reduce((acc, collection) => {
		acc[collection.title.toLowerCase()] = collection;
		return acc;
	}, {} as Collections);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getUserAuth = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
