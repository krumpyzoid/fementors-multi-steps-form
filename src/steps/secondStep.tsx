import { useFormikContext } from 'formik';

import { plans, IForm } from '../config';
import { ToggleSelect, BoxSelectInput, BoxSelectOption } from '../inputs';
import * as Styled from '../styled';

export const SecondStep = () => {
    const { values } = useFormikContext<IForm>();

    const getBoxSelectOptions = () => {
        switch(values.billing) {
            case 'yearly':
                return plans.map(plan => ({
                    value: plan.value,
                    title: plan.name,
                    subtitle: `$${plan.yearly}/yr`,
                    icon: plan.icon,
                    bonus: `${plan.bonus} months free`,
                }));
            case 'monthly':
            default:
                return plans.map(plan => ({
                    value: plan.value,
                    title: plan.name,
                    subtitle: `$${plan.monthly}/mo`,
                    icon: plan.icon,
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
            <BoxSelectInput name="plan" options={getBoxSelectOptions()} />
            <Styled.ToggleSelect>
                <ToggleSelect name="billing" options={{ left: { name: 'Monthly', value: 'monthly' }, right: { name: 'Yearly', value: 'yearly' }}} />
            </Styled.ToggleSelect>
        </>
    );
};