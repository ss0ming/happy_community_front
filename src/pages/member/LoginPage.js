import Header from "../../components/Header"
import LoginForm from "../../components/member/LoginForm"
import styled from 'styled-components';

const FormWrapper = styled.div`
    display: flex;
    height: 85vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const LoginPage = () => {
    return (
        <div>
            <Header />
            <FormWrapper>
                <LoginForm />
            </FormWrapper>
        </div>
    )
}

export default LoginPage;