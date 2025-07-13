import Script from "next/script";
import React from "react";

const Analytics = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-79X0GVTGNC"
      ></Script>
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-79X0GVTGNC');`}
      </Script>
    </>
  );
};

export default Analytics;
