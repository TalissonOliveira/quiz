import styled from 'styled-components';

const AlternativesForm = styled.form`
    label {
        &[data-selected="true"] {
            background: ${({ theme }) => theme.colors.primary};

            &[data-status="SUCCESS"] {
                background: ${({ theme }) => theme.colors.success};
            }

            &[data-status="ERROR"] {
                background: ${({ theme }) => theme.colors.wrong};
            }
        }
    }
`;

export default AlternativesForm;
