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

var TabBar = React.createClass({
    navigationOptions : {
    title: 'TabBar',
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
              <Text style={styles.message_title}>玉山</Text>
              <Text>
                玉山，通常是指玉山主峰，海拔3,952公尺，為東亞一帶（台灣本島、中國東半部、日本列島、朝鮮半島）的最高峰。
                布農族稱其為Tongku Saveq、卡那卡那富族稱其為Tanungu'incu、鄒族稱其為Patungkuonʉ（八通關）、排灣族稱其為kanasi．
                主峰為臺灣最高的山，位於南投縣信義鄉、高雄市桃源區及嘉義縣阿里山鄉交界處。
                早期西方人稱摩里遜山（Mt. Morrison），日治時期時，因日本人發現玉山比日本本土的富士山還要高，於是被稱為新高山。
                在臺灣百岳中，代表布農的玉山與泰雅的雪山、阿美的秀姑巒山、南湖大山、排灣的北大武山合稱「五岳」。
                為臺灣最具代表性的五座高山。

                玉山，通常是指玉山主峰，海拔3,952公尺，為東亞一帶（台灣本島、中國東半部、日本列島、朝鮮半島）的最高峰。
                布農族稱其為Tongku Saveq、卡那卡那富族稱其為Tanungu'incu、鄒族稱其為Patungkuonʉ（八通關）、排灣族稱其為kanasi．
                主峰為臺灣最高的山，位於南投縣信義鄉、高雄市桃源區及嘉義縣阿里山鄉交界處。
                早期西方人稱摩里遜山（Mt. Morrison），日治時期時，因日本人發現玉山比日本本土的富士山還要高，於是被稱為新高山。
                在臺灣百岳中，代表布農的玉山與泰雅的雪山、阿美的秀姑巒山、南湖大山、排灣的北大武山合稱「五岳」。
                為臺灣最具代表性的五座高山。

                玉山，通常是指玉山主峰，海拔3,952公尺，為東亞一帶（台灣本島、中國東半部、日本列島、朝鮮半島）的最高峰。
                布農族稱其為Tongku Saveq、卡那卡那富族稱其為Tanungu'incu、鄒族稱其為Patungkuonʉ（八通關）、排灣族稱其為kanasi．
                主峰為臺灣最高的山，位於南投縣信義鄉、高雄市桃源區及嘉義縣阿里山鄉交界處。
                早期西方人稱摩里遜山（Mt. Morrison），日治時期時，因日本人發現玉山比日本本土的富士山還要高，於是被稱為新高山。
                在臺灣百岳中，代表布農的玉山與泰雅的雪山、阿美的秀姑巒山、南湖大山、排灣的北大武山合稱「五岳」。
                為臺灣最具代表性的五座高山。

                玉山，通常是指玉山主峰，海拔3,952公尺，為東亞一帶（台灣本島、中國東半部、日本列島、朝鮮半島）的最高峰。
                布農族稱其為Tongku Saveq、卡那卡那富族稱其為Tanungu'incu、鄒族稱其為Patungkuonʉ（八通關）、排灣族稱其為kanasi．
                主峰為臺灣最高的山，位於南投縣信義鄉、高雄市桃源區及嘉義縣阿里山鄉交界處。
                早期西方人稱摩里遜山（Mt. Morrison），日治時期時，因日本人發現玉山比日本本土的富士山還要高，於是被稱為新高山。
                在臺灣百岳中，代表布農的玉山與泰雅的雪山、阿美的秀姑巒山、南湖大山、排灣的北大武山合稱「五岳」。
                為臺灣最具代表性的五座高山。

                玉山，通常是指玉山主峰，海拔3,952公尺，為東亞一帶（台灣本島、中國東半部、日本列島、朝鮮半島）的最高峰。
                布農族稱其為Tongku Saveq、卡那卡那富族稱其為Tanungu'incu、鄒族稱其為Patungkuonʉ（八通關）、排灣族稱其為kanasi．
                主峰為臺灣最高的山，位於南投縣信義鄉、高雄市桃源區及嘉義縣阿里山鄉交界處。
                早期西方人稱摩里遜山（Mt. Morrison），日治時期時，因日本人發現玉山比日本本土的富士山還要高，於是被稱為新高山。
                在臺灣百岳中，代表布農的玉山與泰雅的雪山、阿美的秀姑巒山、南湖大山、排灣的北大武山合稱「五岳」。
                為臺灣最具代表性的五座高山。
              </Text>
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
          {/* <Text style={{fontSize:24}}>If you like</Text>
            <Image style={{width:width, height:height}} 
            source={{uri:'http://vczero.github.io/ctrip/star_page.jpg'}}/>    
          <Text style={{fontSize:24}}>Scrolling down</Text>
            <Image style={{width:width, height:height}} 
            source={{uri:'http://vczero.github.io/ctrip/star_page.jpg'}}/>    
          <Text style={{fontSize:24}}>What's the best</Text>
            <Image style={{width:width, height:height}} 
            source={{uri:'http://vczero.github.io/ctrip/star_page.jpg'}}/>    
          <Text style={{fontSize:24}}>Framework around?</Text>
           <Image style={{width:width, height:height}} 
            source={{uri:'http://vczero.github.io/ctrip/star_page.jpg'}}/>    
          <Text style={{fontSize:24}}>React Native</Text>        */}
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

module.exports=TabBar;