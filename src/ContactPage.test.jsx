
import { render, screen, fireEvent } from "@testing-library/react";
import ContIactPage from "./sections/ContactPage";

// Mock emailjs
jest.mock("@emailjs/browser", () => ({
  sendForm: jest.fn(() => Promise.resolve("SUCCESS"))
}));

test("submits form and shows success popup", async () => {
  render(<ContactPage />);

  fireEvent.change(screen.getByLabelText(/Your Name/i), {
    target: { value: "Abhishek" }
  });
  fireEvent.change(screen.getByLabelText(/Email Address/i), {
    target: { value: "test@example.com" }
  });
  fireEvent.change(screen.getByLabelText(/Message/i), {
    target: { value: "Hello!" }
  });

  fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));

  // Expect success popup
  expect(await screen.findByText(/Email sent successfully!/i)).toBeInTheDocument();
});