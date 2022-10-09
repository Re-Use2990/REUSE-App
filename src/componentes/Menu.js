import React from "react";
import { Menu, HamburgerIcon, Box, Pressable, Center, NativeBaseProvider, Divider, Icon } from "native-base";
import { Text } from 'react-native';

function Example({ navigation }) {
  return <Box w="90%" height="25" alignItems="center">
    <Menu w="190" trigger={triggerProps => {
      return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
        <HamburgerIcon size={35} />
      </Pressable>;
    }}>
      <Menu.Item onPress={() => navigation.navigate("Cadastre-se", {})} >
        <Text>Eu</Text>
      </Menu.Item>
      <Divider mt="0.7" w="100%" />
      <Menu.Item onPress={() => navigation.navigate("Cadastre-se", {})}>
        <Text>Meus Dados</Text>
      </Menu.Item>
      <Divider mt="0.7" w="100%" />
      <Menu.Item onPress={() => navigation.navigate("Cadastre-se", {})}>
        <Text>Info. do App</Text>
      </Menu.Item>
      <Divider mt="0.7" w="100%" />
      <Menu.Item onPress={() => navigation.navigate("Cadastre-se", {})}>
        <Text>Configurações</Text>
      </Menu.Item>
      <Divider mt="0.7" w="100%" />
      <Menu.Item onPress={() => navigation.navigate("Cadastre-se", {})}>
        <Text>Termos</Text>
      </Menu.Item>
    </Menu>
  </Box>;
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};