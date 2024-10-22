import { Fileds } from "./type";

const step18: Fileds = [
    {
        fields: [
            {
                inputType: "select",
                label: "Favorite type of burger",
                name: "favoriteBurgerType",
                placeholder: "Select your favorite type of burger",
                required: true,
                options: [
                    { value: "Beef", label: "Beef" },
                    { value: "Chicken", label: "Chicken" },
                    { value: "Veggie", label: "Veggie" },
                    { value: "Vegan", label: "Vegan" },
                    { value: "Fish", label: "Fish" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Favorite burger topping",
                name: "favoriteBurgerTopping",
                type: "text",
                placeholder: "Enter your favorite burger topping",
                required: true
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
                    { value: "Cheddar", label: "Cheddar" },
                    { value: "Swiss", label: "Swiss" },
                    { value: "American", label: "American" },
                    { value: "Blue Cheese", label: "Blue Cheese" },
                    { value: "No Cheese", label: "No Cheese" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Preferred bun type",
                name: "preferredBunType",
                placeholder: "Select your preferred bun type",
                required: true,
                options: [
                    { value: "Sesame", label: "Sesame" },
                    { value: "Whole Wheat", label: "Whole Wheat" },
                    { value: "Gluten-Free", label: "Gluten-Free" },
                    { value: "Brioche", label: "Brioche" },
                    { value: "No Bun", label: "No Bun" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Number of burgers eaten per month",
                name: "burgersPerMonth",
                type: "number",
                placeholder: "Enter the number of burgers you eat per month",
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
                label: "Do you prefer homemade or restaurant burgers?",
                name: "burgerPreference",
                placeholder: "Select your burger preference",
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
                label: "Favorite burger sauce",
                name: "favoriteBurgerSauce",
                placeholder: "Select your favorite burger sauce",
                required: true,
                options: [
                    { value: "Ketchup", label: "Ketchup" },
                    { value: "Mayonnaise", label: "Mayonnaise" },
                    { value: "BBQ", label: "BBQ" },
                    { value: "Special Sauce", label: "Special Sauce" },
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
                label: "Favorite side dish with burger",
                name: "favoriteSideDish",
                type: "text",
                placeholder: "Enter your favorite side dish with a burger",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you like your burger spicy?",
                name: "spicyBurgerPreference",
                placeholder: "Select if you like your burger spicy",
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

export default step18;
