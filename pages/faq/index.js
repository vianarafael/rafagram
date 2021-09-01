/* eslint-disable react/prop-types */
import React from "react";
import FAQScreen from "../../src/components/screens/FAQScreen";
import websitePageHOC from "../../src/wrappers/WebsitePage/hoc";

function FAQPage({ faqCategories }) {
  return <FAQScreen faqCategories={faqCategories} />;
}

export default websitePageHOC(FAQPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: "FAQ",
    },
  },
});

export async function getStaticProps() {
  const faqCategories = await fetch(
    "https://instalura-api.vercel.app/api/content/faq"
  )
    .then((res) => res.json())
    .then((convertedResponse) => convertedResponse.data);

  return {
    props: {
      faqCategories,
    },
  };
}
