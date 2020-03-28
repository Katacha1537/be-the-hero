import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native'
import * as MailComposer from 'expo-mail-composer'

import styles from './styles'

import logoImg from '../../assets/logo.png'

export default function Detail(){

    const navigation = useNavigation()
    const route = useRoute()

    const incident = route.params.incident
    const messagem = `Olá ${incident.name}, estou etrando em contato, com vocês, quero muito ajuda-los no caso "${incident.title}", com o valor de ${Intl.NumberFormat('pt-br', {
                        style: 'currency', 
                        currency: 'BRL' })
                        .format(incident.value)}`

    function navigateBack(){
        navigation.goBack()
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Heroi do caso: ${incident.title}`,
            recipients: [incident.email],
            body: messagem
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${messagem}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e82041" />
                </TouchableOpacity> 
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0}]}>ONG:</Text>
    <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>Preço:</Text>
                <Text style={styles.incidentValue}>
                    {Intl.NumberFormat('pt-br', {
                        style: 'currency', 
                        currency: 'BRL' })
                        .format(incident.value)}
                </Text>
            </View>

                <View style={styles.contactBox}>
                    <Text style={styles.heroTitle}>Salve  o dia!</Text>
                    <Text style={styles.heroTitle}>Seja o herói deste caso.</Text>

                    <Text style={styles.heroTitle}>Entre em contato:</Text>
                </View>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>    
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>    
                    </TouchableOpacity>
                </View>
        </View>
    )
}