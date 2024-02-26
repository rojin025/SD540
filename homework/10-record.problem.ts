type CacheType = {
  [key: string]: string;
};

const createCache = () => {
  const cache: CacheType = {};
  // const cache: Record<string, string> = {}
  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};
