import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface Inputs {
  name: string
  email: string
  password: string
}

export interface AuthPageInput {
  regiter: UseFormRegister<Inputs>
  errors: FieldErrors<Inputs>
}

export interface ISignUpFx extends ISigninFx {
  email: string
}

export interface ISigninFx {
  url: string
  username: string
  password: string
}
