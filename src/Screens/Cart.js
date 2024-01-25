import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Pressable, View, Text, Modal, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../Components/CartItem';
import { colors } from '../Global/colors';
import { usePostOrdersMutation } from '../app/sevices/shopServices';
import { clearCart } from '../features/cart/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  const localId = useSelector(state => state.auth.value.localId);
  const [triggerPostOrder] = usePostOrdersMutation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleOrderConfirmation = async () => {
    try {
      console.log('running');
      await triggerPostOrder({ order: cart, localId });
      setModalVisible(true);
    } catch (error) {
      console.error('Error posting order:', error);
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
    dispatch(clearCart());
  };

  const isConfirmButtonDisabled = cart.items.length === 0;

  return (
    <View style={styles.container}>
      <FlatList
        data={cart.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.text}>Total: ${cart.total}</Text>
        <Pressable
          onPress={() => handleOrderConfirmation()}
          style={[
            styles.text,
            styles.confirmButton,
            isConfirmButtonDisabled && styles.disabledButton,
          ]}
          disabled={isConfirmButtonDisabled}
        >
          <Text style={styles.text}>Confirmar</Text>
        </Pressable>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Order Successful!</Text>
          <TouchableOpacity style={styles.okButton} onPress={handleModalClose}>
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 120,
  },
  totalContainer: {
    backgroundColor: colors.secondaryColor1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 40,
  },
  text: {
    fontSize: 20,
    borderRadius: 15,
    padding: 10,
  },
  confirmButton: {
    backgroundColor: '#3498db',
  },
  disabledButton: {
    opacity: 0.2,
    backgroundColor: 'transparent',
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
    fontWeight: 'bold',
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
