import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().trim().required("Please enter your name"),

    size: yup.string().oneOf(["personal", "sm", "md", "lg", "hs", "fs"], "Please select a size")
})

export default schema;