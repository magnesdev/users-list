import React from "react";
import { render } from "@testing-library/react";
import UserDetails from "../components/UserDetails";

test("renders component", async () => {
  const location = { state: { login: "magnesDev" } };
  const { getByText } = render(<UserDetails location={location} />);
  expect(getByText("Followers:")).toBeInTheDocument();
});
