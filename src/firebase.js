// import firebase from "firebase";
// // import { ref, onUnmounted } from "vue";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  addDoc,
  deleteDoc,
  doc,
  where,
  query,
  orderBy,
  startAt,
  endAt,
  // onSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBojyw9l145KrOxAN8nmzi1zbNXcRyO66g",
  authDomain: "mydailywordsvue.firebaseapp.com",
  projectId: "mydailywordsvue",
  storageBucket: "mydailywordsvue.appspot.com",
  messagingSenderId: "146993982260",
  appId: "1:146993982260:web:8f62191bdadf0c9828d361",
  measurementId: "G-ME8SX059YS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getUsers = async () => {
  const docUsers = collection(db, "users");
  const docSnap = await getDocs(docUsers);
  const users = await docSnap.docs.map((doc) => doc.data());
  return users;
};

export const createUser = async (user) => {
  const docUsers = collection(db, "users");
  await setDoc(docUsers, user);
};

export const createUserTest = () => {
  const user = {
    name: "test name",
  };
  const docUsers = collection(db, "users");
  return addDoc(docUsers, user);
};

export const addWord = async (newWord) => {
  const docWords = collection(db, "mywords");
  return await addDoc(docWords, newWord);
};

export const deleteWord = async (word) => {
  // const docWords = collection(db, "mywords");
  const docRef = doc(db, "mywords", word.id);
  return await deleteDoc(docRef);
};

export const updateWord = async (word) => {
  const docRef = doc(db, "mywords", word.id);
  await setDoc(docRef, word, { merge: true });
};

export const getWordByWord = async (word) => {
  const queryByWord = query(
    collection(db, "mywords"),
    where("word", "==", word)
  );
  const result = [];
  const querySnapshot = await getDocs(queryByWord);
  querySnapshot.forEach((doc) =>
    result.push({
      id: doc.id,
      word: doc.data().word,
      type: doc.data().type,
      definition: doc.data().definition,
      example: doc.data().example,
      story: doc.data().story,
    })
  );

  return result;
};

export const searchWord = async (word) => {
  var result = [];
  var queryByWord = null;
  if (word) {
    queryByWord = query(
      collection(db, "mywords"),
      orderBy("word"),
      startAt(word),
      endAt(word + "~")
    );
  } else {
    queryByWord = query(collection(db, "mywords"), orderBy("word"));
  }

  const querySnapshot = await getDocs(queryByWord);
  querySnapshot.forEach((doc) =>
    result.push({
      id: doc.id,
      word: doc.data().word,
      type: doc.data().type,
      definition: doc.data().definition,
      example: doc.data().example,
      story: doc.data().story,
    })
  );

  return result;
};

export const getAllWords = async () => {
  // const docWords = collection(db, "mywords");
  // const docSnap = await getDocs(docWords);
  // var allWords = await docSnap.docs.map((doc) => ({
  //   id: doc.id,
  //   word: doc.data().word,
  // }));
  // allWords.sort((a, b) => (a.word > b.word ? 1 : -1));
  // return allWords;

  const queryNotNull = query(
    collection(db, "mywords"),
    where("word", "!=", ""),
    orderBy("word")
  );
  const allWords = [];
  const querySnapshot = await getDocs(queryNotNull);
  querySnapshot.forEach((doc) =>
    allWords.push({
      id: doc.id,
      word: doc.data().word,
    })
  );

  return allWords;
};

// const unsubscribe = onSnapshot(collection(db, "mywords"), async (snapShot) => {
//   const allWords = await snapShot.docs.map((doc) => ({
//     id: doc.id,
//     word: doc.data().word,
//   }));
//   allWords.sort((a, b) => (a.word > b.word ? 1 : -1));
//   return allWords;
// });
