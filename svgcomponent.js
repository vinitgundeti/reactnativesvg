import React, { useState, useCallback } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { SvgUri } from 'react-native-svg'

export default React.memo(function SvgComponent() {
  const [hasError, setError] = useState(false);
  const handleError = useCallback(() => {
    setError(true)
  }, [])

  if (hasError) {
    return (
      <Text>Error</Text>
    );
  }
  return (
    <View style={styles.container}>
      <SvgUri
        width={22}
        height={22}
        uri={"https://images.travelxp.com/images/txpin/vector/airlines/sg.svg"}
        onError={handleError}
      />
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    marginLeft: 12,
    marginTop: 12
  }
})
