// https://help.formspree.io/hc/en-us/articles/360055613373-The-Formspree-React-library
import { useForm, ValidationError } from "@formspree/react";

export default () => {
  const [state, handleSubmit] = useForm("xwkjlpbv");
  if (state.succeeded) {

    return <p>Thanks for your message. I'll respond to you soon!</p>;
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="p-6 py-5 px-4 w-full rounded-2xl border sm:px-6 border-primary-700/40"
      >
        <h2 className="flex flex-row items-center text-sm font-semibold text-primary-300">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 stroke-1 stroke-primary-300"
          >
            <path
              d="M7 9l5 3.5L17 9"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path d="M2 17V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"></path>
          </svg>
          <span className="ml-3 text-lg">Contact Jared</span>
        </h2>
        <p className="mt-2 text-sm text-primary-400">
          What's up? Want to talk mini painting? Wanna' play some chess?
          Question about the Jam Stack? I'm your Huckleberry!
        </p>
        <div className="flex flex-col gap-4 mt-6">
          <input
            type="email"
            placeholder="Your email"
            aria-label="Your email"
            required
            id="email"
            name="email"
            className="flex-auto px-3 min-w-0 h-12 bg-white rounded-md border shadow-md appearance-none sm:text-sm focus:ring-4 focus:outline-none shadow-primary-800/5 border-primary-700 bg-primary-700/[0.15] text-primary-200 placeholder:text-primary-500 focus:border-accent-400 focus:ring-accent-400/10"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            required
            rows="4"
            placeholder="Your message ..."
            name="message"
            aria-label="message"
            className="p-3 min-w-0 rounded-md border shadow-md appearance-none sm:text-sm focus:ring-4 focus:outline-none border-primary-700 bg-primary-700/[0.15] text-primary-200 placeholder:text-primary-500 focus:border-accent-400 focus:ring-accent-400/10"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            className="flex-none py-2 px-3 text-sm font-semibold rounded-md transition active:transition-none outline-offset-2 text-primary-100 bg-primary-700 hover:bg-primary-600 active:bg-primary-700 active:text-primary-100/70"
            type="submit"
            disabled={state.submitting}
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};
