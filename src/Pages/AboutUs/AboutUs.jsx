import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="container mb-32">
      {/* Heading */}
      <div>
        <h1 className="text-center font-bold text-6xl underline font-sans text-gray-700 tracking-wider mt-10 mb-10">
          About Us
        </h1>
      </div>
      {/* about description */}
      <div className="mt-14">
        <p className="text-clip text-xl mb-4 uppercase">
          Best Quality Best Price
        </p>
        <h1 className="text-5xl tracking-wide font-semibold mb-1">
          Buy Big Pay Small
        </h1>
        <p className="text-xl underline text-clip">
          Welcome to Mobile Hub - Where saving money meets saving planet!!
        </p>
      </div>
      <div className="mt-6">
        <p className="text-gray-700 tracking-wide">
          You're eyeing that sleek, state-of-the-art smartphone, but your wallet
          freaks out at the thought of the price tag. Enter Mobilehub, your
          ultimate solution to tech cravings without breaking the bank or
          harming the environment.`
        </p>
        <p className="text-gray-700 tracking-wide mt-1">
          At Mobilehub, we're not just another tech retailer; we're on a mission
          to revolutionize the way you shop for gadgets. Our journey began in
          2017, nestled in the heart of Hisar, Haryana, with a vision to make
          premium technology accessible to all while prioritizing our planet's
          well-being.
        </p>
      </div>
      <div className="mt-6">
        <p className="text-gray-700 text-xl mb-3">
          Why compromise between luxury and sustainability when you can have
          both?
        </p>
        <p className="text-gray-600 mb-3 tracking-wide">
          With Mobilehub, you can indulge in the latest gadgets guilt-free. We
          specialize in offering high-tech refurbished phones that perform just
          like new, minus the hefty price tag. But our commitment doesn't stop
          there. We're passionate about reducing electronic waste and preserving
          our natural resources. Every purchase fromn Mobilehub isn't just a
          smart buy; it's a conscious choice towards a greener planet.
        </p>
      </div>
      <div className="mt-4">
        <p className="text-gray-700 text-xl mb-2 tracking-wide">
          Why choose us?
        </p>
        <p className="text-gray-600 mb-3 tracking-wide">
          For starters, quality is our middle name. Each device undergoes
          rigorous quality checks and comes with a proper warranty, ensuring
          peace of mind with every purchase. Plus, our certified refurbished
          devices boast unbeatable prices and flexible payment options,
          including comfortable EMIs.
        </p>
        <p className="text-gray-600 mb-3 tracking-wide">
          And the best part? You're not just saving money – you're making a
          difference. When you opt for refurbished tech, you're diverting
          kilograms of raw materials from landfills, slashing CO2 emissions, and
          conserving precious water resources.It's a win-win for your wallet and
          the environment.
        </p>
      </div>
      <div className="mt-4">
        <p className="text-gray-700 text-xl mb-2 tracking-wide">
          But there's more to the story!!
        </p>
        <p className="text-gray-600 mb-3 tracking-wide">
          In recent years, the demand for refurbished devices has soared, driven
          not only by cost-effectiveness but also by growing awareness of
          environmental benefits. Consumers are increasingly realizing that
          buying refurbished not only saves them money but also alignswith their
          eco-conscious values.
        </p>
        <p className="text-gray-600 mb-3 tracking-wide">
          With the rapid pace of technological advancements, the lifespan of
          gadgets is getting shorter, contributing to the mounting
          electronicwaste crisis. Refurbished devices offer a sustainable
          solution by extending thelifecycle of electronics, reducing the need
          for new production and ultimatelyeasing the burden on the environment.
        </p>
      </div>
      <div className="mt-4 mb-5">
        <p className="text-gray-700 text-xl mb-1 tracking-wide">
          MONEY AND QUALITY,BOTH MATTER.
        </p>
        <p className="text-gray-600 mb-2 tracking-wide">
          In addition to the rising demand for refurbished devices due to their
          cost-effectiveness and environmental benefits,there are other
          compelling reasons why consumers are increasingly turning toMobilehub
          for their tech needs. One significant factor is the assurance
          ofquality and reliability that comes with every purchase. Unlike
          buying fromuncertain sources or classified ads, Mobilehub's stringent
          refurbishmentprocess ensures that each device meets high standards of
          performance andfunctionality.
        </p>
        <p className="text-gray-600 mb-3 tracking-wide">
          Moreover, Mobilehub offers a widerange of options, catering to various
          budgets and preferences. Whether you'relooking for the latest flagship
          model or a more budget-friendly option, you'llfind a diverse selection
          to choose from. This inclusivity extends to differentbrands, operating
          systems, and features, ensuring that there's something foreveryone.
        </p>
      </div>
      <div className="mt-4 mb-4">
        <p className="text-gray-700 text-xl mb-1 tracking-wide">
          We care about yoursatisfaction!!
        </p>
        <p className="text-gray-600 mb-3 tracking-wide">
          Mobilehub's commitment to customersatisfaction goes beyond just the
          point of sale. Our dedicated support team isalways on hand to assist
          with any queries or concerns, providing ongoingassistance throughout
          the ownership experience. Whether it's troubleshootingtechnical issues
          or offering advice on optimizing device performance, we'rehere to help
          every step of the way.
        </p>
        <p className="text-gray-600 mb-1 tracking-wide">
          By choosing Mobilehub, you're not justinvesting in a new device –
          you're joining a community dedicated tosustainability, affordability,
          and technological innovation. Together,we can make a meaningful impact
          on the environment while enjoying the latestand greatest in tech.
          Don’t delay it. Join the Mobilehub revolution today andexperience the
          future of smart, sustainable shopping.
        </p>
      </div>
      <div>
        <p className="text-gray-700 text-xl mb-3 tracking-wide">
          So, what are you waiting for?
        </p>
        <p className="text-gray-600 mb-3 tracking-wide">
          Step into ourvirtual aisles or visit our brick-and-mortar store for an
          unparalleled shoppingexperience. Whether you're a tech enthusiast or a
          conscientious consumer,Mobilehub has something for everyone.
        </p>
      </div>
      <div className="flex flex-col justify-between items-center">
        <Link to={"/register"}><p className="font-semibold text-gray-700 text-xl underline">Join us</p></Link>
        <p>
          in our mission to make refurbished the new norm. Together, let's pave
          the way for a future where sustainability and affordability go hand in
          hand. Because at MobileHub, saving money and saving the planet are one
          and the same.
        </p>
      </div>

      <div className="mt-5 text-center">
        <p className="text-gray-700 text-2xl font-semibold">Shop smart. Shop sustainably. Shop MobileHub.</p>
      </div>
    </div>
  );
}

export default AboutUs;
