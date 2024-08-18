import WatchedItem from "./WatchedItem";

function WatchedList({ watchedList }) {
  return (
    <ul className="list-none py-[0.8rem] px-3">
      {watchedList.map((item) => (
        <WatchedItem item={item} key={item.imdbID} />
      ))}
    </ul>
  );
}

export default WatchedList;
