import { fireEvent, render, waitFor } from "@testing-library/react";
import UsersList from "../components/UsersList";
import ListWithInput from "../pages/ListWithInput";

test("calculates result after user types value", async () => {
  const { getByLabelText, getByText } = render(<ListWithInput />);
  const input = getByLabelText("search");

  fireEvent.change(input, { target: { value: "magnesDev" } });
  const textNode = await waitFor(() => getByText("magnesdev"));
  expect(textNode).toBeInTheDocument();
});

describe("ListWithInput", () => {
  it("show a list of users", async () => {
    const { getByTestId } = render(<UsersList />);
    const listNode = await waitFor(() => getByTestId("list"));
    expect(listNode).toBeInTheDocument();
  });
});
