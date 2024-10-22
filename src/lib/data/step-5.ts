import country from "../country";
import { Fileds } from "./type";

const step5: Fileds = [
  {
    fields: [
      {
        inputType: "select",
        label: "What is your marital status?",
        name: "maritalStatus",
        placeholder: "Select your marital status",
        required: true,
        options: [
          { value: "single", label: "Single" },
          { value: "married", label: "Married" },
          { value: "divorced", label: "Divorced" },
          { value: "widowed", label: "Widowed" },
          { value: "separated", label: "Separated" },
          { value: "other", label: "Other" },
        ],
        type: "text",
      },
    ],
  },
  {
    fields: [
      {
        inputType: "input",
        label: "Spouse's name",
        name: "spouseName",
        placeholder: "Enter your spouse's name or N/A",
        required: true,
        type: "text",
      },
    ],
  },
  {
    fields: [
      {
        inputType: "input",
        label: "Spouse's date of birth",
        name: "spouseDateOfBirth",
        placeholder: "Enter your spouse's date of birth or N/A",
        required: false,
        type: "date",
      },
    ],
  },
  {
    fields: [
      {
        inputType: "input",
        label: "Spouse's occupation",
        name: "spouseOccupation",
        placeholder: "Enter your spouse's occupation or N/A",
        required: true,
        type: "text",
      },
    ],
  },
  {
    fields: [
      {
        inputType: "select",
        label: "Spouse's nationality",
        name: "spouseNationality",
        placeholder: "Select your spouse's nationality or N/A",
        required: true,
        type: "text",
        options: [...country, { value: "na", label: "N/A" }],
      },
    ],
  },
  {
    fields: [
      {
        inputType: "input",
        label: "Spouse's current address",
        name: "spouseCurrentAddress",
        placeholder: "Enter your spouse's current address or N/A",
        required: true,
        type: "text",
      },
    ],
  },
  {
    fields: [
      {
        inputType: "input",
        label: "Spouse's contact number",
        name: "spouseContactNumber",
        placeholder: "Enter your spouse's contact number or N/A",
        required: true,
        type: "text",
      },
    ],
  },
  {
    fields: [
      {
        inputType: "input",
        label: "Number of children",
        name: "numberOfChildren",
        placeholder: "Enter the number of children you have or enter -1",
        required: true,
        type: "number",
      },
    ],
  },
  {
    fields: [
      {
        inputType: "input",
        label: "Pet's name",
        name: "petName",
        placeholder: "Enter your pet's name or N/A",
        required: true,
        type: "text",
      },
    ],
  },
  {
    fields: [
      {
        inputType: "input",
        label: "Number of pets",
        name: "numberOfPets",
        placeholder: "Enter the number of pets you have or enter -1",
        required: true,
        type: "number",
      },
    ],
  },
];

export default step5;
