import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Main = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--magniolia);
`;

export const Wrapper = styled.div`
    padding: 1rem;
    border-radius: 1rem;
    background: white;
    display: flex;
    flex-direction: row;
`;

// STEPPER MENU
export const Menu = styled.div`
    position: relative;
    height: fit-content;
    line-height: 0;
`;

export const MenuBg = styled.img`
`;

export const MenuList = styled.div`
    position: absolute;
    top: 2rem;
    left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    line-height: 1.5;
    color: var(--white);
`;

export const Step = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

interface ICircledNumber {
    readonly isActive: boolean;
  }
export const CircledNumber = styled.div<ICircledNumber>`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    border: 1px solid var(--white);
    width: 2rem;
    height: 2rem;

    font-size: 0.875rem;
    font-weight: 700;

    ${({ isActive }) => isActive && `
        background-color: var(--light-blue);
        color: var(--marine-blue);
    `}
`;

export const StepNumber = styled.div`
    font-size: 0.75rem;
    color: var(--pastel-blue);
`;

export const StepTitle = styled.div`
    font-size: 0.875rem;
    letter-spacing: 1px;
    font-weight: 700;
    text-transform: uppercase;
`;

// FORM

export const Form = styled.div`
    width: 500px;
    padding: 1rem 6rem;
`;
export const Formik = styled(FormikForm)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Steps = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CurrentStep = styled.div`
    padding-top: 2rem;
`;

export const Title = styled.p`
    font-size: 2rem;
    font-weight: 700;
    color: var(--marine-blue);
    margin: 0;
    margin-bottom: 1rem;
`;

export const SubTitle = styled.p`
    color: var(--cool-gray);
    margin: 0;
    margin-bottom: 2.5rem;
`;

export const ToggleSelect = styled.div`
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    border-radius: 0.5rem;
    background-color: var(--alabaster);
    margin-top: 1.5rem;
`;

const Button = styled.button`
    padding: 0.875rem 1.5rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    user-select: none;
    font-size: 1em;
    font-weight: 500;
    background-color: var(--marine-blue);
    color: white;
`;

export const Prev = styled(Button)`
    background-color: transparent;
    color: var(--cool-gray);
    &:hover {
        color: var(--marine-blue);
    }
    &:disabled {
        color: red;
    }
`;

export const Next = styled(Button)`
    &:hover {
        background-color: hsl(213, 96%, 28%);
        color: var(--white);
    }
`;

// SUMMARY
export const Summary = styled.div`
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: var(--magniolia);
    color: var(--marine-blue);
`;

export const Plan = styled.div`
    font-weight: 500;
`;

export const Price = styled.div`
    font-weight: 500;
`;
export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:not(:last-of-type) {
        margin-bottom: 1rem;
    }
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--light-gray);
    margin: 1.5rem 0;
`;
export const Addon = styled.div`
    color: var(--cool-gray);
    font-size: 0.875rem;
`;

export const AddonPrice = styled.div`
    font-size: 0.875rem;
`;

export const Total = styled.p`
    margin-left: 1.5rem;
    color: var(--cool-gray);
    font-size: 0.875rem;
`;

export const TotalPrice = styled.p`
    font-weight: 700;
    font-size: 1.25rem;
    margin-right: 1.5rem;
    color: var(--purplish-blue);
`;