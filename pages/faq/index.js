import React from "react";
import FAQScreen from "../../src/components/screens/FAQScreen";

export default function FAQPage({ faqCategories }) {
  // const [faqCategories, setFaqCategories] = useState([]);

  return <FAQScreen faqCategories={faqCategories} />;
}

export async function getStaticProps() {
  const faqCategories = await fetch(
    "https://instalura-api.vercel.app/api/content/faq"
  )
    .then((res) => res.json())
    .then((convertedResponse) => convertedResponse.data);

  console.log("faqCategories", faqCategories);

  return {
    props: {
      faqCategories,
    },
  };
}
