
Prueba Práctica Mobile senior Million and Up 

App móvil responsive desarrollada con el framework react native con functional components usando typescript para tipado del código, con una arquitectura limpia, estructura bien definida y organizada en carpetas con nombre referencial a cada componente y/o función para un mejor orden y compresión.

Librerías utilizadas más relevantes:

- redux toolkit (manejador de estados y datos en toda la app)
- axios (utilizada para el manejo de las peticiones asíncronas a la API coinlore y su posterior respuesta)
- reanimated (utilizada para animar el flatlist o lista de datos)
- AsyncStorage (utilizada para la persistencia de datos en este caso para guardar la lista de criptomonedas y sus datos así como también  preferencias del usuario en cuanto al modo oscuro)
- navigation/bottomtab(utilizada para la barra de navegación inferior)
- jest y test library (para el manejo de las pruebas unitarias)
…

También se hace uso de los Hooks más populares e importantes de react para optimizacion y performance de la app como:

- useState:( actualizador de estados y rerenderizado de componentes)
- useEffect:(utilizado para ejecutar funciones requeridas al montar un screen o componente)
- useCallback(utilizado para memorizar funciones y optimizar el rendimiento de componentes)
…

Las pruebas unitarias fueron escritas usando Jest y se encuentran  organizadas por nombre del screen en una carpeta llamada test dentro del directorio Src 

Funcionalidades de la app:

-  Consulta de cryptomonedas en tiempo real mostrandolas en un flatlist animado ordenadas por ranking con 3 filtros aplicables como son ganadoras, perdedoras y capitalización de mercado. Desplegando detalles  al presionar sobre la misma.
-  La consulta al API trae max 100 ítems por lo que al hacer scroll y acercarse a la posición 100 vuelve a hacer una petición para cargar los siguientes 100 items…
-  Guardado de datos en el redux para no realizar llamadas innecesarias a la API
-  Modo offline en caso de no tener conexión a Internet se hace uso de la última dará guardada en el asyncStorage para poder consultar y convertir en base a esos datos
-  Barra de búsqueda y filtrado por nombre o símbolo abreviado de la cripto
-  Convertidor de monedas intercambiable con barra de búsqueda accesible desde la barra de navegación o desde el botón convert ubicado en el detalle de cada crypto
-  Apartado de settings para cambiar a modo oscuro o claro según preferencias del usuario y manteniendolo al cerrar y abrir la app, también el modo offline puede cambiarse manualmente siempre que tenga conexión de lo contrario estará activado sin poder modificarlo
-  Mensajes de errores manejados con toast
-  En caso de no tener conexión a Internet despliega mensaje de sin conexión con un botón para activar modo offline
-  En caso de error al consultar el API muestra mensaje de lista vacía y al tener conexion a internet nuevamente muestra un mensaje y recarga el flatlist automaticamente
…

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
