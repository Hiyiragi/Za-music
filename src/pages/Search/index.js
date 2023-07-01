import { useEffect, useRef, useState } from "react";
import { InputWrapper, TableTitle, Wrapper, NotFoundText } from "./styled";
import { toast } from "react-toastify";
import Input from "components/UI/Input";
import SearchIcon from "assets/icons/search.svg";
import { search } from "services/api";
import TracksTable from "components/TracksTable";

function Search() {
  //Add debounce
  const [searchQuery, SetSearchQuery] = useState("");

  const [tracks, isLoading] = useDebounceLoadData(searchQuery);

  const handleInput = (event) => {
    SetSearchQuery(event.target.value);
  };

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          onChange={handleInput}
          value={searchQuery}
          placeholder="Search..."
          startIcon={SearchIcon}
        />
      </InputWrapper>
      {searchQuery && (
        <div>
          <TableTitle>Results by: {searchQuery}</TableTitle>
          {(isLoading || (!isLoading && tracks?.length > 0)) && (
            <TracksTable isLoading={isLoading} tracks={tracks}></TracksTable>
          )}
        </div>
      )}
      {searchQuery && !isLoading && tracks?.length == 0 && (
        <NotFoundText>Nothing was found :(</NotFoundText>
      )}
    </Wrapper>
  );
}

function useDebounceLoadData(searchQuery) {
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState();

  const fetchRef = useRef();
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const searchData = await search(searchQuery);
        setData(searchData);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchQuery) {
      // clearTimeout(fetchRef.current);
      fetchRef.current = setTimeout(loadData, 500);
    } else {
      setData(null);
    }

    return () => clearTimeout(fetchRef.current);
  }, [searchQuery]);

  return [data, isLoading];
}

export default Search;
