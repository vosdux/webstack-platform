type AuthorizationBody = {
  username: string;
  password: string;
};

type AuthorizationResponse = {
  accesToken: string;
  refreshToken: string;
};

type SignUpBody = {
  email: string;
  password: string;
  secondPassword: string;
};
