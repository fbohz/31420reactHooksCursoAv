# Workshop 1 - bogota js

> Install

## Build Setup

```bash
# install dependencies
yarn


# serve with hot reload at localhost:8080 and json server API REST on localhost:1339
yarn dev


# serve with hot reload at localhost:8080 only
yarn start


# json server API REST only on localhost:1339
yarn server


# build for production with minification
yarn build
```

## NOTAS
- Librerias NPM Recomendadas:
    - Storybook: documentar componentes.
    - Ant Design (como bootstrap)
    - Apollo hooks - GraphQL
    - React Hook Forms, Styled Components.
    - Zustand: manejar estado con hooks. Opcion en cambio de Redux para projectos pequeños
    - Yup: validaciones frontend y backend.
    - Immer: para estados grandes y anidados.

- Hooks:
    - useState: para cambiar un valor. No usar para objetos. useState pasar funcion para que quede en cache.
    - useEffect: Asincrono.
    - useLayoutEffect: Sincrono.
    - useContext: Pasar contexto sin props. Contexto se hereda a todos los hijos. Sin props.
    - useRef: Muy recomendado. Guarda valor anterior cuando rerender. Guarda ref del elementos del dom. Usa referencia a elementos del dom. Usa propiedad `current`. Current tiene acceso a todas la propiedades del dom. 
    - useMemo: retorna datos no componentes. Es para optimizar. Memoize es como cache.
    - useCallback: a diferencia de useMemo solo memoiza funciones. Tambien para optimizar.
    - useReducer: useState para objetos. Es lo que hacia Redux.
    - customHook: aislar logica de los componentes. 
    - useRoutes: como React Router.
    - hooks 3rdParty:
        - react-use-gesture
        - react-spring
        - react-use

- Recomendaciones / tips
    - evitar usar let en react. useRef.
    - dicen buenas practicas que una funcion no puede pasar tamaño de pantalla tamaño normal. En JS las fn se memorizan ya estan en memoria.
    - evitar codigo chorizo codigo muy largo.
    - sacar logica components stateless.
    - poca logica en coponentes mejor crear helpers o customHooks. Si usa estado usa customHook si no usa fn helpers.
    - usar object literals para organizar un bloque de funciones con un mismo contexto. En lo posible usar componentes stateless.
    - llamar onBlur, onClick as 'handle'. 
    - usar debugger y usar ignore slint
    - new FormData pasa toda la referencia usando formRef. Aun con archivos.
    - useState y useReducer. useReducer es usado cuando usas muchos useState.

- Otro:
    - Object literals. Usa en cambio de switch.
    - arrow fn: mantiene contexto global a la funcion y mantenerlo.
        - arrow fn solo se usa tb en los callbacks.
        - nunca declarar componentes con const y arrow fn todos son con function.
    - hoist: js toma todas las funciones declaradas con function y las mueve para arriba. Con const no funciona. const funciones son anonimas asi se declaren en variables.
    - lazy y suspense: en Beta. Va manejar un tema de cache. 
    - eventos. para llevar a otra tecnologia e.g. Vue. como `subscribe` y otros. 

- Ejercicio
    - createUser (nombre, apellido, password)
    - cambiar routes, cambiar sidebar