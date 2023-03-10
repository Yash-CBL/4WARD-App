import { StyleSheet, Text,View } from "react-native"
import { Image } from "react-native"
import { TouchableOpacity } from "react-native"
import { moderateScale, moderateVerticalScale } from "react-native-size-matters"
import ImagePath from "../Constants/ImagePath"

export default ({ title,onPress,logoimg }) => {
    const styles = StyleSheet.create({
        btn: {
            backgroundColor: '#FFFFFF',
            borderRadius: moderateScale(8),
            height: moderateVerticalScale(48),
            alignItems: 'center',
            paddingVertical:moderateScale(14), 
            flexDirection:'row',
            paddingHorizontal:moderateScale(16),
            marginTop:moderateScale(16),
            
        },
        btntext: {
            color: '#17171A',
            fontSize: moderateVerticalScale(14),
            fontWeight: 'bold',
            letterSpacing: moderateScale(0.88),
            textAlign:"center"
            
        },
        img:{
            alignSelf:'center',   
            marginLeft:0,
                    
        }
    })
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Image style={styles.img} source={logoimg}/>
        <View style={{flex:1}}>
        <Text style={styles.btntext}>{title}</Text>
        </View>
        </TouchableOpacity>
    )
}