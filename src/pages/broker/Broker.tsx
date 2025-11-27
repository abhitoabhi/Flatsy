import { FlexColumn, FlexRow } from "../../components/commonStyles";
import Typography from "../../components/Typography";
import type { Broker } from "../../types/broker";
import {
  BrokerCard,
  BrokerProfilePic,
  ContactButton,
} from "./components/BrokerUiElements";
import { IoLocationSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import Chip from "../../components/Chips";
import { FaBuilding } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoShieldCheckmark } from "react-icons/io5";
const DUMMY_BROKERS: Broker[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    city: "Bangalore",
    areasServed: ["Koramangala", "Indiranagar", "HSR Layout", "Marathahalli"],
    specialization: "Residential",
    yearsOfExperience: 8,
    propertiesAvailable: 45,
    commission: "1 month rent",
    contactNumber: "+919876543210",
    verified: true,
    rating: 4.8,
    totalReviews: 127,
    createdAt: "2025-11-20T10:00:00Z",
  },
  {
    id: "2",
    name: "Priya Sharma",
    city: "Mumbai",
    areasServed: ["Andheri", "Bandra", "Powai", "Goregaon"],
    specialization: "PG",
    yearsOfExperience: 5,
    propertiesAvailable: 32,
    commission: "Half month rent",
    contactNumber: "+919876543211",
    verified: true,
    rating: 4.6,
    totalReviews: 89,
    createdAt: "2025-11-21T10:00:00Z",
  },
  {
    id: "3",
    name: "Amit Patel",
    city: "Pune",
    areasServed: ["Hinjewadi", "Baner", "Wakad", "Kharadi"],
    specialization: "All",
    yearsOfExperience: 12,
    propertiesAvailable: 67,
    commission: "1 month rent",
    contactNumber: "+919876543212",
    verified: true,
    rating: 4.9,
    totalReviews: 203,
    createdAt: "2025-11-22T10:00:00Z",
  },
];
export default function BrokerListPage() {
  const handleContact = (broker: any) => {
    const message = `Hi ${broker.name}, I'm looking for a flat. Saw your profile on Flatmate Finder.`;
    window.open(
      `https://wa.me/${broker.contactNumber.replace(
        /\D/g,
        ""
      )}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
  return (
    <FlexRow
      style={{ padding: "20px", boxSizing: "border-box" }}
      horizontalalign="space-evenly"
      gap="20px"
    >
      {[1, 2, 3].map((item, index) => (
        <BrokerCard style={{ boxShadow: "var(--card-shadow)", flex: 1 }}>
          <FlexRow gap="10px" horizontalalign="flex-start">
            <div style={{ position: "relative" }}>
              <BrokerProfilePic>
                <Typography type="bodyBold" color="var(--primary)">
                  RK
                </Typography>
              </BrokerProfilePic>
              <div
                style={{
                  position: "absolute",
                  bottom: "-4px",
                  right: "-4px",
                  borderRadius: "9999px",
                  padding: "4px",
                }}
              >
                <IoShieldCheckmark size={"20px"} color="var(--primary)" />
              </div>
            </div>

            <FlexColumn gap="10px" width="fit-content">
              <Typography
                type="h3"
                color="#11173A"
                style={{ margin: "0px", lineHeight: "100%" }}
              >
                Rajesh Kumar
              </Typography>
              <FlexRow gap="5px" width="fit-content">
                <FaStar color="gold" />
                <Typography type="small" color="black">
                  4.8
                </Typography>
                <Typography type="extraSmall" color="grey">
                  (127)
                </Typography>
              </FlexRow>
              <FlexRow gap="5px" width="fit-content">
                <IoLocationSharp color="grey" />
                <Typography type="small" color="grey">
                  Mumbai
                </Typography>
              </FlexRow>
            </FlexColumn>
          </FlexRow>
          <FlexColumn gap="15px">
            <FlexRow horizontalalign="space-between">
              <Typography type="small" color="grey">
                Specialization
              </Typography>
              <Chip
                icon={<FaBuilding color="#166969" />}
                backgroundColor="#F2F7F7"
              >
                <Typography type="smallBold" color="#166969">
                  Residential
                </Typography>
              </Chip>
            </FlexRow>
            <FlexRow horizontalalign="space-between">
              <Typography type="small" color="grey">
                Experience
              </Typography>

              <Typography type="smallBold" color="black">
                5 Years
              </Typography>
            </FlexRow>
            <FlexRow horizontalalign="space-between">
              <Typography type="small" color="grey">
                Properties Available
              </Typography>

              <Typography type="smallBold" color="var(--primary)">
                32 +
              </Typography>
            </FlexRow>
            <FlexRow horizontalalign="space-between">
              <Typography type="small" color="grey">
                Commission
              </Typography>

              <Typography type="smallBold" color="black">
                % Half month rent
              </Typography>
            </FlexRow>
            <FlexColumn gap="5px">
              <Typography type="extraSmall" color="grey">
                Areas Served
              </Typography>
              <FlexRow horizontalalign="flex-start" gap="5px">
                <Chip
                  backgroundColor="#FFF"
                  style={{ border: "1px solid grey" }}
                >
                  <Typography type="extraSmall">Perungudi</Typography>
                </Chip>
                <Chip
                  backgroundColor="#FFF"
                  style={{ border: "1px solid grey" }}
                >
                  <Typography type="extraSmall">Shollingalur</Typography>
                </Chip>
              </FlexRow>
            </FlexColumn>
            <ContactButton gap="5px">
              <IoMdCall color="#FFF" />
              <Typography type="body" color="#FFF">
                Contact Broker
              </Typography>
            </ContactButton>
          </FlexColumn>
        </BrokerCard>
      ))}
    </FlexRow>
  );
}
