import Header from "../../components/Header"
import styled from 'styled-components'
import SignupForm from "../../components/member/SignupForm"

const FormWrapper = styled.div`
    display: flex;
    height: 85vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const SignupPage = () => {
    return (
        <div>
            <Header />
            <FormWrapper>
                <SignupForm/>
            </FormWrapper>
        </div>
    )
} 

export default SignupPage;