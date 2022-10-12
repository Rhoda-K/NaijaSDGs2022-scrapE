import styled  from 'styled-components';
import colors from '../../styles/variables';

export const PageTitle = styled.h1`
    font-size: ${({ size }) => size || '1.92rem'};
    font-weight: ${({ weight }) => weight || '400'};
    color: ${({ color }) => color || colors.grey};
    line-height: ${({ lineHeight }) => lineHeight || '2.8rem'};
    text-align: ${({ align }) => align || null};
    margin-top: ${({ top }) => top || 0};
    margin-bottom: ${({ bottom }) => bottom || 0};
`;

export const Text = styled.p`
    font-size: ${({ size }) => size || '1.6rem'};
    font-weight: ${({ weight }) => weight || '400'};
    color: ${({ color }) => color || colors.grey};
    line-height: ${({ lineHeight }) => lineHeight || '2.4rem'};
    text-align: ${({ align }) => align || null};
    margin-top: ${({ top }) => top || 0};
    margin-bottom: ${({ bottom }) => bottom || 0};
    margin-left: ${({ left }) => left || null};
    margin-right: ${({ right }) => right || null};
    width: ${({ width }) => width || null};
    text-decoration: ${({ decoration }) => decoration || null};
`;
