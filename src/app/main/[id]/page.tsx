interface MainDetailPageProps {
  params: {
    id: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
    test?: string;
  };
}

const MainDetailPage = ({ params, searchParams }: MainDetailPageProps) => {
  return (
    <div>
      <p>id : {params.id}</p>
      <p>test: {searchParams.test || "no test"}</p>
    </div>
  );
};

export default MainDetailPage;
