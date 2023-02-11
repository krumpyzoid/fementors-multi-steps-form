import { useField } from 'formik';
import * as Styled from './styled';

interface option {
    value: string;
    name: string;
}

interface IToggleSelect {
    options: {
        left: option;
        right: option;
    };
    name: string;
}

export const ToggleSelect = (props: IToggleSelect) => {
    const [field, meta, helpers] = useField(props.name);
    const { value } = meta;
    const { setValue } = helpers;

    const handleClick = () => {
        if (value === props.options.left.value) {
            setValue(props.options.right.value)
        }
        if (value === props.options.right.value) {
            setValue(props.options.left.value)
        }
    }

    const isRightSide = !!(value === props.options.right.value);

    return (
        <Styled.ToggleSelect onClick={handleClick}>
            <Styled.Label isSelected={value === props.options.left.value}>
                {props.options.left.name}
            </Styled.Label>
            <Styled.Toggle isRightSide={isRightSide} />
            <Styled.Label isSelected={value === props.options.right.value}>
                {props.options.right.name}
            </Styled.Label>
        </Styled.ToggleSelect>
    );
};