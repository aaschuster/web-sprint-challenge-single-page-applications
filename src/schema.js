import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().trim()
        .required("name must be at least 2 characters")
        .min(2, "name must be at least 2 characters"),

    size: yup.string().oneOf(["personal", "sm", "md", "lg", "hs", "fs"], "Please select a size")
})

export default schema;