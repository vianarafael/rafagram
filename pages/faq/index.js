import React, { useEffect, useState } from "react";
import FAQScreen from "../../src/components/screens/FAQScreen";

export default function FAQPage() {
  const [faqCategories, setFaqCategories] = useState([]);
  useEffect(() => {
    fetch("https://instalura-api.vercel.app/api/content/faq")
      .then((res) => res.json())
      .then((convertedResponse) => convertedResponse.data)
      .then((data) => setFaqCategories(data));
  }, []);
  return <FAQScreen faqCategories={faqCategories} />;
}
