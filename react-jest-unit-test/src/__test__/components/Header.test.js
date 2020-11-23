import React from 'react'
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/providerMock';
import Header from '../../components/Header';

describe('<Header />', () => {

  test('Render del componente', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
  
    expect(header.length).toEqual(1);
  });

  test('Render del Titulo', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );

    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Header SnapShot', () => {
  test('Comprobar el SnapShot de Header', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});

/*shallow = Nos permite traer un solo elemento para poderlo probar sin necesidad de extrar todo el componente */

/*NOTA: Se debe de analizar bien todo el proyecto ya que no es necesario probarlo todo */

/*En que momento usar shallow y mount:
mount --> Cuando necesitas el DOM
shallow --> Solo necesitas algo particular del componente. No ocupas todo el DOM
*/