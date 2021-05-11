export const notEmpty = (
  message: string = 'Enter value'
) => (
  value: any
) => !value && message
