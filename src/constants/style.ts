// style.ts
import { StyleSheet } from 'react-native';
import { isIOS } from 'react-native-elements/dist/helpers';

export const DEFAULT_TOP_STYLE = StyleSheet.create({
    topOfScreen: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        padding: 5,
        marginTop: 10,
},

    container: {
        flex: 10,
        backgroundColor: '#fff',
        },

});

export const DEFAULT_SEARCH_RESULT_STYLE = StyleSheet.create({

    overlay: {
        position: 'absolute',
        width: '100%',
        top: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,

    },
    resultsContainer: {
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
        borderRadius: 12,
        overflow: 'hidden',
    },
    noResultsContainer: {
        width: '100%',
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
        borderRadius: 12,
        overflow: 'hidden',
    },

});

export const DEFAULT_SEARCH_BAR_STYLE = StyleSheet.create({
    
    searchBarContainer: {
      flex: 1,
      marginTop: 20,
      marginHorizontal: 20,
      zIndex: 2,
    },
    searchBarInput: {
      paddingLeft: 15,
      paddingRight: 10,
      flexDirection: 'row',
      width: isIOS ? '100%' : '90%', // Adjust as needed
      height: 45,
      backgroundColor:'#EFF7FC',
      borderRadius: 12,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });
  