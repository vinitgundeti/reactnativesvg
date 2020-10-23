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
      <SvgUri
        width={22}
        height={22}
        uri={"https://images.travelxp.com/images/txpin/vector/airlines/6e.svg"}
        onError={handleError}
      />
    );
  }
  return (
    <View style={styles.container}>
      <SvgUri
        width={22}
        height={22}
        uri={"https://images.travelxp.com/images/txpin/vector/airlines/sg.svgg"}
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
