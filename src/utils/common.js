/**
 * normalize phone number
 *
 * @param {*} value
 * @returns 123-456-789
 */
export const normalizePhone = value => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 3) {
    return onlyNums;
  }
  if (onlyNums.length <= 7) {
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
  }

  return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(
    6,
    10,
  )}`;
};

/**
 * convert first character of string to uppercase
 *
 * @param {*} str anyString
 * @returns AnyString
 */
export const jsUcFirst = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * get form label
 *
 * @param {*} str key1.key2.formLabel
 * @returns formLabel
 */
export const getFormLabel = str => {
  const temp = str.split('.')[str.split('.').length - 1];

  return jsUcFirst(temp)
    .match(/[A-Z][a-z]+/g)
    .map((item, idx) =>
      idx === 0 ? jsUcFirst(item.toLowerCase()) : item.toLowerCase(),
    )
    .join(' ');
};
