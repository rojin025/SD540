const getName2 = (first: string, last?: string): string => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

const name3 = getName2("Theo");

const name4 = getName2("Asaad", "Saad");
