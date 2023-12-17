import useFetch from "../../hooks/useFetch";
import "./featured.css";
// import { useNavigate } from "react-router-dom";
// import { useContext, useState } from "react";
// import { SearchContext } from "../../context/SearchContext";
// import { AuthContext } from "../../context/AuthContext";

const Featured = () => {
  // const [destination, setDestination] = useState("");
  // const [openDate, setOpenDate] = useState(false);
  // const [dates, setDates] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: "selection",
  //   },
  // ]);
  // const [openOptions, setOpenOptions] = useState(false);
  // const [options, setOptions] = useState({
  //   adult: 1,
  //   children: 0,
  //   room: 1,
  // });
  // const { user } = useContext(AuthContext);
  // const navigate = useNavigate();
  // const { dispatch } = useContext(SearchContext);

  // const handleSearch = () => {
  //   dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
  //   navigate("/hotels", { state: { destination, dates, options } });
  // };

  const { data, loading } = useFetch(
    "http://localhost:8800/api/hotels/countByCity?cities=Almaty,Berlin,London"
  );

  console.log(data);

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>


          <div className="featuredItem">

            <img
              src="https://zakon-img1.object.pscloud.io/b32d4b791dfd42d58907cef15db979d5.jpeg"
              alt=""
              className="featuredImg"
              // onClick={() => setDestination(data[0])}
            />
            <div className="featuredTitles">
              <h1>Almaty</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.berlin.de/binaries/asset/image_assets/6340464/ratio_2_1/1685015071/1500x750/"
              alt=""
              className="featuredImg"
              // onClick={handleSearch}
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>


          <div className="featuredItem">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/de/london.jpg?w=700&h=500&s=1"
              alt=""
              className="featuredImg"
              // onClick={handleSearch}
            />

            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>


        </>
      )}
    </div>
  );
};

export default Featured;