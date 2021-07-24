import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

interface iProps {

}

interface iState {
  activePage: number;
}

export default class App extends Component<iProps, iState> {
  constructor(props: iProps) {
    super(props);
    this.state = {
      activePage: 1
    }
  }

  onChangeActivePage = (): void => {
    this.setState(({ activePage }) => ({
      activePage: activePage === 6 ? 1 : activePage + 1
    }))
  };

  renderPage() {
    const { activePage } = this.state;
    switch (activePage) {
      case 1:
        return <Page1 />;
      case 2:
        return <Page2 />;
      case 3:
        return <Page3 />;
      case 4:
        return <Page4 />;
      case 5:
        return <Page5 />;
      case 6:
        return <Page6 />;
      default:
        return <Page1 />;
    }
  }

  render(): JSX.Element {
    return (
      <View style={styles.container} onTouchEnd={this.onChangeActivePage}>
        {this.renderPage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
