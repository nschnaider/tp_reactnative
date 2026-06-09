import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default function App() {

  // Estados para almacenar los datos del formulario
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  // Estado para mostrar mensajes en pantalla
  const [mensaje, setMensaje] = useState("");

  // Estado para saber si el login fue exitoso
  const [loginCorrecto, setLoginCorrecto] = useState(false);

  // [IA: ChatGPT] Función para validar las credenciales
  const validarLogin = () => {

    //  Comparación con valores hardcodeados
    if (usuario === "nico" && password === "1234") {

      // [MODIFICADO] Elegí mostrar este mensaje
      setMensaje("Inicio de sesión exitoso");

      setLoginCorrecto(true);

    } else {

      // [MODIFICADO] Cambié el mensaje para que sea más claro
      setMensaje(
        "Usuario o contraseña incorrectos, vuelva a intentar"
      );

      setLoginCorrecto(false);
    }
  };

  return (
    <View style={styles.container}>

      {/* [IA: ChatGPT] Título principal del login */}
      <Text style={styles.titulo}>
        Coca-Cola
      </Text>

      {/* [IA: ChatGPT] Campo para ingresar el usuario */}
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={usuario}
        onChangeText={setUsuario}
      />

      {/* [IA: ChatGPT] Campo para ingresar la contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      {/* [IA: ChatGPT] Botón para ejecutar la validación */}
      <TouchableOpacity
        style={styles.boton}
        onPress={validarLogin}
      >
        <Text style={styles.textoBoton}>
          INGRESAR
        </Text>
      </TouchableOpacity>

      {/* [IA: ChatGPT] Mensaje de resultado */}
      <Text
        style={
          loginCorrecto
            ? styles.mensajeExito
            : styles.mensajeError
        }
      >
        {mensaje}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },

  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "red",
    marginBottom: 40
  },

  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#7B4EFF",
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "white"
  },

  boton: {
    width: "90%",
    backgroundColor: "#7B4EFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center"
  },

  textoBoton: {
    color: "white",
    fontWeight: "bold"
  },

  mensajeExito: {
    marginTop: 20,
    color: "green",
    fontSize: 16
  },

  mensajeError: {
    marginTop: 20,
    color: "red",
    fontSize: 16,
    textAlign: "center"
  }
});