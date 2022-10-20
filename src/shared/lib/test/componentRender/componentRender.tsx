import {ReactNode} from "react";
import {render} from "@testing-library/react";
import {I18nextProvider} from "react-i18next";
import i18nForTests from "../../../config/i18n/i18nForTests";
import {MemoryRouter} from "react-router-dom";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {DeepPartial} from "@reduxjs/toolkit";

interface componentRenderOptionsProps {
    initialPath?: string
    initialState?: DeepPartial<StateSchema>
}

export function componentRender(component: ReactNode, options: componentRenderOptionsProps = {}) {
    const {initialPath = '/', initialState} = options

    return render(
        <StoreProvider initialStore={initialState}>
            <MemoryRouter initialEntries={[initialPath]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}
