// style.ts
import { StyleSheet, Dimensions } from 'react-native';
import { isIOS } from 'react-native-elements/dist/helpers';
import { Platform } from 'react-native';
import { NuskaColor } from './colors';

export const DEFAULT_TOP_STYLE = StyleSheet.create({
    topOfScreen: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        padding: 5,
        height: '12%',
    },

    container: {
        flex: 1,
        minHeight: '60%',
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
        width: Platform.OS === 'ios' ? '100%' : '100%',
        height: 45,
        backgroundColor: '#EFF7FC',
        borderRadius: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
