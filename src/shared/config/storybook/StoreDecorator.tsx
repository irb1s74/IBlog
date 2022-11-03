import {Story} from '@storybook/react';
import {DeepPartial, ReducersMapObject} from '@reduxjs/toolkit';
import {StateSchema, StoreProvider} from 'app/providers/StoreProvider';
import {loginReducer} from "features/Auth/model/slice/loginSlice";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer
};


export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: Story) => (
    <StoreProvider initialStore={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <StoryComponent/>
    </StoreProvider>
);
