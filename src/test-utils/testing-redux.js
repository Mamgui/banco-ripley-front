import React from 'react'
import {render} from '@testing-library/react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from "../modules/reducers";

const renderRedux = (ui,
                     {
                         initialState,
                         store = createStore(reducers, initialState),
                         ...renderOptions
                     } = {}
) => {
    const Wrapper = ({children}) => {
        return <Provider store={store}>{children}</Provider>
    }

    return render(ui, {wrapper: Wrapper, ...renderOptions})
}

export {renderRedux}