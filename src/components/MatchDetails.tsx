import { useNavigate, useParams } from "react-router";
import { useGetMatchInformationQuery } from "../services/MatchApi";
import { useEffect, useState } from "react";
import useLoading from "./shared/hooks/UseLoader";
import Loader from "./shared/Loader";

const MatchDetails = () => {
  const { matchType } = useParams();
  const { data, error } = useGetMatchInformationQuery("");
  const isLoading = useLoading(1500);
  const [filteredMatch, setFilteredMatch] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredMatch(
      data?.typeMatches.find((match: any) => match?.matchType === matchType)
    );
  }, [matchType, data]);

  console.log(filteredMatch);
  if (isLoading) return <Loader />;
  if (error) return <h1>Error</h1>;

  const handleMatchCardClick = (seriesID: any) => {
    navigate(`/match/${matchType}/${seriesID}`);
  };

  return (
    <>
      <div className="p-1 flex flex-wrap items-center justify-start">
        {filteredMatch?.seriesMatches &&
          filteredMatch?.seriesMatches.map((seriesMatch: any) => {
            return (
              <div
                onClick={() =>
                  handleMatchCardClick(seriesMatch?.seriesAdWrapper?.seriesId)
                }
                className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg h-80 w-72 hover:scale-105 hover:shadow-2xl hover:opacity-90 transition-transform duration-300 cursor-pointer"
              >
                <svg
                  className="absolute bottom-0 left-0 mb-8"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: 0.1 }}
                >
                  <rect
                    x="159.52"
                    y="175"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="relative pt-10 px-10 flex items-center justify-center">
                  <div
                    className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                    style={{
                      background: "radial-gradient(black, transparent 60%)",
                      transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                      opacity: 0.2,
                    }}
                  ></div>
                  <img
                    className="relative w-40"
                    src="https://pngimg.com/uploads/cricket/cricket_PNG96.png"
                    alt="Peace Lily"
                  />
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">{matchType}</span>
                  <div className="flex justify-between">
                    <span className="block font-semibold text-sm">
                      {seriesMatch?.seriesAdWrapper?.seriesId}
                    </span>
                    <br />
                    <br />
                  </div>
                  <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                    {seriesMatch?.seriesAdWrapper?.seriesName}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default MatchDetails;
