import React, {ChangeEvent, FC} from 'react';
import css from './TextArea.module.css'



type TextAreaProps = {
    label?: string;
    name?: string;
    onBlur?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    type?: string;
    value?: string;
};

const TextArea: FC<TextAreaProps> = (props) => {
    return (
        <textarea className={css.textarea} {...props}/>
    );
};

export default TextArea;
