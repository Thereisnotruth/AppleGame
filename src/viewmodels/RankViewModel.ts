import {
  getDocs,
  DocumentData,
  collection,
  limit,
  query,
  orderBy,
  addDoc,
  updateDoc,
  doc,
  getDoc,
} from 'firebase/firestore/lite';
import { db } from '../utils/firebase';

const RankViewModel = () => {
  const getRank = async () => {
    const rankingRef = doc(db, 'ranking', 'ranking');
    const rankingSnapshot = await getDoc(rankingRef);
    const ret: Array<any> = rankingSnapshot.data()?.ranking;
    ret.sort((a: any, b: any) => b.score - a.score);
    return ret;
  };
  const setRank = async (nickname: string, score: number) => {
    const rank: Array<any> = await getRank();
    rank.push({ nickname, score });
    rank.sort((a: any, b: any) => b.score - a.score);
    const rankingRef = doc(db, 'ranking', 'ranking');
    await updateDoc(rankingRef, {
      ranking: rank.slice(0, 100),
    });
  };
  return {
    getRank,
    setRank,
  };
};

export default RankViewModel;
