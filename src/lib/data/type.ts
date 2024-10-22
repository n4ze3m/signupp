export interface Field {
    label: string;
    name: string;
    type?: string;
    inputType: "input" | "select" | "radio" | "checkbox" | "textarea";
    placeholder: string;
    regex?: RegExp;
    errorMessage?: string;
    options?: { label: string; value: string; }[];
    required: boolean;
    inputOptions?: React.InputHTMLAttributes<HTMLInputElement>;
}

export type Fileds = {
    fields: Field[];
}[]