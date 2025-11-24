import styled from "styled-components";

const FlexColumn = styled.div<{
  gap?: string;
  horizontalalign?: string;
  verticalalign?: string;
  width?: string;
}>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props?.gap || "0px"};
  align-items: ${(props) => props?.horizontalalign || "start"};
  justify-content: ${(props) => props?.verticalalign || "space-between"};
  width: ${(props) => props?.width || "100%"};
`;

const FlexRow = styled.div<{
  gap?: string;
  horizontalalign?: string;
  width?: string;
  verticalalign?: string;
  wrap?: string;
}>`
  display: flex;
  justify-content: ${(props) => props?.horizontalalign || "center"};
  align-items: ${(props) => props?.verticalalign || "center"};
  gap: ${(props) => props?.gap || "0px"};
  width: ${(props) => props?.width || "100%"};
  flex-wrap: ${(props) => props?.wrap || "wrap"};
`;

export { FlexColumn, FlexRow };
