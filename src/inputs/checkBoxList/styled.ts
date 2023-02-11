import styled from 'styled-components';

export const CheckBoxList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

interface ICheckBox {
    readonly isActive: boolean;
}
export const CheckBox = styled.div<ICheckBox>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid var(--light-gray);

    ${({ isActive }) => isActive && `
        border-color: var(--purplish-blue);
        background-color: var(--alabaster);
    `}
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;

interface ICheck {
    readonly isActive: boolean;
}
export const Check = styled.div<ICheck>`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 0.15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--light-gray);

    svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: var(--purplish-blue);
        opacity: 0;
    }

    ${({ isActive }) => isActive && `
        border-color: white;
        svg {
            opacity: 1;
        }
    `}
`;

export const Infos = styled.div``;

export const Title = styled.p`
    margin: 0;
    color: var(--marine-blue);
    font-weight: 700;
    font-size: 1;
    margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
    color: var(--cool-gray);
    font-size: 0.875rem;
    margin: 0;
`;

export const DisplayedValue = styled.p`
    margin: 0;
    color: var(--purplish-blue);
    font-weight: 500;
    font-size: 0.875rem;
`;
