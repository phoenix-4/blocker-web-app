import React, { PureComponent } from 'react'
import vehicle from './vehicle';

class SearchBar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            items:'',
            filtered: ''

            
        }
    }

    handleChange(e) {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.props.vehId;
    //   console.log("KIMMYYYYYYY", currentList)

      newList = currentList.filter(item => {

        const lc = item.toLowerCase();
                
        const filter = e.target.value.toLowerCase();
                
        return lc.includes(filter);
      });
    } 
    else {
           
      newList = this.props.allAddresses;
    }
        
    this.setState({
      filtered: newList
    }, () => {
        // console.log("SEARCHING.....................", this.state.filtered)
        this.props.searchedValues(this.state.filtered);
    
    }
    );   
  }


    render() {
        return (
            <div>
              <div className="search-container" style={{marginBottom: '40px'}}>
                <input type="text" className="form-control" id="searchBar" onChange={this.handleChange.bind(this)}  placeholder="Search By Vehicle Registered Number" />
              </div>
            </div>
        )
    }
}

export default SearchBar;