export const min = (
  minimum: number,
  message: string = `Minimum is ${minimum}`
) => (
  value: number
): false | string  => value < minimum && message;
