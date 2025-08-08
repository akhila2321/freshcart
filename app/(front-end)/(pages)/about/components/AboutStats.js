// import custom components
import CompanyFeatureWithCounter from "components/common/CompanyFeatureWithCounter";

// import required data file
import { companyStatData } from "data/CTAData";

const AboutStats = () => {
  return <CompanyFeatureWithCounter data={companyStatData} />;
};

export default AboutStats;
