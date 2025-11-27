import { useState } from "react";
import styled from "styled-components";
import Typography from "./Typography";
import { FlexColumn, FlexRow } from "./commonStyles";
import Icon from "../assets/icons";
import { FaUserFriends } from "react-icons/fa";

const Tab = styled.button<{ isActive: boolean }>`
  // border-radius: 8px;
  // padding: 10px 16px;
  border: none;
  background-color: transparent;
  // margin-bottom: 10px;

  // @media (max-width: 768px) {
  //   margin-bottom: 6px;
  // }
`;

const BottomBorder = styled.div<{ isActive: boolean }>`
  position: relative;
  z-index: 1;
  height: 5px;
  width: 100%;
  background-color: ${(props) => (props.isActive ? "#F37120" : "")};
`;

type TTab = {
  label: string;
  id: number | string;
};

const Tabs = ({
  tabs,
  onTabClick,
}: {
  tabs: TTab[];
  onTabClick: (id: number | string) => void;
}) => {
  const [currentTab, setCurrentTab] = useState(tabs?.[0]?.id);

  const onTabSelect = (id: number | string) => {
    setCurrentTab(id);
    onTabClick(id);
  };

  return (
    <>
      <FlexRow width="fit-content" gap="40px">
        {tabs.map(({ label, id }) => {
          return (
            <FlexColumn
              key={id}
              width="fit-content"
              horizontalalign="center"
              gap="10px"
            >
              {/* <Icon name="google" /> */}
              <FaUserFriends size={"25px"} />
              <Tab isActive={currentTab === id} onClick={() => onTabSelect(id)}>
                <Typography
                  type="bodyBold"
                  color={currentTab === id ? "#F37120" : "#11173A"}
                >
                  {label}
                </Typography>
              </Tab>
              <BottomBorder isActive={currentTab === id} />
            </FlexColumn>
          );
        })}
      </FlexRow>
    </>
  );
};

export default Tabs;
