import { object, string, ref } from "yup"

export const signupSchema = object({
    email: string().email("Formato de email incorrecto").required("Ingrese su email!"),
    password: string().min(6, "Min. 6 caracteres").required("Ingrese un password!"),
    confPassword: string().oneOf([ref("password")], "Password no coincide!").required("Reingrese password")
})