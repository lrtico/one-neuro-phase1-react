export const normalizePhone = value => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums.length <= 3) {
    return onlyNums;
  }
  if (onlyNums.length <= 7) {
    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}`;
  }
  return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(
    6,
    10
  )}`;
};

export const normalizeCapitalizeWords = value => {
  if (!value) {
    return value;
  }
  const capitalizeWord = value.replace(/\b\w/g, l => l.toUpperCase());
  console.log("normalizeCapitalizeWords value = ", capitalizeWord);
  return capitalizeWord;
};

export const onlyNums = value => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, "");
  return onlyNums;
};
