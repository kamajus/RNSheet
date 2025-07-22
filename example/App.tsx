import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import '@root/app/sheets'
import { SheetProvider } from 'rn-sheet'
import MainScreen from '@root/app/examples'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
  // To match the style of action sheet navigation bar, we use react-native-navigation-bar-color on android and the app.
  // You also need to adjust the android default navigation bar color `android:navigationBarColor` in styles.xml, see:
  // /Volumes/DataDrive/Projects/react-native/rn-sheetpp/src/main/res/values/styles.xml
  changeNavigationBarColor('#ffffff')

  return (
    <>
      <SafeAreaProvider>
        <GestureHandlerRootView
          style={{
            flex: 1,
          }}
        >
          <SheetProvider context="global">
            <MainScreen />
          </SheetProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </>
  )
}

export default App
