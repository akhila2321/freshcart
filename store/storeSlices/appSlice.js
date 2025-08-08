// import node module libraries
import { createSlice } from '@reduxjs/toolkit'

// import app config file
import { settings } from 'app.config';

const initialState = {
  version: settings.app.version,
  logo: settings.app.logo,
  logoWhite: settings.app.logoWhite
}
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
})

export default appSlice.reducer