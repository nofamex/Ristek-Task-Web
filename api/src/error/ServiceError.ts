import ApiError from './ApiError';
import { CONFLICT, INTERNAL_SERVER_ERROR } from 'http-status';

export const ExistingUserError = (): ApiError => {
  return new ApiError(
    CONFLICT,
    'Sign Up Failed',
    'A user with same username already exist'
  );
};

export const NoUserFoundError = (): ApiError => {
  return new ApiError(
    INTERNAL_SERVER_ERROR,
    'Sign In Failed',
    'There is no user with this username'
  );
};

export const WrongPasswordError = (): ApiError => {
  return new ApiError(INTERNAL_SERVER_ERROR, 'Sign In Failed', 'Wrong password');
};
