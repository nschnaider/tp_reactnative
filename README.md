## Objetivo

Crear una aplicación móvil con React Native que muestre una pantalla de Login funcional, utilizando componentes nativos. La app debía replicar un diseño dado, validar credenciales hardcodeadas y mostrar mensajes de éxito o error según el resultado.

## Cómo organicé el trabajo

Le pedí a la Inteligencia Artificial que analice detalladamente el objetivo del TP y me lo explique. Luego le pedí que cree el ptoyecto con sus respectivos comandos para que el TP tenga una estructura ordenada y entendible. Luego, el codigo que hizo la IA, le pedí que me lo explique a detalle para poder entenderlo. Luego hice algunos cambios en las funciones del TP y en su diseño y accedí a la IA para resolver errores.

Lo primero que hice fue entender qué componentes de React Native necesitaba para armar un formulario de login:

- `View` para estructurar el layout
- `Text` para los textos y el logo
- `TextInput` para los campos de usuario y contraseña
- `TouchableOpacity` para el botón de ingreso y los links
- `StyleSheet` para los estilos

Una vez identificados los componentes, fui construyendo la pantalla de arriba hacia abajo, siguiendo el diseño de la consigna: primero el logo, luego los inputs, el botón, y finalmente los links de "Olvidaste la clave?" y "Crear Cuenta".


## Decisiones que tomé

**Logo:** Como no contaba con la imagen oficial de Coca-Cola, opté por representarlo con texto estilizado usando `fontStyle: "italic"`, `fontFamily: "Georgia"` y el color rojo característico (`#E61B1B`). El resultado se aproxima visualmente al diseño original.

**Colores:** Respeté los colores del diseño dado — fondo gris claro (`#EBEBEB`), violeta para los bordes de inputs y el botón (`#7B4EFF`), y blanco para el interior de los campos.

**Links no funcionales:** "Olvidaste la clave?" y "Crear Cuenta" se implementaron como `TouchableOpacity` sin ninguna acción asignada, tal como pedía la consigna.

**Validación:** Las credenciales están hardcodeadas (`usuario: "nico"`, `password: "1234"`). Si son correctas, se muestra un mensaje de éxito en verde. Si no, un mensaje de error en rojo.

**Layout general:** Usé `KeyboardAvoidingView` para que el teclado no tape los inputs cuando el usuario escribe, mejorando la experiencia en iOS.


## Uso de IA

Utilicé Claude como asistencia durante el desarrollo. Las partes donde recurrí a la IA están marcadas en el código con el comentario `[IA: ChatGPT]`. Algunas modificaciones que hice sobre lo que generó la IA están marcadas con `[MODIFICADO]`. Tambien accedí a la IA para que me explique el desarrollo hecho para poder entenderlo de la manera mas simple posible y para resolver algunos errores de codigo.

En concreto, la IA me ayudó con la estructura base del formulario y la función de validación. Lo que modifiqué por mi cuenta fue el diseño visual completo (colores, tamaños, estilos), los mensajes que se muestran al usuario, y la incorporación de los links "Olvidaste la clave?" y "Crear Cuenta".

## Estructura del proyecto

```
src/
└── app/
    ├── _layout.tsx   → Contenedor raíz de la app
    └── index.tsx     → Pantalla principal con el formulario de Login
```

## Cómo correr el proyecto

npm install
npx expo start

Credenciales válidas para probar:
- **Usuario:** nico
- **Contraseña:** 1234