export class AuthResponseDTO {
  token: string;
  user: {
    username: string;
    email: string;
  };
  expiresIn: number;
}

export class LoginDTO {
  email: string;
  password: string;
}
