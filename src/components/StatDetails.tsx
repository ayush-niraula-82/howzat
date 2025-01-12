import { useParams } from "react-router";
import { useGetRecordsQuery } from "../services/StatApi"

const StatDetails = () => {


  const params = useParams();


  const { data } = useGetRecordsQuery({ statsType: params?.statsType, matchType: '2' });
  console.log("🚀 ~ StatDetails ~ data:", data);

  console.log("🚀 ~ StatDetails ~ params:", params)




  return (
    <>
<ul role="list" className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3">

{data?.values?.map((response, index)=>{
  return (<>
    <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow m-2 ">
    <div className="flex w-full items-center justify-between space-x-6 p-6">
      <div className="flex-1 truncate">
        <div className="flex items-center space-x-3">
          <h3 className="truncate text-sm font-medium text-gray-900">{index + 1}. {response.values[1]}</h3>
          <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-blue-600 ring-1 ring-inset ring-green-600/20">Jersey Number </span>
        </div>
        <p className="mt-1 truncate text-sm text-gray-500">Acount owner</p>
      </div>
    </div>
    <div>
      <div className="-mt-px flex divide-x divide-gray-200">
        <div className="flex w-0 flex-1">
          <a href="howpossible17@example.com" className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
            🔎
            More Information
          </a>
        </div>
        <div className="-ml-px flex w-0 flex-1">
          <a href="tel:+1-202-555-0170" className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
            📊
            Visualize
          </a>
        </div>
      </div>
    </div>
  </li>
  </>)
})}




</ul>
    </>
  )
}

export default StatDetails