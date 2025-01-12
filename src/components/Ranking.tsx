import { useState } from "react";
import { useGetIccRankingQuery } from "../services/RankingApi";
import clsx from "clsx";
import useLoading from "./shared/hooks/UseLoader";
import Loader from "./shared/Loader";

const Ranking = () => {
  const [playerType, setPlayerType] = useState("batsmen");
  const [formatType, setFormatType] = useState("odi");

  const { data } = useGetIccRankingQuery({
    playerType: playerType,
    formatType: formatType,
  });

  const handleBatBowlToggle = (e: any) => {
    setPlayerType(e.target.checked ? "bowlers" : "batsmen");
  };

  const isLoading = useLoading(1500);
  if (isLoading) return <Loader />;

  return (
    <>
      <div className="mt-5 d-flex justify-content-center">
        <div className="cursor-pointer">
          <nav
            className="flex flex-wrap gap-6 sm:flex-nowrap sm:gap-6"
            aria-label="Tabs"
          >
            <a
              className={clsx(
                "shrink-0 rounded-lg p-2 text-sm text-gray-500 font-medium hover:bg-gray-50 hover:text-gray-700",
                formatType === "test" && "bg-sky-100"
              )}
              onClick={() => setFormatType("test")}
            >
              Test
            </a>

            <a
              className={clsx(
                "shrink-0 rounded-lg p-2 text-sm text-gray-500 font-medium hover:bg-gray-50 hover:text-gray-700",
                formatType === "odi" && "bg-sky-100"
              )}
              onClick={() => setFormatType("odi")}
            >
              ODI
            </a>

            <a
              className={clsx(
                "shrink-0 rounded-lg p-2 text-sm text-gray-500 font-medium hover:bg-gray-50 hover:text-gray-700",
                formatType === "t20" && "bg-sky-100"
              )}
              onClick={() => setFormatType("t20")}
            >
              T-20
            </a>

            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <label
                htmlFor="AcceptConditions"
                className="relative inline-block h-8 w-12 cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="AcceptConditions"
                  className="peer sr-only"
                  onChange={handleBatBowlToggle}
                />
                <span className="absolute inset-0 m-auto h-2 w-full rounded-full bg-gray-300"></span>
                <span className="absolute inset-y-0 left-0 m-auto h-6 w-6 rounded-full bg-gray-500 transition-all peer-checked:translate-x-6"></span>
              </label>
              <span className="text-gray-600 text-xs sm:text-sm">
                **Toggle to switch between batsmen and bowler
              </span>
            </div>
          </nav>
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 max-w-5xl mx-auto mt-5 mb-5">
        <div className="overflow-x-auto rounded-t-lg">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Rank
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Country
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Rating
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Points
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {data?.rank?.map((player: any) => {
                return (
                  <>
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {player?.rank}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 font-semibold text-purple-700">
                        {player?.name}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {player?.country}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {player?.rating}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {player?.points}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Ranking;
