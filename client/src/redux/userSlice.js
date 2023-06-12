import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  loading:false,
  error:false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    
      },
    
  })

  export const { increment, decrement, incrementByAmount } = userSlice.actions
  
  export default userSlice.reducer