import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
});

export const skinState = atom({
  key: 'skinState',
  default: 'normal',
  effects_UNSTABLE: [persistAtom],
});
