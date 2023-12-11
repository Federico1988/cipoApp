import { StyleSheet, Text, View } from 'react-native'
import Header from '../Components/Header'
import Categories from '../Components/Categories'

const Home = ({setSelectedCategory}) => {
    return (
        <>
            <Header setSelectedCategory={setSelectedCategory} title="Categorias" />
            <Categories setSelectedCategory={setSelectedCategory}/>
        </>
    )
}

export default Home

const styles = StyleSheet.create({})