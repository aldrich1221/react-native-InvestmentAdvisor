import React ,{Component}from 'react';
import {ActivityIndicator,AppRegistry,Text,ListView, View,Button} from 'react-native';
import Bookitem from './Bookitem';
const API_Key='73b19491b83909c7e07016f4bb4644f9:2:60667290';
const Query_Type='hardcover-fiction';
const API_stem='https://api.nytimes.com/svc/books/v3/lists';
//const Path=`${API_stem}/${Query_Type}?response-format=json&api-key=${API_Key}`;

// 這是紐約時報推薦書籍 
//http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction?response-format=json&api-key=73b19491b83909c7e07016f4bb4644f9:2:60667290
// 

//這是雅虎天氣
const Path='https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
 //const Path='https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D2502265&format=json&diagnostics=true&callback='

// google stock information
// const Path='https://finance.google.com/finance/info?client=ig&q=TPE:2884'

export default class BookBestSeller extends Component {
constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
    
  }
componentDidMount() {
    //return fetch('https://facebook.github.io/react-native/movies.json')
    return fetch(Path)
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          //dataSource: ds.cloneWithRows(responseJson.movies),
        dataSource: ds.cloneWithRows(responseJson.query.results.channel),
        //dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // do something with new state
        });
    })  
      .catch((error) => {
        console.error(error);
      });
  }


// _refreshData(){
         
//         return fetch(Path)
//          .then((response)=>response.json())
//          .then((responseJSON)=>{
//         let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//          this.setState({
//              isLoading:false,
//          dataSource:ds.cloneWithRows(responseJSON.results.books)
                   
        
        
//         })
//                  }).catch((error)=>{console.error(error);
//                         })

// }


render(){
          if (this.state.isLoading) {
      return (
        <View >
              
             <ActivityIndicator />
              
          <Text>{this.response}</Text>
        </View>
      );
    }
    

        return(
            <View >
              
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.distance},{rowData.pressure},{rowData.speed},{rowData.country}</Text>}
           //renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
           //renderRow={(rowData) => <Text>{rowData.lt},{rowData.l_cur},{rowData.t},{rowData.id}</Text>}
        />
      </View>

        )
}

}
// var BookBestSeller=React.createClass({

//     getInitialSate:function(){
//         var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//         var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        
//         return {dataSource:ds.cloneWithRows([])};
        
//     },

//     componentDidMount:function(){
//         this._refreshData();

//     },

//     _renderRow:function(rowData){
//         return <Booktiem coverURL={rowData.book_image}
//         title={rowData.title}
//         author={rowData.author}/>;

//     },

//     _renderHeader:function(){
//         return (<View>
//                 <Text>
                    
//                 Bestseller in Hardcover Fiction    
//                 </Text>
            
//                 </View>)

//     },
    
//     _renderFooter:function(){
//         return (<View>
//                 <Text>
                    
//                 Data from the New York Times   
//                 </Text>
            
//                 </View>)

//     },

//     _refreshData:function(){
//         if(this.state.dataSource == null){
//         fetch(Path)
//         .then((response)=>response.json())
//         .then((rjson)=>{
//         this.setState({
//         dataSource:this.state.dataSource.cloneWithRows(rjson.results.books)
//                         });
//                 })

//         }
//     },

//   render:function() {
//         return (
//             <ListView
//             dataSource={this.state.dataSource}
//             renderRow={this._renderRow}
//             renderHeader={this._renderHeader}
//             renderFooter={this._renderFooter}
//             />
//             );
//          }       
// })
//export default BookBestSeller;