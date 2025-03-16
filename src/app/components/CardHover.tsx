import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
    return (
      <div className="scrollable-container px-8 ">
        <HoverEffect items={projects} />
      </div>
    );
  }
  export const projects = [
    {
      imageSrc: "/pro3.png",
      title: "Movie Recommender System",
      description:
        "I developed a movie recommender system using machine learning to deliver personalized movie suggestions. The project involved gathering and preprocessing large datasets of movie ratings and metadata, then applying both collaborative and content-based filtering techniques to capture user preferences.",
      link: "https://github.com/mishalmkay/movie-recommder-system",
    },
    {
      imageSrc: "/pro2.jpg",
      title: "User Shopping Behavior Prediction",
      description:
        "I developed a predictive analytics solution for user shopping behavior by analyzing historical transaction data, browsing patterns, and user demographics. The project involved thorough data preprocessing and feature engineering to identify key factors influencing purchase intent. I employed machine learning techniques such as logistic regression, decision trees, and ensemble methods to build a model that accurately forecasts buying decisions. ",
      link: "https://github.com/mishalmkay/User-shopping-behavior-prediction",
    },
    {
      imageSrc: "/pro1.jpg",
      title: "Quran Verse Recommender",
      description:
        "The Quran Verse Recommender is an NLP-driven project designed to provide personalized verse suggestions from the Quran. It processes and indexes the Quranic text, allowing users to input queries or topics of interest. Using text vectorization and similarity measures, the system efficiently retrieves the most contextually relevant verses, enhancing spiritual exploration and understanding. This project, built with Python, offers a modular framework that can be integrated into web or mobile applications for easy access to Quranic insights.",
      link: "https://github.com/mishalmkay/Quran-verse-recommender",
    }
  ];