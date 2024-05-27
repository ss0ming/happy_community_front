import { useCallback, useState } from "react"

export default (initValue = '', validator) => {
    const [value, setValue] = useState(initValue);
    const [helperText, setHelperText] = useState('');

    const handler = useCallback((e) => {
        const newValue = e.target.value;
        setValue(newValue);
        
        if (validator) {
            setHelperText(validator(newValue));
        }
    }, []);

    return { value, handler, helperText, setValue };
}