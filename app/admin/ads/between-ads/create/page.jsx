import AdminAdsPost from "@/components/AdsComponents/AdminAdsPost";
import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-center my-20  underline underline-offset-4">
        Create Between Ads
      </h1>
      <AdminAdsPost location="between-ads" route="between-ad" />
    </div>
  );
};

export default page;
