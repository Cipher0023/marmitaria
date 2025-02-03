import { Stack } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <View style={styles.container}>
      {/* CABEÇALHO COM MENU */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Marmas</Text>
        <Pressable 
          onPress={() => setIsMenuOpen(!isMenuOpen)}
          style={styles.menuButton}
        >
          <MaterialCommunityIcons 
            name="menu" 
            size={28} 
            color="white" 
          />
        </Pressable>
      </View>

      {/* MENU DROPDOWN */}
      {isMenuOpen && (
        <View style={styles.dropdownMenu}>
          <Pressable style={styles.menuItem}>
            <Text style={styles.menuText}>Home</Text>
          </Pressable>
          <Pressable style={styles.menuItem}>
            <Text style={styles.menuText}>Minha conta</Text>
          </Pressable>
          <Pressable style={styles.menuItem}>
            <Text style={styles.menuText}>Meus pedidos</Text>
          </Pressable>
          <Pressable style={styles.menuItem}>
            <Text style={styles.menuText}>Informações</Text>
          </Pressable>
          <Pressable style={styles.menuItem}>
            <Text style={styles.menuText}>Configurações</Text>
          </Pressable>
        </View>
      )}

      {/* ÁREA DAS PÁGINAS */}
      <Stack 
        screenOptions={{ 
          headerShown: false,
          contentStyle: { backgroundColor: '#fff' } 
        }} 
      />

      {/* RODAPÉ */}
      <Text style={styles.footer}>© 2024 Marmas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // Importante para o dropdown
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#2A2A2A',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 8,
  },
  dropdownMenu: {
    position: 'absolute',
    right: 16,
    top: 60, // Ajuste conforme altura do header
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // Somente Android
    zIndex: 10, // Garante que fique acima do conteúdo
    minWidth: 150,
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  footer: {
    padding: 8,
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
  }
});