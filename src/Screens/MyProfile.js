import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useGetUserLocationQuery } from '../app/sevices/shopServices';
import { useSelector } from 'react-redux';
import { clearUser } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import LogoutIcon from '../../assets/logout-icon.png';
import { deleteAllSession } from '../database';
import { colors } from '../Global/colors';

const MyProfile = ({ navigation }) => {
  const dispatch = useDispatch();
  const localId = useSelector((state) => state.auth.value.localId);
  const emailAddress = useSelector((state) => state.auth.value.email);
  const { data } = useGetUserLocationQuery(localId);
  const onLogout = () => {
    deleteAllSession();
    dispatch(clearUser());
  };

  return (
    <View style={styles.container}>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>User:</Text>
        <Text style={styles.field}>{emailAddress}</Text>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.field}>{data?.address}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Address')}>
          <Text style={styles.buttonText}>{data?.address ? 'Change Address' : 'Set Address'}</Text>
        </Pressable>

        <Pressable style={styles.logoutButton} onPress={onLogout}>
          <Image source={LogoutIcon} style={styles.logoutIcon} />
          <Text style={styles.buttonText}>Log Out</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryColor2
  },
  header: {
    backgroundColor: '#3498db',
    paddingVertical: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.clearColor
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontWeight:'bold'
  },
  field: {
    flex: 2,
    fontSize: 16,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 200,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    width: '80%',
  },
  buttonText: {
    color: colors.clearColor,
    fontSize: 18,
    fontWeight:'bold'
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  logoutIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: colors.clearColor,
  },
});
