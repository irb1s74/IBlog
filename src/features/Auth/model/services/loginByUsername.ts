import {createAsyncThunk} from "@reduxjs/toolkit";
import {User, userActions} from "entities/User";
import axios from "axios";
import i18n from "shared/config/i18n/i18n";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";


interface LoginProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginProps, { rejectValue: string }>(
    'loginByUsername/loginByUsername',
    async ({username, password}, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:8000/login", {
                username,
                password
            })
            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))

            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("Вы ввели неверный логин или пароль")
        }
    }
)
