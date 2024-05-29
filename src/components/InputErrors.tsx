import { FieldErrors } from "react-hook-form";

export function InputErrors({ errors }: { errors: FieldErrors }) {
    return Object.entries(errors).map(([field, error]) => {
        let message = "unknown error";
        
        if (error) {
            switch (error.type) {
                case "required":
                    message = "is required field";
                    break;
                case "maxLength":
                    message = "has limit";
                    break;
            }
        }

        return <p key={field}>{`${field}  ${message}`}</p>;
    });
}
