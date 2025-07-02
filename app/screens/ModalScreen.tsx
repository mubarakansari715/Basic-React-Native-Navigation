import { Button } from '@react-navigation/elements';
import { useNavigation, useTheme } from '@react-navigation/native';
import React from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';

export function ModalScreen() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const scaleAnim = new Animated.Value(0.9);

  // Animate the scale when component mounts
  React.useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        ]}
        onPress={navigation.goBack}
      />
      <Animated.View
        style={{
          padding: 16,
          width: '90%',
          maxWidth: 400,
          borderRadius: 3,
          backgroundColor: colors.card,
          transform: [
            {
              scale: scaleAnim,
            },
          ],
        }}
      >
        <Text>
          Mise en place is a French term that literally means "put in place." It
          also refers to a way cooks in professional kitchens and restaurants
          set up their work stations—first by gathering all ingredients for a
          recipes, partially preparing them (like measuring out and chopping),
          and setting them all near each other. Setting up mise en place before
          cooking is another top tip for home cooks, as it seriously helps with
          organization. It'll pretty much guarantee you never forget to add an
          ingredient and save you time from running back and forth from the
          pantry ten times.
        </Text>
        <Button
          color={colors.primary}
          style={{ alignSelf: 'flex-end' }}
          onPress={navigation.goBack}
        >
          Okay
        </Button>
      </Animated.View>
    </View>
  );
}