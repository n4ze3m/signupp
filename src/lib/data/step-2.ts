import country from "../country";
import { Fileds } from "./type";

const step2: Fileds = [
    {
        fields: [
            {
                inputType: "input",
                label: "Date of Birth",
                name: "dateOfBirth",
                type: "date",
                placeholder: "Enter your date of birth",
                inputOptions: {
                    min: "1900-01-01",
                    max: new Date().toISOString().split("T")[0],
                },
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Country",
                name: "country",
                type: "text",
                placeholder: "Enter your country",
                required: true,
                options: country
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Nationality",
                name: "nationality",
                type: "text",
                placeholder: "Enter your nationality",
                required: true,
                options: country
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "City",
                name: "city",
                type: "text",
                placeholder: "Enter your city",
                required: true
            },
            {
                inputType: "input",
                label: "Zip Code",
                name: "zipCode",
                type: "text",
                placeholder: "Enter your zip code",
                required: true,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "textarea",
                label: "Current Address",
                name: "currentAddress",
                type: "textarea",
                placeholder: "Enter your current address",
                required: true,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "textarea",
                label: "Permanent Address",
                name: "permanentAddress",
                type: "textarea",
                placeholder: "Enter your permanent address",
                required: true,
            }
        ]
    }
]

export default step2;