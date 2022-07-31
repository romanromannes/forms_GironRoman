export interface AppState {
    login: boolean;
    loginForm: LoginForm;
  }
  
  export interface LoginForm {
    fullname: string;
    email: string;
    password: string;
  }
  