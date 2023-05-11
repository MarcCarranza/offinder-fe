// Components
import List from "../Components/List/List";
import Nav from "../Components/Nav/Nav";

// Dummy data
import * as listResponse from "../app/data/listResponse.json";

export default function Home() {
  return (
    <main>
      <List listData={listResponse.days} />
      <Nav />
    </main>
  );
}
