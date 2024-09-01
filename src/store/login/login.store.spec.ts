import { AppInitialState } from "../AppInitialState";
import { recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from "./login.action";
import { loginReducer } from "./login.reducers";
import { LoginState } from "./LoginState";

describe('Login store', () => {
    it('recoverPassword', () => {
     
        const inistialState: LoginState = AppInitialState.login;

        const newState = loginReducer(inistialState, recoverPassword());
        expect(newState).toEqual({
            ...inistialState,
            error: null,
            isRecoveredPassword: false,
            isRecoveringPassword: true,
        });
    });
    it('recoverPasswordSuccess', () => {
     
        const inistialState: LoginState =  AppInitialState.login;
        const newState = loginReducer(inistialState, recoverPasswordSuccess());
        expect(newState).toEqual({
            ...inistialState,
            error: null,
            isRecoveredPassword: true,
            isRecoveringPassword: false,
        });
    });
    it('recoverPasswordfail', () => {
     
        const inistialState: LoginState = AppInitialState.login;

        const error ={error: "error"};
        const newState = loginReducer(inistialState, recoverPasswordFail(error));
        expect(newState).toEqual({
            ...inistialState,
            error,
            isRecoveredPassword: false,
            isRecoveringPassword: false,
        });
    });


});
