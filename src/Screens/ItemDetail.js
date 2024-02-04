import { StyleSheet, Text, View, Image, Modal, TouchableOpacity } from 'react-native'
import { colors } from '../Global/colors'
import { fonts } from '../Global/fonts'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'
import Toast from 'react-native-toast-message'
import { useState } from 'react'

const ItemDetail = ({ navigation }) => {
  const dispatch = useDispatch();
  const prod = useSelector((state) => state.shop.value.selectedProduct);
  const [disableButton, setDisableButton] = useState(false);

  const handleToastClose = () => {
    navigation.goBack();
  };

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Product Added!',
      text2: 'Go to cart to finish purchase',
      autoHide: true,
      visibilityTime: 3000,
      onHide: handleToastClose,
      onPress: Toast.hide,
    });

  }

  return (
    <View style={styles.container}>
      <Text style={styles.prodName}>{prod.title}</Text>
      <Image
        style={styles.image}
        source={{ uri: prod.thumbnail }}
        resizeMode="cover"
      />
      <Text style={styles.description}>{prod.description}</Text>
      <TouchableOpacity
        style={[
          styles.buyButton,
          disableButton ? styles.disabledButton : null,
        ]}
        onPress={() => {
          dispatch(addItem(prod));
          setDisableButton(true);
          showToast();
          
        }}
        disabled={disableButton}
      >
        <Text style={styles.buyText}>Add to cart!</Text>
      </TouchableOpacity>
      <Toast

        topOffset='200'
        backgroundColor={colors.mainColor1}
        opacity={0.9}
        borderRadius={10}
        borderWidth={2}
        borderColor={colors.clearColor}
      />
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.secondaryColor1,
  },
  image: {
    width: '100%',
    height: 250,
    aspectRatio: 1,
    marginVertical: 10,
    borderRadius:10
  },
  prodName: {
    fontFamily: 'RobotoLight',
    fontSize: 25,
    marginVertical: 20,
  },
  description: {
    padding: 10,
    fontFamily: 'RobotoLightItalic',
    fontSize: 20,
    marginVertical: 10,
  },
  buyButton: {
    marginVertical: 20,
    borderWidth: 2,
    borderRadius: 5,
    padding: 20,
    backgroundColor: colors.mainColor1,
  },
  disabledButton: {
    backgroundColor: colors.disabledColor, 
    opacity: 0.5,
  },
  buyText: {
    fontFamily: 'RobotoBlack',
    fontSize: 20,
    color: colors.clearColor,
  },
});
