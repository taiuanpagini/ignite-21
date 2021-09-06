import { useTransactions } from '../../hooks/useTransactions';
import { CurrencyFormat } from '../../utils/CurrencyFormat';
import { DateFormat } from '../../utils/DateFormat';
import { Container } from './styles';

export function TransactionsTable() {
  const { transactions } = useTransactions();

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
          {
            transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {CurrencyFormat(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {DateFormat(transaction.createdAt)}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  );
}
