import { Link } from "react-router";
import { FaArrowRight, FaCheck } from "react-icons/fa6";

import Breadcrumb from "../components/Common/Breadcrumb.jsx";
import Button from "../components/Common/Button.jsx";

const values = [
  {
    title: "Materials with meaning",
    text: "We choose textures and finishes that become more beautiful with time.",
  },
  {
    title: "Made for everyday life",
    text: "Every piece balances lasting quality with the ease of daily use.",
  },
  {
    title: "Thoughtful by design",
    text: "Clean silhouettes and considered details keep the focus on what matters.",
  },
];

const AboutPage = () => (
  <div className="w-full overflow-hidden">
    <Breadcrumb />

    <main>
      <section className="relative min-h-105 overflow-hidden bg-[#3a2920] sm:min-h-120 lg:min-h-140">
        <img
          src="/assets/static/main-banner-2.jpg"
          alt="Leathera leather collection"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#241811]/90 via-[#3a2920]/55 to-transparent" />
        <div className="relative mx-auto flex min-h-105 max-w-7xl items-center px-4 py-12 sm:min-h-120 sm:px-6 lg:min-h-140 lg:px-8">
          <div className="max-w-xl text-white">
            <p className="text-xs font-roboto-Medium uppercase tracking-[0.24em] text-second">
              The Leathera story
            </p>
            <h1 className="mt-4 text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Objects with a life of their own.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/80 sm:text-base">
              Leathera brings together tactile materials, quiet confidence, and
              pieces designed to stay with you for years.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <p className="text-xs font-roboto-Medium uppercase tracking-[0.22em] text-primary">
            More than a material
          </p>
          <h2 className="mt-3 text-3xl leading-tight text-gray-900 sm:text-4xl">
            We believe the best things get better with use.
          </h2>
          <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
            Our collection is inspired by the character of leather: warm,
            resilient, and never exactly the same twice. We look for pieces
            that feel considered without feeling precious, and practical
            without losing their point of view.
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
            From the first sketch to the final finish, we keep the process
            focused on honest materials and details you can feel.
          </p>

          <ul className="mt-7 space-y-3 text-sm text-gray-700">
            {["Carefully selected materials", "Timeless, versatile silhouettes", "A collection made to be lived with"].map(
              (item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-second/25 text-xs text-primary">
                    <FaCheck />
                  </span>
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-lg bg-[#f3ebe4] p-5 sm:p-8">
          <img
            src="/assets/static/main-banner-3.jpg"
            alt="Crafted leather details"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-8 left-8 bg-white/95 px-5 py-4 shadow-lg sm:bottom-12 sm:left-12">
            <p className="text-2xl text-primary">01</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
              Made with intention
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-[#faf8f6] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <p className="text-xs font-roboto-Medium uppercase tracking-[0.22em] text-primary">
              What guides us
            </p>
            <h2 className="mt-3 text-3xl text-gray-900 sm:text-4xl">
              Simple principles. Strong character.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
            {values.map((value, index) => (
              <article key={value.title} className="border-t-2 border-second bg-white p-6 sm:p-7">
                <span className="text-sm text-primary">0{index + 1}</span>
                <h3 className="mt-8 text-lg text-gray-900">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-500">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-4 py-12 sm:px-6 sm:py-16 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-xs font-roboto-Medium uppercase tracking-[0.22em] text-primary">
            Find your next favorite piece
          </p>
          <h2 className="mt-2 text-2xl text-gray-900 sm:text-3xl">
            Explore the collection.
          </h2>
        </div>
        <Link to="/fashion">
          <Button className="inline-flex items-center gap-3">
            Shop collection
            <FaArrowRight aria-hidden="true" />
          </Button>
        </Link>
      </section>
    </main>
  </div>
);

export default AboutPage;
