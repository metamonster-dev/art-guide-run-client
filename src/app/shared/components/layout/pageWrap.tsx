interface PageWrapProps {
  sticky?: JSX.Element | JSX.Element[];
  children: React.ReactNode;
}

const PageWrap = ({ sticky, children }: PageWrapProps) => {
  return (
    <>
      <div className="sticky_menu">
        {sticky}
      </div>
      
      <div id="contents" tabIndex={-1}>
        {children}
      </div>
    </>
  );
};

export default PageWrap;
