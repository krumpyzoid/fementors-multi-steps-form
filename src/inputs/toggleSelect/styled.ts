import styled from 'styled-components';

export const ToggleSelect = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
`;

interface ILabel {
    readonly isSelected: boolean;
}
export const Label = styled.label<ILabel>`
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--cool-gray);
    ${({ isSelected }) => isSelected && `
        color: var(--marine-blue);
    `}
`;

interface IToggle {
    readonly isRightSide: boolean;
}
export const Toggle = styled.div<IToggle>`
    width: 2.5rem;
    height: 1.5rem;
    background-color: var(--marine-blue);
    border-radius: 1rem;
    position: relative;

    &::after{
        position: absolute;
        content: '';
        height: 1rem;
        width: 1rem;
        border-radius: 1rem;
        background-color: white;
        left: 0.25rem;
        top: 0.25rem;
        transition: 0.2s;
        ${({ isRightSide }) => isRightSide && `
            left: 1.25rem;
        `}
    }
`;
