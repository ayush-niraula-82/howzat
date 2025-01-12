import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useGetStatQuery } from "../services/StatApi";
import { useEffect, useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router";
import Loader from "./shared/Loader";
import useLoading from "./shared/hooks/UseLoader";

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Stats = () => {
    // Loader


  const { data } = useGetStatQuery('');
  const navigate = useNavigate();
  console.log("🚀 ~ Stats ~ data:", data);

  const [batterInfo, setBatterInfo] = useState();
  const [bowlerInfo, setBowlerInfo] = useState();
  const [renderList, setRenderList] = useState();

  useEffect(() => {
    if (data) {
      setBatterInfo(data?.statsTypesList[0]);
      setBowlerInfo(data?.statsTypesList[1]);
    }
  }, [data]); // Only run this effect when `data` changes

  // Log the updated batterInfo and bowlerInfo
  useEffect(() => {
    console.log("🚀 ~ useEffect ~ batterInfo:", batterInfo);
    console.log("🚀 ~ useEffect ~ bowlerInfo:", bowlerInfo);
    setRenderList(batterInfo)
  }, [batterInfo, bowlerInfo]); // This effect runs when batterInfo or bowlerInfo changes


  const handleToggleButton = (event) =>{
    let toggleFlag=event.target.checked;
    if(toggleFlag){
      setRenderList(bowlerInfo)
    }
    else{
      setRenderList(batterInfo)
    }

    console.log('asjdkhanslkdnasldnkas',renderList)
  }


  const navigateToStatDetails = (id:string)=>{
    navigate(`/stats/${id}`);
  }

  
  const isLoading = useLoading(1500);

  if (isLoading) return <Loader />;


  return (

    <>
    {/* Toggle Section */}
    <div className="mt-5 flex justify-center">
      <div className="cursor-pointer">
        <nav
          className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center"
          aria-label="Tabs"
        >
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <label
              htmlFor="AcceptConditions"
              className="relative inline-block h-8 w-12 cursor-pointer"
            >
              <input
                type="checkbox"
                id="AcceptConditions"
                className="peer sr-only"
                onChange={handleToggleButton}
              />
              <span className="absolute inset-0 m-auto h-2 w-full rounded-full bg-gray-300 peer-checked:bg-indigo-500 transition-all"></span>
              <span className="absolute inset-y-0 left-0 m-auto h-6 w-6 rounded-full bg-gray-500 peer-checked:translate-x-6 transition-all"></span>
            </label>
            <span className="text-gray-600 text-xs sm:text-sm"  >
              ** Toggle to switch between batsmen and bowler
            </span>
          </div>
        </nav>
      </div>
    </div>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6 justify-cener items-start">



{renderList?.types.map((response:any)=>{
  return <>
    <div className="w-full max-w-sm bg-gray-100 dark:bg-gray-700 relative shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform" onClick={()=>navigateToStatDetails(response?.value)}>
    <div className="flex items-center gap-4">
      <img
        src={response?.category === 'Batting' ? "https://th.bing.com/th/id/OIP.PjkQMURaMJEilWQ8sN5wIAHaIO?rs=1&pid=ImgDetMain" : 'https://cdn.vectorstock.com/i/thumb-large/15/22/baseball-player-pitcher-throwing-ball-vector-1631522.jpg'}
        alt="Profile"
        className="w-24 h-24 sm:w-32 sm:h-32  group-hover:h-28 object-center object-cover rounded-full transition-all duration-500"
      />
      <div className="w-fit transition-all transform duration-500">
        <h1 className="text-gray-600 dark:text-gray-200 font-bold text-lg sm:text-xl">
        {response?.header}
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">{response?.category}</p>
        
      </div>
    </div>
  </div>
 
  </>
})}


</div>

  </>
  

    // <>
    //   <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 p-4 md:p-6 xl:p-8">
    //     <div className="bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105">
    //       <div className="p-4 flex justify-center">
    //         <Bar
    //           data={{
    //             labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //             datasets: [
    //               {
    //                 label: "Sample Dataset", // Use a single string
    //                 data: [12, 19, 3, 5, 2, 3], // Y-axis data points
    //                 backgroundColor: [
    //                   "rgba(255, 99, 132, 0.2)",
    //                   "rgba(54, 162, 235, 0.2)",
    //                   "rgba(255, 206, 86, 0.2)",
    //                   "rgba(75, 192, 192, 0.2)",
    //                   "rgba(153, 102, 255, 0.2)",
    //                   "rgba(255, 159, 64, 0.2)",
    //                 ],
    //                 borderColor: [
    //                   "rgba(255, 99, 132, 1)",
    //                   "rgba(54, 162, 235, 1)",
    //                   "rgba(255, 206, 86, 1)",
    //                   "rgba(75, 192, 192, 1)",
    //                   "rgba(153, 102, 255, 1)",
    //                   "rgba(255, 159, 64, 1)",
    //                 ],
    //                 borderWidth: 1,
    //               },
    //             ],
    //           }}
    //         />
    //       </div>
    //       <div className="px-6 pb-4 text-center">
    //         <h6 className="text-lg font-semibold tracking-tight text-violet-800">
    //           Simple Search Bar
    //         </h6>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default Stats;
