import Column from "./Column";
import NewColumn from "./NewColumn";

function Board() {
  return (
    <div className="grid auto-cols-max grid-flow-col content-start gap-6 overflow-auto px-12 py-8">
      <Column index={0} />
      <Column index={1} />
      <Column index={2} />
      <NewColumn />
    </div>
  );
}

export default Board;
