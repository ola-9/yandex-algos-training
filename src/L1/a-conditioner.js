const conditioner = (inputs) => {
  let result = 0;
	const [troom, tcond] = inputs[0].split(' ').map(Number);
  const mode = lines[1].trim();
  if (mode === 'heat') {
    result = troom < tcond ? tcond : troom;
  } else if (mode === 'freeze') {
    result = troom > tcond ? tcond : troom;
  } else if (mode === 'auto') {
    result = tcond;
  } else if (mode === 'fan') {
    result = troom;
  }
  return result;
};

export default conditioner;
