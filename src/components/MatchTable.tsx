import { Link, useParams } from "react-router";
import { useGetMatchInformationQuery } from "../services/MatchApi";
import useLoading from "./shared/hooks/UseLoader";
import Loader from "./shared/Loader";
import { useEffect, useState } from "react";

const MatchTable = () => {
  const { seriesID, matchType } = useParams();

  const { data, error } = useGetMatchInformationQuery("");

  const [seriesDetails, setSeriesDetails] = useState<any>(null);
  const [searchText, setSearchText] = useState("");

  console.log("la hai", seriesDetails);

  function dateFormat(timestamp: any) {
    const readableDate = new Date(Number(timestamp)).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );

    return readableDate;
  }

  useEffect(() => {
    setSeriesDetails(
      data?.typeMatches
        .find((match: any) => match?.matchType === matchType)
        ?.seriesMatches.map((seriesMatch: any) => seriesMatch)
        .find(
          (eachSeries: any) => eachSeries?.seriesAdWrapper?.seriesId == seriesID
        )?.seriesAdWrapper?.matches
    );
  }, [seriesID, data, matchType]);

  const handleSearchEvent = (event: any) => {
    console.log(event.target.value);
    setSearchText(event.target.value.toLowerCase());
  };

  useEffect(() => {
    // const filteredGame =data?.seriesAdWrapper?.matches.find((response)=> response?.matchInfo?.seriesName.toLowerCase().includes(searchText));
    // const filtered = data?.filter((item) =>
    //     item.seriesAdWrapper.seriesName.toLowerCase().includes(searchText)
    //   );
    const filteredData = data?.typeMatches
      .find((match: any) => match?.matchType === matchType)
      ?.seriesMatches.map((seriesMatch: any) => seriesMatch)
      .find(
        (eachSeries: any) => eachSeries?.seriesAdWrapper?.seriesId == seriesID
      )
      ?.seriesAdWrapper?.matches.filter(
        (response: any) =>
          response?.matchInfo?.seriesName.toLowerCase().includes(searchText) ||
          dateFormat(response?.matchInfo?.seriesStartDt)
            .toLowerCase()
            .includes(searchText) ||
          response?.matchInfo?.status.toLowerCase().includes(searchText)
      );

    setSeriesDetails(filteredData);
  }, [searchText]);

  console.log(seriesDetails);

  // Loader
  const isLoading = useLoading(1500);

  if (isLoading) return <Loader />;

  if (error) return <h1>Error</h1>;

  return (
    <>
      <section className="container mx-auto p-6">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            {/* Search Bar with Icon */}

            <p className="m-3 text-center">
              You can search your favorite games here 😁
            </p>
            <div className="m-6 flex justify-center items-center relative">
              <div className="relative w-full md:w-1/3">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="basic-addon1"
                      style={{ height: "45px" }}
                    >
                      🔎
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control border-black-300 border-2 rounded-lg py-2 px-4  focus:ring-2 focus:ring-purple-500"
                    style={{ border: "solid #e9aef2" }}
                    placeholder="Search..."
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                    onChange={() => handleSearchEvent(event)}
                  />
                </div>
              </div>
            </div>

            {seriesDetails?.length > 0 ? (
              <>
                {" "}
                <table className="w-full table-auto">
                  <thead>
                    <tr className="text-md  tracking-wide text-left text-white bg-purple-600 uppercase border-b border-gray-200">
                      <th className="px-4 py-3">Match</th>
                      <th className="px-4 py-3">Result</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {seriesDetails?.map((response: any) => {
                      return (
                        <>
                          <tr className="text-gray-700">
                            <td className="px-4 py-3 border">
                              <div className="flex items-center text-sm">
                                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                                  <img
                                    className="object-cover w-full h-full rounded-full"
                                    src="https://pngimg.com/uploads/cricket/cricket_PNG96.png"
                                    alt=""
                                    loading="lazy"
                                  />
                                  <div
                                    className="absolute inset-0 rounded-full shadow-inner"
                                    aria-hidden="true"
                                  ></div>
                                </div>
                                <div>
                                  <p className=" text-black">
                                    {response?.matchInfo?.seriesName}
                                  </p>
                                  {/* <p className="text-xs text-gray-600">{response?.matchInfo?.matchDesc}</p> */}
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm  border">
                              {response?.matchInfo?.status}
                            </td>
                            <td className="px-4 py-3 text-sm border">
                              <span className="px-2 py-1  leading-tight text-green-700 bg-green-100 rounded-sm">
                                {response?.matchInfo?.state}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm border">
                              {dateFormat(response?.matchInfo?.seriesStartDt)}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </>
            ) : (
              <>
                <div className="flex justify-center h-screen bg-gray-50 px-2">
                  <div className="text-center">
                    {/* SVG Icon */}
                    <svg
                      className="mx-auto h-16 w-16 text-purple-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 00.293.707l2 2a1 1 0 101.414-1.414L11 9.586V7z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <h1 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                      Oops! Data Not Found
                    </h1>

                    <p className="mt-4 text-gray-600 sm:text-lg">
                      The match you’re looking for doesn’t exist.
                    </p>

                    <div className="mt-6">
                      <Link
                        to="/"
                        className="inline-block rounded-md bg-purple-600 px-6 py-3 text-white text-sm font-medium shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                      >
                        Go Back Home
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default MatchTable;
