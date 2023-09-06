import { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");

    const navigate = useNavigate();

    const { data, loading } = useFetch("/movie/popular");
    const { url } = useSelector((state) => state.home);

    useEffect(() => {
        const bg =
            url.backdrop +
            data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
    }, [data, url]);

    //⁡⁢⁣⁣ Here the backdrop has been imported form App.jsx⁡

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    };

    return (
        <div className="heroBanner">
            {!loading && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )}

            <div className="opacity-layer"></div>

            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome</span>
                    <span className="subTitle">
                        Lorem ipsum dolor sit amet, Vonsectetur adipisicing elit.
                        Debitis, Doloribus deserunt.
                    </span>
                    <div className="searchInput">
                        <input
                            onKeyUp={searchQueryHandler}
                            type="text"
                            placeholder="Search for a  movie or TV Show..."
                            onChange={(event) => setQuery(event.target.value)}
                        />
                        <button>SEARCH</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default HeroBanner;
