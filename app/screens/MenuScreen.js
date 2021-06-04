import React, { useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { getDishes } from '../redux/actionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDishes: () => dispatch(getDishes()),
    }
}

const MenuScreen = (props) => {
    useEffect(() => {
        props.getDishes();
    }, []);
    return (
        <View>
            <FlatList
                data={props.dishes}
                renderItem = {
                    ({item}) => (<Text>{item.name}</Text>)
                }
                keyExtractor={item => item.id.toString()}
            />

            
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);