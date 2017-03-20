import React from 'react';
import $ from 'jquery';
import tourData from './../../json/api';
import Select from 'antd/lib/select';
import {Tourcard} from './../../components/tour-card';
const Option = Select.Option;
class CardContainer extends React.Component {
constructor(props,context){
      super(props,context);
    }
      
    componentWillReceiveProps(nextProps) {
    const prevpopular = this.props.store.tours_list.popular;
    const nextpopular = nextProps.store.tours_list.popular;
    const prevsorton = this.props.store.tours_list.sorton;
    const nextsorton = nextProps.store.tours_list.sorton;
    const prevsortby = this.props.store.tours_list.sortby;
    const nextsortby = nextProps.store.tours_list.sortby;
    if(prevpopular != nextpopular){
      let cur_tours = tourData.slice(0);
      let tours_popular = cur_tours;
      if(nextpopular){
      tours_popular = nextProps.store.tours_list.data.filter(function (el) {
            return el.popular == true
          });
      }
    let beforeupdatedata = Object.assign({}, nextProps.store.tours_list);
    beforeupdatedata.data = tours_popular.slice(0);
    this.props.store.gettours(beforeupdatedata);
    }
    if(prevsorton != nextsorton || prevsortby != nextsortby){
      let cur_tours = nextProps.store.tours_list.data.slice(0);
      let sorted_tours = cur_tours;
      if(nextsortby == 'asc'){
        sorted_tours = cur_tours.sort(function(a, b) {
    return parseFloat(a[nextsorton]) - parseFloat(b[nextsorton]);
});
      }
      else{
                sorted_tours = cur_tours.sort(function(a, b) {
    return parseFloat(b[nextsorton]) - parseFloat(a[nextsorton]);
});
      }
          let beforeupdatedata = Object.assign({}, nextProps.store.tours_list);
          beforeupdatedata.sorton = nextsorton;
          beforeupdatedata.sortby = nextsortby;
    beforeupdatedata.data = sorted_tours.slice(0);
    this.props.store.gettours(beforeupdatedata);
    }
  }
   componentDidMount(){
    let beforeupdatedata = Object.assign({}, this.props.store.tours_list);
    beforeupdatedata.data = tourData.slice(0);
    this.props.store.gettours(beforeupdatedata);
   }
   handlecheck(target){
              // let a = $(target.target).parent().parent().find('input').toggleClass('checked');
              let beforeupdatedata = Object.assign({}, this.props.store.tours_list);
              beforeupdatedata.popular = !beforeupdatedata.popular;
              this.props.store.gettours(beforeupdatedata);
   }
   handlesort(target){
      let sort_params = target.split('-');
      let beforeupdatedata = Object.assign({}, this.props.store.tours_list);
      beforeupdatedata.sorton = sort_params[0];
      beforeupdatedata.sortby = sort_params[1];
      this.props.store.gettours(beforeupdatedata);
   }
  render(){
    const tours_list = this.props.store.tours_list.data;
    const popular = this.props.store.tours_list.popular;
    return (
      <div>
                    <div className="view-container">
          <span className="count left">{'Results: ' + tours_list.length + ' tours'}</span>
              <span className="right">
                  <div className="show">
                     <span className="check-box" onClick={this.handlecheck.bind(this)}>
                     <input type="checkbox" value={popular} id="checkbox-popular" className={popular == 0 ? "" : 'checked'} />
                       <label for="checkbox-popular">
                       <span className="check"></span>
                       <span className="text">Most Popular</span>
                       </label>
                     </span>
                  </div>
                  <div className="sort">
                    <Select defaultValue="" style={{ width: 150 }} onChange={this.handlesort.bind(this)}>
                    <Option value="" data-sorton="" data-sortby="">Sorting Options</Option>
                      <Option value="cost-asc">Budget Low to High</Option>
                      <Option value="cost-desc">Budget High to Low</Option>
                      <Option value="days-asc">Days low to high</Option>
                      <Option value="days-desc">Days High to low</Option>
                  </Select>
                  </div>
              </span>
          </div>
          <div className="card-container">
            {tours_list.length != 0 ?
            <div className="inner">
             {tours_list.map(function(tours, i){
            return (
              <Tourcard tours={tours} />
              )}
            )}
             </div>
             :
             ''
           }
          </div>
      </div>
      )
  }
}



export{
  CardContainer
}

