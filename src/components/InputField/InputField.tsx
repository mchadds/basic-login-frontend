import { TextField } from '@material-ui/core';
import { FieldConfig, useField } from 'formik';

// additional label property 
interface Props extends FieldConfig{
    label: string;
}

// component used for text fields
const InputField = ({label, ...props}: Props) => {
    // built in formik method for hooking up inputs
    const [field, meta] = useField(props);
    
    return (
    <TextField 
        fullWidth 
        label={label} 
        {...field} 
        {...props}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
    />
    );
}

export default InputField;