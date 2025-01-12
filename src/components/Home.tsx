import useLoading from "./shared/hooks/UseLoader";
import Loader from "./shared/Loader";

const Home = () => {
  // Loader
  const isLoading = useLoading(1500);
  if (isLoading) return <Loader />;
  return (
    <>
      {/* <section id="intro" className="wrapper style1 fullscreen fade-up">
                <div className="inner">
                    <h1>Hyperspace</h1>
                    <p>Just another fine responsive site template designed by <a href="http://html5up.net">HTML5 UP</a><br />
                        and released for free under the <a href="http://html5up.net/license">Creative Commons</a>.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Learn more</a></li>
                    </ul>
                </div>
            </section> */}

      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/50 text-indigo-600 font-bold">
              HOWZAT ! 🏏
            </h2>
            <p className="mt-2 text-pretty text-1xl font-semibold tracking-tight text-gray-900 sm:text-1xl lg:text-balance">
              Your ultimate cricket companion – live scores, stats, and security
              at your fingertips.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg
                      className="size-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                      />
                    </svg>
                  </div>
                  Real-Time Match Updates ⌛
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  Stay updated with live cricket scores, player statistics, and
                  ball-by-ball commentary. Whether it's a Test, ODI, or T20
                  match, our app provides you with instant updates to keep you
                  in the loop throughout the game.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg
                      className="size-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                  </div>
                  Data Security for Your Stats 🥓
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  Your cricket data is safe with us. Our app uses top-tier SSL
                  certificates to ensure your personal and match-related data is
                  encrypted and securely transmitted, protecting you from any
                  potential threats.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg
                      className="size-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </div>
                  Seamless Match Tracking 🎮
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  Track live match events with ease. Our app ensures smooth,
                  real-time score updates and player statistics, offering a
                  fluid and accurate experience, so you never miss a key moment
                  in the match.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg
                      className="size-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
                      />
                    </svg>
                  </div>
                  Enhanced Security Features 🔒
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  We prioritize your security while delivering high-quality
                  cricket match updates. With advanced security measures, your
                  app experience is both safe and reliable, ensuring you can
                  enjoy the game without worrying about security breaches.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
