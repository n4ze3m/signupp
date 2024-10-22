import { Fileds } from "./type";

const step19: Fileds = [
    {
        fields: [
            {
                inputType: "select",
                label: "Favorite type of pizza",
                name: "favoritePizzaType",
                placeholder: "Select your favorite type of pizza",
                required: true,
                options: [
                    { value: "Margherita", label: "Margherita" },
                    { value: "Pepperoni", label: "Pepperoni" },
                    { value: "BBQ Chicken", label: "BBQ Chicken" },
                    { value: "Hawaiian", label: "Hawaiian" },
                    { value: "Veggie", label: "Veggie" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Favorite pizza topping",
                name: "favoritePizzaTopping",
                type: "text",
                placeholder: "Enter your favorite pizza topping",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Preferred crust type",
                name: "preferredCrustType",
                placeholder: "Select your preferred crust type",
                required: true,
                options: [
                    { value: "Thin Crust", label: "Thin Crust" },
                    { value: "Thick Crust", label: "Thick Crust" },
                    { value: "Stuffed Crust", label: "Stuffed Crust" },
                    { value: "Gluten-Free", label: "Gluten-Free" }
                ],
                type: ""

            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Preferred cheese type",
                name: "preferredCheeseType",
                placeholder: "Select your preferred cheese type",
                required: true,
                options: [
                    { value: "Mozzarella", label: "Mozzarella" },
                    { value: "Cheddar", label: "Cheddar" },
                    { value: "Parmesan", label: "Parmesan" },
                    { value: "Vegan Cheese", label: "Vegan Cheese" },
                    { value: "No Cheese", label: "No Cheese" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Number of pizzas eaten per month",
                name: "pizzasPerMonth",
                type: "number",
                placeholder: "Enter the number of pizzas you eat per month",
                required: true,
                regex: /^\d+$/,
                errorMessage: "Please enter a valid number"
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you prefer homemade or restaurant pizza?",
                name: "pizzaPreference",
                placeholder: "Select your pizza preference",
                required: true,
                options: [
                    { value: "Homemade", label: "Homemade" },
                    { value: "Restaurant", label: "Restaurant" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Favorite pizza sauce",
                name: "favoritePizzaSauce",
                placeholder: "Select your favorite pizza sauce",
                required: true,
                options: [
                    { value: "Tomato", label: "Tomato" },
                    { value: "Pesto", label: "Pesto" },
                    { value: "White Sauce", label: "White Sauce" },
                    { value: "BBQ", label: "BBQ" },
                    { value: "No Sauce", label: "No Sauce" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Favorite side dish with pizza",
                name: "favoriteSideDish",
                type: "text",
                placeholder: "Enter your favorite side dish with pizza",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you like your pizza spicy?",
                name: "spicyPizzaPreference",
                placeholder: "Select if you like your pizza spicy",
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

export default step19;
