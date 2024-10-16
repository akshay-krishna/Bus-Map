import Seater from '../assets/svg/Seater';
import Sleeper from '../assets/svg/Sleeper';
import { IBusLayout, IColumn, IDeck, ISeat } from '../interfaces';
import './style.css';

interface ISeatMapProps {
  layout: IBusLayout;
}

const Seat = ({ seat }: { seat: ISeat }) => {
  return seat.type == 'sleeper' ? (
    <Sleeper
      className={`seater-sleeper ${seat.isActive ? 'active' : 'inactive'}`}
      seatName={seat.seat_name}
    />
  ) : (
    <Seater
      className={`seater-sleeper ${seat.isActive ? 'active' : 'inactive'}`}
      seatName={seat.seat_name}
    />
  );
};

const Column = ({
  column,
  totalRows,
}: {
  column: IColumn;
  totalRows: number;
}) => {
  const seatsInColumn = new Array(totalRows).fill(null);
  column.alignment.forEach((seat) => {
    seatsInColumn[seat.row - 1] = seat;
  });
  return (
    <div className="column">
      {seatsInColumn.map((seat, index) => {
        return seat ? (
          <Seat key={index} seat={seat} />
        ) : (
          <span className="emptySpace"></span>
        );
      })}
    </div>
  );
};

const Deck = ({ deck, deckName }: { deck: IDeck; deckName: string }) => {
  const columns = Object.keys(deck.columns);
  return (
    <div>
      <h3>{deckName}</h3>
      <div className="deck">
        {columns.map((colKey) => {
          if (deck.columns[colKey] === null) {
            return <span key={colKey} className="aisle"></span>;
          }
          return (
            <Column
              key={colKey}
              column={deck.columns[colKey]}
              totalRows={deck.total_rows}
            />
          );
        })}
      </div>
    </div>
  );
};

const SeatMap = ({ layout }: ISeatMapProps) => {
  return (
    <div style={{ width: '600px' }}>
      <Deck deck={layout.lower_deck} deckName="Lower Deck" />
      {layout.upper_deck && (
        <Deck deck={layout.upper_deck} deckName="Upper Deck" />
      )}
    </div>
  );
};

export default SeatMap;
