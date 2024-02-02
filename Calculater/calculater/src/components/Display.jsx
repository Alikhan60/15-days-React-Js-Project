const Display = ({ inputValue }) => {
  return (
    <div>
      <form>
        <input type="text" name="display" value={inputValue} />
      </form>
    </div>
  );
};

export default Display;
