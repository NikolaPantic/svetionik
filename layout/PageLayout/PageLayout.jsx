const PageLayout = ({
  children = null,
  backgroundImageUrl = "",
  heading = "heading",
  pageLayoutSummary = "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
}) => {
  return (
    <div className="pagelayout">
      <div
        className="pagelayout__heading"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(153,153,153, 0.7), rgba(10,10,10, 0.7)), url(${backgroundImageUrl.src})`,
        }}
      >
        <h2 className="heading-secondary">{heading}</h2>
        <p className="pagelayout__heading--summary">{pageLayoutSummary}</p>
      </div>
      <div className="pagelayout__content">{children}</div>
    </div>
  );
};

export default PageLayout;
