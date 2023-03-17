import { useRecoilState } from 'recoil';

import { skinState } from '../models/SkinAtom';

const SkinViewModel = () => {
  const [skin, setSkin] = useRecoilState(skinState);

  const skins = ['normal', 'excel'];
  let idx = skins.findIndex((item: string) => item === skin);

  const changeSkin = () => {
    idx = (idx + 1) % skins.length;
    setSkin(skins[idx]);
  };

  return { changeSkin };
};

export default SkinViewModel;
