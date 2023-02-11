import { useField } from 'formik';
import { CheckSquareFilled } from '@ant-design/icons';

import * as Styled from './styled';

export interface CheckBoxListOption {
    value: string,
    title: string,
    subtitle?: string,
    displayedValue?: string,
}

interface ICheckBoxList {
    name: string;
    options: CheckBoxListOption[];
};

export const CheckBoxList = (props: ICheckBoxList) => {
    const [field, meta, helpers] = useField(props.name);

    const { value } = meta;
    const { setValue } = helpers;
    const handleClick = (val: string) => {
        if (value.includes(val)) {
            setValue(value.filter((x: string) => x != val))
        } else {
            setValue([...value, val])
        }
    };

    return (
        <Styled.CheckBoxList>
            { props.options.map((option) => (
                <Styled.CheckBox isActive={value.includes(option.value)} onClick={() => { handleClick(option.value); }} key={option.value}>
                    <Styled.Left>
                        <Styled.Check isActive={value.includes(option.value)}>
                            <CheckSquareFilled />
                        </Styled.Check>
                        <Styled.Infos>
                            <Styled.Title>
                                {option.title}
                            </Styled.Title>
                            { option.subtitle && <Styled.Subtitle>
                                {option.subtitle}
                            </Styled.Subtitle> }
                        </Styled.Infos>
                    </Styled.Left>
                    { option.displayedValue && <Styled.DisplayedValue>
                        {option.displayedValue}
                    </Styled.DisplayedValue> }
                </Styled.CheckBox>
            ))}
        </Styled.CheckBoxList>
    )
};