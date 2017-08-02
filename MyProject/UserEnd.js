'use strict'

var React = require('react');
var {
  StyleSheet,
  Text,
  AppRegistry,
  View,
  Image,
  ScrollView,
  TabBarIOS,
ActivityIndicatorIOS,
} = require('react-native');
var Util=require('./util');
var Service=require('./service');


var UserEnd=React.createClass({
    
    statics:{ 
    title:'主頁',
    description:'選項卡'
    },

    getInitialState:function(){
        return{}
    },


    render: function(){
        return(
            <View>
                {/* 若正在跑 */}
            {this.state.isLoadingShow?
            <View>
            <ActivityIndicatorIOS></ActivityIndicatorIOS>
            </View>:null
            }


            {!this.state.isLoadingShow?
            <View>
                <TabBarIOS>
                    <TabBarIOS.Item
                        title="我的帳戶"
                        //icon={require("image!message")}
                        onPress={this.select.bind(this, 'message')}
                        selected={this.state.tab === 'message'}>
                        <ScrollView>
                            <View style={styles.message}>
                            <Text style={styles.message_title}>我的帳戶</Text>
                            <Text>
                                1.帳戶現金
                                2.持有股票資料金額（button 連結詳情）
                                3.持有期貨金額（button 連結詳情）
                                4.持有衍生品金額（button 連結詳情）
                                5.持有外幣金額（button 連結詳情）
                                6.其他商品
                                現有資產圓餅圖
                                歷史資產總金額
                                投資人設定
                            </Text>
                            </View>
                        </ScrollView>
                        </TabBarIOS.Item>

                        <TabBarIOS.Item
                        title="持有資產歷史走勢總覽"
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
                        title="持有商品相關新聞"
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

                        <TabBarIOS.Item
                            title="策略建議"
                            //icon={require("image!star")}
                            onPress={this.select.bind(this, 'google')}
                            selected={this.state.tab === 'google'}>
    
                            <ScrollView >
                            </ScrollView>
                        </TabBarIOS.Item>
                </TabBarIOS>
            </View>:null
            
            }
        {/*以上為登入後畫面 */}
        {/*以下為登入前畫面 */}
                <ScrollView>
                        <View>
                            <Text>郵箱</Text>
                            <TextInput placeholder='請輸入郵箱' onChangeText={this._getEmail}/>
                        </View>

                        <View>
                            <Text>密碼</Text>
                            <TextInput placeholder='請輸入密碼' password={true} onChangeText={this._getpassword}/>
                        </View>

                        <View>
                            <TouchableHighlight onPress>
                            
                            


                            <Text>登入</Text>
                            </TouchableHighlight>
                        </View>

                </ScrollView>

            </View>


        );







    }
}) ;
