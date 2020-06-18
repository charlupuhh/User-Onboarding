import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    username: Yup
        .string()
        .min(3, "Username must be at least 3 characters long.")
        .required("Password is Required"),
    password: Yup
        .string()
        .min(8, "Password must be at least 8 characters long")
        .required("Password is required"),
    email: Yup
        .string()
        .email("Must be a valid email address.")
        .required("Must include email address."),
    TOS: Yup
        .boolean()
        .oneOf([true], 'You must accept the Terms of Service')
        .required('asdf')
})

export default formSchema