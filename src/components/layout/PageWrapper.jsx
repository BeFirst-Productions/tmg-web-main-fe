"use client";

import Loader from "../Loader";

export default function PageWrapper({ children }) {
  return (
    <>
      <Loader />
      {children}
    </>
  );
}
