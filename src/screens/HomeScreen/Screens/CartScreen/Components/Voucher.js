import React, { useState } from "react";
import styled from "styled-components";
import { Button, TextInput, useTheme } from "react-native-paper";

const Voucher = () => {
  const [voucher, setVoucher] = useState("");
  const { colors } = useTheme();

  const Background = styled.View`
    background: white;
    border-radius: 8px;
    margin: 8px;
    margin-bottom: 0px;
    padding: 4px;
    padding-top: 0px;
    padding-bottom: 2px;
    flex-direction: row;
    align-content: center;
    align-items: center;
  `;

  const VoucherInput = styled(TextInput)`
    padding: 0px;
    margin-right: 10px;
    flex: 1;
  `;

  const VoucherButton = styled(Button)`
    border-radius: 8px;
    padding: 0px;
  `;

  return (
    <Background>
      <VoucherInput
        placeholder="Add Voucher Code"
        mode="outlined"
        outlineColor="white"
        dense={true}
        value={voucher}
        onChange={(e) => setVoucher(e)}
      />

      <VoucherButton mode="contained" onPress={null}>
        Apply
      </VoucherButton>
    </Background>
  );
};

export default Voucher;
