import { isAxiosError } from 'axios';

export const getError = (error: unknown) => {
  if (isAxiosError(error)) {
    console.log(error);
    if (error.response) {
      return error.response.data.message;
    }
    return error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'Что-то пошло не так!';
};
