import React from "react";
import { BaseNavlinkType } from "@/types/Base";
import { Container, Navbar, Nav } from "react-bootstrap";
import { CartButton } from "@/components/small/buttons/CartButton";
import styles from "./AppNavBar.module.scss";

interface AppNavbarProps {
  linksCategories: BaseNavlinkType[];
}

export const AppNavBar: React.FC<AppNavbarProps> = ({ linksCategories }) => {

  return (
    <Container>
      <Navbar
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
          marginTop: 20,
        }}
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Toggle
          style={{ background: "transparent", border: "none" }}
          aria-controls="responsive-navbar-nav"
        ></Navbar.Toggle>
        <Navbar.Brand href="/">MAKVERS</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-flex justify-content-center align-items-center align-items-lg-none w-xl-90 w-100">
            {linksCategories?.map((link) => (
              <Nav.Link
                key={link.name}
                href={"/categories" + link.path}
                className="mx-3"
              >
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        <CartButton />
      </Navbar>
    </Container>
  );
};
