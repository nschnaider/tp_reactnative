import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function App() {

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loginCorrecto, setLoginCorrecto] = useState(false);

  // [IA: ChatGPT] Función para validar las credenciales
  const validarLogin = () => {
    if (usuario === "nico" && password === "1234") {
      // [MODIFICADO] Elegí mostrar este mensaje
      setMensaje("Inicio de sesión exitoso");
      setLoginCorrecto(true);
    } else {
      // [MODIFICADO] Cambié el mensaje para que sea más claro
      setMensaje("Usuario o contraseña incorrectos, vuelva a intentar");
      setLoginCorrecto(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.outer}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>

        {/* Logo Coca-Cola */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Coca‑Cola</Text>
        </View>

        {/* [IA: ChatGPT] Campo para ingresar el usuario */}
        <TextInput
          style={styles.input}
          placeholder="simon@galaxies.dev"
          placeholderTextColor="#999"
          value={usuario}
          onChangeText={setUsuario}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        {/* [IA: ChatGPT] Campo para ingresar la contraseña */}
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        {/* [IA: ChatGPT] Botón para ejecutar la validación */}
        <TouchableOpacity
          style={styles.boton}
          onPress={validarLogin}
          activeOpacity={0.85}
        >
          <Text style={styles.textoBoton}>INGRESAR</Text>
        </TouchableOpacity>

        {/* [IA: ChatGPT] Mensaje de resultado */}
        {mensaje !== "" && (
          <Text style={loginCorrecto ? styles.mensajeExito : styles.mensajeError}>
            {mensaje}
          </Text>
        )}

        {/* Links no funcionales */}
        <TouchableOpacity style={styles.linkContainer} activeOpacity={0.6}>
          <Text style={styles.linkText}>Olvidaste la clave?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkContainer} activeOpacity={0.6}>
          <Text style={styles.linkText}>Crear Cuenta</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({

  outer: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },

  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  logoContainer: {
    marginBottom: 48,
  },

  logoText: {
    fontSize: 52,
    fontWeight: "bold",
    color: "#E61B1B",
    fontStyle: "italic",
    letterSpacing: -1,
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
  },

  input: {
    width: "90%",
    borderWidth: 1.5,
    borderColor: "#7B4EFF",
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 14,
    borderRadius: 8,
    backgroundColor: "white",
    fontSize: 15,
    color: "#222",
  },

  boton: {
    width: "90%",
    backgroundColor: "#7B4EFF",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 4,
    marginBottom: 8,
  },

  textoBoton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    letterSpacing: 1,
  },

  mensajeExito: {
    marginTop: 12,
    color: "green",
    fontSize: 14,
    textAlign: "center",
  },

  mensajeError: {
    marginTop: 12,
    color: "#cc0000",
    fontSize: 14,
    textAlign: "center",
  },

  linkContainer: {
    marginTop: 12,
  },

  linkText: {
    color: "#333",
    fontSize: 14,
    textAlign: "center",
  },
});