import {
  getDocs,
  DocumentData,
  collection,
  limit,
  query,
  orderBy,
  addDoc,
} from 'firebase/firestore/lite';
import { db } from '../utils/firebase';

const RankViewModel = {
  getRank: async () => {
    const ret: Array<any> = [];
    const rankingRef = collection(db, 'ranking');
    const q = query(rankingRef, orderBy('score', 'desc'), limit(100));
    const rankingSnapshot = await getDocs(q);
    rankingSnapshot.forEach((doc: DocumentData) => {
      ret.push(doc.data());
    });
    return ret;
  },
  setRank: async (nickname: string, score: number) => {
    const rankingRef = await addDoc(collection(db, 'ranking'), {
      nickname: nickname,
      score: score,
    });
    return rankingRef;
  },
};

export default RankViewModel;
