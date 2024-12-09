interface PageWrapProps {
  className?: string;
  sticky?: JSX.Element | JSX.Element[];
  children: React.ReactNode;
}

const PageWrap = ({ className, sticky, children }: PageWrapProps) => {
  return (
    <>
      <div className="sticky_menu">{sticky}</div>

      <div id="contents" className={className ?? ""} tabIndex={-1}>
        {children}
      </div>
    </>
  );
};

export default PageWrap;
