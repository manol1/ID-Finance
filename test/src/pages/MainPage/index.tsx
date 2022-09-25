import styles from "./index.module.scss";
import {
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  FormHelperText,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import React, { useState, SyntheticEvent } from "react";
import { stub } from "./stub";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { stepTwo } from "../../store/slices/stepSlice";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

export function MainPage() {
  const dispatch = useAppDispatch();

  const [validPhone, setValidPhone] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validRepeatPassword, setValidRepeatPassword] = useState(false);

  const { step } = useAppSelector((state) => state.step);

  const [formValues, setFormValues] = useState({
    phone: "",
    email: "",
    password: "",
    repeatPassword: "",
    firstName: "",
    lastName: "",
    sexRadioButtons: "female",
    birthday: "",
    favoriteOcean: "",
    Sport: false,
    Beauty: false,
    IT: false,
    Pets: false,
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
    const passwordLength = formValues.password.length;
    const isRepeatPasswordError =
      formValues.repeatPassword !== formValues.password ||
      passwordLength < +stub.password.minLength ||
      passwordLength > +stub.password.maxLength;
    setValidRepeatPassword(isRepeatPasswordError);
  };

  const isValidSignUpInfo =
    !validPhone &&
    !validEmail &&
    !validPassword &&
    !validRepeatPassword &&
    formValues.email.length;

  const validateSignUpInfo = () => {
    validatePhone();
    validateEmail();
    validatePassword();
    validateRepeatPassword();
    if (isValidSignUpInfo) {
      dispatch(stepTwo());
    }
  };

  const phoneChangeHandler = (phone: string) => {
    setFormValues({ ...formValues, phone });
  };

  const changeHandler = (event: React.ChangeEvent | SelectChangeEvent) => {
    const name = (event.target as HTMLInputElement | HTMLSelectElement).name;
    const value = (event.target as HTMLInputElement | HTMLSelectElement).value;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const [validFirstName, setValidFirstName] = useState(false);
  const [validLastName, setValidLastName] = useState(false);
  const [validBirthday, setValidBirthday] = useState(false);

  const validateFirstName = () => {
    const firstNameLength = formValues.firstName.length;
    const isFirstNameError =
      firstNameLength < +stub.firstName.minLength ||
      firstNameLength > +stub.firstName.maxLength;
    setValidFirstName(isFirstNameError);
  };

  const validateLastName = () => {
    const lastNameLength = formValues.lastName.length;
    const isLastNameError =
      lastNameLength < +stub.lastName.minLength ||
      lastNameLength > +stub.lastName.maxLength;
    setValidLastName(isLastNameError);
  };

  const validateBirthday = () => {
    const currentYear = new Date().getFullYear();
    const birthdayYear = formValues.birthday.slice(0, 4);
    const years = currentYear - +birthdayYear;
    const isBirthdayError =
      years < +stub.birthday.minAge || years > +stub.birthday.maxAge;
    setValidBirthday(isBirthdayError);
  };

  const hobbyChangeHandler = (event: SyntheticEvent) => {
    const name = (event.target as HTMLInputElement).name;
    const value = (event.target as HTMLInputElement).checked;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  return (
    <main className={styles.container}>
      {step === 1 && (
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
            label="Email"
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
            helperText={`enter ${stub.password.minLength} to ${stub.password.maxLength} characters`}
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
      )}
      {step === 2 && (
        <form className={styles.form}>
          <TextField
            name="firstName"
            label="First Name"
            variant="outlined"
            placeholder="Ivan"
            required={stub.firstName.required}
            error={validFirstName}
            onBlur={validateFirstName}
            margin="normal"
            onChange={changeHandler}
            helperText={`enter ${stub.firstName.minLength} to ${stub.firstName.maxLength} characters`}
          />
          <TextField
            name="lastName"
            label="Last Name"
            variant="outlined"
            placeholder="Ivanov"
            required={stub.lastName.required}
            error={validLastName}
            onBlur={validateLastName}
            margin="normal"
            onChange={changeHandler}
            helperText={`enter ${stub.lastName.minLength} to ${stub.lastName.maxLength} characters`}
          />
          <FormControl>
            <FormLabel id="sex-radio-buttons">Sex</FormLabel>
            <RadioGroup
              aria-labelledby="sex-radio-buttons"
              defaultValue="female"
              name="sexRadioButtons"
              onChange={changeHandler}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField
            type="date"
            name="birthday"
            variant="outlined"
            required={stub.birthday.required}
            error={validBirthday}
            onBlur={validateBirthday}
            margin="normal"
            onChange={changeHandler}
            helperText="Enter your birthday"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="demo-simple-select-label" variant="filled">
              Your Favorite Ocean
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              defaultValue={stub.ocean.oneOf[0]}
              onChange={changeHandler}
              name="favoriteOcean"
              required={stub.ocean.required}
            >
              {stub.ocean.oneOf.map((ocean) => (
                <MenuItem value={ocean} key={ocean}>
                  {ocean}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormGroup>
            <FormLabel component="legend">Hobby</FormLabel>
            {stub.hobby.anyOf.map((hobby) => (
              <FormControlLabel
                control={<Checkbox />}
                label={hobby}
                name={hobby}
                key={hobby}
                onChange={hobbyChangeHandler}
              />
            ))}
          </FormGroup>
          <Button variant="contained">Change SignUp Information</Button>
        </form>
      )}
    </main>
  );
}
