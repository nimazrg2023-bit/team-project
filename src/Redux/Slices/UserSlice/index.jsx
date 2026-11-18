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
        password: "123456" // اینجا باید قرار بگیرد
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return { firstName: "", lastName: "", email: "", address: "", password: "123456" };
  }
};

const initialState = loadUserFromStorage();

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      const { firstName, lastName, email, address, newPassword } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.address = address;
      
      // اگر رمز جدیدی وارد شده بود، آن را آپدیت کن
      if (newPassword) {
        state.password = newPassword;
      }
      
      // ذخیره کامل در لوکال استوریج (شامل پسورد)
      localStorage.setItem('userProfile', JSON.stringify(state));
    }
  },
});

export const { updateProfile } = userSlice.actions;
export default userSlice.reducer;