import { NavigationProp, useNavigation } from "@react-navigation/native";
import AppButton from "@ui/AppButton";
import CustomKeyAvoidingView from "@ui/CustomKeyAvoidingView";
import FormDivider from "@ui/FormDivider";
import FormInput from "@ui/FormInput";
import FormNavigator from "@ui/FormNavigator";
import WelcomeHeader from "@ui/WelcomeHeader";
import { AuthStackParamList } from "app/navigator/AuthNavigator";
import { FC } from "react";
import { View, StyleSheet } from "react-native";

interface Props {}

const ForgetPassword: FC<Props> = (props) => {
  const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();

  return (
    <CustomKeyAvoidingView>
      <View style={styles.innerContainer}>
        <WelcomeHeader />

        <View style={styles.formContainer}>
          <FormInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <AppButton title="Request Link" />

          <FormDivider />

          <FormNavigator
            onLeftPress={() => navigate("SignUp")}
            onRightPress={() => navigate("SignIn")}
            leftTitle="Sign Up"
            rightTitle="Sign In"
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

export default ForgetPassword;
