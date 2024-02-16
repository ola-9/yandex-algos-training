import isPhoneExist from "../src/L1/c-phoneNumbers";

describe('isPhoneExist', () => {
  
  test('example1', () => {
    const example1 = [
      '8(495)430-23-97',
      '+7-4-9-5-43-023-97', // YES
      '4-3-0-2-3-9-7', // YES
      '8-495-430']; // NO
    expect(isPhoneExist(example1)).toEqual(['YES', 'YES', 'NO']);
  });

  test('example2', () => {
    const example2 = [
      '86406361642',
      '83341994118', // NO
      '86406361642', // YES
      '83341994118', // NO
    ];
  
    expect(isPhoneExist(example2)).toEqual(['NO', 'YES', 'NO']);
  });


  test('example3', () => {
    const example3 = [
      '+78047952807',
      '+78047952807', // YES
      '+76147514928', // NO
      '88047952807' // YES
    ];
  
    expect(isPhoneExist(example3)).toEqual(['YES', 'NO', 'YES']);
  });

  test('example4', () => {
    const example4 = [
      '2563957',
      '+74952563957', // YES
      '84952563957', // YES
      '83952563957', // NO
    ];
  
    expect(isPhoneExist(example4)).toEqual(['YES', 'YES', 'NO']);
  });

  test('example5', () => {
    const example5 = [
      '835-5-18-5',
      '8-3-55-1-85', // YES
      '7-355185', // NO
      '835-518-5', // YES
    ];
  
    expect(isPhoneExist(example5)).toEqual(['YES', 'NO', 'YES']);
  });

});
