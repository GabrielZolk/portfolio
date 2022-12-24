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

@media (max-width: 888px) {
    margin: 8vh 0 0 8vh;

}

@media (max-width: 800px) {
    margin: 6vh 0 0 6vh;

    input {
        display: block;
        width: 20rem;
    }
}

@media (max-width: 800px) {
    margin: 6vh 0 0 6vh;

    input {
        display: block;
        width: 20rem;
    }
}

@media (max-width: 515px) {
    margin: 4vh 0 0 4vh;

    input {
        display: block;
        width: 18rem;
    }
}

@media (max-width: 480px) {
    margin: 4vh 0 0 4vh;

    input {
        display: block;
        width: 15rem;
    }

    textarea {
        width: 15rem;
    }
}

@media (max-width: 381px) {
    margin: 4vh 0 0 4vh;

    input {
        display: block;
        width: 12rem;
    }

    textarea {
        width: 12rem;
    }
}
`
