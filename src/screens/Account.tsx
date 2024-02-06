import { useState, useEffect } from 'react'
/* import { supabase } from '../supabase' */
import { StyleSheet, View, Alert, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, Input } from 'react-native-elements'
import { NuskaColor, NuskaFonts, NuskaDimensions } from '../constants';

import { Amplify } from "aws-amplify";
import awsconfig from '../../src/aws-exports';

import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react-native';

function Account() {

  Amplify.configure(awsconfig);

  function SignOutButton() {
    const { signOut } = useAuthenticator();
    return <Button onPress={signOut} title="Sign Out" />;
  }

  return (
    <View style={styles.container}>

      <View style={styles.verticallySpaced}>
        <Text>Profile</Text>
      </View>

      <View style={styles.verticallySpaced}>
        <View style={styles.container}>
          <View style={styles.verticallySpaced}>
            <SignOutButton />
          </View>
        </View>
      </View>
    </View>
  )
}

const signInConfig = {

  header: 'Sign In',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signInFields: [
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 3,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password',
    },
  ],
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
})
export default withAuthenticator(Account, { signInConfig });

/* const signUpConfig = {
  header: 'Sign Up',
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Full Name',
      key: 'fullname',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 2,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 3,
      type: 'password',
    },
  ],
}

const signInConfig = {
  header: 'Sign In',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signInFields: [
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 3,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password',
    },
  ],
} */

/* const customTheme = {
  ...AmplifyTheme,
  sectionFooterLink: {
    ...AmplifyTheme.sectionFooterLink,
    color: NuskaColor.RED_COLOR,
  },
  button: {
    ...AmplifyTheme.button,
    backgroundColor: NuskaColor.RED_COLOR,
    borderRadius: 100,
  },
  buttonDisabled: {
    ...AmplifyTheme.buttonDisabled,
    backgroundColor: NuskaColor.RED_COLOR,
    borderRadius: 30,
  },
  formField: {
    ...AmplifyTheme.formField,
    marginBottom: 20,
  },
} */


//export default withAuthenticator(Account, { signInConfig: signInConfig, signUpConfig: signUpConfig });



/* import { StyleSheet, View, Alert } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, Input } from 'react-native-elements'
import { NuskaColor, NuskaFonts, NuskaDimensions } from '../constants';
 */

/* import { Amplify } from "aws-amplify";
import awsconfig from '../../src/aws-exports';

import {

  withAuthenticator, useAuthenticator,
  useTheme,
} from '@aws-amplify/ui-react-native';

import { AmplifyTheme } from 'aws-amplify-react-native';

Amplify.configure(awsconfig); */

/* function Account({ session }) { */

/* AWS Amplify sign out function */
/*   function SignOutButton() {
    const { signOut } = useAuthenticator();
    return <Button onPress={signOut} title="Sign Out" />;
  } */

/*   return ( */
{/* <View style={styles.container}> */ }
{/*       <Input
        label="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
        placeholder="Your name"
      /> */}
{/* AWS Amplify sign out function */ }
{/*  <View style={styles.verticallySpaced}> */ }
{/*     <SignOutButton /> */ }
{/*    </View>
    </View> */}
{/*   )
} */}

/* const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
}) */
/* const signUpConfig = {
  header: 'Sign Up',
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Full Name',
      key: 'fullname',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 2,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 3,
      type: 'password',
    },
  ],
}

const signInConfig = {
  header: 'Sign In',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signInFields: [
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 3,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password',
    },
  ],
}

const customTheme = {
  ...AmplifyTheme,
  sectionFooterLink: {
    ...AmplifyTheme.sectionFooterLink,
    color: NuskaColor.RED_COLOR,
  },
  button: {
    ...AmplifyTheme.button,
    backgroundColor: NuskaColor.RED_COLOR,
    borderRadius: 100,
  },
  buttonDisabled: {
    ...AmplifyTheme.buttonDisabled,
    backgroundColor: NuskaColor.RED_COLOR,
    borderRadius: 30,
  },
  formField: {
    ...AmplifyTheme.formField,
    marginBottom: 20,
  },
}

export default withAuthenticator(Account, {
  signUpConfig: signUpConfig,
  signInConfig: signInConfig,
  theme: customTheme
});
 */
/* 

import { Amplify } from "aws-amplify";
import awsconfig from '../../src/aws-exports';
import { AmplifyTheme, withAuthenticator, useAuthenticator } from 'aws-amplify-react-native';


function Account() {

  Amplify.configure(awsconfig);



  function SignOutButton() {
    const { signOut } = useAuthenticator();
    return <Button onPress={signOut} title="Sign Out" />;
  }

  return (
    <View style={styles.container}>


      <View style={styles.verticallySpaced}>
        <SignOutButton />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
})

export default withAuthenticator(Account);
 */