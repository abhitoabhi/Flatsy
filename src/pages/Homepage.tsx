import { useState } from "react";
import Tabs from "../components/Tabs";
import styled from "styled-components";
import Typography from "../components/Typography";
import { FlexRow } from "../components/commonStyles";
import LocationSearch from "../components/LocationSearch";
import Icon from "../assets/icons";
import { FaFilter, FaUserFriends } from "react-icons/fa";

const Container = styled.div`
  //   background: red;
  height: 100vh;
  padding: 70px;
`;

const FilterContainer = styled(FlexRow)`
  width: fit-content;
  gap: 5px;
  border: 1px solid #b7b9c3;
  padding: 5px;
  border-radius: 5px;
`;

export default function HomePage() {
  const [tab, setTab] = useState(1);
  return (
    <Container>
      <FlexRow horizontalalign="space-between">
        <Tabs
          tabs={[
            { id: 1, label: "Rooms" },
            { id: 2, label: "Roommates" },
          ]}
          onTabClick={(id: any) => setTab(id)}
        />
        <FlexRow width="fit-content">
          {/* <LocationSearch /> */}
          <FilterContainer>
            <Typography type="small" color="#B7B9C3">
              Filter
            </Typography>
            <FaFilter color="#B7B9C3" />
          </FilterContainer>
        </FlexRow>
      </FlexRow>
      {tab == 2 && <Typography type="body"> Under Maintenaince</Typography>}
    </Container>
  );
}
