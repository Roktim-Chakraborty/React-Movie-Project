import { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../utils/api";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("...loading");
        setError(null);
        setData(null);

        fetchDataFromAPI(url)
            .then((res) => {
                setLoading(false), setData(res);
            })
            .catch((error) => {
                console.log(error.message);
                setLoading(false);
                setError("Error while loading");
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
