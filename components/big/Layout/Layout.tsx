import React, { useState } from "react";
import { BaseNavlinkType } from "../../../types/Base";
import { AppNavBar } from "../AppNavbar";
import { AppFooter } from "../AppFooter";

interface LayoutProps {
  children: React.ReactNode;
  navLinks: BaseNavlinkType[];
}

export const Layout: React.FC<LayoutProps> = ({ children, navLinks }) => {
  return (
    <>
      <AppNavBar linksCategories={navLinks} />
      {children && children}
      <AppFooter
        linksCategories={navLinks}
        supportLinks={["Get Help", "Shipment Statement", "Products Returns"]}
        socialMediaIcons={[
          "bi bi-instagram",
          "bi bi-twitter",
          "bi bi-envelope-fill",
        ]}
      />
    </>
  );
};

Layout.defaultProps = {
  children: undefined
}
