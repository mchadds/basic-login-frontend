import { TextField } from '@material-ui/core';
import * as React from 'react';

interface Props {
    onSubmit: () => void;
}

export const LoginForm: React.FC<Props> = () => {
    return (
        <TextField></TextField>
    )
}