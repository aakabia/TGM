export const BtnList = [
  { label: "ABOUT", link: "/about", icon: "about", newTab: false },
  { label: "SERVICES", link: "/services", icon: "service", newTab: false },
  { label: "CAREERS", link: "/careers", icon: "careers", newTab: false },
  { label: "GALLERY", link: "/gallery", icon: "gallery", newTab: false },
  { label: "PORTAL", link: "/portal", icon: "portal", newTab: true },
  { label: "BLOG", link: "/blog", icon: "blog", newTab: false },
];

// Above is data for our links

export const lawnBio = {
  serviceStatment: (
    <>
      At TGM, we believe your lawn is more than just a patch of grass—it's an
      essential part of your home and a space where memories are made. Our
      commitment is to keep your lawn looking vibrant, healthy, and fresh
      year-round, ensuring it remains a source of pride and comfort. We
      understand that a well-maintained lawn is not just about aesthetics; it’s
      about creating a safe, welcoming environment for your family and guests.
      That’s why we use only the best practices and eco-friendly solutions to
      protect your home and lawn while enhancing its natural beauty. TGM is
      proud to provide various services throughout the Gwinnett area, including{" "}
      <span className="text-emerald font-bold">lawn maintenance</span>,{" "}
      <span className="text-emerald font-bold">pressure washing</span>,{" "}
      <span className="text-emerald font-bold">gutter cleaning</span>,{" "}
      <span className="text-emerald font-bold"> aeration</span> and more!
    </>
  ),

  experienceStatment: (
    <>
      With over 15 years of expertise in lawn care and property maintenance, our
      experience has taught us the importance of crafting tailored strategies
      that provide property owners with lasting results. We take pride in our
      commitment to excellence, ensuring every lawn reflects the care and
      precision we bring to our work. Let us transform your outdoor space &
      request a{" "}
      <a className="underline text-emerald font-bold hover:text-black" href="/">
        quote
      </a>{" "}
      today!
    </>
  ),

  foundingStatment: (
    <>
      TWO GUYS & A Mower (TGM) was founded in 2008 as a small landscaping
      company dedicated to serving our local neighborhood. With a simple yet
      effective mission statement
      <span className="text-emerald font-bold">—YOU GROW IT, WE MOW IT—</span>
      the company quickly gained trust and recognition for our reliable, quality
      lawn care services. Our commitment to customer satisfaction and community
      involvement has driven the growth of the business, turning it into a
      beloved servicer in the area.
    </>
  ),

  brandonBio: (
    <>
      <span className="text-emerald font-bold">Brandon Avery Macko</span>{" "}
      founded TGM in 2008 at just 10 years old, driven by his goal to save money
      for his first car—a Ford Ranger. What started with a single push mower
      quickly grew into a thriving landscaping business. Through dedication and
      hard work, he transformed TGM from a small neighborhood service into a
      full-scale operation with a fleet of equipment, proving that ambition and
      persistence can turn a simple idea into lasting success.
    </>
  ),

  bryanBio: (
    <>
      <span className="text-emerald font-bold">Bryan Austin Macko</span> stepped
      up to lead TGM in order to keep his late brother Brandon’s dream alive,
      ensuring his legacy continues with dedication and passion. Alongside
      running the business, Bryan is also a passionate BBQ chef and the owner of
      Big MAC’s BBQ, a well-loved local spot in Gwinnett. His love for cooking
      extends beyond his restaurant, as he actively competes in local BBQ
      competitions, bringing his signature flavors to the community. Through
      both TGM and Big MAC’s BBQ, Bryan continues to build on his brother’s
      vision while pursuing his own passions.
    </>
  ),
};

// Above are exported react fragments that contain hard coded data that we will display on our home and about page.

export const serviceAreas = {
  areas: [
    "-Dacula",
    "-Lawrenceville",
    "-Snellville",
    "-Suwanee",
    "-Lilburn",
    "-Grayson",
    "-Norcross",
    "-Winder",
    "-Bethlehem",
    "-Auburn",
  ],
  areaStatment: `TGM proudly serves the Gwinnett County area, providing top-quality lawn care and property maintenance services. If you're unsure whether we service your specific location, feel free to reach out, and we'll be happy to assist you!`,
};

export const marqueeWords = {
  top: ["Mowing", "Edging", "Trimming", "Aeration"],
  bottom: ["Fertilization", "Turf Dye", "Leaf Clean Up"],
};
