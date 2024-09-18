import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Image, Text, Modal, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function MainScreen() {
    // sayfalar arası geçiş
    const navigation = useNavigation();

    // alt menüler için tanımlama
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showSubMenu2, setShowSubMenu2] = useState(false);
    const [showSubMenu3, setShowSubMenu3] = useState(false);
    const [showSubMenu4, setShowSubMenu4] = useState(false);

    const [showLineMenu, setShowLineMenu] = useState(false);

    const [showActiveList, setShowActiveList] = useState(false);
    const [showYolBakim, setShowYolBakim] = useState(false);
    const [showSonDepremler, setShowSonDepremler] = useState(false);

    // harita ilk ayarı
    const [region, setRegion] = useState({
        latitude: 41.0082,
        longitude: 28.9784,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    // alt menü düzenleme
    const handlePressHarita = () => {
        setShowSubMenu(!showSubMenu);
    };

    const handlePressOlayYonetimi = () => {
        setShowSubMenu2(!showSubMenu2);
    };

    const handlePressMeteoroloji = () => {
        setShowSubMenu3(!showSubMenu3);
    };

    const handlePressKatmanlar = () => {
        setShowSubMenu4(!showSubMenu4);
    };

    // sol menü
    const handleLineMenu = () => {
        setShowLineMenu(!showLineMenu);
    };

    // Aktif olay liste
    const handleActiveList = () => {
        setShowActiveList(!showActiveList);
    };

    const handleYolBakim = () => {
        setShowYolBakim(!showYolBakim);
    };

    const handleSonDepremler = () => {
        setShowSonDepremler(!showSonDepremler);
    };

    // haritada yakınlaşma uzaklaşma
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

    // sayfa düzeni
    return (
        <View style={styles.container}>
            
            {/* Üst Taraf */}
            <View style={styles.topBar}>
                <TouchableOpacity style={styles.topMenuButton} onPress={handleLineMenu}>
                {/* <TouchableOpacity style={styles.topMenuButton}> */}
                    <Icon name="bars" size={30} color="#000" />
                </TouchableOpacity>

                <Image source={require('../assets/akomayskucuk.png')} />
                {/* <Text style={styles.topMenuText}> AKOMAYS </Text> */}

                <TouchableOpacity style={styles.profileButton}>
                    <Icon name="user" size={30} color="#000" />
                </TouchableOpacity>
            </View>

            {/* Harita Arka Planı */}
            <MapView
                style={styles.map}
                region={region}
            >
                <Marker
                    coordinate={{ latitude: 41.0082, longitude: 28.9784 }}
                    title="Istanbul"
                />
            </MapView>

            {/* Menü Modal */}
            <Modal
                visible={showLineMenu}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setShowLineMenu(false)}
            >
                <View style={styles.menuContainer}>
                    <TouchableOpacity style={styles.menuItem} onPress={() => {
                        setShowLineMenu(false);
                        navigation.navigate('Settings');
                    }}>
                        <Text style={styles.menuText}>Ayarlar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => {
                        setShowLineMenu(false);
                        navigation.navigate('Stats');
                    }}>
                        <Text style={styles.menuText}>İstatistikler</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.closeButton} onPress={handleLineMenu}>
                        <Text style={styles.closeButtonText}>Kapat</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            {/* Zoom Butonları */}
            <View style={styles.zoomContainer}>
                <TouchableOpacity style={styles.zoomButton} onPress={zoomIn}>
                    <Text style={styles.zoomText}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.zoomButton} onPress={zoomOut}>
                    <Text style={styles.zoomText}>-</Text>
                </TouchableOpacity>
            </View>

            {/* Sol Ana Butonlar */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handlePressHarita}>
                    <Image source={require('../assets/traffic.png')} style={styles.icon} />
                    <Text style={styles.text}>Trafik Yoğunluğu</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handlePressHarita}>
                    <Image source={require('../assets/street-camera.png')} style={styles.icon} />
                    <Text style={styles.text}>Kamera</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleSonDepremler}>
                    <Image source={require('../assets/earthquake.png')} style={styles.icon} />
                    <Text style={styles.text}>Son Depremler</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handlePressHarita}>
                    <Image source={require('../assets/arvento.png')} style={styles.icon} />
                    <Text style={styles.text}>Araç Takip</Text>
                </TouchableOpacity>
            </View>

            {/* Alt Ana Butonlar */}
            <View style={styles.buttonContainer2}>
                <TouchableOpacity style={styles.button2} onPress={handlePressOlayYonetimi}>
                    <Image source={require('../assets/olay-yönetimi.png')} style={styles.icon} />
                    <Text style={styles.text}>Olay Yönetimi</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2} onPress={handlePressMeteoroloji}>
                    <Image source={require('../assets/meteoroloji.png')} style={styles.icon} />
                    <Text style={styles.text}>Meteoroloji</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2} onPress={handlePressKatmanlar}>
                    <Image source={require('../assets/layers.png')} style={styles.icon} />
                    <Text style={styles.text}>Katmanlar</Text>
                </TouchableOpacity>
            </View>

            {/* Olay Yönetimi Alt Menüleri */}
            {showSubMenu2 && (
                <View style={styles.subMenuContainer}>
                    <TouchableOpacity style={styles.subMenuButton} onPress={handleActiveList}>
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
            {/* Katmanlar Alt Menüleri */}
            {showSubMenu4 && (
                <View style={styles.subMenuContainer}>
                    <ScrollView horizontal={true} style={styles.scrollContainer2}>
                        <View style={styles.rowContainer}>
                            <TouchableOpacity style={styles.subMenuButton}>
                                <Text style={styles.text}>İtfaiye</Text>
                                {/* <Image source={require('../assets/radar.png')} style={styles.icon} /> */}
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.subMenuButton} onPress={handleYolBakim}>
                                <Text style={styles.text}>Yol Bakım</Text>
                                {/* <Image source={require('../assets/station.png')} style={styles.icon} /> */}
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.subMenuButton}>
                                <Text style={styles.text}>İSKİ</Text>
                                {/* <Image source={require('../assets/sms.png')} style={styles.icon} /> */}
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.subMenuButton}>
                                <Text style={styles.text}>İlçe Sınırları</Text>
                                {/* <Image source={require('../assets/riskli-noktalar.png')} style={styles.icon} /> */}
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.subMenuButton}>
                                <Text style={styles.text}>Ulaşım</Text>
                                {/* <Image source={require('../assets/riskli-noktalar.png')} style={styles.icon} /> */}
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.subMenuButton}>
                                <Text style={styles.text}>Ulaşım</Text>
                                {/* <Image source={require('../assets/riskli-noktalar.png')} style={styles.icon} /> */}
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.subMenuButton}>
                                <Text style={styles.text}>Ulaşım</Text>
                                {/* <Image source={require('../assets/riskli-noktalar.png')} style={styles.icon} /> */}
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            )}

            {/* Aktif Olay Liste */}
            {showActiveList && (
                <View style={styles.subMenuContainer2}>
                    <TouchableOpacity style={styles.closeButton2} onPress={() => setShowActiveList(false)}>
                        <Icon name="chevron-down" size={20}/>
                    </TouchableOpacity>
                    <Text style={styles.listTitle}>Aktif Olay Listesi</Text>
                    <ScrollView style={styles.scrollContainer}>
                        <TouchableOpacity style={styles.listItem}>
                            <Text style={styles.listText}>1. Olay: Kuvvetli Sağanak Yağış</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listItem}>
                            <Text style={styles.listText}>2. Olay: Yangın</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listItem}>
                            <Text style={styles.listText}>3. Olay: Deprem</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listItem}>
                            <Text style={styles.listText}>4.Olay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listItem}>
                            <Text style={styles.listText}>5.Olay</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            )}
            {/* Yol Bakım */}
            {showYolBakim && (
                <View style={styles.subMenuContainer3}>
                    <TouchableOpacity style={styles.subMenuButton}>
                        <Text style={styles.text}>Sorumluluk Alanları</Text>
                        {/* <Image source={require('../assets/radar.png')} style={styles.icon} /> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subMenuButton}>
                        <Text style={styles.text}>İstasyonlar</Text>
                        {/* <Image source={require('../assets/station.png')} style={styles.icon} /> */}
                    </TouchableOpacity>
                </View>
            )}

            {showSonDepremler && (
                <View style={styles.subMenuContainer2}>
                    <TouchableOpacity style={styles.closeButton2} onPress={() => setShowSonDepremler(false)}>
                        <Icon name="chevron-down" size={20}/>
                    </TouchableOpacity>
                    <Text style={styles.listTitle}>Son Depremler</Text>
                    <ScrollView style={styles.scrollContainer}>
                        <TouchableOpacity style={styles.listItem}>
                            <Text style={styles.listText}>Ankara Keşan  Büyüklük : 3.7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listItem}>
                            <Text style={styles.listText}>Adıyaman      Büyüklük : 2.2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listItem}>
                            <Text style={styles.listText}>İstanbul      Büyüklük : 3.2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listItem}>
                            <Text style={styles.listText}>Manisa        Büyüklük : 4.3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listItem}>
                            <Text style={styles.listText}>Yozgat        Büyüklük : 3.5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listItem}>
                            <Text style={styles.listText}>İzmir         Büyüklük : 4.2</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            )}
        </View>
    );

}

// stiller
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
        justifyContent: 'space-between',
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
        bottom: 110,
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
    menuContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.78)', // Arka plan şeffaf
        width: '52%',
    },
    menuItem: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        width: 200,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    menuText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    closeButton: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#ff5e5e',
        alignItems: 'center',
        borderRadius: 5,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    menuItem2: { //kullanılmıyor şu an
        // position: 'absolute',
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        width: 100,
        alignItems: 'center',
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    listTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subMenuContainer2: {
        position: 'absolute',
        bottom: 188,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#f0f8ff',
    },
    closeButton2: {
        padding: 2,
        backgroundColor: '#f0f8ff',
        alignItems: 'center',
        borderRadius: 5,
        width: 30,
    },
    scrollContainer: {
        maxHeight: 300, // Listeyi sınırlamak için (kaydırılabilir alan)
        width: 400,
        backgroundColor: '#f0f8ff',
        padding: 10,
    },
    scrollContainer2 : {
        // flexDirection: 'row',
        padding: 10,
    },
    listItem: {
        padding: 18,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 5,
        elevation: 3, // Android için gölge
    },
    listText: {
        fontSize: 16,
    },
    subMenuContainer3: {
        position: 'absolute',
        bottom: 206,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    rowContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', 
    },
});
