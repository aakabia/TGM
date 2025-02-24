import LawnManageService from "../public/images/lawnManage.jpg";
import propertyCareService from "../public/images/propertyCare.jpg";
import fertilizerCareService from "../public/images/fertilizer.jpg";
import pressureWashingService from "../public/images/pressureWashing.jpg";
import leafCleanUPService from "../public/images/leafCleanUp.jpg";
import aerationService from "../public/images/aeration.jpg";
import mulchService from "../public/images/mulch.jpg";
import flowerService from "../public/images/flowers.jpg";
import trashService from "../public/images/lawnTrash.jpg";
import { Option } from "lucide-react";

export const BtnList = [
  { label: "ABOUT", link: "/about", icon: "about", newTab: false },
  { label: "SERVICES", link: "/services", icon: "service", newTab: false },
  { label: "CAREERS", link: "/careers", icon: "careers", newTab: false },
  { label: "GALLERY", link: "/gallery", icon: "gallery", newTab: false },
  { label: "PORTAL", link: "/portal", icon: "portal", newTab: false },
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

  serviceBio: (
    <>
      At Two Guys & A Mower, we offer a wide range of services, including{" "}
      <span className="text-emerald font-bold">lawn care</span>,{" "}
      <span className="text-emerald font-bold">gutter cleaning</span>,{" "}
      <span className="text-emerald font-bold">pressure washing</span>,{" "}
      <span className="text-emerald font-bold">aeration</span>,{" "}
      <span className="text-emerald font-bold">and more</span>. We specialize in
      weekly and bi-weekly landscape management for both residential and
      commercial properties, providing year-round property care for residents of
      Gwinnett County and the surrounding areas. TGM is dedicated to helping our
      clients achieve their landscaping goals with precision and reliability.
    </>
  ),

  quoteBio: (
    <>
      At TGM, we are dedicated to{" "}
      <span className="text-emerald font-bold">
        providing exceptional lawn care services{" "}
      </span>
      tailored to meet your unique needs. Whether you’re looking for routine
      maintenance, landscaping design, or specialized treatments, our team of
      experienced professionals is here to help you achieve the lush, vibrant
      lawn of your dreams. We pride ourselves on our commitment to quality,
      customer satisfaction, and environmentally friendly practices. If you have
      any questions, concerns, or would like to schedule a consultation, please
      don’t hesitate to reach out to us. We look forward to helping you enhance
      the beauty of your outdoor space!
    </>
  ),

  careerBio: (
    <>
      Welcome to Two Guys and a Mower's Career Services page! We are passionate
      about providing top-notch lawn care and landscaping services to our
      community, and we're always on the lookout for dedicated individuals to
      join our team. At Two Guys and a Mower, we believe that our{" "}
      <span className="text-emerald font-bold">
        employees are our greatest asset
      </span>
      , and we strive to create a{" "}
      <span className="text-emerald font-bold"> supportive</span> and{" "}
      <span className="text-emerald font-bold">inclusive </span> work
      environment where everyone can{" "}
      <span className="text-emerald font-bold">thrive</span>. Whether you're an
      experienced professional or just starting out, we offer opportunities for
      growth, training, and development in a dynamic and fun atmosphere. If
      you're ready to take your career to the next level and be part of a team
      that values <span className="text-emerald font-bold">teamwork</span>,
      please fill out the form below if interested!
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

export const serviceDiscriptions = [
  {
    pic: LawnManageService,
    alt: "Nice lawn on a yard",
    title: "Lawn Management",
    serviceBio:
      "Our lawn management service includes mowing, edging along driveways, walkways, and bed areas, as well as clearing debris from concrete surfaces to keep your property looking pristine. Enjoy a beautifully maintained lawn that enhances your home’s curb appeal effortlessly!",
    plansDiscription:
      "We offer flexible service plans designed to maintain a healthy, well-groomed lawn throughout the season. Choose a schedule that works best for you and enjoy a consistently maintained outdoor space with ease.",
    plans: [
      `15-week lawn maintenance contract (bi-weekly from April to October).`,
      `30-week lawn maintenance contract (weekly from April to October).`,
    ],
  },
  {
    pic: propertyCareService,
    alt: "Worker taking care of the property",
    title: "Property Management",
    serviceBio:
      "Our weekly property maintenance includes expert shrub and hedge pruning, professional lawn fertilization, and core plug aeration for a healthier, greener lawn. Let us handle the details so you can enjoy a lush, vibrant landscape year-round!",
    plansDiscription:
      "Choose from our 30, 40, or 50-week landscape management programs. Our dedicated team ensures precise lawn cutting, crisp perimeters, and a consistently clean property. Sit back, relax, and enjoy your outdoor space with the confidence that your landscape is in expert hands.",
    plans: [
      `30-Week Landscape Management Contract: (March–October)`,
      `40-Week Landscape Management Contract: (April–December, includes leaf clean-up)`,
      `50-Week Landscape Management Contract: (March–February, includes leaf clean-up and 1 seasonal flower installation)`,
      `50-Week Commercial Landscaping Contract: (March–February, includes leaf clean-up, 1 mulch or pine straw application, and 2 seasonal flower installations) – Recommended for HOA’s.`,
    ],
  },
  {
    pic: fertilizerCareService,
    alt: "Fertilizer in workers hand",
    title: "Tree Pruning & Fertilizer",
    serviceBio:
      " Enhance your weekly lawn care service by adding our expert shrub pruning for a bundled savings. Our lawn fertilization service is the perfect way to boost your yard’s curb appeal, promote healthier grass growth, and increase resistance to pests, all while ensuring a vibrant and lush lawn throughout the growing season.",
    plansDiscription:
      "Our crepe myrtle and small tree pruning services are available during the winter months, from December to March, ensuring your trees stay healthy and beautifully shaped throughout the year.",
    plans: [
      `Bermuda Lawns: March to November`,
      `Zoysia Lawns: March to November`,
      `Fescue Lawns: September to June`,
    ],
  },
  {
    pic: pressureWashingService,
    alt: "Worker pressure washing walk way",
    title: "Pressure Washing",
    serviceBio:
      "Enhance the beauty of your property by adding our professional pressure washing service to any of our landscape management packages. It’s the perfect way to remove dirt, grime, and stains, leaving your outdoor spaces looking fresh and well-maintained.",
    plansDiscription:
      "Our pressure washing service is available from March through November, ensuring your property stays spotless and inviting throughout the year.",
    plans: [
      `-House Washing`,
      `-Roof Washing`,
      `-Roof Washing`,
      `-Concrete Cleaning`,
    ],
  },
  {
    pic: leafCleanUPService,
    alt: "Worker blowing leafs",
    title: "Leaf & Gutters",
    serviceBio:
      "Our gutter cleaning service involves removing leaves by either blowing them off the roof or hand-cleaning them while on a ladder. Additionally, our mulching leaf clean-up service includes blowing out bed areas and mulching the leaves throughout your yard to keep it looking neat and tidy.",
    plansDiscription:
      "Mulching and leaf clean-up service are available from October through February and November through January.",
    plans: [
      `Gutter cleaning service is available from October through February`,
      `Leaf clean-up and mulching from November through January`,
      `New to Fall 2025: Our "Blow and Go" drive-by leaf clean-up service allows customers to blow their leaves to the edge of the curb. We will then come by to collect and dispose of them, offering a convenient and efficient solution from November through January.`,
    ],
  },
  {
    pic: aerationService,
    alt: "Picture of nice grass",
    title: "Aeration & Topdressing",
    serviceBio:
      "Our aeration service is tailored to your lawn type, while our topdressing service provides a natural solution to maintain healthy turf throughout the growing season and helps retain moisture during drought conditions.",
    plansDiscription:
      "Our topdressing material is a custom blend of compost, topsoil, and sand, making it an excellent choice for leveling lawns and promoting the successful establishment of new sod on compacted surfaces.",
    plans: [
      `Our aeration service depends on lawn type:`,
      `-Bermuda Lawns: April-June, September-October`,
      `-Zoysia Lawns:  April-July `,
      `-Fescue Lawns: August-November`,
      `Topdressing service is recommended for all lawn types from March to September.`,
    ],
  },
  {
    pic: mulchService,
    alt: "Laying sod on a yard",
    title: "Sod & Mulch Installation",
    serviceBio:
      "Our sod installation service delivers an instant, lush lawn, perfect for filling in bare spots or replacing damaged grass. We prepare the soil, lay the sod, and use proper watering techniques to ensure a vibrant, healthy lawn. Additionally, our mulch installation service enhances the beauty of your landscape by retaining moisture, preventing weeds, and adding a polished look. With premium mulch options and expert application, we give your garden the care and attention it deserves.",
    plansDiscription:
      "We offer sod installation services from March to November, providing a quick solution for a lush, healthy lawn. Our mulch delivery and installation service is available from February to November, helping enhance your landscape while retaining moisture and preventing weeds.",
    plans: [
      `Sod:`,
      `-Bermuda sod`,
      `-Zoysia sod `,
      `-Tall fescue sod`,
      `Mulch:`,
      `-Natural Mulch (non-dyed)`,
      `-Red Mulch `,
      `-Brown Mulch (Top Seller)  `,
      `-Black Mulch `,
      `Our mulch delivery and laying service is available from February to November.`,
    ],
  },
  {
    pic: flowerService,
    alt: "A garden with rocks and flowers",
    title: "Flowers & Rock Installation",
    serviceBio:
      "We offer seasonal flower arrangements tailored to your property's sunlight needs, along with long needle pine straw delivery and spreading from February to November. Our selection of decorative rocks, gravel, and boulders can add a unique touch to your landscape. Additionally, our eco-friendly, pet-safe lawn dye keeps your lawn green year-round, lasting up to 6 weeks, and reducing the need for chemicals.",
    plansDiscription:
      "We install seasonal flowers with organic fertilizer to provide optimal nutrients from the spring to fall. Our rock delivery and laying service is available from February to November, while our eco-friendly lawn dye and long needle pine straw are available year-round to keep your landscape looking vibrant and healthy.",
    plans: [
      `Flower Install:`,
      `Spring and Fall seasonal flowers`,
      `Rock Install:`,
      `February-November`,
    ],
  },
  {
    pic: trashService,
    alt: "Recycle bin with trash in it",
    title: "Property Clean-Up",
    serviceBio:
      "Property clean-ups are a one-time service, not recurring, and include mowing, trimming, edging, pruning shrubs/bushes, and a general clean-up of clippings to leave your landscape looking neat and tidy. This service is perfect for seasonal transitions or special events.",
    plansDiscription:
      "Our property clean-up service is available year-round, ensuring your outdoor space remains tidy and well-maintained in every season.",
    plans: [
      `Property clean-ups can also include hauling away various items such as:`,
      `Metals: tin, copper, iron, etc.`,
      `Organic Matter: tree limbs, leaves, clippings, etc.`,
      `Junk: hot tubs, lawn mowers, swing sets, outdoor furniture, and more.`,
    ],
  },
];

// Above is the array of listed services

export const careerQuestions = [
  {
    question: "Are you atleast 16 years of age?",
    id1: "consentYes",
    id2: "consentNo",
    option1: "Yes",
    option2: "No",
    registerName: "consent",
    errorMessage: "Please pick Yes or No!",
  },
  {
    question: "How many years of landscaping experience?",
    id1: "0-2",
    id2: "3+",
    option1: "0-2 years",
    option2: "3+ years",
    registerName: "experience",
    errorMessage: "Please pick years of experience!",
  },
  {
    question: "Do you have a valid driver's license?",
    id1: "licenseYes",
    id2: "licenseNo",
    option1: "Yes",
    option2: "No",
    registerName: "license",
    errorMessage: "Please pick Yes or No!",
  },
  {
    question:
      "Do you have reliable transportation to commute to and from work?",
    id1: "transportationYes",
    id2: "transportationNo",
    option1: "Yes",
    option2: "No",
    registerName: "transportation",
    errorMessage: "Please pick Yes or No!",
  },
  {
    question:
      "Are you interested in a full-time position (32+ hours per week) or a part-time position?",
    id1: "hours32+",
    id2: "hoursPartTime",
    option1: "Full-Time",
    option2: "Part-Time",
    registerName: "hours",
    errorMessage: "Please pick Full-Time or Part-Time!",
  },
  {
    question: "Are you seeking a seasonal position or a year-round role?",
    id1: "yearRound",
    id2: "seasonal",
    option1: "Year-Round",
    option2: "Seasonal",
    registerName: "workLength",
    errorMessage: "Please pick year-round or seasonal!",
  },
  {
    question: "Available to Work Weekends?",
    id1: "weekendsYes",
    id2: "weekendsNo",
    option1: "Yes",
    option2: "No",
    registerName: "weekends",
    errorMessage: "Please yes or No!",
  },
  {
    question: "Can you Lift 140lbs or more?",
    id1: "liftYes",
    id2: "liftNo",
    option1: "Yes",
    option2: "No",
    registerName: "lift",
    errorMessage: "Please yes or No!",
  },
];

// Above is a list for career questions to be displayed don the page.

export const FaqQuestions = [
  {
    question: "What is the Client Portal?",
    paragraph:
      "The Client Portal is your all-in-one hub for managing your services. Active customers can schedule additional services, track upcoming appointments, make payments, and access exclusive promotional discounts—all in one convenient place.",
  },
  {
    question: "Why did we choose a Client Portal?",
    paragraph:
      "We chose the client portal to enhance communication as a growing small business. It provides a streamlined way to connect with our customers, allowing for faster and clearer interactions between clients and our office.",
  },
  {
    question: "How to use the Client Portal?",
    paragraph:
      "Active clients can log in to the Client Portal using their email and password. Once inside, clients can easily request estimates, add work orders, track recurring services, and process credit card payments, all in one convenient location. We encourage all active clients to use the portal as their primary means of communication with us. This will help reduce the strain on our phone system, allowing us to better serve all our active clients and ensure that our phone lines are available for new customers.",
  },
];
