import React, { Component } from "react";
import {
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import * as Icon from "@expo/vector-icons";

import { Button, Divider, Input, Block, Text } from "../presentation";
import { theme, mocks } from "../constants";
import * as firebase from 'firebase';


const { width, height } = Dimensions.get("window");

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : firebase.auth().currentUser,
            profile: {
                name: 'The Rock',
                images: [
                    'https://i.ytimg.com/vi/GHdua0i4Ghk/maxresdefault.jpg',
                    'https://vailenespanol.com/wp-content/uploads/2019/11/intro-1568654220.jpg',
                    'https://dam.menshealthlatam.com/wp-content/uploads/2018/12/Depresion.jpg',
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-rock-1575989431.png?crop=0.608xw:1.00xh;0.312xw,0&resize=480:*',
                    'https://i2.wp.com/wipy.tv/wp-content/uploads/2019/09/The-rock-estara%CC%81-presente-en-la-UFC-1.jpg?fit=1000%2C600&ssl=1'
    
                ]
    
    
            }
          };
          console.log(this.state.user.uid)

          firebase.database().ref('users/' + this.state.user.uid).on('value', (snapshot) => {
            this.state.profile.name = snapshot.val().name;
            console.log(this.state.profile.name)
          });
        
      }
//   static navigationOptions = ({ navigation }) => {
//     return {
//       headerRight: (
//         <Button onPress={() => {}}>
//           <Icon.Entypo name="dots-three-horizontal" color={theme.colors.gray} />
//         </Button>
//       )
//     };
//   };

  renderGallery() {
    
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        data={this.state.profile.images}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => (
          <Image
            source={{uri: item}}
            resizeMode="contain"
            style={{ width, height: height / 2.8 }}
          />
        )}
      />
    );
  }

  render() {

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {this.renderGallery()}

        <Block style={styles.product}>
          <Text h2 bold>
            {this.state.profile.name}
          </Text>
          {/* <Block flex={false} row margin={[theme.sizes.base, 0]}>
            {product.tags.map(tag => (
              <Text key={`tag-${tag}`} caption gray style={styles.tag}>
                {tag}
              </Text>
            ))}
          </Block> */}
          <Text gray light height={22}>
            #noLimits
          </Text>

          <Divider margin={[theme.sizes.padding * 0.9, 0]} />

          <Block>
            <Text semibold>Challenges</Text>
            <Block row margin={[theme.sizes.padding * 0.9, 0]}>
              {this.state.profile.images.slice(1, 3).map((image, index) => (
                <Image
                  key={`gallery-${index}`}
                  source={{uri: image}}
                  style={styles.image}
                />
              ))}
              <Block
                flex={false}
                card
                center
                middle
                color="rgba(197,204,214,0.20)"
                style={styles.more}
              >
                <Text gray>+{this.state.profile.images.slice(3).length}</Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  product: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingVertical: theme.sizes.padding
  },
  tag: {
    borderColor: theme.colors.gray2,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: theme.sizes.base,
    paddingHorizontal: theme.sizes.base,
    paddingVertical: theme.sizes.base / 2.5,
    marginRight: theme.sizes.base * 0.625
  },
  image: {
    width: width / 3.26,
    height: width / 3.26,
    marginRight: theme.sizes.base
  },
  more: {
    width: 55,
    height: 55
  }
});