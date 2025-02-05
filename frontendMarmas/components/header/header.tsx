import { Pressable, View, Text,StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAppStore } from '../../store/store';
import { Colors } from '../../constants/colors';

export default function Header() {
  const { isDarkMode, toggleMenu } = useAppStore();
  const theme = isDarkMode ? Colors.dark : Colors.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.headerBg }]}>
      <Text style={[styles.title, { color: theme.textPrimary }]}>Marmas</Text>
      
      <Pressable 
        onPress={toggleMenu}
        style={styles.menuButton}
      >
        <MaterialCommunityIcons 
          name="menu" 
          size={28} 
          color={theme.icons} 
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      menuButton: {
        padding: 8,
      }
})