import React, { Component } from 'react';
import { Text, View, Image, NativeModules, TouchableOpacity, StatusBar, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// var commonModule = NativeModules.CommonModule;
import { fetchToDos } from '../../action/fetchToDos'
import { naivgateToDetails } from '../../router/navigationService'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from '../../component/header';
import StarWars from 'react-native-star-wars';
import { BLACK, FLOATING, GRAY, PRIMARY, STATUS_BAR, WHITE } from '../../config/colors';
import homeStyle from './homeStyle';
import { CHARACTERS, DIRECTOR, PRODUCER, STARSHIPS, VEHICLES, SPECIES, BASE_URL, FILMS, Vehicles } from '../../config/constants';
import { integer_to_roman } from '../../utils/commonFunction';
import { FloatingAction } from 'react-native-floating-action';
import AddModelVisible from '../../component/AddMovieModel';
class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      viewMore: 0,
      isRefreshing: false,
      actions: [
        {
          text: "Add Movie",
          icon: <MaterialCommunityIcons name={'movie'} color={WHITE} size={25} />,
          name: "AddProduct",
          color: FLOATING,
          position: 1,
          iconWidth: 35
        },
      ],
      isModelVisible: false
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    await this.props.fetchToDos(BASE_URL + FILMS)
    this.setState({
      data: this.props.data.todos.results,
      isRefreshing: false
    })
  }

  deleteMovie(index) {
    console.log(index);
    var array = []
    array = this.state.data
    // console.log(array);
    array.splice(index, 1)
    this.setState({
      data: array
    })
  }

  onRefresh() {
    this.setState({ isRefreshing: true, }, () => { this.getData() });
  }

  renderList() {
    return (
      <FlatList
        data={this.state.data}
        refreshing={this.state.isRefreshing}
        onRefresh={() => this.onRefresh()}
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          console.log("hello", (item.episode_id))
          return (
            <TouchableOpacity
              onPress={() => this.setState({
                viewMore: index
              })}
              style={homeStyle.listContainer} >
              <View style={homeStyle.crawl} >
                <StarWars
                  title={item.title}
                  contentStyle={{}}
                  content={item.opening_crawl}
                />
              </View>
              <View style={{ marginVertical: 10, marginHorizontal: 10, flexDirection: 'row' }}>
                <View style={{ flex: 4 }}>
                  <Text style={homeStyle.title} >{item.title}  ({integer_to_roman(item.episode_id)})</Text>
                  <Text style={{ fontSize: 12, color: BLACK }} >({item.release_date})</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.deleteMovie(index)
                    }}
                  >
                    <MaterialCommunityIcons name={"delete"} color={BLACK} size={25} />
                  </TouchableOpacity>
                </View>
              </View>
              {this.state.viewMore === index
                ?
                <View style={{ marginTop: 10 }}>
                  <View style={{ flexDirection: 'row' }} >
                    <View
                      style={[homeStyle.key_container]} >
                      <Text style={homeStyle.key} >{DIRECTOR}</Text>
                      <Text style={{ fontSize: 13, fontWeight: 'bold', color: GRAY }} >{item.director}</Text>
                    </View>
                    <View style={[homeStyle.key_container, { borderLeftWidth: 0.3, borderRightWidth: 0.3 }]} >
                      <Text style={homeStyle.key} >{PRODUCER}</Text>
                      <Text style={{ fontSize: 13, fontWeight: 'bold', color: GRAY }} >{item.producer}</Text>
                    </View>
                  </View>
                  <View style={{ marginTop: 10, borderTopWidth: 0.3, borderBottomWidth: 0.3 }} >
                    <TouchableOpacity
                      disabled={item.type === 'local' ? true : false}
                      onPress={() => this.props.naivgateToDetails(item.characters, CHARACTERS)}
                      style={[homeStyle.key_container, {}]} >
                      <Text style={[homeStyle.key, { marginVertical: 10 }]} >{CHARACTERS}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: 'row', marginTop: 10 }} >
                    <TouchableOpacity
                      disabled={item.type === 'local' ? true : false}
                      onPress={() => this.props.naivgateToDetails(item.vehicles, VEHICLES)}
                      style={[homeStyle.key_container]} >
                      <Text style={[homeStyle.key, { marginVertical: 10 }]} >{VEHICLES}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      disabled={item.type === 'local' ? true : false}
                      onPress={() => this.props.naivgateToDetails(item.starships, STARSHIPS)}
                      style={[homeStyle.key_container, { borderLeftWidth: 0.3, borderRightWidth: 0.3 }]} >
                      <Text style={[homeStyle.key, { marginVertical: 10 }]} >{STARSHIPS}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      disabled={item.type === 'local' ? true : false}
                      onPress={() => this.props.naivgateToDetails(item.species, SPECIES)}
                      style={[homeStyle.key_container]} >
                      <Text style={[homeStyle.key, { marginVertical: 10 }]} >{SPECIES}</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                :
                null
              }
            </TouchableOpacity>
          )
        }
        }
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
      />
    )
  }

  handleSubmit(data) {
    var arr = []
    arr = this.state.data
    arr.push(data)
    this.setState({
      isModelVisible: false,
      data: arr
    })
    console.log(data);
  }


  render() {
    const { todos, isFetching } = this.props.data
    // console.log(this.props.data.todos);
    if (isFetching) {
      return (
        <View style={homeStyle.container} >
          <Header title={"Star War"} />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size={'large'} color={BLACK} />
          </View>
        </View>
      )
    } else {
      return (
        <View style={homeStyle.container}>
          <Header title={'Star War'} />
          <View style={{ flex: 1 }}>
            {this.renderList()}
          </View>
          <FloatingAction
            color={FLOATING}
            actions={this.state.actions}
            onPressItem={name => {
              this.props.navigation.navigate(name, { from: "Home" })
            }}
          />
          <AddModelVisible visible={this.state.isModelVisible} onSubmitPressed={(event) => { this.handleSubmit(event) }} />
        </View>
      )
    }
  }
}

const mapStateToProps = (state) => {
  // console.log('state',state);
  return {
    data: state.todos
  }
}


const mapDispatchToProps = (dispatch) => ({
  fetchToDos: (url) => dispatch(fetchToDos(url)),
  naivgateToDetails: (data, title) => dispatch(naivgateToDetails(data, title)),
});


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)