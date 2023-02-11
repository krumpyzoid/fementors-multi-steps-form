import { TextInput } from '../inputs';
import * as Styled from '../styled';

export const FirstStep = () => (
    <>
        <Styled.Title>
            Personal info
        </Styled.Title>
        <Styled.SubTitle>
            Please provide your name, email address, and phone number.
        </Styled.SubTitle>
        <TextInput name="name" label="Name" placeholder="John Doe" />
        <TextInput name="email" label="E-mail Address" placeholder="john@doecompany.com"/>
        <TextInput name="phone" label="Phone Number" placeholder="eg +33 6 40 30 21 02"/>
    </>
);