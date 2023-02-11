import { useFormikContext } from 'formik';

import { addons, plans, IForm } from '../config';
import * as Styled from '../styled';

export const FourthStep = () => {
    const { values } = useFormikContext<IForm>();

    const plan = plans.filter((plan) => plan.value === values.plan)[0];
    const options = addons.filter((addon) => values.addons.includes(addon.id));
    const total = plan[values.billing] + options.reduce((prev, acc) => prev + acc[values.billing], 0);

    const formatBilling = (billing: string) => {
        if (billing === 'monthly') {
            return 'mo'
        }
        if (billing === 'yearly') {
            return 'yr'
        }
    }
    return (
        <>
            <Styled.Title>
                Finishing up
            </Styled.Title>
            <Styled.SubTitle>
                Double-check everything looks OK before confirming.
            </Styled.SubTitle>
            <Styled.Summary>
                <Styled.Row>
                    <div>
                        <Styled.Plan>
                            { plan.name } ({ values.billing })
                        </Styled.Plan>
                    </div>
                    <Styled.Price>
                        ${ plan[values.billing] }/{ formatBilling(values.billing) }
                    </Styled.Price>
                </Styled.Row>
                <Styled.Divider />
                { options.map((option) => (
                    <Styled.Row>
                        <Styled.Addon>
                            { option.title }
                        </Styled.Addon>
                        <Styled.AddonPrice>
                            +${ option[values.billing] }/{ formatBilling(values.billing) }
                        </Styled.AddonPrice>
                    </Styled.Row>
                ))}
            </Styled.Summary>
            <Styled.Row>
                <Styled.Total>
                    Total
                </Styled.Total>
                <Styled.TotalPrice>
                    ${ total }/{formatBilling(values.billing)}
                </Styled.TotalPrice>
            </Styled.Row>
        </>
    );
};