import styled from "styled-components";

export const ButtonStyled = styled.button`
    background-color:rgb(212, 141, 90); /* Orange-500 */
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;    
    font-size: 16px;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #ea580c; /* Darker Orange-500 */
    }
    &:disabled {
        background-color:rgb(156, 124, 101); /* Orange-500 */
        cursor: not-allowed;
        opacity: 0.6;
    }
        `