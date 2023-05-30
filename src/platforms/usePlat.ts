import usePlatform from "./usePlatform";

const usePlat = (id?: number) => {
  const { data: platforms } = usePlatform();
  return platforms?.results.find((p) => p.id === id);
};
export default usePlat;
