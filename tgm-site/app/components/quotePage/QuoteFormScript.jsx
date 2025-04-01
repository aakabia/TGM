"use client";
import React, { } from "react";
import Script from "next/script";

export default function QuoteFormScript() {
  const FormID = process.env.NEXT_PUBLIC_FORM_ID;

  // Access our id from env variable

  return (
    <>
      <Script
        src="https://secure.copilotcrm.com/widget/lp-requests_access_grant_0x.js"
        type="text/javascript"
        data-lp_company={FormID}
        onLoad={() => console.log("Script loaded successfully")}
        onError={(e) => console.error("Failed to load script:", e)}
      />
    </>
  );
}

// Above is a Quote form component that returns a script tag within a react fragment.
// We use Script to import the script provided to us from copilotcrm.com .

