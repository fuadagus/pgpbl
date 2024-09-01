import { createReducer, on } from "@ngrx/store";
import { LoginState } from "./LoginState";
import { recoverPassword, recoverPasswordSuccess, recoverPasswordFail } from "./login.action";
import { AppInitialState } from "../AppInitialState";

const initialState: LoginState = AppInitialState.login;

const reducers = createReducer(initialState,
    on(recoverPassword, currentState =>{
        return {
            ...currentState,
            error: null,
            isRecoveredPassword: false,
            isRecoveringPassword: true
        }
    }),
    on(recoverPasswordSuccess, currentState =>{
        return {
            ...currentState,
            isRecoveredPassword: true,
            isRecoveringPassword: false
        }
    }),
    on(recoverPasswordFail, (currentState, action) =>{
        return {
            ...currentState,
            error: action.error,
            isRecoveredPassword: false,
            isRecoveringPassword: false

        }
    }),
);

export function loginReducer(state: LoginState, action: any) {
    return reducers(state, action);
}   


