import { Search } from '@mui/icons-material';

import { ButtonContainer, InputContainer, SearchBarContainer } from './SearchBar.styles';

export const SearchBar = () => (
    <SearchBarContainer>
        <InputContainer placeholder="Search your favourite Restaurants " />
        <ButtonContainer type="button" aria-label="search">
            <Search />
        </ButtonContainer>
    </SearchBarContainer>
);
