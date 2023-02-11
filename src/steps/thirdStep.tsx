import { useFormikContext } from 'formik';

import { addons, IForm } from '../config';
import { CheckBoxList, CheckBoxListOption } from '../inputs';
import * as Styled from '../styled';

export const ThirdStep = () => {
    const { values } = useFormikContext<IForm>();

    const getCheckBoxListOptions = (): CheckBoxListOption[] => {
        switch(values.billing) {
            case 'yearly':
                return addons.map(addon => ({
                    value: addon.id,
                    title: addon.title,
                    subtitle: addon.subtitle,
                    displayedValue: `+$${addon.yearly}/yr`,
                }));
            case 'monthly':
            default:
                return addons.map(addon => ({
                    value: addon.id,
                    title: addon.title,
                    subtitle: addon.subtitle,
                    displayedValue: `+$${addon.monthly}/mo`,
                }))
        }
    };

    return (
        <>
            <Styled.Title>
                Select your plan
            </Styled.Title>
            <Styled.SubTitle>
                You have the option of monthly or yearly billing.
            </Styled.SubTitle>
            <CheckBoxList name="addons" options={getCheckBoxListOptions()} />
        </>
    );
};