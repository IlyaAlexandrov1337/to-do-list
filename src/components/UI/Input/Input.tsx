import React, {ChangeEvent, FC} from 'react';
import css from './Input.module.css'



type InputProps = {
    label?: string;
    name?: string;
    onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    value?: string;
};

const Input: FC<InputProps> = (props) => {
    return (
        <input className={css.input} {...props}/>
    );
};

export default Input;
