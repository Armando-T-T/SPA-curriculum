import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/client.js";

export const sendContactMessage = createAsyncThunk(
  "contact/sendMessage",
  async ({ name, email, subject, message }, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/api/contact", {
        name,
        email,
        subject,
        message,
      });
      return data;
    } catch (error) {
      const detail =
        error?.response?.data?.error || "No se pudo enviar el mensaje.";
      return rejectWithValue(detail);
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    status: "idle",
    error: null,
    success: null,
  },
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
      state.error = null;
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactMessage.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.success = null;
      })
      .addCase(sendContactMessage.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.success = action.payload?.message || "Mensaje enviado.";
      })
      .addCase(sendContactMessage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "No se pudo enviar el mensaje.";
      });
  },
});

export const { resetStatus } = contactSlice.actions;

export default contactSlice.reducer;
