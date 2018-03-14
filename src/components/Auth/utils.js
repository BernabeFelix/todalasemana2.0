export const validateRequired = (field, fieldErrorText, state, errors) => {
  const toUpdate = {};
  let isValid = true;

  const { [field]: fieldValue, [fieldErrorText]: errorText } = state;

  // if the field is empty
  if (!fieldValue) {
    // show error message
    toUpdate[fieldErrorText] = errors[field].required;
    isValid = false;
  } else if (errorText) {
    // remove error message if the field is already fulfilled
    toUpdate[fieldErrorText] = '';
  }

  return { isValid, toUpdate };
};

export const areAllTrue = (arr) => arr.every(el => el)