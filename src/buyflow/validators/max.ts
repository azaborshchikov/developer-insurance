export const max = (
  maximum: number,
  message: string = `Maximum is ${maximum}`
) => (
  value: number
): false | string  => value > maximum && message;
