import React from 'react'
import { Text, View } from 'react-native'
import ActionSheet, { useSheetRef } from 'rn-sheet'
import { Button } from '../components/button'

function ReturnData() {
  const ref = useSheetRef('return-data')
  return (
    <ActionSheet
      indicatorStyle={{
        marginTop: 10,
        width: 150,
      }}
      gestureEnabled
      drawUnderStatusBar
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          paddingHorizontal: 12,
          paddingTop: 20,
        }}
      >
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            textAlign: 'center',
            marginBottom: 10,
          }}
        >
          Are you sure you want to star rn-sheet Github?
        </Text>
        <Button
          title="Star on Github"
          onPress={() => {
            ref.current.hide(true)
          }}
        />
        <Button
          title="Cancel"
          onPress={() => {
            ref.current.hide(false)
          }}
          style={{
            backgroundColor: '#a9a9a9',
          }}
        />
      </View>
    </ActionSheet>
  )
}

export default ReturnData
