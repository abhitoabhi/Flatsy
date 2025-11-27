import styled from "styled-components";
import { FlexRow } from "../../../components/commonStyles";

const BrokerCard = styled.div`
  background-color: #fff;
  height: auto;
  padding: 20px;
  border-radius: 10px;
  margin-top: 30px;
`;

const BrokerProfilePic = styled(FlexRow)`
  height: 80px;
  width: 80px;
  border: 2px solid #d4f2f2;
  border-radius: 50%;
  background-color: #e9f8f8;
`;

const ContactButton = styled(FlexRow)`
  width: 100%;
  background: var(--primary);
  padding: 10px 0px;
  border-radius: 8px;
`;

export { BrokerCard, BrokerProfilePic, ContactButton };
