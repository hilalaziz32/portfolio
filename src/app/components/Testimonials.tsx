
import {
  CardStack,
  CardStackTwo,
} from "../../components/ui/card-stack";
import { cn } from "@/lib/utils";


export function CardStackDemo() {

  return (
    <div className="dark:bg-black pt-20 lg:mt-28 my-14 lg:mb-40 mb-24">
      <div className="mb-10">
        <h1 className="scroll-m-20 gap-y-10 lg:pl-10 pl-4 text-4xl font-extrabold lg:text-5xl xyz">
          Client & Colleague Endorsements
        </h1>
      </div>
      <div className="grid mt-24 sm:mx-auto md:grid-cols-1 items-center w-full">
        <div className="md:mx-auto flex lg:flex-row lg:justify-between flex-col lg:gap-7 xl:gap-60 gap-0 justify-evenly sm:h-auto">
          <CardStack items={CARDS} />
          <CardStackTwo items={CARDSS} />
        </div>
      </div>
    </div>
  );
}


export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};
const CARDS = [
  {
    id: 0,
    name: "Hilal Aziz",
    designation: "AI and Data Science Developer",
    content: (
      <p>
        Mishal has always been an exceptional talent. Her dedication and brilliance in delivering end-to-end AI & Data Science solutions set her apart. I’m incredibly proud to have mentored someone so gifted.
      </p>
    ),
  },
  {
    id: 1,
    name: "Ayesha Ahmed",
    designation: "Junior web developer",
    content: (
      <p>
        As a Cloud Native and AI developer, Mishal combines technical excellence with a keen sense of user-centric design. His work is both cutting-edge and practical.
      </p>
    ),
  },
  {
    id: 2,
    name: "Fatima Saleem",
    designation: "Backend developer",
    content: (
      <p>
        Working with Mishal has been a great experience. His skills in full-stack development, from building scalable APIs to designing intuitive user interfaces, have greatly enhanced our projects
      </p>
    ),
  },
];

const CARDSS = [
  {
    id: 3,
    name: "Nadia  Qureshi",
    designation: "Data Scientist",
    content: (
      <p>
        Mishal’s expertise in fullstack development with Next.js complements his AI skills perfectly. His ability to build scalable and efficient web interfaces is impressive.
      </p>
    ),
  },
  {
    id: 4,
    name: "Muhammad Umer",
    designation: "Senior fullstack developer",
    content: (
      <p>
        Mishal’s proficiency in designing AI solutions using BDD and design thinking ensures that his projects are not only effective but also user-friendly.
      </p>
    ),
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        Mishal brings a wealth of experience to full-stack development. His expertise in building scalable applications and integrating various technologies ensures project success from start to finish.
      </p>
    ),
  },
];
 