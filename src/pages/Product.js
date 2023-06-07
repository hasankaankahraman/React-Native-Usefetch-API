import React from "react";
import {View,Text, FlatList, ActivityIndicator} from "react-native";
import config from "../../config";

import ProductCard from "../components/ProductCard";
import useFetch from "../hooks/useFetch/useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Product = ({navigation}) => {

    const {loading,error,data} = useFetch(config.API_URL)

    //#region CustomHook

    // [error,setError] = useState(null);
    // [data,setData] = useState([]);
    // [loading,setLoading]=useState(true);

    // useEffect(() => {
    //     fetchData();
    // },[]);

    // const fetchData = async () => {


    //     try {
    //         const {data : productData} = await axios.get(config.API_URL);
    //         setData(productData);
    //         setLoading(false);
    //     } catch (err) {
    //         setLoading(false);
    //         setError(err.message)

    //     }

    // }

    //#endregion

    const handleDetail = (id, image, price, title, description) => {
        navigation.navigate('Details', { id, image, price, title, description });
    };
    
    const renderProduct = ({ item }) => (
        <ProductCard
            product={item}
            onSelect={() =>
                handleDetail(
                    item.id,
                    item.image,
                    item.price,
                    item.title,
                    item.description
                )
            }
        />
    );
    
    if(loading){
        return <Loading/>
    }
    if(error){
        return <Error/>
    }
    return(
        <View>
            <FlatList data={data} renderItem={renderProduct}/>
        </View>
    )
}

export default Product;