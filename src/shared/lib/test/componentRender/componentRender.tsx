import {ReactNode} from "react";
import {render} from "@testing-library/react";
import {I18nextProvider} from "react-i18next";
import i18nForTests from "../../../config/i18n/i18nForTests";
import {MemoryRouter} from "react-router-dom";

interface componentRenderOptionsProps {
    initialPath?: string
}

export function componentRender(component: ReactNode, options: componentRenderOptionsProps = {}) {
    const {initialPath = '/'} = options
    return render(
        <MemoryRouter initialEntries={[initialPath]}>
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    )
}
