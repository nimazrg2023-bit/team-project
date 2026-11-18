import { createSlice } from '@reduxjs/toolkit';

const loadUserFromStorage = () => {
  try {
    const serializedState = localStorage.getItem('userProfile');
    if (serializedState === null) {
      return {
        firstName: "Md",
        lastName: "Rimel",
        email: "rimel1111@gmail.com",
        address: "Kingston, 5236, United State",
        password: "" // پسورد ذخیره نمی‌شود
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return { firstName: "", lastName: "", email: "", address: "", password: "" };
  }
};

const initialState = loadUserFromStorage();

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      const { firstName, lastName, email, address } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.address = address;
      
      // ذخیره در لوکال استوریج (بدون پسورد)
      const { password, ...dataToSave } = state;
      localStorage.setItem('userProfile', JSON.stringify(dataToSave));
    }
  },
});

export const { updateProfile } = userSlice.actions;
export default userSlice.reducer;