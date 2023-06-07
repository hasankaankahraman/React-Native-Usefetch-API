import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../style/Details.style";
import useFetch from "../hooks/useFetch/useFetch";
import config from "../../config";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Details = ({route}) => {
  const {id,image,title, description, price} = route.params;
  const {loading, error, data} = useFetch(config.API_URL + '/' + id);
  console.log(route.params)
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }


  return (
    <View style={styles.container}>
      <View style={styles.body_container}>
        <Image style={styles.image} source={{uri:image}} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
        <Text style={styles.price}>{price} ₺</Text>
      </View>
    </View>
  );
};

export default Details;
