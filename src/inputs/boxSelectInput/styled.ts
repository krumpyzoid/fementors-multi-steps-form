import styled from 'styled-components';

export const Options = styled.div`
    display: flex;
    gap: 1.5rem;
`;


interface IOption {
    readonly isSelected: boolean;
}
export const Option = styled.div<IOption>`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 150px;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--light-gray);
    flex: 1;
    position: relative;
    cursor: pointer;

    ${({ isSelected }) => isSelected && `
        background-color: var(--alabaster);
        border-color: var(--purplish-blue);
    `}
`;

export const OptionTitle = styled.p`
    color: var(--marine-blue);
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    margin-bottom: 0.5rem;
`;

export const OptionImage = styled.img`
    position: absolute;
    top: 1rem;
    left: 1rem;
`;

export const OptionSubTitle = styled.p`
    color: var(--cool-gray);
    font-size: 0.875rem;
    margin: 0;
    margin-bottom: 0.5rem;
`;

export const OptionBonus = styled.p`
    color: var(--marine-blue);
    font-size: 0.75rem;
    margin: 0;
`;
