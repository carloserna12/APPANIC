import React from 'react';
import { Text, View, StatusBar, TextInput, Button, FlatList } from 'react-native';
import { useState, useEffect } from "react";
import Styles from './Styles';
import { openDatabase } from "react-native-sqlite-storage";

const db = openDatabase({
  name: "base_de_datos_correo",
});

const VincularScreen = () => {
  const [correo, setCorreo] = useState("");
  const [listaCorreos, setlistaCorreos] = useState([]);

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS listaCorreos (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(40) NOT NULL,CONSTRAINT name UNIQUE(name))`,
        [],
        (sqlTxn, res) => {
          console.log("Tabla creada");
        },
        error => {
          console.log("error al crear tabla " + error.message);
        },
      );
    });
  };

  const addCorreo = () => {
    if (!correo) {
      alert("Agregue el correo");
      return false;
    }

    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO listaCorreos (name) VALUES (?)`,
        [correo],
        (sqlTxn, res) => {
          alert(`${correo} fue agregado correctamente`)
          console.log(`${correo} fue agregado correctamente`);
          getCorreos();
          setCorreo("");
        },
        error => {
          console.log("error al agregar el correo " + error.message);
        },
      );
    });
  };

  const getCorreos = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM listaCorreos ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("correo recibido correctamente");
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, name: item.name });
            }

            setlistaCorreos(results);
          }
        },
        error => {
          console.log("error al tomar correos " + error.message);
        },
      );
    });
  };

  const renderCorreo = ({ item }) => {
    return (
      <View style={{
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#ddd",
      }}>
        <Text style={{ marginRight: 9 }}>{item.id}</Text>
        <Text>{item.name}</Text>
      </View>
    );
  };

  useEffect(async () => {
    await createTables();
    await getCorreos();
  }, []);

  return (
    <View>
      <TextInput
        placeholder="Digite correo electronico"
        value={correo}
        onChangeText={setCorreo}
        style={{ marginHorizontal: 8 }}
      />

      <Button title="Agregar" onPress={addCorreo} />

      <FlatList
        data={listaCorreos}
        renderItem={renderCorreo}
        key={cat => cat.id}
      />
    </View>
  );
};

export default VincularScreen;