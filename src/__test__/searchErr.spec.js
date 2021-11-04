import { render, screen } from "@testing-library/react";
import Search from "../components/Search";
import Cep from "../components/Cep";
import Providers from "../providers";
import api from "../services/index";
import MockAdapter from "axios-mock-adapter";
import userEvent from "@testing-library/user-event";

describe("When the user enters a invalid Cep", () => {
  test("Should show the cep info", async () => {
    const apiMock = new MockAdapter(api);
    apiMock.onGet("00000001").networkError();
  });

  render(
    <Providers>
      <Search />
      <Cep />
    </Providers>
  );

  userEvent.type(screen.getByPlaceholderText("Insira o CEP"), "00000001");
  userEvent.click(screen.getByRole("button"));

  const err = screen.queryByText("Endereço não encontrado");
  expect(err).toBeInTheDocument();
});
