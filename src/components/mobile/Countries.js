import React ,{useState} from 'react';
import Country from './Country';
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Navbar,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Countries = ({countriesArr}) => {
    const [search,setSearch] = useState('')
    const [filter,setFilter] = useState(null)
    const [page,setPage] = useState(1)
  

  const handleChange = (e) => {
   setSearch(e.target.value );
  };

    const filteredCountries = countriesArr.filter((countries) => {
      return (
        countries.country
          .toLowerCase()
          .indexOf(search.toLowerCase()) !== -1
      );
    });


    return (
      <div className='text-center' style={{ marginTop: '-50px' }}>
        <h6>** Use Search box to get single country data</h6>
        <div
          style={{
            width: '70%',
            marginBottom: '20px',
            marginLeft: '15%',
          }}
        >
          <InputGroup size='sm'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder='sm'
              bsSize='sm'
              type='text'
              name='text'
              id='text'
              placeholder='Search by Country Name ....'
              onChange={handleChange}
            />
          </InputGroup>
        </div>

        <div style={userStyle}>
          {filteredCountries.map((countries) => (
            <Country key={countries.id} countries={countries} />
          ))}
        </div>
      </div>
    );
  }


const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gridGap: '1rem',
  paddingBottom: '80px',
};

export default Countries;
