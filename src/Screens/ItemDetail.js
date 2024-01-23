import { Pressable, StyleSheet, Text, View, Image, Modal, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import { fonts } from '../Global/fonts'
import { colors } from '../Global/colors'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'

const ItemDetail = ({ navigation }) => {
  const dispatch = useDispatch();
  const prod = useSelector((state) => state.shop.value.selectedProduct);
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalClose = () => {
    setModalVisible(false);
    navigation.goBack();
  };

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
        style={styles.buyButton}
        onPress={() => {
          dispatch(addItem(prod));
          setModalVisible(true);
        }}
      >
        <Text style={styles.buyText}>Comprar!</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Product Added!!</Text>
          <TouchableOpacity
            style={styles.okButton}
            onPress={handleModalClose}
          >
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
    marginVertical: 10,
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
  },
  buyText: {
    fontFamily: 'RobotoBlack',
    fontSize: 20,
  },
  modalContainer: {
    width: 300,
    alignSelf: 'center',
    marginTop: 'auto',
    alignItems: 'center',
    marginBottom: 'auto',
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#333',
    gap: 30,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },

  modalText: {
    fontSize: 18,
    color: '#354F',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight:'bold'
    
  },

  okButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    alignSelf: 'center',
    borderWidth: 2,
  },

  okButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
