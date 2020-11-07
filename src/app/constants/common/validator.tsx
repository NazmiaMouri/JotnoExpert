const PHONE_REGEX = new RegExp(/^(?:\+\88|02)?(?:\d{11}|\d{7})$/);
const NAME_REGEX = new RegExp(
  /^\s*([A-Za-z]{1,}([\.,] |[-']| ?))+[A-Za-z]+\.?\s*$/,
);

export const validatePhoneFn = (phone: string) => {
  return PHONE_REGEX.test(phone);
};

export const validateNameFn = (name: string) => {
  return NAME_REGEX.test(name);
};
