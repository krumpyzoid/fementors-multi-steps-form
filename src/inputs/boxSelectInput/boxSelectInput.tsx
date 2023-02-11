import { useField } from 'formik';

import * as Styled from './styled';

export interface BoxSelectOption {
    value: string;
    title: string;
    subtitle: string;
    icon?: string;
    bonus?: string;
}

interface IBoxSelectInput {
    name: string;
    options: BoxSelectOption[];
}

export const BoxSelectInput = (props: IBoxSelectInput) => {
    const [field, meta, helpers] = useField(props.name);

    const { value } = meta;
    const { setValue } = helpers;

    return (
        <Styled.Options>
            { props.options.map((option) => (
                <Styled.Option key={option.value} onClick={() => setValue(option.value)} isSelected={value === option.value}>
                    {option.icon ? <Styled.OptionImage src={option.icon} /> : <div></div>}
                    <div>
                        <Styled.OptionTitle>
                            {option.title}
                        </Styled.OptionTitle>
                        <Styled.OptionSubTitle>
                            {option.subtitle}
                        </Styled.OptionSubTitle>
                        {option.bonus && <Styled.OptionBonus>
                            {option.bonus}
                        </Styled.OptionBonus>}
                    </div>
                </Styled.Option>
            ))}
        </Styled.Options>
    );
};