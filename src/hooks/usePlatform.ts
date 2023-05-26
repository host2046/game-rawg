import paltform from "../data/paltform";
export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => ({ data: paltform, error: null, isLoading: false });

export default usePlatform;
