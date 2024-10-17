import styled from 'styled-components';
import { typographyPoppins } from '../../styles/typography';

const Title = styled.h2`
  font-size: ${typographyPoppins.fontSizes.medium};
  font-weight: ${typographyPoppins.fontWeights.regular};
  color: #6B6B6B;
`;

const TitleSimple = (title: string = "teste") => {
    return <Title>{title}</Title>;
};


export default TitleSimple;