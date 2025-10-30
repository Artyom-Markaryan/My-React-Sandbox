import {describe, test, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import App from "../App";

describe("my-react-sandbox App tests", () => {
  test("Hello World element should be in the document", () => {
    render(<App />)
    const helloWorldElement = screen.getByText("Hello React + Vite + Tailwind CSS 🚀")
    expect(helloWorldElement).toBeInTheDocument()
  })
})
