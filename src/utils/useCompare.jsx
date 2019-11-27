import usePrevious from "./usePrevious";

const useCompare = (val: any) => {
  const prevVal = usePrevious(val);
  return prevVal !== val;
};

export default useCompare;
