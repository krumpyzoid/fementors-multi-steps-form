import styled from 'styled-components';

export const TextInput = styled.p`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
`;

export const Label = styled.label`
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--marine-blue);
    display: flex;
    justify-content: space-between;
`;

export const Error = styled.div`
    color: var(--strawberry-red);
    font-size: 700;
`;

interface IInput {
    readonly isError: boolean;
}
export const Input = styled.input<IInput>`
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--light-gray);
    font-weight: 700;
    color: var(--marine-blue);
    font-size: 1rem;
    background-color: white;
    &::placeholder {
        color: var(--cool-gray);
    }
    &:focus {
        border: 1px solid var(--purplish-blue);
        outline: none;
    }
    ${({ isError }) => isError && `
        border-color: var(--strawberry-red);
    `}
`;
