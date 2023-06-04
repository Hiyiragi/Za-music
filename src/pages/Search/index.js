import { useEffect, useState } from "react";
import { InputWrapper, TableTitle, Wrapper, NotFoundText } from "./styled";
import { toast } from "react-toastify";
import Input from "components/UI/Input";
import SearchIcon from "assets/icons/search.svg";
import { search } from "services/api";
import TracksTable from "components/TracksTable";

function Search() {
  //Add debounce
  const [searchQuery, SetSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tracks, setTracks] = useState([]);
  const handleInput = (event) => {
    SetSearchQuery(event.target.value);
  };
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await search(searchQuery);
        setTracks(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchQuery) {
      loadData();
    }
  }, [searchQuery]);
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

export default Search;
