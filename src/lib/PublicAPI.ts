import axios from "axios";
import ExpiryMap from "expiry-map";
import pMemoize from "p-memoize";

const searchGPTImpl = async (data: { text: string }) => {
    try {
        const response = await axios.post("/api/SearchGPT", data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const SearchGPT = pMemoize(searchGPTImpl, {
    cacheKey: (args) => args[0]?.text,
    cache: new ExpiryMap(50000),
});