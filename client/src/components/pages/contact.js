export default function Contact() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className="w-full sm:w-3/4 p-6 m-auto lg:max-w-xl">
        <h1 className="text-3xl font-nunito text-center text-sky-50 uppercase">
          Contact Form
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label>
              <span className="font-nunito text-sky-50">Your name</span>
              <input
                type="text"
                name="name"
                className="

            w-full
            block px-3 py-2 mt-2
            border-gray-600
            rounded-md
            shadow-sm
            focus:border-indigo-600
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="John cooks"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="font-nunito text-sky-50">Email address</span>
              <input
                name="email"
                type="email"
                className="
            block
            w-full
            mt-2 px-3 py-2
            border-gray-600
            rounded-md
            shadow-sm
            focus:border-indigo-600
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="john.cooks@example.com"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span class="font-nunito text-sky-50">Message</span>
              <textarea
                name="message"
                className="
            block
            w-full
            mt-2 px-16 py-8
            border-gray-600
            rounded-md
            shadow-sm
            focus:border-indigo-600
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="5"
              ></textarea>
            </label>
          </div>

          <div class="mb-6">
            <button
              type="submit"
              className="
            h-10
            px-5
            font-nunito
            text-dark
            bg-sky-50
            rounded-lg
            transition-colors
            duration-150
            hover:ring
            hover:ring-indigo-200
            hover:ring-opacity-50
            hover:bg-[#222634]
            hover:text-sky-50
          "
            >
              Contact Me
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
};