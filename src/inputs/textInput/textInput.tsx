import { useField } from 'formik';
import * as Styled from './styled';

interface ITextInput {
    label?: string;
    name: string;
    placeholder?: string;
}

export const TextInput = (props: ITextInput) => {
    const [field, meta, helpers] = useField(props.name);
    return (
        <Styled.TextInput>
            {props.label && <Styled.Label>
                { props.label }
                {meta.error && meta.touched && <Styled.Error>{meta.error}</Styled.Error>}
            </Styled.Label>}
            <Styled.Input {...field} {...props} isError={!!(meta.error && meta.touched)} />
        </Styled.TextInput>
    )
};