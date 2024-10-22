import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './index.css'

const monthlist = [
  {id:1,sold:2,notSold:4,Total:5800},
  {id:2,sold:0,notSold:0,Total:0},
  {id:3,sold:2,notSold:1,Total:798},
  {id:4,sold:1,notSold:1,Total:168},
  {id:5,sold:4,notSold:3,Total:950}
]

function BasicButtonExample() {
  return (
    <div className='all-products-section'>
    <div className='st1'>
    <DropdownButton id="dropdown-basic-button" title="Months">
      <Dropdown.Item href="01" active>January(01)</Dropdown.Item>
      <Dropdown.Item href="#/action-2">February(02)</Dropdown.Item>
      <Dropdown.Item href="#/action-3">March(03)</Dropdown.Item>
      <Dropdown.Item href="#/action-3">March(04)</Dropdown.Item>
      <Dropdown.Item href="#/action-3">May(05)</Dropdown.Item>
      <Dropdown.Item href="#/action-3">June(06)</Dropdown.Item>
      <Dropdown.Item href="#/action-3">July(07)</Dropdown.Item>
      <Dropdown.Item href="#/action-3">August(08)</Dropdown.Item>
      <Dropdown.Item href="#/action-3">September(09)</Dropdown.Item>
      <Dropdown.Item href="#/action-3">October(10)</Dropdown.Item>
      <Dropdown.Item href="#/action-3">November(11)</Dropdown.Item>
      <Dropdown.Item href="#/action-3">December(12)</Dropdown.Item>
    </DropdownButton>
  
      <h1 className='jan'>Total Sale : 5800</h1>
      <h1 className='jan'>Sold : 2</h1>
      <h1 className='jan'>Not Sold : 4</h1>
    </div>
    <div className='st1'>
      <h1>Closure</h1>
      <p className='jan'>Total sale : 12301</p>
      <p className='jan'>Sold : 22</p>
      <p className='jan'>Not Sold : 28</p>
    </div>
    </div>
  );
}

export default BasicButtonExample;