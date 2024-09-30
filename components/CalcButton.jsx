import { Box, Button, Text } from "@react-native-material/core";
import React from "react";

const CalcButton = ({ name }) => {
  const [test, setTest] = React.useState("tomato");
  return (
    <>
      <Button
        title={name}
        style={{
          width: 75,
          height: 75,
          justifyContent: "center",
          margin: 5,
        }}
        color={test}
        onPress={() => setTest("#000")}
      />
    </>
  );
};

export default CalcButton;
