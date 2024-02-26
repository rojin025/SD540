type Params = {
  first: number;
  second: number;
};

const addTwoNumbers2 = (params: Params): number => {
  return params.first + params.second;
};
