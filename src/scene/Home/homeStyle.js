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
   marginTop : 10,
   elevation : 5,
   borderBottomLeftRadius : 10,   borderBottomRightRadius : 10,
   marginHorizontal : 10,
   marginBottom : 10
 },
 crawl : {
   height : 180,
 },
 title : {
   fontSize : 18,
   fontWeight : 'bold',
   color : BLACK
 },
 key : { color: BLACK, fontSize: 16.5, fontWeight: 'bold' },
key_container : { flex: 1, alignItems: 'center',justifyContent: 'center',marginVertical : 10 }
});

export default styles
