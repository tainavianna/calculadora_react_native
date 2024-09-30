import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Box, HStack, Text, TextInput } from "@react-native-material/core";

export default function NovaCalculadora() {
  const [valorA, setValorA] = React.useState("");
  const [valorB, setValorB] = React.useState("");
  const [resultado, setResultado] = React.useState(0);
  const [mensagem, setMensagem] = React.useState("");

  const executarCalculo = (operacao) => {
    const numeroA = Number(valorA);
    const numeroB = Number(valorB);
    let res;

    switch (operacao) {
      case "somar":
        res = numeroA + numeroB;
        setMensagem(`${numeroA} + ${numeroB} = `);
        break;
      case "subtrair":
        res = numeroA - numeroB;
        setMensagem(`${numeroA} - ${numeroB} = `);
        break;
      case "multiplicar":
        res = numeroA * numeroB;
        setMensagem(`${numeroA} * ${numeroB} = `);
        break;
      case "dividir":
        res = numeroB !== 0 ? numeroA / numeroB : "Erro: Divisão por zero";
        setMensagem(`${numeroA} ÷ ${numeroB} = `);
        break;
      default:
        return;
    }
    setResultado(res);
  };

  const limparTudo = () => {
    setValorA("");
    setValorB("");
    setResultado(0);
    setMensagem("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HStack style={styles.buttonRow}>
        <TouchableOpacity onPress={() => executarCalculo("somar")} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => executarCalculo("subtrair")} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => executarCalculo("multiplicar")} style={styles.button}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => executarCalculo("dividir")} style={styles.button}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </HStack>

      <Box style={styles.resultBox}>
        <Text variant='h6' style={styles.resultText}>
          {mensagem} {resultado}
        </Text>
      </Box>

      <TextInput
        label='Valor A'
        variant='outlined'
        style={styles.input}
        onChangeText={setValorA}
        keyboardType='numeric'
        value={valorA}
      />
      <TextInput
        label='Valor B'
        variant='outlined'
        style={styles.input}
        onChangeText={setValorB}
        keyboardType='numeric'
        value={valorB}
      />

      <TouchableOpacity onPress={limparTudo} style={styles.clearButton}>
        <Text style={styles.clearButtonText}>Limpar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    padding: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 50,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  resultBox: {
    width: 300,
    padding: 15,
    marginVertical: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  resultText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    margin: 10,
    width: 300,
    backgroundColor: "#fff",
  },
  clearButton: {
    backgroundColor: "#f44336",
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 40, // Largura adequada para evitar quebra de texto
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 150, // Definir largura para o botão
  },
  clearButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
