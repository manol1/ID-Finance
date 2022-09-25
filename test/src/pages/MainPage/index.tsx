import styles from "./index.module.scss";
import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { stub } from "./stub";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

export function MainPage() {
  const [validPhone, setValidPhone] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validRepeatPassword, setValidRepeatPassword] = useState(false);

  const [formValues, setFormValues] = useState({
    phone: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const validatePhone = () => {
    const phoneRegExp = new RegExp(stub.mobilePhone.regExp);
    const isPhoneError = !phoneRegExp.test(`+${formValues.phone}`);
    setValidPhone(isPhoneError);
  };

  const validateEmail = () => {
    const emailRegExp = new RegExp(stub.email.regExp);
    const isEmailError = !emailRegExp.test(formValues.email);
    setValidEmail(isEmailError);
  };

  const validatePassword = () => {
    const passwordLength = formValues.password.length;
    const isPasswordError =
      passwordLength < +stub.password.minLength ||
      passwordLength > +stub.password.maxLength;
    setValidPassword(isPasswordError);
  };

  const validateRepeatPassword = () => {
    const isRepeatPasswordError =
      formValues.repeatPassword !== formValues.password ||
      formValues.repeatPassword.length === 0;
    setValidRepeatPassword(isRepeatPasswordError);
  };

  const validateSignUpInfo = () => {
    validatePhone();
    validateEmail();
    validatePassword();
    validateRepeatPassword();
    const isValid =
      !validPhone && !validEmail && !validPassword && !validRepeatPassword;
    if (isValid) {
    }
  };

  const phoneChangeHandler = (phone: string) => {
    setFormValues({ ...formValues, phone });
  };

  const changeHandler = (event: React.ChangeEvent) => {
    const name = (event.target as HTMLInputElement).name;
    const value = (event.target as HTMLInputElement).value;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <PhoneInput
          country={"by"}
          onlyCountries={["by"]}
          value={formValues.phone}
          onChange={phoneChangeHandler}
          isValid={!validPhone}
          onBlur={validatePhone}
        />
        <TextField
          name="email"
          type="email"
          label="Email "
          variant="outlined"
          placeholder="email@example.com"
          required={stub.email.required}
          error={validEmail}
          onBlur={validateEmail}
          margin="normal"
          onChange={changeHandler}
        />
        <TextField
          name="password"
          type="password"
          label="Password"
          variant="outlined"
          required={stub.password.required}
          helperText="enter 8 to 20 characters"
          error={validPassword}
          onBlur={validatePassword}
          margin="normal"
          onChange={changeHandler}
        />

        <TextField
          name="repeatPassword"
          type="password"
          label="Repeat Password"
          variant="outlined"
          required={stub.password.required}
          error={validRepeatPassword}
          onBlur={validateRepeatPassword}
          margin="normal"
          onChange={changeHandler}
        />
        <Button variant="contained" onClick={validateSignUpInfo}>
          Next
        </Button>
      </form>
    </main>
  );
}
