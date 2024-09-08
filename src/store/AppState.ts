import { LoadingState } from "./loading/LoadingState";
import { LoginState } from "./login/LoginState";
import { RegisterState } from "./register/Register.State";

export interface AppState{
    loading: LoadingState;
    login: LoginState;
    register: RegisterState;
}