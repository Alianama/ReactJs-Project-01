import { Helmet } from "react-helmet"; //library ubah title $npm i react-helmet
export default function Home() {
  return (
    <div className="home">
      <h1>ini Home</h1>
      <Helmet>
        <title>Artience | Home</title>
      </Helmet>
    </div>
  );
}
