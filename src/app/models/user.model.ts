export interface User {
  id: string;
  name: string;
  email: string;
  password?: string; // Optional because we might hide it in frontend
}