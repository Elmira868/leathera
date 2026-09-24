
import { useState } from "react";
import { FaPhone, FaRegClock } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { SlEnvolope } from "react-icons/sl";

import Breadcrumb from "../components/Common/Breadcrumb.jsx";
import Button from "../components/Common/Button.jsx";

const contactDetails = [
  {
    label: "Visit our studio",
    value: "Leather Shop - Demo Store, United States",
    icon: MdLocationPin,
  },
  {
    label: "Call our team",
    value: "000-000-0000",
    icon: FaPhone,
  },
  {
    label: "Send an email",
    value: "sales@example.com",
    icon: SlEnvolope,
  },
];

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="w-full overflow-hidden">
      <Breadcrumb />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-roboto-Medium uppercase tracking-[0.24em] text-primary">
            We would love to hear from you
          </p>
          <h1 className="mt-3 text-3xl text-gray-900 sm:text-4xl">
            Let&apos;s talk leather
          </h1>
          <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
            Have a question about an order, a material, or a custom piece? Our
            team is here to help you find the right answer.
          </p>
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <section className="rounded-lg bg-[#3a2920] p-6 text-white sm:p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-second">
              Contact information
            </p>
            <h2 className="mt-3 text-2xl leading-tight sm:text-3xl">
              A real person is ready to help.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Reach us through any of the channels below. We usually reply
              within one business day.
            </p>

            <div className="mt-8 space-y-6">
              {contactDetails.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl text-second">
                    <Icon />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-white/50">
                      {label}
                    </p>
                    <p className="mt-1 break-words text-sm text-white/90">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-start gap-3 border-t border-white/15 pt-6 text-sm text-white/70">
              <FaRegClock className="mt-0.5 shrink-0 text-second" />
              <p>
                Monday - Friday
                <br />
                9:00 AM - 6:00 PM
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-gray-200 bg-white p-6 sm:p-8 lg:p-10">
            <div className="mb-7">
              <h2 className="text-2xl text-gray-900">Send us a message</h2>
              <p className="mt-2 text-sm text-gray-500">
                Fill out the form and we&apos;ll get back to you soon.
              </p>
            </div>

            {submitted && (
              <div
                role="status"
                className="mb-6 border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
              >
                Thanks for reaching out. Your message has been received.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm text-gray-700">
                  Your name
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    className="mt-2 w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-primary"
                  />
                </label>
                <label className="text-sm text-gray-700">
                  Email address
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    className="mt-2 w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-primary"
                  />
                </label>
              </div>

              <label className="block text-sm text-gray-700">
                Subject
                <input
                  required
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  className="mt-2 w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-primary"
                />
              </label>

              <label className="block text-sm text-gray-700">
                Message
                <textarea
                  required
                  name="message"
                  rows="5"
                  placeholder="Tell us a little more..."
                  className="mt-2 w-full resize-y rounded-md border border-gray-200 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-primary"
                />
              </label>

              <Button type="submit" className="w-full sm:w-auto">
                Send message
              </Button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;