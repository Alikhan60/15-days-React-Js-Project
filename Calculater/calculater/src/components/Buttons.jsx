const Buttons = ({ handelButton }) => {
  const buttons = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    ".",
    "=",
    "/",
    "C",
  ];

  return (
    <div>
      {buttons.map((buttonName) => (
        <button
          onClick={() => handelButton(buttonName)}
          key={buttonName}
          className="button"
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
