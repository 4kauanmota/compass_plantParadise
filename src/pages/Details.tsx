import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import Plant from "../models/Plant";
import AddToCart from "../components/molecules/AddToCart";
import IncDecControl from "../components/molecules/IncDecControl";
import SubTitle from "../components/atoms/SubTitle";
import { colors, fonts } from "../theme";

const Details = () => {
  const p = new Plant(
    "1",
    "Plant",
    2000,
    "https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg"
  );

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.preview}>
            <Image style={styles.image} source={{ uri: p.Image }} />
          </View>

          <View style={styles.main}>
            <View style={styles.buyArea}>
              <Text style={styles.category}>Plant pot</Text>
              <SubTitle style={styles.subTitle}>Plastic plant pot</SubTitle>

              <View style={styles.priceControl}>
                <Text style={styles.price}>$9.20</Text>
                <IncDecControl style={styles.incDecControl} />
              </View>
            </View>

            <View style={styles.description}>
              <Text style={styles.descriptionText}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                repellat necessitatibus! Sapiente iusto at distinctio in
                voluptates vel tempore, ipsum nobis sint, aliquid nihil eos
                reiciendis optio temporibus rerum enim. Obcaecati cum
                reprehenderit illum ducimus quae iste quia, consequuntur eveniet
                sapiente ab molestiae quaerat similique et, minima dolorum
                aliquid! Facere autem nisi nesciunt. Pariatur ab minima eum
                molestias voluptatibus veritatis. Quibusdam dolor nisi, commodi
                necessitatibus eaque, dignissimos incidunt rem in similique
                explicabo iusto deleniti ab ad totam natus blanditiis assumenda
                animi expedita unde tenetur illo? Ut optio expedita saepe
                corrupti. Praesentium aliquid a nihil tenetur, adipisci sit
                consectetur. Qui deserunt possimus eius reiciendis. Maxime eaque
                repellat deserunt asperiores quae animi dignissimos ad minus
                optio distinctio perferendis atque, praesentium suscipit beatae.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <AddToCart style={styles.addToCart} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  ////////

  preview: {
    flex: 2.5,
    width: "100%",
  },

  image: {
    width: "100%",
    height: 247,
  },

  ////////

  main: {
    flex: 3,
    paddingHorizontal: 24,
  },

  buyArea: {
    flex: 1.5,
  },

  category: {
    flex: 6,
    textAlignVertical: "center",

    color: colors.font.light,

    paddingTop: 14,
    paddingBottom: 6,
  },

  subTitle: {
    flex: 7,
    paddingBottom: 8,
  },

  priceControl: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  price: {
    flex: 1,
    textAlignVertical: "center",

    fontFamily: fonts.main[600],
    fontSize: 20,
  },

  incDecControl: {
    flex: 0.5,
  },

  description: {
    flex: 1.5,
    paddingTop: 24,
    paddingBottom: 100,
  },

  descriptionText: {
    fontFamily: fonts.main[400],
    fontSize: 14,
    color: colors.font.light,
  },

  ////////

  addToCart: {
    flex: 1,
    width: "100%",
    height: 92,

    position: "absolute",
    bottom: 0,
  },
});

export default Details;
