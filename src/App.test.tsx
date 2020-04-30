import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

describe('Welcome klage', () => {
    const store = configureStore();

    it('Renders correctly when there is no data', () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <App />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
