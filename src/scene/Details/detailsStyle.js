import { StyleSheet, } from 'react-native';
import { BLACK, GRAY, PRIMARY, WHITE } from '../../config/colors'

// eslint-disable-next-line no-undef
const styles = StyleSheet.create({
 container : {
   flex : 1,
   backgroundColor : WHITE
 },
 listContainer : {
   backgroundColor : PRIMARY,
   marginTop : 10
 },
 crawl : {
   height : 180,
  borderWidth : 1,
  borderColor : BLACK,
  borderRadius : 10
 },
 title : {
   fontSize : 18,
   fontWeight : 'bold',
   color : BLACK
 },
 key : { color: BLACK, fontSize: 18.5, fontWeight: 'bold', marginVertical : 8 },
 key_child_text1 : { color: GRAY, fontSize: 13, fontWeight: 'bold', marginTop : 8 },
 key_child_text2 : { color: BLACK, fontSize: 13.5, fontWeight: 'bold',},
key_container : { flex: 1, alignItems: 'center',justifyContent: 'center', }
});

export default styles
