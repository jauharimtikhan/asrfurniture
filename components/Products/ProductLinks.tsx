interface ProductLinksProps {
  link: string;
  linkText: string;
  Id: string;
  IdSelected: boolean;
  IsActive: boolean;
  AriaControl: string;
}

const ProductLinks: React.FC<ProductLinksProps> = ({
  link,
  linkText,
  Id,
  IdSelected,
  IsActive,
  AriaControl,
}) => {
  return (
    <a
      className={IsActive ? "active" : ""}
      id={Id}
      data-toggle="pill"
      href={`#${link}`}
      role="tab"
      aria-controls={AriaControl}
      aria-selected={IdSelected}
    >
      {linkText}
    </a>
  );
};

export default ProductLinks;
