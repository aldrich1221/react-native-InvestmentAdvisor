

var React = require('react');
var Dimensions = require('Dimensions');

var {
  StyleSheet,
  Text,
  AppRegistry,
  View,
  Image,
  ScrollView,
  TabBarIOS,

} = require('react-native');

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height - 70;
var deposit = React.createClass({
  render()
  {
  money:<Text>'1000'</Text>

  }
})
var AccountScreen = React.createClass({
    navigationOptions : {
    title: 'Account',
  },
 
    
   
    getInitialState: function(){
    return {
      tab: 'message'
    };
  },
  select: function(tabName){
    this.setState({
      tab: tabName
    });
  },
  render: function(){
    return(
      <TabBarIOS style={styles.flex}>
        <TabBarIOS.Item
          title="帳戶資訊"
          //icon={require("image!message")}
          onPress={this.select.bind(this, 'message')}
          selected={this.state.tab === 'message'}>
          <ScrollView>
            <View style={styles.message}>
              <Text style={styles.message_title}>年輕人的帳戶</Text>
              <Text>帳號存款</Text>  <Text>{deposit.money}</Text>  
            </View>
          </ScrollView>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="收入支出"
          //icon={require("image!phone")}
          onPress={this.select.bind(this, 'phonelist')}
          selected={this.state.tab === 'phonelist'}>
          <ScrollView>
            <Text style={styles.list}>
              <Text>玉山</Text>
              <Text>0989-049-077</Text>
            </Text>
            <Text style={styles.list}>
              <Text>小玉</Text>
              <Text>0989-049-078</Text>
            </Text>
            <Text style={styles.list}>
              <Text>小山</Text>
              <Text>0989-049-079</Text>
            </Text>
            <Text style={styles.list}>
              <Text>愛玉</Text>
              <Text>0989-049-080</Text>
            </Text>
          </ScrollView>          
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="圖片"
          //icon={require("image!star")}
          onPress={this.select.bind(this, 'google')}
          selected={this.state.tab === 'google'}>
          

    
          <ScrollView >
            {/* 
            <Text style={{fontSize:12}}>Scroll me plz</Text>
            */}

            <Image
            source={{uri:'http://vczero.github.io/ctrip/star_page.jpg'}}/>    
          
          </ScrollView>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  flex:{
    flex: 2,
  },
  message:{
    alignItems:'center',
    marginLeft:5,
    marginRight:5,
  },
  message_title:{
    fontSize:18,
    color: '#18B5FF',
    marginBottom:5,
  },
  list:{
    height:30,
    fontSize:15,
    marginLeft:10,
    marginTop:10,
  }
});

module.exports=AccountScreen;