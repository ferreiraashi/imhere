import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { Participant } from "../../Components/Participant"; 

import { styles } from "./style"

export function Home() {

  const participants = ['Rihan', 'Kelvin', 'Neto', 'Felipe', 'Edvaldo', 'Railson', 'Miguel', 'Mauricio', 'Pedro', 'Luiz', 'Victor', 'Thiago']
  
  function handleParticipantAdd() {
    if(participants.includes("Rihan")){
      return Alert.alert("Participante já existe")
    }

    console.log('Você clicou no botão de adicionar!')
  }

  function handleParticipantRemove( name: string) {

    Alert.alert("Remover", `Deseja remover o participante: ${name}`, [
      {
        text: 'Sim', 
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Nao',
        style: 'cancel'
      }
    ])


    console.log(`Você removeu o participante: ${name}`);
  }  


  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
      data={participants}
      keyExtractor={item => item}
      renderItem={({item}) => (
          <Participant
            key={item}
            name={item}
            onRemove={ () => handleParticipantRemove(item)}
          />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={styles.listEmptyText}>
          Ninguém chegou no evento ainda? Adicione participante a sua lista de presença.
        </Text>
      )}
      />
    </View>
  )
}