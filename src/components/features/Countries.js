import React, { useState } from 'react';
import Country from './Country';
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Navbar,
  Col,
  Container,
  Row,
  Pagination,
  PaginationItem,
  PaginationLink,
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

    let productCount = countriesArr.length;
    let PerPage = 8;
    let pages = Math.ceil(productCount / PerPage);
    let skip = (page - 1) * PerPage;

    return (
      <div style={{ marginTop: '10px' }}>
        <Navbar
          light
          expand='md'
          className='fixed-top'
          style={{ width: '35%', marginLeft: '32%', marginTop: '5px' }}
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
        </Navbar>
        <Container>
          <Row>
            <Col>
              <div style={userStyle}>
                {filteredCountries
                  .slice(skip, PerPage + skip)
                  .map((countries) => (
                    <Country key={countries.id} countries={countries} />
                  ))}
              </div>
            </Col>
            <Col>
              <div>
                <Pagination
                  style={{ marginLeft: '15px' }}
                  size='sm'
                  aria-label='Page navigation example'
                >
                  <PaginationItem
                    class={`page-item ${page === 1 && 'disabled'}`}
                  >
                    <PaginationLink
                      class='page-link'
                      href='#'
                      onClick={() =>
                        setPage(page - 1)
                      }
                    >
                      Previous
                    </PaginationLink>
                  </PaginationItem>

                  {Array.from({ length: pages }).map((_, i) => (
                    <PaginationItem
                      class={`page-item ${
                        page === i + 1 ? 'active' : ''
                      }`}
                    >
                      <PaginationLink
                        class='page-link'
                        href='#'
                        onClick={() => setPage(i)}
                      >
                        {++i}
                      </PaginationLink>
                      <PaginationItem></PaginationItem>
                    </PaginationItem>
                  ))}
                  <PaginationItem
                    class={`page-item ${
                      page === pages && 'disabled'
                    }`}
                  >
                    <PaginationLink
                      class='page-link'
                      href='#'
                      onClick={() =>
                        setPage(page+1)
                      }
                    >
                      Next
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </div>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </div>
    );
  }


const userStyle = {
  marginLeft: '50px',
  marginRight: '50px',
  marginBottom: '30px',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '1rem',
};

export default Countries;
