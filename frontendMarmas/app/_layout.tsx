import { Stack } from 'expo-router';
import { View, Text, StyleSheet, Pressable,Switch  } from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAppStore } from '../store/store';
import Header from '../components/header/header'
import DropdownMenu from '../components/DropdownMenu/dropdown'

export default function Layout() {
  // Busca apenas os estados/ações necessários
  const {
    isMenuOpen,
    isSettingsOpen,
    isDarkMode,
    toggleMenu,
    openSettings,
    closeSettings,
    toggleDarkMode
  } = useAppStore();

  return (
    <View style={styles.container}>
      {/* CABEÇALHO COM MENU */}

      <Header/>

      {/* MENU DROPDOWN */}

      <DropdownMenu/>

      {/* POPUP DE CONFIGURAÇÕES */}
      {isSettingsOpen && (
        <View style={styles.settingsOverlay}>
          <View style={styles.settingsPopup}>
            <Text style={styles.popupTitle}>Configurações</Text>
            
            <View style={styles.settingItem}>
              <Text style={styles.settingText}>Modo Escuro</Text>
              <Switch
                value={isDarkMode}
                onValueChange={toggleDarkMode}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
              />
            </View>

            <Pressable 
              style={styles.closeButton}
              onPress={closeSettings}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </Pressable>
          </View>
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
  },
  settingsOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
  },
  settingsPopup: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    width: '80%',
  },
  popupTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#2A2A2A',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});