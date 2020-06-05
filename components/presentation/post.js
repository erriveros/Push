import React, {useState, useRef, Component} from 'react';
import {View, TextInput, Button, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import config from '../../config';

class Post extends Component  {
    constructor(){
        super();
        this.state = {
            liked: false
        };
    }
    likeToggle(){
        this.setState({
            liked: !this.state.liked
        })
    }

    render(){

    if (this.state.liked) {
        iconColor = 'red'
    }
    else{
        iconColor = 'black'
    }



    


    
    // const [liked, setLike] = useState(0);
    // const likedRef = useRef(liked);
    // function likeHandler(){
    //     likedRef.current = liked ^ true;
    //     setLike(liked ^ true);
    //     console.log('after ' + likedRef.current)

    //     iconColorHandler();
    // };

    // const [iconColor, setIconColor] = useState('black')
    // function iconColorHandler(){
    //     console.log('gets here as ' + likedRef.current)

    //     if (likedRef.current){
    //         setIconColor('red')
    //     }
    //     else {
    //         setIconColor('black')
    //     }
        
    // };

    
    

    return(
        <View >
            <View style={styles.userBar}>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <Image
                        style={styles.userPic}
                        source={{uri:'https://lh3.googleusercontent.com/Ggk1EbuoNI6EUjOMBGNEowESPygElZuMWBOA3GYM3c1CwabehHRAirp4dwH7kDkUi_NxzNQxgdmhXBn4owVVGzyE'}}/>
                    
                    <Text style={{marginLeft:10}}>John</Text>
                </View>
                <View style={{marginRight:10, marginBottom:15}}>
                    <Text style={{fontSize: 25}}>...</Text>
                </View>
                
            </View>
            <TouchableOpacity
                activeOpacity = {.7}
                onPress={() => {
                    console.log('first' + this.state.liked)
                    this.likeToggle()
                    console.log('after' + this.state.liked)


                }}>
                <Image
                    style = {{width:'100%', height:400}}
                    source={{uri: 'https://lh3.googleusercontent.com/lzOYORlNUnTedGVjkhsoLZAHIYL3DMwCX8SmgXHefyXjSmUo0vLDuKzmOC0x22-9KWnsc4PlKr4rkzozg0Xg6hEF7w'}}
                />
            </TouchableOpacity>
            
            <View style={styles.iconBar}>
                <TouchableOpacity
                    activeOpacity = {.7}

                    onPress={() => {
                        this.likeToggle()
                    }}>
                    <Image
                        style={{tintColor: iconColor, width:40, height:40}}
                        source={config.images.heartIcon}
                    />
                </TouchableOpacity>
                

            </View>

            <View style={styles.likeBar}>
                <Image
                    style={{tintColor: 'black', width:20, height:20}}
                    source={config.images.heartIcon}
                />
                <Text>135 likes</Text>
            </View>
        </View>
    );

};
}

const styles = StyleSheet.create({
    userBar: {
        height: config.styleConstants.rowHeight, 
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    userPic:{
        height: 40,
        width: 40,
        borderRadius: 20
    },

    iconBar: {
        height: config.styleConstants.rowHeight,
        width: '100%',
        borderColor: "rgb(233,233,233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row'
    },
    icon: {
        width: 40,
        height: 40,
        tintColor: 'black'
        
    },
    likeBar: {
        height: 30,
        width: '100%',
        borderColor: "rgb(233,233,233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: 'center',
        marginLeft: 5,
        flexDirection: 'row'
    }
})

export default Post;