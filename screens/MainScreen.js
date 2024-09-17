import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Image, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function MainScreen() {
    const navigation = useNavigation();

    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showSubMenu2, setShowSubMenu2] = useState(false);
    const [showSubMenu3, setShowSubMenu3] = useState(false);

    const [showMenu, setShowMenu] = useState(false); // soldan menü açma

    const [region, setRegion] = useState({
        latitude: 41.0082,
        longitude: 28.9784,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const handlePressHarita = () => {
        setShowSubMenu(!showSubMenu);
    };

    const handlePressOlayYonetimi = () => {
        setShowSubMenu2(!showSubMenu2);
    };

    const handlePressMeteoroloji = () => {
        setShowSubMenu3(!showSubMenu3);
    };

    const zoomIn = () => {
        setRegion((prevRegion) => ({
            ...prevRegion,
            latitudeDelta: prevRegion.latitudeDelta / 2,
            longitudeDelta: prevRegion.longitudeDelta / 2,
        }));
    };

    const zoomOut = () => {
        setRegion((prevRegion) => ({
            ...prevRegion,
            latitudeDelta: prevRegion.latitudeDelta * 2,
            longitudeDelta: prevRegion.longitudeDelta * 2,
        }));
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity
                    style={styles.topMenuButton}
                    onPress={toggleMenu}
                >
                    <Icon name="bars" size={30} color="#000" />
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.topMenuButton}>
                    <Icon name="bars" size={30} color="#000" />
                </TouchableOpacity> */}

                {/* <Image source={require('../assets/akomkucuk.png')} /> */}
                <Text style={styles.topMenuText}> AKOMAYS </Text>

                <TouchableOpacity style={styles.profileButton}>
                    <Icon name="user" size={30} color="#000" />
                </TouchableOpacity>
            </View>
            <MapView
                style={styles.map}
                region={region}
            // onRegionChangeComplete={setRegion}
            >
                <Marker
                    coordinate={{ latitude: 41.0082, longitude: 28.9784 }}
                    title="Istanbul"
                />
            </MapView>

            {/* Zoom Butonları */}
            <View style={styles.zoomContainer}>
                <TouchableOpacity style={styles.zoomButton} onPress={zoomIn}>
                    <Text style={styles.zoomText}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.zoomButton} onPress={zoomOut}>
                    <Text style={styles.zoomText}>-</Text>
                </TouchableOpacity>
            </View>

            {/* Ana Butonlar */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handlePressHarita}>
                    <Image source={require('../assets/traffic.png')} style={styles.icon} />
                    <Text style={styles.text}>Trafik Yoğunluğu</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handlePressHarita}>
                    <Image source={require('../assets/street-camera.png')} style={styles.icon} />
                    <Text style={styles.text}>Kamera</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handlePressHarita}>
                    <Image source={require('../assets/earthquake.png')} style={styles.icon} />
                    <Text style={styles.text}>Son Depremler</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handlePressHarita}>
                    <Image source={require('../assets/arvento.png')} style={styles.icon} />
                    <Text style={styles.text}>Araç Takip</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer2}>
                <TouchableOpacity style={styles.button2} onPress={handlePressOlayYonetimi}>
                    <Image source={require('../assets/olay-yönetimi.png')} style={styles.icon} />
                    <Text style={styles.text}>Olay Yönetimi</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2} onPress={handlePressMeteoroloji}>
                    <Image source={require('../assets/meteoroloji.png')} style={styles.icon} />
                    <Text style={styles.text}>Meteoroloji</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={handlePressMeteoroloji}>
                    <Image source={require('../assets/layers.png')} style={styles.icon} />
                    <Text style={styles.text}>Katmanlar</Text>
                </TouchableOpacity>
            </View>

            {/* Olay Yönetimi Alt Menüleri */}
            {showSubMenu2 && (
                <View style={styles.subMenuContainer}>
                    <TouchableOpacity style={styles.subMenuButton}>
                        <Text style={styles.text}>Aktif Olay Listesi</Text>
                        <Image source={require('../assets/aktif-olay.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subMenuButton}>
                        <Text style={styles.text}>Olay Raporu</Text>
                        <Image source={require('../assets/olay-rapor.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subMenuButton}>
                        <Text style={styles.text}>Olay Arşivi</Text>
                        <Image source={require('../assets/olay-arsiv.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subMenuButton}>
                        <Text style={styles.text}>İtfaiye Olay</Text>
                        <Image source={require('../assets/itfaiye.png')} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            )}
            {/* Meteoroloji Alt Menüleri */}
            {showSubMenu3 && (
                <View style={styles.subMenuContainer}>
                    <TouchableOpacity style={styles.subMenuButton}>
                        <Text style={styles.text}>Radar</Text>
                        <Image source={require('../assets/radar.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subMenuButton}>
                        <Text style={styles.text}>İstasyonlar</Text>
                        <Image source={require('../assets/station.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subMenuButton}>
                        <Text style={styles.text}>Uyarı ve SMS</Text>
                        <Image source={require('../assets/sms.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subMenuButton}>
                        <Text style={styles.text}>Riskli Noktalar</Text>
                        <Image source={require('../assets/riskli-noktalar.png')} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    zoomContainer: {
        position: 'absolute',
        right: 10,
        bottom: 397,
        flexDirection: 'column',
    },
    zoomButton: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        elevation: 5, // Android shadow
    },
    zoomText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
        left: 20,
        right: 20,
        flexDirection: 'column',
        paddingVertical: 350,
        justifyContent: 'space-between', // Butonlar arası eşit mesafe
    },
    buttonContainer2: {
        position: 'absolute',
        bottom: 20,
        left: 50,
        right: 50,
        flexDirection: 'row',
        justifyContent: 'space-between', // Butonlar arası eşit mesafe
    },
    button: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: (Dimensions.get('window').width - 40) / 5,
        height: 80,
        elevation: 5, // Android shadow
    },
    button2: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: (Dimensions.get('window').width - 80) / 3, // 3 buton olacak, kenar boşluklarıyla orantılı
        height: 80,
        width: 115,
        elevation: 5, // Android shadow
    },
    icon: {
        width: 40,
        height: 40,
    },
    text: {
        // marginTop: 5,
        fontSize: 11,
    },
    subMenuContainer: {
        position: 'absolute',
        bottom: 150,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    subMenuButton: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        width: 100,
        height: 70,
        elevation: 5, // Android shadow
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginTop: 50,
        paddingTop: 50, // iOS cihazlarda boşluk için
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        height: 100,
    },
    topMenuButton: {
        padding: 10,
    },
    logo: {
        width: 100,
        height: 50,
    },
    profileButton: {
        padding: 10,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginTop: 25,
        backgroundColor: '#f8f8f8',
        height: 60,
    },
    topMenuText: {
        fontWeight: 'bold',
        fontSize: 35,
        color: 'blue',
    },
});
