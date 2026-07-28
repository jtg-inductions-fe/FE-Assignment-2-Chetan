import { useState } from 'react';

import { Search } from '@mui/icons-material';

import { ButtonContainer, InputContainer, SearchBarContainer } from './SearchBar.styles';
import type { SearchBarProps } from './SearchBar.types';

export const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <SearchBarContainer>
            <InputContainer
                placeholder="Search your favourite Restaurants"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <ButtonContainer
                type="button"
                aria-label="search"
                onClick={() => {
                    onSearch(searchTerm.trim());
                }}
            >
                <Search />
            </ButtonContainer>
        </SearchBarContainer>
    );
};
