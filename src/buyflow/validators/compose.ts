export const compose = (...validators: Array<(value: any) => false | string>) => (value: any) => {
  for (let validator of validators) {
    const error = validator(value);
    if (error) return error;
  }
  return false;
}
