import React, { useState } from "react";
import "./Seat.css";

const Seats = () => {
  const [seat, setSeat] = useState(0);

  const initialSeatLayout = [
    [
      { category: "CLUB", selected: false },
      { category: "CLUB", selected: false },
      { category: "CLUB", selected: false },
      { category: "CLUB", selected: false },
      { category: "CLUB", selected: false },
      { category: "CLUB", selected: false },
    ],
    [
      { category: "CLUB", selected: false },
      { category: "CLUB", selected: false },
      { category: "CLUB", selected: false },
      { category: "CLUB", selected: false },
      { category: "CLUB", selected: false },
      { category: "CLUB", selected: false },
    ],
    [
      { category: "Executive", selected: false },
      { category: "Executive", selected: false },
      { category: "Executive", selected: false },
      { category: "Executive", selected: false },
      { category: "Executive", selected: false },
      { category: "Executive", selected: false },
    ],
    [
      { category: "Executive", selected: false },
      { category: "Executive", selected: false },
      { category: "Executive", selected: false },
      { category: "Executive", selected: false },
      { category: "Executive", selected: false },
      { category: "Executive", selected: false },
    ],
  ];

  const [seatLayout, setSeatLayout] = useState(initialSeatLayout);

  const handleSeatCount = (event) => {
    const value = event.target.value;

    if (value > 10) {
      console.log("Max 10 seats allowed");
    } else {
      setSeat(event.target.value);
    }
  };

  const handleClick = (event) => {
    let { value } = event.target;
    const [row, col] = value.split(":");
    console.log(value, row, col);

    let rowNo = parseInt(row);
    let colNo = parseInt(col);

    seatLayout[row].forEach((colSeat, index) => {
      //   console.log(`${parseInt(col) + parseInt(seat)}`);
      if (
        seat !== 0 &&
        index >= colNo &&
        index < colNo + seat &&
        colSeat.selected === false
      )
        console.log(colSeat);
      setSeatLayout([
        ...seatLayout,
        (seatLayout[rowNo] = [
          ...seatLayout[rowNo],
          (seatLayout[rowNo][index] = { ...colSeat, selected: true }),
        ]),
      ]);
    });
  };

  const selectedStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  };
  const unSelectedStyle = {
    backgroundColor: "white",
  };

  return (
    <div>
      <label>
        Number of Seats
        <input
          type="number"
          name="seat"
          value={seat}
          onChange={(e) => {
            handleSeatCount(e);
            // console.log(seat);
          }}
        />
      </label>

      {seatLayout.map((layout, i) => {
        return (
          <div className="seat-row">
            {layout.map((item, index) => {
              return (
                <>
                  <button
                    className="seat-col"
                    style={
                      seatLayout[i][index].selected
                        ? selectedStyle
                        : unSelectedStyle
                    }
                    onClick={handleClick}
                    value={`${i}:${index}`}
                  >
                    {index + 1}
                  </button>
                </>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Seats;
