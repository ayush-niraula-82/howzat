import { useNavigate } from "react-router";

const InformationCard = ({ matchInfo }: { matchInfo: any }) => {
  const navigate = useNavigate();

  const handleMatchCardClick = (matchType: string) => {
    navigate(`/match/${matchType}`);
  };

  return (
    <>
      <div
        className="card text-center information-card w-100 mx-auto"
        onClick={() => handleMatchCardClick(matchInfo?.matchType)}
      >
        <div className="card-header">
          <strong className="text-black">{matchInfo?.matchType}</strong>
        </div>
        <div className="card-body">
          {matchInfo?.seriesMatches.map((seriesMatch: any) => {
            return (
              <>
                {seriesMatch?.seriesAdWrapper ? (
                  <small className="badge rounded-pill text-bg-primary mb-2">
                    {seriesMatch?.seriesAdWrapper?.seriesName}
                  </small>
                ) : null}
              </>
            );
          })}
        </div>
        <div className="card-footer text-body-secondary">
          <div className="toast-header">
            <strong className="me-auto"> 🚀</strong>
            <small> See more...</small>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default InformationCard;
