import { useCallback, useState } from "react"

export default (initValue = '', validator, compareTo) => {
    const [value, setValue] = useState(initValue);
    const [helperText, setHelperText] = useState('');

    const handler = useCallback((e) => {
        const newValue = e.target.value;
        setValue(newValue);
        
        if (validator && compareTo) {
            setHelperText(validator(newValue, compareTo));
        } else if (validator) {
            setHelperText(validator(newValue));
        }
    }, [compareTo, validator]);

    return { value, handler, helperText, setValue };
}