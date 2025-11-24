import type { ReactNode } from "react";
import styled from "styled-components";

type TextType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "contentTitle"
  | "small"
  | "smallBold"
  | "extraSmall"
  | "button"
  | "subtle"
  | "body"
  | "bodyBold"
  | "modalTitle";

const Typography = ({
  type,
  color,
  children,
  ...rest
}: {
  type: TextType;
  color?: string;
  children: ReactNode;
  [key: string]: any;
}) => {
  return (
    <>
      {
        {
          h1: (
            <H1 color={color} {...rest}>
              {children}
            </H1>
          ),
          h2: (
            <H2 color={color} {...rest}>
              {children}
            </H2>
          ),
          h3: (
            <H3 color={color} {...rest}>
              {children}
            </H3>
          ),
          h4: (
            <H4 color={color} {...rest}>
              {children}
            </H4>
          ),
          h5: (
            <H5 color={color} {...rest}>
              {children}
            </H5>
          ),
          contentTitle: (
            <ContentTitle color={color} {...rest}>
              {children}
            </ContentTitle>
          ),
          small: (
            <SmallText color={color} {...rest}>
              {children}
            </SmallText>
          ),
          button: (
            <ButtonText color={color} {...rest}>
              {children}
            </ButtonText>
          ),
          extraSmall: (
            <ExtraSmallText color={color} {...rest}>
              {children}
            </ExtraSmallText>
          ),
          subtle: (
            <Subtle color={color} {...rest}>
              {children}
            </Subtle>
          ),
          body: (
            <Body color={color} {...rest}>
              {children}
            </Body>
          ),
          bodyBold: (
            <BodyBold color={color} {...rest}>
              {children}
            </BodyBold>
          ),
          smallBold: (
            <SmallBold color={color} {...rest}>
              {children}
            </SmallBold>
          ),
          modalTitle: (
            <ModalTitle color={color} {...rest}>
              {children}
            </ModalTitle>
          ),
        }[type]
      }
    </>
  );
};

const H1 = styled.p<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : "#0E0E2C")};
  font-family: "Mulish", sans-serif;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const H2 = styled.p<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : "#0E0E2C")};
  font-family: "Mulish", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.8px;

  @media (max-width: 768px) {
    font-size: 20px;
    font-weight: 700;
  }
`;

const H3 = styled.p<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : "#0E0E2C")};
  font-family: "Mulish", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.48px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const H4 = styled.p<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : "#0E0E2C")};
  font-family: "Mulish", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.8px;
`;

const H5 = styled.p<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : "#0E0E2C")};
  font-family: "Mulish", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 16px;
    font-weight: 800;
  }
`;
const ContentTitle = styled.p<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : "#0E0E2C")};
  font-family: "Mulish", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.48px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ModalTitle = styled.p<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : "#0E0E2C")};
  font-family: "Mulish", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 16px;
    font-weight: 700;
    line-height: 20.96px;
  }
`;

const SmallText = styled.p<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : "#0E0E2C")};
  font-family: "Mulish", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const SmallBold = styled.p<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : "#0E0E2C")};
  font-family: "Mulish", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 12px;
    font-weight: 700;
  }
`;

const ExtraSmallText = styled.p<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : "#0E0E2C")};
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: "400";
  font-size: 12px;
`;

const ButtonText = styled.p<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : "#0E0E2C")};
  font-family: "Mulish", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Body = styled.p<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : "#0E0E2C")};
  font-family: "Mulish", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const BodyBold = styled.p<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : "#0E0E2C")};
  font-family: "Mulish", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Subtle = styled.p<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : "#0E0E2C")};
  font-family: "Mulish", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export default Typography;
