const filterNumber = (number) => number.replace(/[-()+\s]/g, '');

const addCode = (number) => {
  const filteredNumber = filterNumber(number);
  return filteredNumber.length <= 7 ? `495${filteredNumber}` : filteredNumber.slice(-10);
};

const isPhoneExist = (numbers) => {
  const [input, ...phones] = numbers;
  const newNumber = addCode(input);

  const res = phones.map((phone) => (newNumber === addCode(phone) ? 'YES' : 'NO'));

  return res;
};

export default isPhoneExist;
