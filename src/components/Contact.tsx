// import { useForm,  } from "react-hook-form";
// import { emailPattern, passwordPattern } from "./shared/utils/ValidatorPattern";
import { useForm } from "@formspree/react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import useLoading from "./shared/hooks/UseLoader";
import Loader from "./shared/Loader";

const Contact = () => {
  const [state, handleSubmit] = useForm("xldeaqzg");

  const navigate = useNavigate();

  useEffect(() => {
    if (state.succeeded) {
      toast.dismiss();
      toast("Your message has been sent successfully !", { type: "success" });
      navigate("/");
    }
  }, [state.succeeded]);

  // const {register,handleSubmit, formState:{errors}} = useForm();

  // console.log(errors)

  // Define the submit handler

  const isLoading = useLoading(1500);

  if (isLoading) return <Loader />;



  return (
    <>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Get in Touch !</h1>

            <p className="mt-4 text-gray-500">
              Have questions about our cricket app or need assistance? Fill out
              the form below, and we’ll get back to you as soon as possible.
              Whether it’s feedback, feature requests, or support, we’re here to
              help!
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          >
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm placeholder-gray-500"
                  placeholder="Email..."
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  📧
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>

              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Subject..."
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  📗
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Subject
              </label>

              <div className="relative">
                <input
                  id="message"
                  name="message"
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Message..."
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  📩
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">Let's Connect ! 👋</p>

              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt=""
            src="https://wallpapers.com/images/hd/virat-kohli-hd-jersey-p3bzd69l7glohwuq.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
