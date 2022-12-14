import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {LoginSchema} from "features/Auth/model/types/loginSchema";
import {loginByUsername} from "features/Auth/model/services/loginByUsername";


const initialState: LoginSchema = {
    isLoading: false,
    username: '',
    password: '',
    error: undefined,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.error = undefined;
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
    }
})

export const {actions: loginActions} = loginSlice
export const {reducer: loginReducer} = loginSlice

