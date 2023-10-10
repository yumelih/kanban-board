import Column from "./Column";
import NewColumn from "./NewColumn";

function Board() {
  return (
    <div className="mx-12 my-8 grid auto-cols-max grid-flow-col content-start gap-6">
      <Column index={0} />
      <Column index={1} />
      <Column index={2} />
      <NewColumn />
    </div>
  );
}

export default Board;
