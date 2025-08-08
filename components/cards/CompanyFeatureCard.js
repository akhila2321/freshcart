const CompanyFeatureCard = ({ item }) => {
  const { svgIcon, title, desc } = item;

  return (
    <div className="mb-8 mb-xl-0">
      <div className="mb-6 svgicon" dangerouslySetInnerHTML={{ __html: svgIcon }} />
      <h3 className="h5 mb-3">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default CompanyFeatureCard;
