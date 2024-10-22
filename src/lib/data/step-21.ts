import { Fileds } from "./type";

const step21: Fileds = [
    {
        fields: [
            {
                inputType: "input",
                label: "Shoe size",
                name: "shoeSize",
                type: "number",
                placeholder: "Enter your shoe size",
                required: true,
                regex: /^[0-9]+(\.[0-9]+)?$/,
                errorMessage: "Please enter a valid shoe size"
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Preferred type of footwear",
                name: "preferredFootwearType",
                placeholder: "Select your preferred type of footwear",
                required: true,
                options: [
                    { value: "Sneakers", label: "Sneakers" },
                    { value: "Boots", label: "Boots" },
                    { value: "Sandals", label: "Sandals" },
                    { value: "Formal Shoes", label: "Formal Shoes" },
                    { value: "Barefoot", label: "Barefoot" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you have flat feet?",
                name: "flatFeet",
                placeholder: "Select if you have flat feet",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use orthotics?",
                name: "useOrthotics",
                placeholder: "Select if you use orthotics",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Favorite foot cream brand",
                name: "favoriteFootCreamBrand",
                type: "text",
                placeholder: "Enter your favorite foot cream brand",
                required: false
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you have any foot injuries?",
                name: "footInjuries",
                placeholder: "Select if you have any foot injuries",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Foot length (cm)",
                name: "footLength",
                type: "number",
                placeholder: "Enter your foot length in centimeters",
                required: true,
                regex: /^[0-9]+(\.[0-9]+)?$/,
                errorMessage: "Please enter a valid number"
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you regularly get pedicures?",
                name: "regularPedicures",
                placeholder: "Select if you regularly get pedicures",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you prefer socks or barefoot?",
                name: "socksOrBarefoot",
                placeholder: "Select your preference",
                required: true,
                options: [
                    { value: "Socks", label: "Socks" },
                    { value: "Barefoot", label: "Barefoot" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you have a foot spa at home?",
                name: "haveFootSpa",
                placeholder: "Select if you have a foot spa at home",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ],
                type: ""
            }
        ]
    }
];

export default step21;
