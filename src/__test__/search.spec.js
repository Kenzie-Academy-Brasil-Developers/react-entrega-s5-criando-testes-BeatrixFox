import { render, screen, waitFor } from "@testing-library/react";
import Search from "../components/Search";
import Cep from "../components/Cep";
import Providers from "../providers";
import api from "../services/index";
import MockAdapter from "axios-mock-adapter";
import userEvent from "@testing-library/user-event";

describe("When the user enters a valid Cep", () => {
  test("Should show the cep info", async () => {
    const apiMock = new MockAdapter(api);
    apiMock.onGet("12050800").replyOnce(200, {
      bairro: "Chácara do Visconde",
      cidade: "Taubaté",
      logradouro: "Rua Emília",
      estado_info: {
        area_km2: "248.221,996",
        codigo_ibge: "35",
        nome: "São Paulo",
      },
      cep: "12050800",
      cidade_info: {
        area_km2: "625,003",
        codigo_ibge: "3554102",
      },
      estado: "SP",
    });

    render(
      <Providers>
        <Search />
        <Cep />
      </Providers>
    );

    const inputField = screen.getByPlaceholderText("Insira o CEP");

    userEvent.type(inputField, "12050800");
    userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      const result = screen.getByText("Logradouro");
      expect(result).toBeInTheDocument();
    });
  });
});
