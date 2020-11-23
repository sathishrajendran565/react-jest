# platzi-store - Unit Test

### Introduction
¿Qué es un test?
Como developers tenemos que garantizar que el codigo escrito cumpla con ciertos requisitos/expectativas. Esto lo hacemos por medio de una prueba (test).

Esto nos asegura:

- Nuestro codigo cumple con el standar.
- Enviamos a producción sin errores.
- Tipos de pruebas
- Debemos tener en cuenta que existen dos tipos de pruebas:

#### Funcionales.

Pruebas Unitarias.- Se prueban pequeñas partes de nuestro codigo asegurandonos así que cumplen con lo que se desea. (En una pagina web las pruebas se traducen a probar cada sección de la pagina y todas las interacciones en ellas).

#### No funcionales.

### Things to Install

After clonning the project from https://github.com/gndx/platzi-store.git , needs to installs these things

`npm install jest enzyme enzyme-adapter-react-16 --save-dev`

Then integrate jest and watch into the scripts section

    "scripts": {
      "test": "jest",
      "test:watch": "jest --watchAll"
    }

Create a folder where it allows your test, in this case inside `src folder`

Then needs to setup the configurations to use enzyme, you can find it in the file `__test__/setup.test.js` and then add config to the `package.json`

    "jest": {
      "setupFilesAfterEnv": [
        "<rootDir>/src/__test__/setup.test.js"
      ]
    }

### Snapshots
The component needs to conver into json, so we need to install a package to able to do this:

`npm install react-test-renderer --save-dev`

### Fetch
In order to do test for fetch, we need to create a mock to simulate to fetch, so we need to use a tool, this is how to install:

`npm install jest-fetch-mock --save-dev`

### Enzyme
enzyme: Es una librería creada por airbnb para facilitar el test a componentes en React.

enzyme-adapter-react-16: Es un adaptador para la versión de React que estemos utilizando.