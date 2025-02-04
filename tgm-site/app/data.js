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
      <span className="text-emerald">lawn maintenance</span>,{" "}
      <span className="text-emerald">pressure washing</span>,{" "}
      <span className="text-emerald">gutter cleaning</span>,{" "}
      <span className="text-emerald"> aeration</span> and more!
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
      <a className="underline text-emerald hover:text-black" href="/">
        quote
      </a>{" "}
      today!
    </>
  ),
};

// Above are exported react fragments that contain hard coded data that we will display on our home page.

export const serviceAreas =
  {
    areas: [
      "-Dacula","-Lawrenceville","-Snellville","-Suwanee","-Lilburn","-Grayson","-Norcross","-Winder","-Bethlehem","-Auburn",
    ],
    areaStatment: `TGM proudly serves the Gwinnett County area, providing top-quality lawn care and property maintenance services. If you're unsure whether we service your specific location, feel free to reach out, and we'll be happy to assist you!`,
};


export const marqueeWords = { top:["Mowing", "Edging", "Trimming", "Aeration"],
    bottom:["Fertilization", "Turf Dye","Leaf Clean Up"]
}