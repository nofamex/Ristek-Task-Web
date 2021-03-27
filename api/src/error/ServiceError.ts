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

export const UnauthorizedAccesError = (): ApiError => {
  return new ApiError(INTERNAL_SERVER_ERROR, 'Unauthorized', 'You are unauthorized');
};

export const NoBlogsFoundError = (): ApiError => {
  return new ApiError(
    INTERNAL_SERVER_ERROR,
    'No Blogs Found',
    'This user never crete a blogs'
  );
};
