import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from '../../data';
import './index.css'
import Pagination from '../Pagination';
import Chart from '../Chart';
import Statistics from '../Statistics'

function Transcation() {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  // const sortName = () => {
  //   setContacts(
  //     data.sort((a, b) => {
  //       return a.first_name.toLowerCase() < a.first_name.toLowerCase()
  //         ? -1
  //         : a.first_name.toLowerCase() > a.first_name.toLowerCase()
  //         ? 1
  //         : 0;
  //     })
  //   );
  // };
  

  
  return (
    <>
    <div className='aapp'>
      <Container>
        <h1 className='head2'>Transaction Dashboard</h1>
        <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search Transaction'
              
            />
          </InputGroup>
        </Form>
        <Table  class="table" >
          <thead>
            <tr class="table-dark">
              <th className='hh2'>Title</th>
              <th className='hh2'>Price</th>
              <th className='hh2'>Description</th>
              <th className='hh2'>Category</th>
              <th className='hh2'v>DateOfSale</th>
              <th className='hh2'>ProductImage</th>
            </tr>
          </thead>
          <tbody  >
          {currentPosts
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.dateOfSale.toLowerCase().includes(search);
              })
          
           
              .map((item) => (
                <tr className='t12'>
                  <td className='hh1' >{item.title}</td>
                  <td className='hh1'>{item.price}</td>
                  <td className='hh1' >{item.description}</td>
                  <td className='hh1'>{item.category}</td>
                  <td className='hh1'>{item.dateOfSale}</td>
                  <td className='hh1'><img src={item.image} className='image1'/></td>
                </tr>
              ))}
              
          </tbody>
        </Table>
      </Container>
      <Pagination
                totalPosts={data.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            
    </div>
    <Statistics />
    <Chart/>
    </>
  );
}

export default Transcation