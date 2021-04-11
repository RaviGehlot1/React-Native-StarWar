import React, { Component } from 'react';
import { Text, View, Image, NativeModules, TouchableOpacity, StatusBar, FlatList, ActivityIndicator, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// var commonModule = NativeModules.CommonModule;
import { fetchToDos } from '../../action/fetchToDos'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Header from '../../component/header';
import StarWars from 'react-native-star-wars';
import { BLACK, GRAY, PRIMARY, STATUS_BAR, WHITE } from '../../config/colors';
import detailsStyle from './detailsStyle';
import { checkStringKeys } from '../../utils/commonFunction';
import { Actions } from 'react-native-router-flux';
import CharactersList from '../../component/CharactersList';
import VehicleList from '../../component/VehiclesList';
import StarshipList from '../../component/StarshipList';
import SpeciesList from '../../component/SpeciesList';
class DetailsScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      char_list: [],
      viewMore: 0,
      isFetching: false
    }
  }

  backAction = () => {
    if (!this.state.isFetching) {
      Actions.home({ refresh: {} })
    }
    return true;
  };

  async componentDidMount() {
    // console.log('this.props.data', this.props.data);
    // // this.props.fetchToDos()


    this.backHandler = BackHandler.addEventListener(

      "hardwareBackPress",
      this.backAction
    );

    let array = []

    this.setState({
      isFetching: true
    })
    const temp = this.props.data.todos.map(async (url) => { //fetching todos url data
      // console.log("e--------------------------");
      await this.props.fetchToDos(url)
      var temp_obj = {}
      temp_obj = this.props.fetchData
      const middle_temp = await Promise.all(
        Object.keys(this.props.fetchData.todos).map(async (key) => { // fetching child url data
          if (checkStringKeys(key)) {
            // console.log(this.props.fetchData.todos[key], typeof(this.props.fetchData.todos[key]));
            if (typeof (this.props.fetchData.todos[key]) === 'object' && this.props.fetchData.todos[key] !== null ) {
              if (this.props.fetchData.todos[key].length) {
                var inner_array = []
                const inner_temp = await Promise.all(
                  this.props.fetchData.todos[key].map(async (url) => {
                    await this.props.fetchToDos(url)
                    inner_array.push(this.props.fetchData)
                  })
                )
                Promise.all(inner_temp).then(res => {
                  temp_obj.todos[key] = inner_array
                }
                );
              }
            } else {
              if (typeof (this.props.fetchData.todos[key]) === 'string') {
                var inner_array = []
                await this.props.fetchToDos(this.props.fetchData.todos[key])
                inner_array.push(this.props.fetchData)
                temp_obj.todos[key] = inner_array

              }
            }
          } else {

          }

        })
      )
      Promise.all(middle_temp).then(res => {
        array.push(temp_obj)
      }
      );
    }
    )

    Promise.all(temp).then(res => {
      // console.log('***********************', res);
      this.setState({
        char_list: array,
        isFetching: false
      })
    }
    );

    // console.log(this.props);
  }

  componentWillUnmount() {
    this.backHandler.remove()
  }

  renderList() {
    return (
      <FlatList
        data={this.state.char_list}
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          // console.log("hello", item.todos.films)
          if (this.props.data.title === "Characters") {
            return (
              <CharactersList item={item} />
            )
          } else {
            if (this.props.data.title === "Vehicles") {
              return (
                <VehicleList item={item} />
              )
            } else {
              if (this.props.data.title === "Starships") {
                return (
                  <StarshipList item={item} />
                )
              } else {
                if (this.props.data.title === "Species") {
                  return (
                    <SpeciesList item={item} />
                  )
                }
              }
            }
          }
        }
        }
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
      />
    )
  }


  render() {
    // console.log("Length-------------", this.state.char_list.length);
    if (this.state.isFetching) {
      return (
        <View style={detailsStyle.container} >
          <Header title={this.props.data.title} />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size={'large'} color={BLACK} />
          </View>
        </View>
      )
    } else {
      return (
        <View style={detailsStyle.container}>
          <Header title={this.props.data.title} />
          <View style={{ flex: 1 }}>
            {this.renderList()}
          </View>
        </View>
      )
    }
  }
}

const mapStateToProps = (state) => {
  console.log("State", state);
  return {
    data: state.detailsReducer,
    fetchData: state.todos
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchToDos: (id) => dispatch(fetchToDos(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen)