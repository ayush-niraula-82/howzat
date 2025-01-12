import { useGetMatchInformationQuery } from "../services/MatchApi";
import InformationCard from "./InformationCard";
import viratImg from "../assets/images/virat.jpg";
import Loader from "./shared/Loader";
import useLoading from "./shared/hooks/UseLoader";

const Match = () => {
  const { data, isFetching, error } = useGetMatchInformationQuery("");

  // Loader
  const isLoading = useLoading(1500);

  if (isLoading) return <Loader />;

  if (error) return <h1>Error</h1>;

  console.log(data);
  console.log(isFetching);

  return (
    <>
      <div className="bg-gray-50 py-24 sm:py-6">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2 grid-cols-1">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>

              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-bold tracking-tight text-gray-950 max-lg:text-center">
                    Match Update
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Here, you can explore various types of patches and find
                    detailed information about each cricket match
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <img
                      className="size-full object-cover object-top"
                      src={viratImg}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>

            {data?.typeMatches.map((match: any) => {
              return <InformationCard matchInfo={match} />;
            })}
          </div>
        </div>
      </div>

      {/* <section id="one" className="wrapper style2 spotlights">
                <section>
                    <a href="#" className="image"><img src="images/pic01.jpg" alt="" data-position="center center" /></a>
                    <div className="content">
                        <div className="inner">
                            <h2>Sed ipsum dolor</h2>
                            <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
                            <ul className="actions">
                                <li><a href="generic.html" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="#" className="image"><img src="images/pic02.jpg" alt="" data-position="top center" /></a>
                    <div className="content">
                        <div className="inner">
                            <h2>Feugiat consequat</h2>
                            <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
                            <ul className="actions">
                                <li><a href="generic.html" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="#" className="image"><img src="images/pic03.jpg" alt="" data-position="25% 25%" /></a>
                    <div className="content">
                        <div className="inner">
                            <h2>Ultricies aliquam</h2>
                            <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
                            <ul className="actions">
                                <li><a href="generic.html" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section> */}
    </>
  );
};

export default Match;
