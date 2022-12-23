import styled from "styled-components"

export const FormStyle = styled.form`
margin: 10vh 0 0 10vh;


label {
  color: white;
  font-size: 28px;
}

input {
    font-size: 32px;
    height: 3rem;
    width: 100%;
    border: 1px solid #2196F3;
    background: transparent;
    margin: 0 0 3rem 0;
    color: inherit;
}

textarea {
    height: 15rem;
    width: 100%;
    border: 1px solid #2196F3;
    background: transparent;
    margin: 0 0 3rem 0;
    color: inherit;
    resize: none;
}

.submit {
    background: #2196F3;
    color: white;
}
`
