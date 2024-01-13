import { NavigationProp, useNavigation } from "@react-navigation/native";
import AppButton from "@ui/AppButton";
import CustomKeyAvoidingView from "@ui/CustomKeyAvoidingView";
import FormDivider from "@ui/FormDivider";
import FormInput from "@ui/FormInput";
import FormNavigator from "@ui/FormNavigator";
import WelcomeHeader from "@ui/WelcomeHeader";
import { signInSchema, yupValidate } from "@utils/validator";
import { runAxiosAsync } from "app/api/runAxiosAsync";
import { AuthStackParamList } from "app/navigator/AuthNavigator";
import { FC, useState } from "react";
import { View, StyleSheet } from "react-native";
import { showMessage } from "react-native-flash-message";
import axios from "axios";
import client from "app/api/client";
import { useDispatch } from "react-redux";
import { updateAuthState } from "app/store/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAuth from "app/hooks/useAuth";

interface Props {}

const SignIn: FC<Props> = (props) => {
  const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const { signIn } = useAuth();

  const handleSubmit = async () => {
    const { values, error } = await yupValidate(signInSchema, userInfo);

    if (error) return showMessage({ message: error, type: "danger" });
    if (values) signIn(values);
  };

  const handleChange = (name: string) => (text: string) => {
    setUserInfo({ ...userInfo, [name]: text });
  };

  const { email, password } = userInfo;

  return (
    <CustomKeyAvoidingView>
      <View style={styles.innerContainer}>
        <WelcomeHeader />

        <View style={styles.formContainer}>
          <FormInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={handleChange("email")}
          />
          <FormInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={handleChange("password")}
          />

          <AppButton title="Sign In" onPress={handleSubmit} />

          <FormDivider />

          <FormNavigator
            onLeftPress={() => navigate("ForgetPassword")}
            onRightPress={() => navigate("SignUp")}
            leftTitle="Forget Password"
            rightTitle="Sign Up"
          />
        </View>
      </View>
    </CustomKeyAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    padding: 15,
    flex: 1,
  },
  formContainer: {
    marginTop: 30,
  },
});

export default SignIn;
