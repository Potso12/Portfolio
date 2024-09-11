import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { Skill } from './types/types';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:  "AIzaSyCncH5yKUpUkQMTrElPYdjREjP4hUy7FSs",// process.env.apiKey,
  authDomain: "portfolio-2db6d.firebaseapp.com",//process.env.authDomain,
  projectId: "portfolio-2db6d",//process.env.projectId,
  storageBucket: "portfolio-2db6d.appspot.com", //process.env.storageBucket,
  messagingSenderId: "777681941325", //process.env.messagingSenderId,
  appId: "1:777681941325:web:0e992faad2828a4a957d04", //process.env.appId,
  measurementId: "G-M6V5G6BQ1D", //process.env.measurementId
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const fetchData = async (collectionName: string): Promise<Skill[] | undefined> => {
  try {

    const itemsCollection = collection(db, collectionName);
    console.log('collection created')

    const itemsSnapshot = await getDocs(itemsCollection);
    console.log(itemsSnapshot)

    const skills: Skill[] = []
    const data = itemsSnapshot.docs.map(doc => doc.data());
    console.log(data)

    data.forEach((item) => {
      const skill: Skill = {
        name: item.name,
        info: item.info,
        logoUrl: item.ImageUrl,
        StarAmount: item.StarAmount
      }
      skills.push(skill)
    })


    console.log(skills)
    return skills;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default fetchData;