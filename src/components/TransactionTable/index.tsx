import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data))
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Rinha de galo</td>
            <td className="deposit">R$1000</td>
            <td>Clandestino</td>
            <td>20/12/2021</td>
          </tr>
          <tr>
            <td>Racha</td>
            <td className="withdraw">- R$500</td>
            <td>Clandestino</td>
            <td>20/12/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}